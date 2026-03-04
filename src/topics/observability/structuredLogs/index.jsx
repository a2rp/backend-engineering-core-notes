// src/topics/observability/structuredLogs/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiFileText,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
    FiHash,
    FiTag,
    FiSearch,
    FiAlertCircle,
    FiCheckCircle,
    FiLink2,
    FiCode,
    FiShield,
} from "react-icons/fi";

const StructuredLogs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("basics");

    const sections = useMemo(
        () => [
            {
                key: "basics",
                title: "What are structured logs",
                icon: <FiInfo />,
                summary:
                    "Structured logs are logs written as objects (usually JSON) so machines can filter, search, and alert reliably.",
                points: [
                    "Normal logs are free text - hard to parse consistently.",
                    "Structured logs are key-value data - easy to query and aggregate.",
                    "You can answer questions like 'show all errors for userId 42' without regex pain.",
                ],
                code: `// Unstructured (hard to query)
console.log("User 42 failed to pay, order 9, reason: card_declined");

// Structured (easy to query)
console.log(JSON.stringify({
  level: "error",
  msg: "payment_failed",
  userId: "42",
  orderId: "9",
  reason: "card_declined"
}));`,
            },
            {
                key: "fields",
                title: "Core fields to include",
                icon: <FiTag />,
                summary:
                    "A consistent log shape makes dashboards, alerts, and debugging fast.",
                points: [
                    "level - debug, info, warn, error",
                    "msg - short event name, like 'payment_failed'",
                    "ts - timestamp (ISO string) or logger adds it automatically",
                    "service - service name, like 'billing-api'",
                    "env - dev, staging, prod",
                    "requestId - correlation id for one request across logs",
                    "userId - if available, but do not log sensitive info",
                    "durationMs - for performance visibility",
                    "err - error object fields (name, message, stack) for errors",
                ],
                code: `// A good baseline shape
{
  "level": "info",
  "msg": "http_request_done",
  "service": "orders-api",
  "env": "prod",
  "requestId": "req_01J...",
  "method": "GET",
  "path": "/orders/9",
  "status": 200,
  "durationMs": 18
}`,
            },
            {
                key: "nodeExample",
                title: "Node.js example with requestId",
                icon: <FiLink2 />,
                summary:
                    "Add a requestId at the edge, then attach it to every log in that request.",
                points: [
                    "Generate requestId for each request (or accept from gateway).",
                    "Put requestId in response header so clients can share it.",
                    "Log start and end with durationMs.",
                    "On errors, include requestId and error fields.",
                ],
                code: `import crypto from "crypto";
import express from "express";

const app = express();

const makeId = () => "req_" + crypto.randomBytes(8).toString("hex");

app.use((req, res, next) => {
  const requestId = req.header("x-request-id") || makeId();
  req.requestId = requestId;
  res.setHeader("x-request-id", requestId);

  const start = Date.now();

  console.log(JSON.stringify({
    level: "info",
    msg: "http_request_start",
    requestId,
    method: req.method,
    path: req.path
  }));

  res.on("finish", () => {
    console.log(JSON.stringify({
      level: "info",
      msg: "http_request_done",
      requestId,
      method: req.method,
      path: req.path,
      status: res.statusCode,
      durationMs: Date.now() - start
    }));
  });

  next();
});

app.get("/health", (req, res) => {
  console.log(JSON.stringify({
    level: "info",
    msg: "health_check",
    requestId: req.requestId
  }));
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  console.log(JSON.stringify({
    level: "error",
    msg: "unhandled_error",
    requestId: req.requestId,
    err: {
      name: err?.name,
      message: err?.message,
      stack: err?.stack
    }
  }));
  res.status(500).json({ error: "internal_error", requestId: req.requestId });
});

app.listen(3000);`,
            },
            {
                key: "querying",
                title: "How structured logs help in production",
                icon: <FiSearch />,
                summary:
                    "They turn debugging into searching and filtering instead of guessing.",
                points: [
                    "Filter by requestId to see one request journey.",
                    "Group by msg to see top error types.",
                    "Track latency with durationMs percentiles.",
                    "Alert on error rate spikes for msg values like 'payment_failed'.",
                ],
                code: `// Example queries (conceptual)
// Find a request
requestId = "req_abc123"

// Find all errors for an endpoint
msg = "http_request_done" AND path = "/orders" AND status >= 500

// Find slow requests
msg = "http_request_done" AND durationMs > 1000`,
            },
            {
                key: "pitfalls",
                title: "Common mistakes and rules",
                icon: <FiAlertCircle />,
                summary:
                    "Structured logs are powerful, but you must be disciplined.",
                points: [
                    "Do not log secrets - passwords, tokens, cookies, card data, OTPs.",
                    "Keep msg stable - treat it like an event name, not a paragraph.",
                    "Avoid huge payload logs - log ids, not full objects.",
                    "Do not mix shapes randomly - keep consistent keys across services.",
                    "Use proper levels - info for normal, warn for unusual, error for failures.",
                    "In production, prefer a logger library that writes JSON and handles errors well.",
                ],
                code: `// Bad - leaks secrets
console.log(JSON.stringify({
  level: "info",
  msg: "login_attempt",
  email: "a@b.com",
  password: "123456"
}));

// Better - log minimal safe fields
console.log(JSON.stringify({
  level: "info",
  msg: "login_attempt",
  email: "a@b.com",
  hasPassword: true
}));`,
            },
            {
                key: "checklist",
                title: "Interview ready checklist",
                icon: <FiCheckCircle />,
                summary:
                    "Use these lines when explaining structured logs in interviews.",
                points: [
                    "Structured logs are machine readable key-value logs, usually JSON.",
                    "They enable filtering, aggregation, alerting, and correlation across services.",
                    "I include requestId, service, env, level, msg, and durationMs.",
                    "I avoid logging sensitive data and keep log shapes consistent.",
                ],
                code: `// 2 line interview answer
// Structured logs are JSON key-value logs that tools can query reliably.
// With requestId and consistent fields, debugging becomes fast search and correlation.`,
            },
        ],
        [],
    );

    const handleToggleMain = () => {
        setIsOpen((v) => !v);
    };

    const handleSelect = (key) => {
        setActiveKey(key);
    };

    const active = sections.find((s) => s.key === activeKey) || sections[0];

    return (
        <Styled.Wrapper id="structured-logs">
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={handleToggleMain}
                aria-expanded={isOpen}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiFileText />
                    </span>
                    <span className="text">
                        <span className="title">Structured logs</span>
                        <span className="sub">
                            JSON logs, consistent fields, requestId correlation,
                            production debugging
                        </span>
                    </span>
                </span>

                <span className="right">
                    <span className="pill">
                        {isOpen ? (
                            <>
                                <FiPause /> Collapse
                            </>
                        ) : (
                            <>
                                <FiPlay /> Expand
                            </>
                        )}
                    </span>
                    <span className={`chev ${isOpen ? "rot" : ""}`}>
                        <FiChevronDown />
                    </span>
                </span>
            </button>

            <div className={`sectionBody ${isOpen ? "show" : ""}`}>
                <div className="topHint">
                    <div className="hintIcon">
                        <FiHash />
                    </div>
                    <div className="hintText">
                        <div className="hintTitle">
                            One rule that saves hours
                        </div>
                        <div className="hintSub">
                            Every request should have a requestId, and every log
                            line for that request should include it.
                        </div>
                    </div>
                </div>

                <div className="layout">
                    <div className="nav">
                        {sections.map((s) => {
                            const isActive = s.key === activeKey;

                            return (
                                <button
                                    key={s.key}
                                    type="button"
                                    className={`navItem ${
                                        isActive ? "active" : ""
                                    }`}
                                    onClick={() => handleSelect(s.key)}
                                    aria-current={isActive ? "true" : "false"}
                                >
                                    <span className="nIcon">{s.icon}</span>
                                    <span className="nText">
                                        <span className="nTitle">
                                            {s.title}
                                        </span>
                                        <span className="nSub">
                                            {s.summary}
                                        </span>
                                    </span>
                                    <span className="nRight">
                                        <FiChevronDown />
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="content">
                        <div className="card">
                            <div className="cardHead">
                                <div className="cIcon">{active.icon}</div>
                                <div className="cText">
                                    <div className="cTitle">{active.title}</div>
                                    <div className="cSummary">
                                        {active.summary}
                                    </div>
                                </div>
                            </div>

                            <div className="cardBody">
                                <div className="block">
                                    <div className="bTitle">Key points</div>
                                    <ul className="list">
                                        {active.points.map((p, idx) => (
                                            <li key={`${active.key}-p-${idx}`}>
                                                <span className="dot" />
                                                <span className="liText">
                                                    {p}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="block">
                                    <div className="bTitle">
                                        Example and pattern
                                    </div>
                                    <pre className="code">
                                        <code>{active.code}</code>
                                    </pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="mini">
                                        <div className="mTop">
                                            <span className="mIcon">
                                                <FiCode />
                                            </span>
                                            <span className="mTitle">
                                                Practical tip
                                            </span>
                                        </div>
                                        <div className="mText">
                                            Prefer a JSON logger in production
                                            (pino, winston) so logs are valid
                                            JSON and include timestamps and
                                            error serializers.
                                        </div>
                                    </div>

                                    <div className="mini">
                                        <div className="mTop">
                                            <span className="mIcon">
                                                <FiShield />
                                            </span>
                                            <span className="mTitle">
                                                Security tip
                                            </span>
                                        </div>
                                        <div className="mText">
                                            Never log secrets - redact headers
                                            like Authorization, cookies, and
                                            payment data. Log ids, not payloads.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cardFoot">
                                <span className="fIcon">
                                    <FiAlertCircle />
                                </span>
                                <span className="fText">
                                    If logs are unstructured, on-call becomes
                                    guesswork. Structured logs turn on-call into
                                    search and filters.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glossary">
                    <div className="gTitle">Mini glossary</div>
                    <div className="gGrid">
                        <div className="gItem">
                            <div className="k">requestId</div>
                            <div className="v">
                                A unique id for one request, used to correlate
                                logs.
                            </div>
                        </div>
                        <div className="gItem">
                            <div className="k">correlation</div>
                            <div className="v">
                                Linking logs across services using requestId or
                                trace id.
                            </div>
                        </div>
                        <div className="gItem">
                            <div className="k">log level</div>
                            <div className="v">
                                Severity of a log - debug, info, warn, error.
                            </div>
                        </div>
                        <div className="gItem">
                            <div className="k">msg</div>
                            <div className="v">
                                Short stable event name, like "payment_failed".
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default StructuredLogs;
