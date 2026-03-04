// src/topics/authentication/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiKey,
    FiLock,
    FiShield,
    FiRefreshCcw,
    FiGlobe,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiBookOpen,
    FiInfo,
    FiArrowRight,
    FiZap,
    FiAlertTriangle,
} from "react-icons/fi";
import { FaCookie } from "react-icons/fa";

const Authentication = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const topics = useMemo(
        () => [
            {
                key: "jwt",
                title: "JWT - JSON Web Token",
                icon: <FiKey />,
                summary:
                    "JWT is a signed token that carries claims about the user. It is commonly used for stateless authentication.",
                bullets: [
                    "JWT usually has 3 parts - header.payload.signature (Base64URL encoded).",
                    "Signature verifies integrity - if payload changes, signature validation fails.",
                    "JWT is not encryption. Anyone can read the payload if they have the token.",
                    "JWT works well when you do not want server-side sessions, but revocation becomes harder.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "JWT is like an ID card signed by the issuer. The bouncer checks the signature to trust it. The bouncer does not need to call the issuer every time.",
                },
                example: {
                    title: "Example - access token usage",
                    code: `// Client sends access token
// Authorization: Bearer <accessToken>

// Server verifies signature and reads claims
import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : null;

  if (!token) return res.status(401).json({ error: "missing_token" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.sub, role: payload.role };
    next();
  } catch (e) {
    return res.status(401).json({ error: "invalid_token" });
  }
}`,
                },
                gotchas: [
                    "Do not put secrets in JWT payload. Payload is readable.",
                    "Keep access tokens short-lived to reduce damage if leaked.",
                    "Revocation is not automatic. If a token is stolen, it stays valid until expiry unless you add a blocklist or rotate keys.",
                ],
            },
            {
                key: "cookiesSessions",
                title: "Cookies and sessions",
                icon: <FaCookie />,
                summary:
                    "Sessions store auth state on the server. The browser holds a session id in a cookie. This is common for web apps.",
                bullets: [
                    "Session id is stored in a cookie. Server maps session id to user data.",
                    "Cookies can be HttpOnly to prevent JavaScript access and reduce XSS token theft.",
                    "SameSite helps reduce CSRF risk. Secure ensures cookie only over HTTPS.",
                    "Sessions are easy to revoke because server can delete the session anytime.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Session auth is like a coat check ticket. The ticket itself is useless without the coat room (server). The server can invalidate the ticket anytime.",
                },
                example: {
                    title: "Example - safe cookie flags",
                    code: `// Set cookie for session id (example)
res.cookie("sid", sessionId, {
  httpOnly: true,
  secure: true,        // true in production (HTTPS)
  sameSite: "lax",     // "none" + secure for cross-site scenarios
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000
});

// On every request, browser auto sends cookie
// Cookie: sid=<sessionId>`,
                },
                gotchas: [
                    "Cookies are sent automatically by browsers, which is why CSRF matters.",
                    "If SameSite is None, you must use Secure and handle CSRF properly.",
                    "Session storage must scale (Redis is common). Memory sessions break on multiple instances.",
                ],
            },
            {
                key: "oauth",
                title: "OAuth - Open Authorization",
                icon: <FiGlobe />,
                summary:
                    "OAuth lets an app get limited access to a user account on another service without sharing the user password.",
                bullets: [
                    "OAuth is about authorization (access to resources), not identity by itself.",
                    "Common flow for web apps is Authorization Code flow (often with PKCE).",
                    "There are roles - Resource Owner (user), Client (your app), Authorization Server, Resource Server.",
                    "In real apps, you often combine OAuth with OIDC (OpenID Connect) for login identity claims.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "OAuth is giving a valet key to your app. It can open some doors but not everything, and it can expire or be revoked.",
                },
                example: {
                    title: "Example - high level Authorization Code flow",
                    code: `// 1) Redirect user to provider authorize URL
// 2) Provider redirects back with ?code=...
// 3) Server exchanges code for tokens using client credentials
// 4) Server uses access token to call provider APIs

// Important point:
// - code is short-lived
// - access token is used to call resource server
// - refresh token can mint new access tokens (if granted)`,
                },
                gotchas: [
                    "Never handle OAuth tokens in a way that exposes them to XSS.",
                    "Use PKCE for public clients (SPAs and mobile apps).",
                    "Validate redirect URIs strictly to avoid token leakage.",
                ],
            },
            {
                key: "refreshTokens",
                title: "Refresh tokens",
                icon: <FiRefreshCcw />,
                summary:
                    "Refresh tokens are long-lived credentials used to mint new short-lived access tokens without forcing the user to log in again.",
                bullets: [
                    "Access token - short life, used on every API call.",
                    "Refresh token - longer life, used only to get a new access token.",
                    "A common pattern is rotating refresh tokens - every refresh returns a new refresh token and invalidates the old one.",
                    "Store refresh tokens more safely than access tokens. HttpOnly cookie is a common choice for web apps.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Access token is a visitor pass for today. Refresh token is your membership card used only at the reception desk to get a new visitor pass.",
                },
                example: {
                    title: "Example - token rotation idea",
                    code: `// POST /auth/refresh
// - client sends refresh token (often in HttpOnly cookie)
// - server verifies it, then issues new access token
// - server also issues a new refresh token and invalidates previous one

// Why rotate?
// - If an old refresh token gets stolen, reuse can be detected and blocked`,
                },
                gotchas: [
                    "If refresh token leaks, attacker can keep minting access tokens.",
                    "Do not store refresh tokens in localStorage in browser apps.",
                    "Implement logout by invalidating refresh token server-side.",
                ],
            },
            {
                key: "csrfSafeFlows",
                title: "CSRF-safe auth flows",
                icon: <FiShield />,
                summary:
                    "CSRF - Cross Site Request Forgery happens when a browser auto-sends cookies to your site from a malicious page. Defend it if you use cookie-based auth.",
                bullets: [
                    "If you use Authorization header Bearer tokens, CSRF risk is lower because browser does not auto attach it.",
                    "If you use cookies for auth, add CSRF defenses.",
                    "SameSite=Lax blocks many cross-site POSTs but not all scenarios.",
                    "Common defenses - CSRF token (double submit or server stored), Origin or Referer checks, and safe cookie flags.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "CSRF is a trick where your browser is fooled into sending a valid cookie. The attacker cannot read the response, but they can trigger state-changing requests.",
                },
                example: {
                    title: "Example - basic CSRF token pattern",
                    code: `// 1) Server sends a CSRF token (not HttpOnly) and a session cookie (HttpOnly)
// 2) Client reads CSRF token and sends it in a header for unsafe methods

// Client: send header
// X-CSRF-Token: <token>

// Server: verify header token matches expected value for session/user
// If token missing or invalid, reject with 403`,
                },
                gotchas: [
                    "Do not disable CSRF just because you have CORS. They solve different problems.",
                    "Protect state-changing routes - POST, PUT, PATCH, DELETE.",
                    "Always validate Origin where possible for browser traffic.",
                ],
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
        <Styled.Wrapper id="authentication">
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={handleToggleMain}
                aria-expanded={isOpen}
                title={isOpen ? "Collapse section" : "Expand section"}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiLock />
                    </span>
                    <span className="text">
                        <span className="title">Authentication</span>
                        <span className="sub">
                            JWT, cookies and sessions, OAuth, refresh tokens,
                            and CSRF-safe flows
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
                            What authentication really means
                        </div>
                        <div className="introSub">
                            Authentication answers "who are you". Authorization
                            answers "what can you do". Most backend bugs happen
                            when tokens, cookies, and browser behavior are not
                            understood clearly.
                        </div>
                    </div>
                </div>

                <div className="callout">
                    <div className="callIcon">
                        <FiAlertTriangle />
                    </div>
                    <div className="callText">
                        Practical rule - if you use cookies for auth, think
                        about CSRF. If you put tokens in JavaScript storage,
                        think about XSS.
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
                                    title={open ? "Collapse" : "Expand"}
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
                                            Revision tip: Explain {t.title} to a
                                            non-tech friend in 20 seconds.
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
                        Strong auth is mostly about safe storage, short-lived
                        access tokens, and correct browser behavior. Fancy
                        crypto does not save a broken flow.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Authentication;
