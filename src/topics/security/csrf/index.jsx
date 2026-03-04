// src/topics/security/csrf/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiShield,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
    FiAlertTriangle,
    FiCheckCircle,
    FiLink,
    FiCode,
    FiLock,
} from "react-icons/fi";

const Csrf = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("basics");

    const blocks = useMemo(
        () => [
            {
                key: "basics",
                title: "What is CSRF",
                icon: <FiInfo />,
                summary:
                    "CSRF is when a malicious site tricks a logged-in user's browser into sending an unwanted request to your site.",
                points: [
                    "CSRF stands for Cross Site Request Forgery.",
                    "The attacker does not steal your password. They abuse the fact that the browser automatically sends cookies.",
                    "If your auth uses cookies and your server trusts them without extra checks, a forged request can succeed.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Your browser is like a courier that automatically attaches your site cookies to requests. CSRF is when an attacker convinces the courier to deliver a package to your bank using your identity badge.",
                },
            },
            {
                key: "attackFlow",
                title: "How the attack works",
                icon: <FiLink />,
                summary:
                    "The victim is logged in, then visits an attacker page that triggers a request to the victim site.",
                points: [
                    "Victim logs in to your site, cookie is stored in browser.",
                    "Victim visits attacker.com while still logged in.",
                    "Attacker page triggers a request to your site, like a hidden form submit or image request.",
                    "Browser automatically sends your site cookies with that request.",
                    "If your endpoint changes state and has no CSRF protection, the action happens.",
                ],
                code: {
                    title: "Example - hidden form trick",
                    snippet: `<form action="https://your-site.com/account/email" method="POST">
  <input type="hidden" name="email" value="attacker@mail.com" />
</form>
<script>
  document.forms[0].submit();
</script>`,
                },
            },
            {
                key: "whenItMatters",
                title: "When CSRF matters",
                icon: <FiAlertTriangle />,
                summary:
                    "CSRF matters for state-changing requests when auth is cookie-based.",
                points: [
                    "State-changing means anything that updates data, like POST, PUT, PATCH, DELETE.",
                    "GET requests should be safe and not change state. If GET changes state, it is a bug and also CSRF risk.",
                    "If you use Authorization header tokens and do not use cookies for auth, classic CSRF is much harder because browsers do not auto attach Authorization headers.",
                    "If you store tokens in cookies, you are back in CSRF territory.",
                ],
            },
            {
                key: "defenses",
                title: "How to prevent CSRF",
                icon: <FiLock />,
                summary:
                    "Use a mix of SameSite cookies, CSRF tokens, and origin checks for strong protection.",
                points: [
                    "Set cookies as SameSite=Lax or SameSite=Strict where possible.",
                    "Use CSRF tokens for state-changing requests, also called synchronizer token pattern.",
                    "Validate Origin and Referer headers for browser requests as an extra defense layer.",
                    "Require a custom header like x-csrf-token for APIs used by SPAs.",
                    "Use double submit cookie pattern if you cannot store server-side CSRF token, but synchronizer token is usually clearer with sessions.",
                ],
                code: {
                    title: "Example - SPA flow with CSRF token",
                    snippet: `// 1) Server issues a CSRF token (stored server-side in session or a secure store)
// GET /csrf -> { csrfToken: "..." }

// 2) Client fetches token once
const { csrfToken } = await fetch("/csrf", { credentials: "include" }).then(r => r.json());

// 3) Client sends token in a custom header for write requests
await fetch("/api/profile", {
  method: "POST",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    "x-csrf-token": csrfToken
  },
  body: JSON.stringify({ name: "Ashish" })
});`,
                },
            },
            {
                key: "checklist",
                title: "Production checklist",
                icon: <FiCheckCircle />,
                summary:
                    "A short checklist you can apply to any backend quickly.",
                points: [
                    "Cookies: HttpOnly=true, Secure=true in production, SameSite=Lax or Strict when possible.",
                    "Write endpoints require CSRF token or strict Origin checks.",
                    "Do not change state in GET endpoints.",
                    "Add rate limiting on sensitive actions.",
                    "Log CSRF failures with request id or correlation id, but do not log raw tokens.",
                ],
                code: {
                    title: "Example - minimal CSRF middleware idea",
                    snippet: `// Pseudo middleware idea for cookie-session apps
// - token stored in session
// - client sends token via header for write calls

const isWrite = (m) => ["POST","PUT","PATCH","DELETE"].includes(m);

function csrfGuard(req, res, next) {
  if (!isWrite(req.method)) return next();

  const token = req.headers["x-csrf-token"];
  const expected = req.session?.csrfToken;

  if (!token || !expected || token !== expected) {
    return res.status(403).json({
      error: "csrf_failed",
      message: "CSRF validation failed"
    });
  }

  next();
}`,
                },
            },
            {
                key: "pitfalls",
                title: "Common mistakes",
                icon: <FiAlertTriangle />,
                summary:
                    "These mistakes make CSRF protection look enabled but still weak.",
                points: [
                    "Relying only on CORS. CORS is a browser rule, not an auth control. Cookies can still be sent.",
                    "Using SameSite=None without Secure. Browsers will reject or behave unexpectedly.",
                    "Allowing state changes on GET endpoints.",
                    "Not rotating CSRF token after login or session changes.",
                    "Logging CSRF token values in server logs.",
                ],
            },
        ],
        [],
    );

    const handleToggleMain = () => {
        setIsOpen((v) => !v);
    };

    const handleTab = (key) => {
        setActiveKey(key);
    };

    const active = blocks.find((b) => b.key === activeKey) || blocks[0];

    return (
        <Styled.Wrapper id="csrf">
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={handleToggleMain}
                aria-expanded={isOpen}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiShield />
                    </span>
                    <span className="text">
                        <span className="title">CSRF</span>
                        <span className="sub">
                            Cross Site Request Forgery - cookies, attack flow,
                            and defenses
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
                <div className="topIntro">
                    <div className="introBadge">
                        <span className="bIcon">
                            <FiInfo />
                        </span>
                        <span className="bText">
                            CSRF is mainly a risk when authentication uses
                            cookies and endpoints change state.
                        </span>
                    </div>

                    <div className="tabs">
                        {blocks.map((b) => {
                            const on = b.key === activeKey;
                            return (
                                <button
                                    key={b.key}
                                    type="button"
                                    className={`tab ${on ? "on" : ""}`}
                                    onClick={() => handleTab(b.key)}
                                >
                                    <span className="tIcon">{b.icon}</span>
                                    <span className="tText">{b.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="content">
                    <div className="card">
                        <div className="cardHead">
                            <div className="cLeft">
                                <span className="cIcon">{active.icon}</span>
                                <div className="cText">
                                    <div className="cTitle">{active.title}</div>
                                    <div className="cSummary">
                                        {active.summary}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="blockTitle">Key points</div>
                            <ul className="list">
                                {active.points.map((p, idx) => (
                                    <li key={`${active.key}-p-${idx}`}>
                                        <span className="dot" />
                                        <span className="liText">{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {active.mentalModel ? (
                            <div className="block">
                                <div className="blockTitle">
                                    {active.mentalModel.title}
                                </div>
                                <p className="para">
                                    {active.mentalModel.text}
                                </p>
                            </div>
                        ) : null}

                        {active.code ? (
                            <div className="block">
                                <div className="blockTitle">
                                    <span className="btWithIcon">
                                        <span className="btIcon">
                                            <FiCode />
                                        </span>
                                        <span>{active.code.title}</span>
                                    </span>
                                </div>
                                <pre className="code">
                                    <code>{active.code.snippet}</code>
                                </pre>
                            </div>
                        ) : null}

                        {active.key === "pitfalls" ? (
                            <div className="block warn">
                                <div className="blockTitle">Quick reminder</div>
                                <p className="para">
                                    CSRF protection should be tested using a
                                    real browser flow, because CSRF exists
                                    because browsers attach cookies
                                    automatically.
                                </p>
                            </div>
                        ) : null}

                        <div className="footerHint">
                            <span className="hintIcon">
                                <FiCheckCircle />
                            </span>
                            <span className="hintText">
                                Interview line: "CSRF is possible because
                                browsers automatically attach cookies to
                                cross-site requests, so we add SameSite and CSRF
                                tokens for write endpoints."
                            </span>
                        </div>
                    </div>

                    <div className="side">
                        <div className="miniCard">
                            <div className="miniTitle">
                                Fast recall - CSRF in 3 lines
                            </div>
                            <ul className="miniList">
                                <li>
                                    - Browser auto sends cookies, attacker
                                    abuses that
                                </li>
                                <li>
                                    - A forged write request can succeed if no
                                    extra validation
                                </li>
                                <li>
                                    - Fix with SameSite + CSRF tokens + origin
                                    checks
                                </li>
                            </ul>
                        </div>

                        <div className="miniCard">
                            <div className="miniTitle">
                                Typical protection combo
                            </div>
                            <ul className="miniList">
                                <li>- SameSite=Lax</li>
                                <li>- HttpOnly + Secure cookies</li>
                                <li>- x-csrf-token for writes</li>
                                <li>- Origin validation</li>
                            </ul>
                        </div>

                        <div className="miniCard">
                            <div className="miniTitle">
                                Common state changes
                            </div>
                            <ul className="miniList">
                                <li>- change password</li>
                                <li>- update email</li>
                                <li>- transfer money</li>
                                <li>- create order</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiAlertTriangle />
                    </span>
                    <span className="closingText">
                        If you use cookies for auth, assume CSRF exists unless
                        you actively prevent it.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Csrf;
