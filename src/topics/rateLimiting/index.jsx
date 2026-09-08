// src/topics/rateLimiting/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiShield,
    FiZap,
    FiActivity,
    FiClock,
    FiTrendingUp,
    FiAlertTriangle,
    FiCheckCircle,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
    FiBookOpen,
    FiArrowRight,
    FiServer,
    FiDatabase,
} from "react-icons/fi";

const RateLimiting = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const cards = useMemo(
        () => [
            {
                key: "what",
                title: "What is rate limiting",
                icon: <FiActivity />,
                summary:
                    "A safety gate that limits how many requests a client can make in a time window.",
                points: [
                    "Goal - protect your API from abuse, bots, and accidental overload",
                    "It is not just security - it is also reliability and cost control",
                    "Usually applied per IP, per user, per API key, or per route",
                ],
                mentalModel:
                    "Think of it like a traffic signal for requests. It does not stop traffic forever - it controls the flow so the road does not collapse.",
            },
            {
                key: "why",
                title: "Why it matters in production",
                icon: <FiShield />,
                summary:
                    "Without it, one noisy client can slow down everyone and even crash your service.",
                points: [
                    "Stops brute force login attempts",
                    "Reduces spam and scraping",
                    "Prevents sudden spikes from taking down your servers",
                    "Helps keep database and downstream services stable",
                ],
                mentalModel:
                    "Rate limiting is a circuit breaker for traffic volume. You allow a safe amount and reject or slow down the rest.",
            },
            {
                key: "responses",
                title: "How APIs respond",
                icon: <FiClock />,
                summary:
                    "Use clear status codes and headers so clients know what happened and when to retry.",
                points: [
                    "Common status - 429 Too Many Requests",
                    "Return a stable error shape so frontend can show a proper message",
                    "Send retry hints using headers when possible",
                ],
                mentalModel:
                    "Clients are not mind readers. If you reject requests, tell them when they can retry.",
            },
            {
                key: "strategies",
                title: "Common strategies",
                icon: <FiTrendingUp />,
                summary:
                    "Different algorithms fit different traffic patterns. Choose based on fairness and burst handling.",
                points: [
                    "Fixed window - simplest, but allows boundary bursts",
                    "Sliding window - smoother limits, more accurate",
                    "Token bucket - allows bursts but controls average rate",
                    "Leaky bucket - smooth out traffic, steady output",
                ],
                mentalModel:
                    "Token bucket is like a wallet of tokens. Tokens refill over time. Each request spends one token.",
            },
            {
                key: "where",
                title: "Where to apply it",
                icon: <FiServer />,
                summary:
                    "Best placed at the edge first, then in your app for route level rules.",
                points: [
                    "Edge - CDN / load balancer / reverse proxy (fastest rejection)",
                    "App - Express middleware for per route or per user rules",
                    "Downstream - protect expensive endpoints like search and login",
                ],
                mentalModel:
                    "Reject early - do not let bad traffic reach expensive code paths.",
            },
            {
                key: "state",
                title: "Where to store counters",
                icon: <FiDatabase />,
                summary:
                    "In-memory works only for single instance. For multiple servers use shared storage like Redis.",
                points: [
                    "Single server - in-memory map can work but resets on restart",
                    "Multiple servers - need shared state (Redis is common)",
                    "Avoid database counters for high traffic limits - too slow and costly",
                ],
                mentalModel:
                    "If you have multiple servers, they must agree on counts. Redis helps them share the same truth.",
            },
        ],
        [],
    );

    const samples = useMemo(
        () => [
            {
                key: "expressMemory",
                title: "Example - simple Express in-memory limiter",
                icon: <FiZap />,
                note: "Good for learning and small apps. Not recommended for multi-instance production.",
                code: `// Simple in-memory rate limiter (per IP per route)
// Limit: 10 requests per 60 seconds

const hits = new Map();

const rateLimit = (req, res, next) => {
  const ip = req.ip || "unknown";
  const key = \`\${ip}:\${req.path}\`;

  const now = Date.now();
  const windowMs = 60 * 1000;
  const limit = 10;

  const entry = hits.get(key) || { count: 0, start: now };

  // reset window
  if (now - entry.start >= windowMs) {
    entry.count = 0;
    entry.start = now;
  }

  entry.count += 1;
  hits.set(key, entry);

  if (entry.count > limit) {
    const retryAfterSec = Math.ceil((windowMs - (now - entry.start)) / 1000);

    res.setHeader("Retry-After", String(retryAfterSec));
    return res.status(429).json({
      ok: false,
      error: {
        code: "RATE_LIMITED",
        message: "Too many requests. Try again later.",
        retryAfterSec,
      },
    });
  }

  next();
};

// usage
app.use("/api/login", rateLimit);`,
            },
            {
                key: "tokenBucketRedis",
                title: "Example - token bucket mental model (Redis style)",
                icon: <FiDatabase />,
                note: "This shows the idea. Real production code uses atomic operations and Lua scripts to avoid race conditions.",
                code: `// Token bucket concept (pseudo)
// capacity = max tokens
// refillRate = tokens per second

// store in Redis per user:
// tokens, lastRefillTs

function allowRequest(userKey) {
  // read tokens and lastRefillTs
  // refill based on time passed
  // if tokens >= 1 -> decrement and allow
  // else reject with 429 and Retry-After hint
}

// Why Redis + Lua?
// To make read-refill-decrement atomic across servers.`,
            },
            {
                key: "headers",
                title: "Helpful headers to return",
                icon: <FiInfo />,
                note: "Different teams use different header names. Pick a convention and keep it consistent.",
                code: `// Common patterns
// 429 Too Many Requests
// Retry-After: 12

// Some systems also send:
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 24
X-RateLimit-Reset: 1710000000`,
            },
        ],
        [],
    );

    const pitfalls = useMemo(
        () => [
            "Applying the same strict limit to all endpoints - login and search need different rules",
            "Using only IP based limits - mobile networks and shared NAT can cause false blocks",
            "No retry hints - clients keep hammering and things get worse",
            "In-memory limits in multi-instance production - every server counts separately",
            "Non-atomic counter updates - race conditions allow extra requests",
            "No allowlist for trusted internal services - breaks your own systems",
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
                title={isOpen ? "Collapse section" : "Expand section"}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiShield />
                    </span>

                    <span className="text">
                        <span className="title">Rate limiting</span>
                        <span className="sub">
                            Protect APIs from abuse and overload using fair
                            request limits
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
                        <FiBookOpen />
                    </div>
                    <div className="introText">
                        <div className="introTitle">
                            Rate limiting - quick definition
                        </div>
                        <div className="introSub">
                            Rate limiting sets a maximum request rate so one
                            client cannot overwhelm the system. You usually
                            return 429 and provide retry hints so clients back
                            off cleanly.
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {cards.map((c) => {
                        const open = activeKey === c.key;

                        return (
                            <div
                                key={c.key}
                                className={`card ${open ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="cardHeader"
                                    onClick={() => handleToggleItem(c.key)}
                                    aria-expanded={open}
                                    title={open ? "Collapse" : "Expand"}
                                >
                                    <span className="cLeft">
                                        <span className="cIcon">{c.icon}</span>
                                        <span className="cText">
                                            <span className="cTitle">
                                                {c.title}
                                            </span>
                                            <span className="cSummary">
                                                {c.summary}
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
                                            {c.points.map((p, idx) => (
                                                <li key={`${c.key}-p-${idx}`}>
                                                    <span className="dot" />
                                                    <span className="liText">
                                                        {p}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            Mental model
                                        </div>
                                        <p className="para">{c.mentalModel}</p>
                                    </div>

                                    <div className="footerHint">
                                        <span className="hintIcon">
                                            <FiArrowRight />
                                        </span>
                                        <span className="hintText">
                                            Interview line: Rate limiting is
                                            used to protect API reliability and
                                            security by controlling request
                                            volume per client.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="samples">
                    <div className="samplesTop">
                        <div className="samplesIcon">
                            <FiZap />
                        </div>
                        <div className="samplesText">
                            <div className="samplesTitle">
                                Practical examples
                            </div>
                            <div className="samplesSub">
                                These examples show patterns you can describe in
                                interviews and use in small projects.
                            </div>
                        </div>
                    </div>

                    <div className="sampleGrid">
                        {samples.map((s) => (
                            <div key={s.key} className="sampleCard">
                                <div className="sampleHeader">
                                    <div className="sampleLeft">
                                        <span className="sampleIcon">
                                            {s.icon}
                                        </span>
                                        <div className="sampleHeadText">
                                            <div className="sampleTitle">
                                                {s.title}
                                            </div>
                                            <div className="sampleNote">
                                                {s.note}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <pre className="code">
                                    <code>{s.code}</code>
                                </pre>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pitfalls">
                    <div className="pitTop">
                        <div className="pitIcon">
                            <FiAlertTriangle />
                        </div>
                        <div className="pitText">
                            <div className="pitTitle">Common pitfalls</div>
                            <div className="pitSub">
                                Most real bugs come from wrong placement, wrong
                                identity key, or wrong shared state.
                            </div>
                        </div>
                    </div>

                    <ul className="pitList">
                        {pitfalls.map((p, idx) => (
                            <li key={`pit-${idx}`}>
                                <span className="dotWarn" />
                                <span className="liText">{p}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiCheckCircle />
                    </span>
                    <span className="closingText">
                        Best practice: enforce rate limits at the edge first,
                        then add route specific rules inside the app, and use
                        Redis for shared counters in multi-instance setups.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default RateLimiting;
