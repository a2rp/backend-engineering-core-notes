// src/topics/security/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiShield,
    FiAlertTriangle,
    FiLock,
    FiKey,
    FiSlash,
    FiHash,
    FiFilter,
    FiLayers,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
    FiArrowRight,
    FiZap,
} from "react-icons/fi";

const Security = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const topics = useMemo(
        () => [
            {
                key: "xss",
                title: "XSS - Cross Site Scripting",
                icon: <FiSlash />,
                summary:
                    "Attacker injects malicious script into a page so it runs in the victim's browser under your site's trust.",
                bullets: [
                    "XSS is a browser-side problem, but backend often enables it by storing or reflecting unsafe input.",
                    "Types: stored XSS (saved in DB), reflected XSS (in URL or request), DOM XSS (front-end code creates it).",
                    "Impact: stealing cookies or tokens, performing actions as the user, phishing UI inside your page.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "XSS is like someone writing a fake instruction inside your official notice board. Visitors follow it because it looks like it came from you.",
                },
                example: {
                    title: "Example - unsafe vs safe output",
                    code: `// Unsafe - directly rendering user input into HTML
// (Example: template string sent to client)
res.send(\`<h1>Hello \${req.query.name}</h1>\`);

// Better - escape output (server templating engines usually do)
// Or return JSON and let frontend render text safely:
res.json({ name: req.query.name });

// Also set security headers (CSP) where possible.`,
                },
                checklist: [
                    "Escape output in templates.",
                    "Do not inject user input into HTML, scripts, or inline handlers.",
                    "Use CSP - Content Security Policy for extra protection.",
                    "Use HttpOnly cookies so JS cannot read session cookies.",
                ],
                gotchas: [
                    "Sanitizing input is not enough if you output into different contexts (HTML, JS, CSS, URL).",
                    "Storing HTML from users is risky. If you must, sanitize with a strict allowlist.",
                ],
            },
            {
                key: "csrf",
                title: "CSRF - Cross Site Request Forgery",
                icon: <FiKey />,
                summary:
                    "Attacker tricks a logged-in user's browser into making a request to your site. Cookies get sent automatically, so the action can succeed.",
                bullets: [
                    "CSRF matters when auth uses cookies (sessions or cookie-based JWT).",
                    "If your server accepts state-changing requests without verifying intent, an attacker can trigger them.",
                    "Typical targets: money transfer, email change, password change, delete actions.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "CSRF is like someone using your already signed-in badge to walk into your office and submit a form on your behalf.",
                },
                example: {
                    title: "Example - CSRF protections",
                    code: `// Core protections for cookie-based auth
// 1) SameSite cookies (Lax or Strict)
Set-Cookie: sid=...; HttpOnly; Secure; SameSite=Lax

// 2) CSRF token for state-changing requests
// Server issues a CSRF token, client sends it back in a header:
X-CSRF-Token: <token>

// 3) Verify Origin / Referer on sensitive endpoints
// If Origin is missing or not your domain, reject.`,
                },
                checklist: [
                    "Use SameSite cookies as a baseline.",
                    "Use CSRF tokens for POST, PUT, PATCH, DELETE.",
                    "Validate Origin for sensitive actions.",
                    "Prefer JSON APIs + custom headers for state changes.",
                ],
                gotchas: [
                    "SameSite=Lax reduces risk but does not solve every flow (some edge cases exist).",
                    "CSRF is not about stealing data. It is about forcing actions.",
                ],
            },
            {
                key: "rateLimit",
                title: "Rate limiting",
                icon: <FiAlertTriangle />,
                summary:
                    "Limit how many requests a client can make in a time window to protect from brute force, scraping, and abuse.",
                bullets: [
                    "Common uses: login attempts, OTP endpoints, password reset, public APIs.",
                    "Strategies: fixed window, sliding window, token bucket, leaky bucket.",
                    "Keys: IP, userId, API key, or a combination depending on endpoint.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Rate limiting is a bouncer. It lets normal traffic in and blocks the person trying to spam the door.",
                },
                example: {
                    title: "Example - simple Express middleware idea",
                    code: `// Pseudocode style
const bucket = new Map();

function rateLimit(req, res, next) {
  const key = req.ip;
  const now = Date.now();

  const entry = bucket.get(key) || { count: 0, resetAt: now + 60_000 };

  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + 60_000;
  }

  entry.count += 1;
  bucket.set(key, entry);

  if (entry.count > 60) {
    return res.status(429).json({ error: "Too many requests" });
  }

  next();
}`,
                },
                checklist: [
                    "Return 429 - Too Many Requests.",
                    "Use stricter limits for auth endpoints.",
                    "Prefer Redis-based limiter in production (shared across instances).",
                    "Log blocks to detect attacks.",
                ],
                gotchas: [
                    "IP-only limiting can hurt users behind NAT or mobile networks.",
                    "Attackers can rotate IPs. Combine signals where possible.",
                ],
            },
            {
                key: "hashing",
                title: "Hashing and password storage",
                icon: <FiHash />,
                summary:
                    "Never store passwords as plain text. Store a slow hash with a unique salt so leaked DB data is harder to crack.",
                bullets: [
                    "Hashing is one-way. Encryption is reversible. Passwords should be hashed, not encrypted.",
                    "Use modern slow hashing: bcrypt, scrypt, or argon2.",
                    "Always salt passwords. Many libraries handle this automatically.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Hashing is like grinding a key into powder. You can verify a key by grinding it again and comparing powder, but you cannot rebuild the key.",
                },
                example: {
                    title: "Example - bcrypt style flow",
                    code: `// Typical flow
// signup
const hash = await bcrypt.hash(password, 12);
await users.insert({ email, passwordHash: hash });

// login
const ok = await bcrypt.compare(password, user.passwordHash);
if (!ok) return res.status(401).json({ error: "Invalid credentials" });`,
                },
                checklist: [
                    "Use bcrypt, scrypt, or argon2 (slow hash).",
                    "Use a strong work factor (cost) based on your hardware.",
                    "Store passwordHash only, never password.",
                    "Rate limit login attempts.",
                ],
                gotchas: [
                    "Do not use fast hashes like MD5 or SHA-1 for passwords.",
                    "Do not roll your own crypto.",
                ],
            },
            {
                key: "validation",
                title: "Input validation and sanitization",
                icon: <FiFilter />,
                summary:
                    "Validate input to ensure it matches expected shape and types. Sanitize when needed to remove dangerous content.",
                bullets: [
                    "Validation checks correctness: types, required fields, ranges, formats.",
                    "Sanitization removes or escapes unsafe parts (like HTML tags).",
                    "Prefer allowlists: only allow what you expect, reject everything else.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Validation is checking the ID card at the gate. Sanitization is removing prohibited items from the bag.",
                },
                example: {
                    title: "Example - validation approach",
                    code: `// Example rules
// - email must be valid
// - age must be number between 13 and 120
// - name length <= 60
//
// If input fails, return 400 with a clear message:
res.status(400).json({
  error: "Validation error",
  details: [{ field: "email", message: "Invalid email" }]
});`,
                },
                checklist: [
                    "Validate at the API boundary (before DB).",
                    "Use schema validators (zod, joi, yup) in real apps.",
                    "Limit payload size and string lengths.",
                    "Normalize input (trim, lowercase emails) carefully.",
                ],
                gotchas: [
                    "Validation is not only for security. It prevents bugs and bad data.",
                    "Sanitizing everything can break legitimate input. Use it only where required.",
                ],
            },
            {
                key: "headers",
                title: "Security headers overview",
                icon: <FiLayers />,
                summary:
                    "HTTP headers that harden browsers and reduce common attack surfaces.",
                bullets: [
                    "CSP - Content Security Policy reduces XSS impact by limiting script sources.",
                    "X-Content-Type-Options: nosniff prevents MIME sniffing issues.",
                    "X-Frame-Options or CSP frame-ancestors helps prevent clickjacking.",
                    "Referrer-Policy controls what referrer data is sent.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Security headers are seatbelts. They do not stop accidents, but they reduce damage when something goes wrong.",
                },
                example: {
                    title: "Example - practical baseline",
                    code: `// Example style (not exact code)
// Use helmet in Express for sensible defaults:
import helmet from "helmet";
app.use(helmet());

// Add CSP carefully (can break scripts if too strict)
// Start with report-only mode where possible.`,
                },
                checklist: [
                    "Use helmet in Express for baseline headers.",
                    "Add CSP gradually (start with report-only).",
                    "Ensure cookies are HttpOnly, Secure, SameSite where applicable.",
                ],
                gotchas: [
                    "Overly strict CSP can break your frontend. Roll out step by step.",
                    "Headers help but do not replace proper validation and auth checks.",
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
        <Styled.Wrapper id="security">
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
                        <span className="title">Security</span>
                        <span className="sub">
                            XSS, CSRF, rate limiting, hashing, validation, and
                            headers
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
                            Why security is not optional
                        </div>
                        <div className="introSub">
                            Most real breaches happen due to basic mistakes -
                            missing validation, weak auth, unsafe cookies, and
                            no rate limiting. These notes focus on the most
                            common backend security failures and how to avoid
                            them.
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

                                    <div className="block good">
                                        <div className="blockTitle">
                                            Quick checklist
                                        </div>
                                        <ul className="list">
                                            {t.checklist.map((c, idx) => (
                                                <li key={`${t.key}-c-${idx}`}>
                                                    <span className="dot goodDot" />
                                                    <span className="liText">
                                                        {c}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="block warn">
                                        <div className="blockTitle">
                                            Common pitfalls
                                        </div>
                                        <ul className="list">
                                            {t.gotchas.map((g, idx) => (
                                                <li key={`${t.key}-g-${idx}`}>
                                                    <span className="dot warnDot" />
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
                                            Revision tip: Explain {t.title} with
                                            one real example of how it can be
                                            exploited.
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
                        Security rule: validate inputs, harden cookies, rate
                        limit auth, and never trust the client.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Security;
