// src/topics/errorTracking/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiAlertTriangle,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiActivity,
    FiTarget,
    FiGitCommit,
    FiSearch,
    FiShield,
    FiFileText,
    FiLink,
    FiCheckCircle,
} from "react-icons/fi";

const ErrorTracking = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("what");

    const blocks = useMemo(
        () => [
            {
                key: "what",
                title: "What is error tracking",
                icon: <FiTarget />,
                points: [
                    "Error tracking is a system that captures backend crashes and exceptions with context and groups similar errors together.",
                    "It helps you answer: what broke, where it broke, how many users are affected, and when it started.",
                    "It is not the same as console logs. Logs are raw events. Error tracking is organized incidents with grouping and alerting.",
                ],
                note: "Goal: turn random stack traces into actionable issues with ownership and priority.",
            },
            {
                key: "why",
                title: "Why it matters in production",
                icon: <FiActivity />,
                points: [
                    "Users rarely tell you the exact failure. Error tracking tells you automatically.",
                    "You can detect new regressions after a deploy by comparing error rates by release version.",
                    "It reduces time to debug because stack trace, request details, and breadcrumbs are already captured.",
                ],
                note: "In real teams: alert on high severity, create a ticket, fix, deploy, verify, close.",
            },
            {
                key: "data",
                title: "What to capture with an error",
                icon: <FiFileText />,
                points: [
                    "Error name and message.",
                    "Stack trace with file names and line numbers.",
                    "Request context: route, method, status code, request id, user id if available.",
                    "Environment and release: prod or staging, app version or git commit.",
                    "Breadcrumbs: last few important events before the crash (db call, external api call, auth step).",
                ],
                note: "Do not capture secrets. Never store raw passwords, access tokens, card data, or full cookies.",
            },
            {
                key: "flow",
                title: "Typical flow",
                icon: <FiLink />,
                points: [
                    "A request fails and throws an exception.",
                    "Your global error middleware catches it and reports it.",
                    "The tracker groups similar errors and increments a counter.",
                    "Alerts fire when thresholds are crossed.",
                    "You fix the bug and verify the error stops for the next release.",
                ],
                note: "The best flow includes correlation ids so you can jump from error to logs to traces quickly.",
            },
            {
                key: "setup",
                title: "Integration pattern in Node and Express",
                icon: <FiShield />,
                points: [
                    "Install the SDK and initialize it early in the app lifecycle.",
                    "Attach request and user context safely.",
                    "Capture exceptions inside the global error handler.",
                    "Tag events with environment and release for easy filtering.",
                ],
                note: "Order matters: initialize before routes so it can hook into the request lifecycle.",
            },
            {
                key: "pitfalls",
                title: "Common pitfalls",
                icon: <FiAlertTriangle />,
                points: [
                    "Swallowing errors in try catch without reporting them.",
                    "Logging only error.message and losing stack traces.",
                    "No request id, so you cannot connect errors to logs.",
                    "Reporting too many low value errors, causing alert fatigue.",
                    "Capturing sensitive data by mistake.",
                ],
                note: "Alert fatigue is a silent killer. Route warnings to dashboards, page only for real incidents.",
            },
        ],
        [],
    );

    const examples = useMemo(
        () => [
            {
                key: "express",
                title: "Example - Express error middleware",
                desc: "A clean pattern: keep one global error handler and report there.",
                code: `// app.js (conceptual)
import express from "express";

const app = express();

app.get("/api", async (req, res) => {
  // simulate failure
  throw new Error("DB connection failed");
});

// global error handler
app.use((err, req, res, next) => {
  const requestId = req.headers["x-request-id"] || "na";

  // report to error tracker here
  // captureException(err, { requestId, route: req.originalUrl, method: req.method })

  res.status(500).json({
    ok: false,
    error: {
      code: "INTERNAL_ERROR",
      message: "Something went wrong",
      requestId
    }
  });
});

export default app;`,
            },
            {
                key: "release",
                title: "Example - tag release and environment",
                desc: "Release tags make it obvious when a bug started after a deploy.",
                code: `// during initialization
// initTracker({
//   environment: process.env.NODE_ENV,
//   release: process.env.APP_RELEASE || process.env.GIT_SHA
// });`,
            },
            {
                key: "sanitize",
                title: "Example - sanitize sensitive fields",
                desc: "Remove secrets before sending any context.",
                code: `const sanitize = (obj) => {
  const copy = { ...obj };
  if (copy.password) copy.password = "[redacted]";
  if (copy.token) copy.token = "[redacted]";
  if (copy.authorization) copy.authorization = "[redacted]";
  return copy;
};

// captureException(err, { body: sanitize(req.body) })`,
            },
        ],
        [],
    );

    const handleMainToggle = () => setIsOpen((v) => !v);

    const handleCardToggle = (key) => {
        setActiveKey((prev) => (prev === key ? null : key));
    };

    return (
        <Styled.Wrapper id="error-tracking">
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={handleMainToggle}
                aria-expanded={isOpen}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiAlertTriangle />
                    </span>
                    <span className="text">
                        <span className="title">Error tracking</span>
                        <span className="sub">
                            Capture, group, and alert on backend failures with
                            context, releases, and safe metadata
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
                <div className="topNote">
                    <span className="nIcon">
                        <FiCheckCircle />
                    </span>
                    <div className="nText">
                        <div className="nTitle">
                            What you should be able to say in an interview
                        </div>
                        <div className="nSub">
                            "We capture unhandled errors with request context,
                            group them, tag by release, alert on thresholds, and
                            fix regressions quickly without leaking secrets."
                        </div>
                    </div>
                </div>

                <div className="layout">
                    <div className="leftCol">
                        <div className="miniTitle">Core concepts</div>

                        <div className="cards">
                            {blocks.map((b) => {
                                const open = activeKey === b.key;

                                return (
                                    <div
                                        key={b.key}
                                        className={`card ${open ? "open" : ""}`}
                                    >
                                        <button
                                            type="button"
                                            className="cardHeader"
                                            onClick={() =>
                                                handleCardToggle(b.key)
                                            }
                                            aria-expanded={open}
                                        >
                                            <span className="cLeft">
                                                <span className="cIcon">
                                                    {b.icon}
                                                </span>
                                                <span className="cTitle">
                                                    {b.title}
                                                </span>
                                            </span>

                                            <span
                                                className={`cChev ${
                                                    open ? "rot" : ""
                                                }`}
                                            >
                                                <FiChevronDown />
                                            </span>
                                        </button>

                                        <div
                                            className={`cardBody ${
                                                open ? "show" : ""
                                            }`}
                                        >
                                            <ul className="list">
                                                {b.points.map((p, idx) => (
                                                    <li key={`${b.key}-${idx}`}>
                                                        <span className="dot" />
                                                        <span className="liText">
                                                            {p}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="note">{b.note}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="rightCol">
                        <div className="miniTitle">Examples and patterns</div>

                        <div className="examples">
                            {examples.map((ex) => (
                                <div key={ex.key} className="exampleCard">
                                    <div className="exHead">
                                        <span className="exIcon">
                                            <FiGitCommit />
                                        </span>
                                        <div className="exText">
                                            <div className="exTitle">
                                                {ex.title}
                                            </div>
                                            <div className="exDesc">
                                                {ex.desc}
                                            </div>
                                        </div>

                                        <span className="exHint">
                                            <FiSearch />
                                        </span>
                                    </div>

                                    <pre className="code">
                                        <code>{ex.code}</code>
                                    </pre>
                                </div>
                            ))}

                            <div className="tip">
                                <span className="tipIcon">
                                    <FiShield />
                                </span>
                                <div className="tipText">
                                    Best practice: always attach a request id
                                    and release tag. Without them, debugging
                                    becomes guesswork.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiLink />
                    </span>
                    <span className="closingText">
                        Error tracking works best with structured logs and a
                        consistent request id across services.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ErrorTracking;
