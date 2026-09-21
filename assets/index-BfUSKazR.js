import{c as g,r as i,j as e,T as b,u as y,o as f,n as v,l as w,a as k,f as j,p as S,q as N,s as d,t as T,F as C,y as I}from"./index-w7GzmdvE.js";const M={Wrapper:g.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 86%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 7000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-accent) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .block.good {
            background: color-mix(
                in srgb,
                var(--color-success) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;
                background: color-mix(
                    in srgb,
                    var(--color-accent) 76%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .goodDot {
                background: color-mix(
                    in srgb,
                    var(--color-success) 76%,
                    var(--color-text-primary)
                );
            }

            .warnDot {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 76%,
                    var(--color-text-primary)
                );
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-accent) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},P=({focusKey:n})=>{const[o,p]=i.useState(!1),[x,l]=i.useState(null),c=i.useMemo(()=>[{key:"xss",title:"XSS - Cross Site Scripting",icon:e.jsx(b,{}),summary:"Attacker injects malicious script into a page so it runs in the victim's browser under your site's trust.",bullets:["XSS is a browser-side problem, but backend often enables it by storing or reflecting unsafe input.","Types: stored XSS (saved in DB), reflected XSS (in URL or request), DOM XSS (front-end code creates it).","Impact: stealing cookies or tokens, performing actions as the user, phishing UI inside your page."],mentalModel:{title:"Mental model",text:"XSS is like someone writing a fake instruction inside your official notice board. Visitors follow it because it looks like it came from you."},example:{title:"Example - unsafe vs safe output",code:`// Unsafe - directly rendering user input into HTML
// (Example: template string sent to client)
res.send(\`<h1>Hello \${req.query.name}</h1>\`);

// Better - escape output (server templating engines usually do)
// Or return JSON and let frontend render text safely:
res.json({ name: req.query.name });

// Also set security headers (CSP) where possible.`},checklist:["Escape output in templates.","Do not inject user input into HTML, scripts, or inline handlers.","Use CSP - Content Security Policy for extra protection.","Use HttpOnly cookies so JS cannot read session cookies."],gotchas:["Sanitizing input is not enough if you output into different contexts (HTML, JS, CSS, URL).","Storing HTML from users is risky. If you must, sanitize with a strict allowlist."]},{key:"csrf",title:"CSRF - Cross Site Request Forgery",icon:e.jsx(y,{}),summary:"Attacker tricks a logged-in user's browser into making a request to your site. Cookies get sent automatically, so the action can succeed.",bullets:["CSRF matters when auth uses cookies (sessions or cookie-based JWT).","If your server accepts state-changing requests without verifying intent, an attacker can trigger them.","Typical targets: money transfer, email change, password change, delete actions."],mentalModel:{title:"Mental model",text:"CSRF is like someone using your already signed-in badge to walk into your office and submit a form on your behalf."},example:{title:"Example - CSRF protections",code:`// Core protections for cookie-based auth
// 1) SameSite cookies (Lax or Strict)
Set-Cookie: sid=...; HttpOnly; Secure; SameSite=Lax

// 2) CSRF token for state-changing requests
// Server issues a CSRF token, client sends it back in a header:
X-CSRF-Token: <token>

// 3) Verify Origin / Referer on sensitive endpoints
// If Origin is missing or not your domain, reject.`},checklist:["Use SameSite cookies as a baseline.","Use CSRF tokens for POST, PUT, PATCH, DELETE.","Validate Origin for sensitive actions.","Prefer JSON APIs + custom headers for state changes."],gotchas:["SameSite=Lax reduces risk but does not solve every flow (some edge cases exist).","CSRF is not about stealing data. It is about forcing actions."]},{key:"rateLimit",title:"Rate limiting",icon:e.jsx(f,{}),summary:"Limit how many requests a client can make in a time window to protect from brute force, scraping, and abuse.",bullets:["Common uses: login attempts, OTP endpoints, password reset, public APIs.","Strategies: fixed window, sliding window, token bucket, leaky bucket.","Keys: IP, userId, API key, or a combination depending on endpoint."],mentalModel:{title:"Mental model",text:"Rate limiting is a bouncer. It lets normal traffic in and blocks the person trying to spam the door."},example:{title:"Example - simple Express middleware idea",code:`// Pseudocode style
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
}`},checklist:["Return 429 - Too Many Requests.","Use stricter limits for auth endpoints.","Prefer Redis-based limiter in production (shared across instances).","Log blocks to detect attacks."],gotchas:["IP-only limiting can hurt users behind NAT or mobile networks.","Attackers can rotate IPs. Combine signals where possible."]},{key:"hashing",title:"Hashing and password storage",icon:e.jsx(v,{}),summary:"Never store passwords as plain text. Store a slow hash with a unique salt so leaked DB data is harder to crack.",bullets:["Hashing is one-way. Encryption is reversible. Passwords should be hashed, not encrypted.","Use modern slow hashing: bcrypt, scrypt, or argon2.","Always salt passwords. Many libraries handle this automatically."],mentalModel:{title:"Mental model",text:"Hashing is like grinding a key into powder. You can verify a key by grinding it again and comparing powder, but you cannot rebuild the key."},example:{title:"Example - bcrypt style flow",code:`// Typical flow
// signup
const hash = await bcrypt.hash(password, 12);
await users.insert({ email, passwordHash: hash });

// login
const ok = await bcrypt.compare(password, user.passwordHash);
if (!ok) return res.status(401).json({ error: "Invalid credentials" });`},checklist:["Use bcrypt, scrypt, or argon2 (slow hash).","Use a strong work factor (cost) based on your hardware.","Store passwordHash only, never password.","Rate limit login attempts."],gotchas:["Do not use fast hashes like MD5 or SHA-1 for passwords.","Do not roll your own crypto."]},{key:"validation",title:"Input validation and sanitization",icon:e.jsx(w,{}),summary:"Validate input to ensure it matches expected shape and types. Sanitize when needed to remove dangerous content.",bullets:["Validation checks correctness: types, required fields, ranges, formats.","Sanitization removes or escapes unsafe parts (like HTML tags).","Prefer allowlists: only allow what you expect, reject everything else."],mentalModel:{title:"Mental model",text:"Validation is checking the ID card at the gate. Sanitization is removing prohibited items from the bag."},example:{title:"Example - validation approach",code:`// Example rules
// - email must be valid
// - age must be number between 13 and 120
// - name length <= 60
//
// If input fails, return 400 with a clear message:
res.status(400).json({
  error: "Validation error",
  details: [{ field: "email", message: "Invalid email" }]
});`},checklist:["Validate at the API boundary (before DB).","Use schema validators (zod, joi, yup) in real apps.","Limit payload size and string lengths.","Normalize input (trim, lowercase emails) carefully."],gotchas:["Validation is not only for security. It prevents bugs and bad data.","Sanitizing everything can break legitimate input. Use it only where required."]},{key:"headers",title:"Security headers overview",icon:e.jsx(k,{}),summary:"HTTP headers that harden browsers and reduce common attack surfaces.",bullets:["CSP - Content Security Policy reduces XSS impact by limiting script sources.","X-Content-Type-Options: nosniff prevents MIME sniffing issues.","X-Frame-Options or CSP frame-ancestors helps prevent clickjacking.","Referrer-Policy controls what referrer data is sent."],mentalModel:{title:"Mental model",text:"Security headers are seatbelts. They do not stop accidents, but they reduce damage when something goes wrong."},example:{title:"Example - practical baseline",code:`// Example style (not exact code)
// Use helmet in Express for sensible defaults:
import helmet from "helmet";
app.use(helmet());

// Add CSP carefully (can break scripts if too strict)
// Start with report-only mode where possible.`},checklist:["Use helmet in Express for baseline headers.","Add CSP gradually (start with report-only).","Ensure cookies are HttpOnly, Secure, SameSite where applicable."],gotchas:["Overly strict CSP can break your frontend. Roll out step by step.","Headers help but do not replace proper validation and auth checks."]}],[]),m=n?c.filter(r=>r.key===n):c,h=()=>{p(r=>!r),o&&l(null)},u=r=>{l(s=>s===r?null:r)};return e.jsxs(M.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${o?"open":""}`,onClick:h,"aria-expanded":o,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(j,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Security"}),e.jsx("span",{className:"sub",children:"XSS, CSRF, rate limiting, hashing, validation, and headers"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:o?e.jsxs(e.Fragment,{children:[e.jsx(S,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{})," Expand"]})}),e.jsx("span",{className:`chev ${o?"rot":""}`,children:e.jsx(d,{})})]})]}),e.jsxs("div",{className:`sectionBody ${o?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(T,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Why security is not optional"}),e.jsx("div",{className:"introSub",children:"Most real breaches happen due to basic mistakes - missing validation, weak auth, unsafe cookies, and no rate limiting. These notes focus on the most common backend security failures and how to avoid them."})]})]}),e.jsx("div",{className:"grid",children:m.map(r=>{const s=x===r.key;return e.jsxs("div",{className:`card ${s?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>u(r.key),"aria-expanded":s,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${s?"rot":""}`,children:e.jsx(d,{})})})]}),e.jsxs("div",{className:`cardBody ${s?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.bullets.map((t,a)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:t})]},`${r.key}-b-${a}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.mentalModel.title}),e.jsx("p",{className:"para",children:r.mentalModel.text})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.example.code})})]}),e.jsxs("div",{className:"block good",children:[e.jsx("div",{className:"blockTitle",children:"Quick checklist"}),e.jsx("ul",{className:"list",children:r.checklist.map((t,a)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot goodDot"}),e.jsx("span",{className:"liText",children:t})]},`${r.key}-c-${a}`))})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.gotchas.map((t,a)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot warnDot"}),e.jsx("span",{className:"liText",children:t})]},`${r.key}-g-${a}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(C,{})}),e.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",r.title," with one real example of how it can be exploited."]})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(I,{})}),e.jsx("span",{className:"closingText",children:"Security rule: validate inputs, harden cookies, rate limit auth, and never trust the client."})]})]})]})};export{P as S};
