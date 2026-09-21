import{c as m,G as u,r as i,j as e,u as g,v as f,w as v,f as b,x as y,p as k,q as w,s as l,t as j,o as S,F as T,y as N}from"./index-w7GzmdvE.js";import{J as C}from"./index-BHWpee_g.js";import{C as I}from"./index-BJO8E5WI.js";import{O as R}from"./index-BFQb3P5B.js";const F={Wrapper:m.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
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
                    var(--color-primary) 14%,
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
                    var(--color-primary) 86%,
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
                color-mix(in srgb, var(--color-primary) 10%, transparent),
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
                    var(--color-primary) 14%,
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

        .callout {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .callIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .callText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
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
                    var(--color-primary) 12%,
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
            background: color-mix(in srgb, var(--color-error) 10%, transparent);
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
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
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
                color-mix(in srgb, var(--color-primary) 8%, transparent)
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
                    var(--color-primary) 12%,
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
                font-weight: 700;
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
    `};function A(r){return u({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}const O=()=>{const[r,c]=i.useState(!1),[d,n]=i.useState(null),p=i.useMemo(()=>[{key:"jwt",title:"JWT - JSON Web Token",icon:e.jsx(g,{}),summary:"JWT is a signed token that carries claims about the user. It is commonly used for stateless authentication.",bullets:["JWT usually has 3 parts - header.payload.signature (Base64URL encoded).","Signature verifies integrity - if payload changes, signature validation fails.","JWT is not encryption. Anyone can read the payload if they have the token.","JWT works well when you do not want server-side sessions, but revocation becomes harder."],mentalModel:{title:"Mental model",text:"JWT is like an ID card signed by the issuer. The bouncer checks the signature to trust it. The bouncer does not need to call the issuer every time."},example:{title:"Example - access token usage",code:`// Client sends access token
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
}`},gotchas:["Do not put secrets in JWT payload. Payload is readable.","Keep access tokens short-lived to reduce damage if leaked.","Revocation is not automatic. If a token is stolen, it stays valid until expiry unless you add a blocklist or rotate keys."]},{key:"cookiesSessions",title:"Cookies and sessions",icon:e.jsx(A,{}),summary:"Sessions store auth state on the server. The browser holds a session id in a cookie. This is common for web apps.",bullets:["Session id is stored in a cookie. Server maps session id to user data.","Cookies can be HttpOnly to prevent JavaScript access and reduce XSS token theft.","SameSite helps reduce CSRF risk. Secure ensures cookie only over HTTPS.","Sessions are easy to revoke because server can delete the session anytime."],mentalModel:{title:"Mental model",text:"Session auth is like a coat check ticket. The ticket itself is useless without the coat room (server). The server can invalidate the ticket anytime."},example:{title:"Example - safe cookie flags",code:`// Set cookie for session id (example)
res.cookie("sid", sessionId, {
  httpOnly: true,
  secure: true,        // true in production (HTTPS)
  sameSite: "lax",     // "none" + secure for cross-site scenarios
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000
});

// On every request, browser auto sends cookie
// Cookie: sid=<sessionId>`},gotchas:["Cookies are sent automatically by browsers, which is why CSRF matters.","If SameSite is None, you must use Secure and handle CSRF properly.","Session storage must scale (Redis is common). Memory sessions break on multiple instances."]},{key:"oauth",title:"OAuth - Open Authorization",icon:e.jsx(f,{}),summary:"OAuth lets an app get limited access to a user account on another service without sharing the user password.",bullets:["OAuth is about authorization (access to resources), not identity by itself.","Common flow for web apps is Authorization Code flow (often with PKCE).","There are roles - Resource Owner (user), Client (your app), Authorization Server, Resource Server.","In real apps, you often combine OAuth with OIDC (OpenID Connect) for login identity claims."],mentalModel:{title:"Mental model",text:"OAuth is giving a valet key to your app. It can open some doors but not everything, and it can expire or be revoked."},example:{title:"Example - high level Authorization Code flow",code:`// 1) Redirect user to provider authorize URL
// 2) Provider redirects back with ?code=...
// 3) Server exchanges code for tokens using client credentials
// 4) Server uses access token to call provider APIs

// Important point:
// - code is short-lived
// - access token is used to call resource server
// - refresh token can mint new access tokens (if granted)`},gotchas:["Never handle OAuth tokens in a way that exposes them to XSS.","Use PKCE for public clients (SPAs and mobile apps).","Validate redirect URIs strictly to avoid token leakage."]},{key:"refreshTokens",title:"Refresh tokens",icon:e.jsx(v,{}),summary:"Refresh tokens are long-lived credentials used to mint new short-lived access tokens without forcing the user to log in again.",bullets:["Access token - short life, used on every API call.","Refresh token - longer life, used only to get a new access token.","A common pattern is rotating refresh tokens - every refresh returns a new refresh token and invalidates the old one.","Store refresh tokens more safely than access tokens. HttpOnly cookie is a common choice for web apps."],mentalModel:{title:"Mental model",text:"Access token is a visitor pass for today. Refresh token is your membership card used only at the reception desk to get a new visitor pass."},example:{title:"Example - token rotation idea",code:`// POST /auth/refresh
// - client sends refresh token (often in HttpOnly cookie)
// - server verifies it, then issues new access token
// - server also issues a new refresh token and invalidates previous one

// Why rotate?
// - If an old refresh token gets stolen, reuse can be detected and blocked`},gotchas:["If refresh token leaks, attacker can keep minting access tokens.","Do not store refresh tokens in localStorage in browser apps.","Implement logout by invalidating refresh token server-side."]},{key:"csrfSafeFlows",title:"CSRF-safe auth flows",icon:e.jsx(b,{}),summary:"CSRF - Cross Site Request Forgery happens when a browser auto-sends cookies to your site from a malicious page. Defend it if you use cookie-based auth.",bullets:["If you use Authorization header Bearer tokens, CSRF risk is lower because browser does not auto attach it.","If you use cookies for auth, add CSRF defenses.","SameSite=Lax blocks many cross-site POSTs but not all scenarios.","Common defenses - CSRF token (double submit or server stored), Origin or Referer checks, and safe cookie flags."],mentalModel:{title:"Mental model",text:"CSRF is a trick where your browser is fooled into sending a valid cookie. The attacker cannot read the response, but they can trigger state-changing requests."},example:{title:"Example - basic CSRF token pattern",code:`// 1) Server sends a CSRF token (not HttpOnly) and a session cookie (HttpOnly)
// 2) Client reads CSRF token and sends it in a header for unsafe methods

// Client: send header
// X-CSRF-Token: <token>

// Server: verify header token matches expected value for session/user
// If token missing or invalid, reject with 403`},gotchas:["Do not disable CSRF just because you have CORS. They solve different problems.","Protect state-changing routes - POST, PUT, PATCH, DELETE.","Always validate Origin where possible for browser traffic."]}],[]),x=()=>{c(o=>!o),r&&n(null)},h=o=>{n(s=>s===o?null:o)};return e.jsxs(F.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${r?"open":""}`,onClick:x,"aria-expanded":r,title:r?"Collapse section":"Expand section",children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(y,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Authentication"}),e.jsx("span",{className:"sub",children:"JWT, cookies and sessions, OAuth, refresh tokens, and CSRF-safe flows"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:r?e.jsxs(e.Fragment,{children:[e.jsx(k,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(w,{})," Expand"]})}),e.jsx("span",{className:`chev ${r?"rot":""}`,children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:`sectionBody ${r?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(j,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What authentication really means"}),e.jsx("div",{className:"introSub",children:'Authentication answers "who are you". Authorization answers "what can you do". Most backend bugs happen when tokens, cookies, and browser behavior are not understood clearly.'})]})]}),e.jsxs("div",{className:"callout",children:[e.jsx("div",{className:"callIcon",children:e.jsx(S,{})}),e.jsx("div",{className:"callText",children:"Practical rule - if you use cookies for auth, think about CSRF. If you put tokens in JavaScript storage, think about XSS."})]}),e.jsx("div",{className:"grid",children:p.map(o=>{const s=d===o.key;return e.jsxs("div",{className:`card ${s?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>h(o.key),"aria-expanded":s,title:s?"Collapse":"Expand",children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:o.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:o.title}),e.jsx("span",{className:"cSummary",children:o.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${s?"rot":""}`,children:e.jsx(l,{})})})]}),e.jsxs("div",{className:`cardBody ${s?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:o.bullets.map((a,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:a})]},`${o.key}-b-${t}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:o.mentalModel.title}),e.jsx("p",{className:"para",children:o.mentalModel.text})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:o.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:o.example.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:o.gotchas.map((a,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:a})]},`${o.key}-g-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(T,{})}),e.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",o.title," to a non-tech friend in 20 seconds."]})]})]})]},o.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(N,{})}),e.jsx("span",{className:"closingText",children:"Strong auth is mostly about safe storage, short-lived access tokens, and correct browser behavior. Fancy crypto does not save a broken flow."})]})]})]})},H=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{}),e.jsx(C,{}),e.jsx(I,{}),e.jsx(R,{})]});export{H as default};
