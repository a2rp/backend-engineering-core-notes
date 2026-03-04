// src/topics/authentication/cookies/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiKey,
    FiShield,
    FiLock,
    FiHash,
    FiAlertTriangle,
    FiChevronDown,
    FiInfo,
    FiCheckCircle,
    FiXCircle,
    FiCopy,
} from "react-icons/fi";

const Cookies = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);
    const [copiedKey, setCopiedKey] = useState(null);

    const sections = useMemo(
        () => [
            {
                key: "basics",
                title: "Cookies basics",
                icon: <FiKey />,
                summary:
                    "A cookie is a small key-value text stored by the browser and automatically sent to the server on matching requests.",
                points: [
                    "Cookies are attached to HTTP requests by the browser when domain and path rules match.",
                    "Cookies are often used for sessions, preferences, and feature flags.",
                    "Cookies are not private storage. Treat them as client controlled unless protected by HttpOnly and server validation.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Cookie is like a badge your browser shows at the door of your server on every request to prove continuity.",
                },
                code: {
                    title: "Example - Set cookie from server",
                    snippet: `// Express example
app.post("/login", (req, res) => {
  const sid = "session_id_from_server";
  res.cookie("sid", sid, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 1000 * 60 * 60 * 24
  });
  res.json({ ok: true });
});`,
                },
            },
            {
                key: "cookieAttrs",
                title: "Cookie attributes that matter",
                icon: <FiShield />,
                summary:
                    "Attributes decide when cookies are sent and how exposed they are to JavaScript and cross-site requests.",
                table: [
                    {
                        k: "HttpOnly",
                        v: "JavaScript cannot read the cookie. Helps reduce XSS theft of session cookies.",
                    },
                    {
                        k: "Secure",
                        v: "Cookie only sent over HTTPS. Required for SameSite=None in modern browsers.",
                    },
                    {
                        k: "SameSite",
                        v: "Controls cross-site sending. Lax is common. None allows third-party usage but needs Secure.",
                    },
                    {
                        k: "Domain",
                        v: "Which domain can receive it. Be careful with broad domains like .example.com.",
                    },
                    {
                        k: "Path",
                        v: "Which URL paths send it. Use '/' for site-wide, or scope tighter when possible.",
                    },
                    {
                        k: "Expires or Max-Age",
                        v: "How long the cookie lives. Session cookies disappear when browser closes.",
                    },
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Attributes are the rules printed on the badge. Who can see it, where it works, and when it expires.",
                },
                code: {
                    title: "Example - Safe defaults for auth cookie",
                    snippet: `res.cookie("sid", sid, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
  maxAge: 1000 * 60 * 60 * 24 * 7
});`,
                },
            },
            {
                key: "sessions",
                title: "Cookies and sessions",
                icon: <FiLock />,
                summary:
                    "Most production auth uses a session id in a cookie, and session data stored on the server or a shared store.",
                points: [
                    "Cookie stores only a session id. Actual user session state lives server-side (database or Redis).",
                    "Server validates sid, loads session, attaches user to request, and continues.",
                    "This approach supports instant logout by deleting session server-side.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Cookie holds a ticket number. The real ticket details live in the server counter system.",
                },
                code: {
                    title: "Example - Session flow in 5 lines",
                    snippet: `// Request arrives with Cookie: sid=abc
// 1) Read sid
// 2) Lookup session in store (Redis or DB)
// 3) If valid, attach req.user
// 4) Continue route logic
// 5) If invalid, respond 401`,
                },
            },
            {
                key: "csrf",
                title: "CSRF and cookie auth",
                icon: <FiAlertTriangle />,
                summary:
                    "Cookie based auth is vulnerable to CSRF because the browser can send cookies automatically on cross-site requests.",
                points: [
                    "CSRF happens when a victim is logged in and a malicious site triggers a state-changing request.",
                    "SameSite=Lax blocks many cases, but not all scenarios and not all legacy clients.",
                    "For high risk actions, use CSRF tokens or double submit tokens, plus proper SameSite policy.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "CSRF is a trick that makes your browser show your badge to the wrong action without you noticing.",
                },
                code: {
                    title: "Example - Double submit token idea",
                    snippet: `// 1) Server sets two cookies:
// - sid (HttpOnly) session cookie
// - csrfToken (not HttpOnly) readable by JS
// 2) Frontend sends csrfToken in header:
//   X-CSRF-Token: <csrfToken_cookie_value>
// 3) Server verifies header matches csrfToken cookie`,
                },
            },
            {
                key: "pitfalls",
                title: "Common pitfalls",
                icon: <FiXCircle />,
                summary:
                    "Most cookie bugs are misconfigurations: wrong SameSite, missing Secure, or domain and path mistakes.",
                pitfalls: [
                    "SameSite=None without Secure breaks in modern browsers.",
                    "Using broad Domain shares auth across subdomains unexpectedly.",
                    "Not setting path correctly can cause multiple cookies with same name but different paths.",
                    "Assuming cookies are private. Anything not HttpOnly can be read by scripts.",
                    "For cross-origin frontend, you must enable credentials on both client and server.",
                ],
                code: {
                    title: "Example - Cross origin cookie checklist",
                    snippet: `// Frontend request
fetch("https://api.example.com/me", {
  credentials: "include"
});

// Backend headers
// Access-Control-Allow-Credentials: true
// Access-Control-Allow-Origin: https://app.example.com
// Set-Cookie must include Secure for HTTPS and correct SameSite`,
                },
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

    const handleCopy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);
            window.setTimeout(() => setCopiedKey(null), 900);
        } catch {
            // ignore
        }
    };

    return (
        <Styled.Wrapper id="cookies">
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={handleToggleMain}
                aria-expanded={isOpen}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiLock />
                    </span>
                    <span className="text">
                        <span className="title">Cookies</span>
                        <span className="sub">
                            Cookie auth, session patterns, attributes, and CSRF
                            safety
                        </span>
                    </span>
                </span>

                <span className="right">
                    <span className="statePill">
                        {isOpen ? (
                            <>
                                <FiCheckCircle /> Open
                            </>
                        ) : (
                            <>
                                <FiHash /> Closed
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
                        <div className="introTitle">What to remember</div>
                        <div className="introSub">
                            Cookies are powerful because the browser sends them
                            automatically. That power also creates risks. Know
                            attributes, session flow, and CSRF protection.
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {sections.map((s) => {
                        const open = activeKey === s.key;

                        return (
                            <div
                                key={s.key}
                                className={`card ${open ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="cardHeader"
                                    onClick={() => handleToggleItem(s.key)}
                                    aria-expanded={open}
                                >
                                    <span className="cLeft">
                                        <span className="cIcon">{s.icon}</span>
                                        <span className="cText">
                                            <span className="cTitle">
                                                {s.title}
                                            </span>
                                            <span className="cSummary">
                                                {s.summary}
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
                                    {s.points && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                Key points
                                            </div>
                                            <ul className="list">
                                                {s.points.map((p, idx) => (
                                                    <li
                                                        key={`${s.key}-p-${idx}`}
                                                    >
                                                        <span className="dot" />
                                                        <span className="liText">
                                                            {p}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {s.table && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                Attributes cheat sheet
                                            </div>

                                            <div className="kv">
                                                {s.table.map((row) => (
                                                    <div
                                                        key={`${s.key}-${row.k}`}
                                                        className="kvRow"
                                                    >
                                                        <div className="k">
                                                            {row.k}
                                                        </div>
                                                        <div className="v">
                                                            {row.v}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {s.mentalModel && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                {s.mentalModel.title}
                                            </div>
                                            <p className="para">
                                                {s.mentalModel.text}
                                            </p>
                                        </div>
                                    )}

                                    {s.pitfalls && (
                                        <div className="block warn">
                                            <div className="blockTitle">
                                                Pitfalls
                                            </div>
                                            <ul className="list">
                                                {s.pitfalls.map((g, idx) => (
                                                    <li
                                                        key={`${s.key}-g-${idx}`}
                                                    >
                                                        <span className="dot" />
                                                        <span className="liText">
                                                            {g}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {s.code && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                {s.code.title}
                                            </div>

                                            <div className="codeWrap">
                                                <button
                                                    type="button"
                                                    className="copyBtn"
                                                    onClick={() =>
                                                        handleCopy(
                                                            s.code.snippet,
                                                            s.key,
                                                        )
                                                    }
                                                    title="Copy code"
                                                    aria-label="Copy code"
                                                >
                                                    <FiCopy />
                                                    {copiedKey === s.key
                                                        ? "Copied"
                                                        : "Copy"}
                                                </button>

                                                <pre className="code">
                                                    <code>
                                                        {s.code.snippet}
                                                    </code>
                                                </pre>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiShield />
                    </span>
                    <span className="closingText">
                        Best practice for auth cookies - HttpOnly + Secure +
                        SameSite=Lax, plus CSRF tokens for sensitive actions.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Cookies;
