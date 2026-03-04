// src/topics/security/xss/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiShield,
    FiAlertTriangle,
    FiChevronDown,
    FiCode,
    FiCheckCircle,
    FiXCircle,
    FiInfo,
    FiLock,
    FiZap,
} from "react-icons/fi";

const Xss = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const blocks = useMemo(
        () => [
            {
                key: "what",
                title: "What is XSS",
                icon: <FiInfo />,
                summary:
                    "XSS (Cross Site Scripting) happens when an attacker makes your site run their JavaScript in a victim's browser.",
                points: [
                    "The attacker does not hack the server directly - they trick the browser into executing injected script.",
                    "Impact is on users - stolen sessions, data theft, fake UI, actions performed as the user.",
                    "Root cause is untrusted input being treated as HTML or JavaScript.",
                ],
            },
            {
                key: "types",
                title: "Types of XSS",
                icon: <FiZap />,
                summary:
                    "Same core bug, different delivery methods. Know these names for interviews.",
                points: [
                    "Stored XSS - payload is saved on the server (comments, profile bio) and served to many users.",
                    "Reflected XSS - payload comes from request (query string) and is reflected in response immediately.",
                    "DOM XSS - payload stays in client side code (dangerous innerHTML usage) without server changes.",
                ],
            },
            {
                key: "exampleBad",
                title: "Bad example",
                icon: <FiXCircle />,
                summary:
                    "Rendering untrusted input as HTML is the classic foot-gun.",
                codeTitle: "Example - unsafe HTML injection",
                code: `// BAD - do not do this
const username = req.query.name;

// Example response that becomes dangerous:
// name=<img src=x onerror=alert(1)>

res.send(\`
  <h1>Hello \${username}</h1>
\`);`,
                note: "If username contains HTML or script, the browser executes it as part of the page.",
            },
            {
                key: "exampleGood",
                title: "Good patterns",
                icon: <FiCheckCircle />,
                summary:
                    "Treat all input as untrusted. Encode output and avoid HTML injection.",
                codeTitle: "Example - safe output encoding idea",
                code: `// GOOD - render as text, not HTML
// In templating engines, use escaped output.
// In React, normal rendering escapes by default.

res.send(\`
  <h1>Hello \${escapeHtml(username)}</h1>
\`);

// escapeHtml should replace special chars:
// < becomes &lt;
// > becomes &gt;
// & becomes &amp;
// " becomes &quot;
// ' becomes &#39;`,
                note: "Escaping means the browser shows characters, not markup.",
            },
            {
                key: "prevention",
                title: "Prevention checklist",
                icon: <FiLock />,
                summary:
                    "Defense is layers. Use multiple controls, not one magic trick.",
                points: [
                    "Output encoding - escape data when inserting into HTML, attributes, URLs, JS contexts.",
                    "Avoid dangerous sinks - innerHTML, dangerouslySetInnerHTML, document.write, eval.",
                    "Use Content Security Policy (CSP) - reduces blast radius if XSS slips in.",
                    "HttpOnly cookies - prevents reading cookies via JavaScript, but does not stop all XSS damage.",
                    "Validate input - helpful, but do not rely on it alone. Output encoding is the real fix.",
                ],
            },
            {
                key: "csp",
                title: "CSP in simple words",
                icon: <FiShield />,
                summary:
                    "CSP (Content Security Policy) tells the browser what scripts are allowed to run.",
                points: [
                    "You can block inline scripts by default and only allow scripts from your domains.",
                    "If an attacker injects a script tag, the browser can refuse to run it.",
                    "Start with report-only mode in production to avoid breaking your app.",
                ],
                codeTitle: "Example - CSP header idea",
                code: `// Example header (adjust for your app needs)
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'none';`,
            },
            {
                key: "pitfalls",
                title: "Common pitfalls",
                icon: <FiAlertTriangle />,
                summary:
                    "These are the traps that keep showing up in real systems.",
                points: [
                    "Relying only on input validation. Attackers find bypasses and contexts vary.",
                    "Escaping in the wrong context. HTML escaping is not the same as JavaScript string escaping.",
                    "Allowing inline scripts while thinking CSP is enabled.",
                    "Thinking HttpOnly alone fixes XSS. It only protects cookies from being read, not user actions.",
                ],
            },
        ],
        [],
    );

    const toggleMain = () => {
        setIsOpen((v) => !v);
        if (isOpen) setActiveKey(null);
    };

    const toggleBlock = (key) => {
        setActiveKey((prev) => (prev === key ? null : key));
    };

    return (
        <Styled.Wrapper id="xss">
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={toggleMain}
                aria-expanded={isOpen}
                title={isOpen ? "Collapse XSS" : "Expand XSS"}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiShield />
                    </span>
                    <span className="text">
                        <span className="title">XSS</span>
                        <span className="sub">
                            Cross Site Scripting - how injected JavaScript runs
                            in user browsers and how to prevent it
                        </span>
                    </span>
                </span>

                <span className="right">
                    <span className="badge">Security</span>
                    <span className={`chev ${isOpen ? "rot" : ""}`}>
                        <FiChevronDown />
                    </span>
                </span>
            </button>

            <div className={`sectionBody ${isOpen ? "show" : ""}`}>
                <div className="topNote">
                    <div className="noteIcon">
                        <FiAlertTriangle />
                    </div>
                    <div className="noteText">
                        <div className="noteTitle">
                            Interview line you should remember
                        </div>
                        <div className="noteSub">
                            XSS is not about the server running attacker code.
                            It is about the browser executing attacker code
                            because untrusted data was treated as markup or
                            script.
                        </div>
                    </div>
                </div>

                <div className="grid">
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
                                    onClick={() => toggleBlock(b.key)}
                                    aria-expanded={open}
                                >
                                    <span className="cLeft">
                                        <span className="cIcon">{b.icon}</span>
                                        <span className="cText">
                                            <span className="cTitle">
                                                {b.title}
                                            </span>
                                            <span className="cSummary">
                                                {b.summary}
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
                                    {b.points && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                Key points
                                            </div>
                                            <ul className="list">
                                                {b.points.map((p, idx) => (
                                                    <li
                                                        key={`${b.key}-p-${idx}`}
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

                                    {b.code && (
                                        <div className="block">
                                            <div className="blockTitle codeTitle">
                                                <span className="codeIcon">
                                                    <FiCode />
                                                </span>
                                                <span>{b.codeTitle}</span>
                                            </div>
                                            <pre className="code">
                                                <code>{b.code}</code>
                                            </pre>
                                            {b.note && (
                                                <div className="smallNote">
                                                    {b.note}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiLock />
                    </span>
                    <span className="closingText">
                        Best practical combo - escape output, avoid HTML
                        injection, add CSP, and keep session cookies HttpOnly.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Xss;
