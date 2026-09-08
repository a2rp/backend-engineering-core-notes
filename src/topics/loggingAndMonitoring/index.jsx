// src/topics/loggingAndMonitoring/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiBookOpen,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
    FiActivity,
    FiFileText,
    FiHash,
    FiAlertTriangle,
    FiSearch,
    FiShield,
    FiZap,
    FiArrowRight,
} from "react-icons/fi";

const LoggingAndMonitoring = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const topics = useMemo(
        () => [
            {
                key: "why",
                title: "Why logging and monitoring exist",
                icon: <FiActivity />,
                summary:
                    "Logs tell you what happened. Monitoring tells you what is happening. Together they make production debuggable.",
                bullets: [
                    "Without logs you guess. With logs you know what the code actually did.",
                    "Without monitoring you react late. With monitoring you see problems early.",
                    "In production, bugs are normal. Observability is the superpower that makes them solvable.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Logs are the story of past events. Monitoring is the live dashboard of system health.",
                },
                example: {
                    title: "Example - what you want to answer fast",
                    code: `// Questions logs and monitoring should help answer
// - Which endpoint is failing right now
// - How many users are impacted
// - Is it database, cache, network, or code
// - When did it start and what changed`,
                },
                gotchas: [
                    "If you only log errors, you miss the cause.",
                    "If you log everything, you drown in noise and cost.",
                ],
            },
            {
                key: "structuredLogs",
                title: "Structured logs",
                icon: <FiFileText />,
                summary:
                    "Structured logs are logs written as consistent fields, usually JSON, so machines can search, filter, and aggregate them reliably.",
                bullets: [
                    "A structured log has fields like level, message, requestId, userId, route, statusCode, durationMs.",
                    "Structured logs work best with log search tools because you can filter by fields.",
                    "Human readable text logs are fine for dev, but structured logs win in production.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A structured log is like a spreadsheet row. A plain string log is like a random sentence in a diary.",
                },
                example: {
                    title: "Example - Node style structured log",
                    code: `// Example log object (could be JSON)
console.log(JSON.stringify({
  level: "info",
  msg: "request complete",
  requestId: "req_9f1c",
  method: "GET",
  path: "/api/users",
  statusCode: 200,
  durationMs: 37,
  ts: new Date().toISOString()
}));

// Why it helps:
// - filter by requestId
// - group by statusCode
// - average durationMs per route`,
                },
                gotchas: [
                    "Do not log passwords, tokens, cookies, or secrets.",
                    "Avoid logging full request bodies blindly.",
                ],
            },
            {
                key: "correlationId",
                title: "Correlation IDs",
                icon: <FiHash />,
                summary:
                    "A correlation ID (often called requestId) ties all logs for a single request across services so you can trace the full path.",
                bullets: [
                    "Generate a requestId at the edge (API gateway or first service).",
                    "Pass it through headers like x-request-id to downstream services.",
                    "Include requestId in every log line for that request.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Correlation ID is a tracking number for a request, like a courier shipment ID.",
                },
                example: {
                    title: "Example - simple Express middleware",
                    code: `import crypto from "crypto";

app.use((req, res, next) => {
  const incoming = req.headers["x-request-id"];
  const requestId = incoming || crypto.randomUUID();

  req.requestId = requestId;
  res.setHeader("x-request-id", requestId);

  next();
});

// Later in route handlers:
console.log(JSON.stringify({
  level: "info",
  msg: "fetching user",
  requestId: req.requestId,
  userId: "u_123"
}));`,
                },
                gotchas: [
                    "If requestId is missing, debugging distributed issues becomes painful.",
                ],
            },
            {
                key: "metrics",
                title: "Monitoring and metrics",
                icon: <FiActivity />,
                summary:
                    "Monitoring is built on metrics. Metrics are numbers over time, like request rate, error rate, and latency.",
                bullets: [
                    "Common API metrics: requests per second, 4xx rate, 5xx rate, p95 latency, p99 latency.",
                    "Infra metrics: CPU, memory, disk, network, database connections.",
                    "A good monitoring setup detects issues before users complain.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Metrics are the vital signs of your system - pulse, blood pressure, oxygen levels.",
                },
                example: {
                    title: "Example - what a useful dashboard shows",
                    code: `// A practical dashboard usually includes
// - Traffic: requests per second per route
// - Errors: 4xx and 5xx rate
// - Latency: p50, p95, p99
// - Dependencies: DB latency, Redis hit rate
// - Saturation: CPU and memory`,
                },
                gotchas: [
                    "Do not rely only on average latency. Use percentiles like p95 and p99.",
                ],
            },
            {
                key: "alerts",
                title: "Alerting",
                icon: <FiAlertTriangle />,
                summary:
                    "Alerts are rules that notify you when something abnormal happens. Alerts should be actionable, not noisy.",
                bullets: [
                    "Alert when users are impacted: sustained 5xx spike, high latency, failed payments.",
                    "Use thresholds and time windows to avoid false alarms.",
                    "Add runbooks: short steps that tell what to check first.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Alerts are smoke alarms, not decoration. If they beep too often, people ignore them.",
                },
                example: {
                    title: "Example - alert rule style",
                    code: `// Example alert ideas
// - 5xx rate > 2% for 5 minutes
// - p95 latency > 800ms for 10 minutes
// - DB connection errors > 10 per minute
// - Queue depth growing continuously`,
                },
                gotchas: [
                    "Too many alerts cause alert fatigue.",
                    "Alerts without context waste time.",
                ],
            },
            {
                key: "errorTracking",
                title: "Error tracking",
                icon: <FiSearch />,
                summary:
                    "Error tracking tools collect exceptions with stack traces, group similar errors, and show impact. This is different from logs.",
                bullets: [
                    "Error tracking captures stack traces and context.",
                    "It groups errors by signature so you do not chase duplicates.",
                    "It can show release version so you know which deploy introduced the error.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Logs are raw events. Error tracking is curated crash reports with grouping and impact.",
                },
                example: {
                    title: "Example - what error tracking should store",
                    code: `// Typical captured context
// - error message and stack trace
// - requestId
// - route and method
// - userId (if safe)
// - environment (prod, staging)
// - release version
// - tags: region, service, instance`,
                },
                gotchas: [
                    "Never send secrets to error trackers.",
                    "Sampling may be needed under high volume.",
                ],
            },
            {
                key: "securityLogging",
                title: "Security logging basics",
                icon: <FiShield />,
                summary:
                    "Security logs help detect abuse and attacks while staying privacy safe. Log signals, not sensitive data.",
                bullets: [
                    "Log auth failures, rate limit hits, suspicious IP patterns, unusual user agent spikes.",
                    "Mask sensitive fields. Never store tokens or passwords.",
                    "Keep audit logs for critical actions: role change, password reset, payouts, deletions.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Security logs are CCTV footage. You want useful evidence, not private information leaks.",
                },
                example: {
                    title: "Example - safe audit log fields",
                    code: `// Audit log example fields
{
  level: "warn",
  msg: "role updated",
  actorUserId: "admin_9",
  targetUserId: "u_42",
  oldRole: "employee",
  newRole: "manager",
  requestId: "req_1a2b",
  ts: "2026-03-04T07:10:00.000Z"
}`,
                },
                gotchas: [
                    "Logging too much personal data can create compliance risk.",
                ],
            },
            {
                key: "healthChecks",
                title: "Health checks",
                icon: <FiZap />,
                summary:
                    "Health checks are endpoints that prove your service is alive and ready. They are used by load balancers and orchestration.",
                bullets: [
                    "Liveness means process is running.",
                    "Readiness means service can handle traffic (DB reachable, migrations done).",
                    "Keep health checks fast. Avoid heavy queries.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Liveness is breathing. Readiness is being awake and able to work.",
                },
                example: {
                    title: "Example - typical endpoints",
                    code: `// Common endpoints
// GET /healthz  -> liveness
// GET /readyz   -> readiness

// In a simple Node service, /healthz can return 200 always.
// /readyz can check DB connection or key dependencies.`,
                },
                gotchas: ["Do not make health checks slow or expensive."],
            },
        ],
        [],
    );

    const handleToggleMain = () => {
        setIsOpen((v) => !v);
        if (isOpen) setActiveKey(null);
    };

    const handleToggleItem = (key) => {
        setActiveKey((prev) => (prev === key ? null : key));
    };

    return (
        <Styled.Wrapper>
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={handleToggleMain}
                aria-expanded={isOpen}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiBookOpen />
                    </span>
                    <span className="text">
                        <span className="title">Logging and monitoring</span>
                        <span className="sub">
                            Structured logs, correlation IDs, metrics, alerts,
                            error tracking, and health checks
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
                <div className="intro">
                    <div className="introIcon">
                        <FiInfo />
                    </div>
                    <div className="introText">
                        <div className="introTitle">
                            Production debugging without guesswork
                        </div>
                        <div className="introSub">
                            Logging and monitoring are the backbone of reliable
                            backend systems. They help you detect issues early,
                            understand impact, and fix problems faster.
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {topics.map((t) => {
                        const open = activeKey === t.key;

                        return (
                            <div
                                key={t.key}
                                className={`card ${open ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="cardHeader"
                                    onClick={() => handleToggleItem(t.key)}
                                    aria-expanded={open}
                                >
                                    <span className="cLeft">
                                        <span className="cIcon">{t.icon}</span>
                                        <span className="cText">
                                            <span className="cTitle">
                                                {t.title}
                                            </span>
                                            <span className="cSummary">
                                                {t.summary}
                                            </span>
                                        </span>
                                    </span>

                                    <span className="cRight">
                                        <span
                                            className={`cChev ${
                                                open ? "rot" : ""
                                            }`}
                                        >
                                            <FiChevronDown />
                                        </span>
                                    </span>
                                </button>

                                <div
                                    className={`cardBody ${open ? "show" : ""}`}
                                >
                                    <div className="block">
                                        <div className="blockTitle">
                                            Key points
                                        </div>
                                        <ul className="list">
                                            {t.bullets.map((b, idx) => (
                                                <li key={`${t.key}-b-${idx}`}>
                                                    <span className="dot" />
                                                    <span className="liText">
                                                        {b}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            {t.mentalModel.title}
                                        </div>
                                        <p className="para">
                                            {t.mentalModel.text}
                                        </p>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            {t.example.title}
                                        </div>
                                        <pre className="code">
                                            <code>{t.example.code}</code>
                                        </pre>
                                    </div>

                                    <div className="block warn">
                                        <div className="blockTitle">
                                            Common pitfalls
                                        </div>
                                        <ul className="list">
                                            {t.gotchas.map((g, idx) => (
                                                <li key={`${t.key}-g-${idx}`}>
                                                    <span className="dot" />
                                                    <span className="liText">
                                                        {g}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="footerHint">
                                        <span className="hintIcon">
                                            <FiArrowRight />
                                        </span>
                                        <span className="hintText">
                                            Revision tip: Explain {t.title} in 2
                                            lines and give one real incident
                                            where it helps.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiZap />
                    </span>
                    <span className="closingText">
                        Strong backend teams treat logs and metrics as product
                        features. If you cannot observe it, you cannot operate
                        it.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default LoggingAndMonitoring;
