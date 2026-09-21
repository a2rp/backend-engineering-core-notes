import{c as u,r as i,j as e,t as l,i as g,o as n,x as b,h as d,f,p as v,q as y,s as k,L as w}from"./index-BfYXeRa6.js";const j={Wrapper:u.section`
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
                flex: 0 0 auto;
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
                max-width: 920px;
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
                    var(--color-accent) 82%,
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
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topIntro {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-accent) 10%, transparent),
                transparent
            );
        }

        .introBadge {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 72%,
                transparent
            );

            box-shadow: 0 12px 26px var(--color-shadow);

            .bIcon {
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
                    var(--color-surface-2)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .bText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
                font-weight: 800;
            }
        }

        .tabs {
            margin-top: 12px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .tab {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            padding: 9px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .tIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 78%,
                    var(--color-text-primary)
                );
            }

            .tText {
                font-size: 12.5px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .tab.on {
            border-color: color-mix(in srgb, var(--color-accent) 50%, #fff);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                var(--color-surface)
            );

            .tText {
                color: var(--color-text-primary);
            }
        }

        .content {
            padding: 14px;
            display: grid;
            grid-template-columns: 1.25fr 0.75fr;
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

        .cardHead {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
                align-items: flex-start;
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
                var(--color-warning) 10%,
                transparent
            );
        }

        .btWithIcon {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            .btIcon {
                width: 24px;
                height: 24px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }
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
            align-items: flex-start;
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
                font-weight: 800;
            }
        }

        .side {
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .miniCard {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);
            padding: 14px;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        .miniList {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .closing {
            margin: 0 14px 14px 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 12%,
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
                    var(--color-warning) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 900;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .tab,
            .card,
            .miniCard {
                transition: none !important;
            }
        }
    `},N=()=>{const[s,x]=i.useState(!1),[c,p]=i.useState("basics"),a=i.useMemo(()=>[{key:"basics",title:"What is CSRF",icon:e.jsx(l,{}),summary:"CSRF is when a malicious site tricks a logged-in user's browser into sending an unwanted request to your site.",points:["CSRF stands for Cross Site Request Forgery.","The attacker does not steal your password. They abuse the fact that the browser automatically sends cookies.","If your auth uses cookies and your server trusts them without extra checks, a forged request can succeed."],mentalModel:{title:"Mental model",text:"Your browser is like a courier that automatically attaches your site cookies to requests. CSRF is when an attacker convinces the courier to deliver a package to your bank using your identity badge."}},{key:"attackFlow",title:"How the attack works",icon:e.jsx(g,{}),summary:"The victim is logged in, then visits an attacker page that triggers a request to the victim site.",points:["Victim logs in to your site, cookie is stored in browser.","Victim visits attacker.com while still logged in.","Attacker page triggers a request to your site, like a hidden form submit or image request.","Browser automatically sends your site cookies with that request.","If your endpoint changes state and has no CSRF protection, the action happens."],code:{title:"Example - hidden form trick",snippet:`<form action="https://your-site.com/account/email" method="POST">
  <input type="hidden" name="email" value="attacker@mail.com" />
</form>
<script>
  document.forms[0].submit();
<\/script>`}},{key:"whenItMatters",title:"When CSRF matters",icon:e.jsx(n,{}),summary:"CSRF matters for state-changing requests when auth is cookie-based.",points:["State-changing means anything that updates data, like POST, PUT, PATCH, DELETE.","GET requests should be safe and not change state. If GET changes state, it is a bug and also CSRF risk.","If you use Authorization header tokens and do not use cookies for auth, classic CSRF is much harder because browsers do not auto attach Authorization headers.","If you store tokens in cookies, you are back in CSRF territory."]},{key:"defenses",title:"How to prevent CSRF",icon:e.jsx(b,{}),summary:"Use a mix of SameSite cookies, CSRF tokens, and origin checks for strong protection.",points:["Set cookies as SameSite=Lax or SameSite=Strict where possible.","Use CSRF tokens for state-changing requests, also called synchronizer token pattern.","Validate Origin and Referer headers for browser requests as an extra defense layer.","Require a custom header like x-csrf-token for APIs used by SPAs.","Use double submit cookie pattern if you cannot store server-side CSRF token, but synchronizer token is usually clearer with sessions."],code:{title:"Example - SPA flow with CSRF token",snippet:`// 1) Server issues a CSRF token (stored server-side in session or a secure store)
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
});`}},{key:"checklist",title:"Production checklist",icon:e.jsx(d,{}),summary:"A short checklist you can apply to any backend quickly.",points:["Cookies: HttpOnly=true, Secure=true in production, SameSite=Lax or Strict when possible.","Write endpoints require CSRF token or strict Origin checks.","Do not change state in GET endpoints.","Add rate limiting on sensitive actions.","Log CSRF failures with request id or correlation id, but do not log raw tokens."],code:{title:"Example - minimal CSRF middleware idea",snippet:`// Pseudo middleware idea for cookie-session apps
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
}`}},{key:"pitfalls",title:"Common mistakes",icon:e.jsx(n,{}),summary:"These mistakes make CSRF protection look enabled but still weak.",points:["Relying only on CORS. CORS is a browser rule, not an auth control. Cookies can still be sent.","Using SameSite=None without Secure. Browsers will reject or behave unexpectedly.","Allowing state changes on GET endpoints.","Not rotating CSRF token after login or session changes.","Logging CSRF token values in server logs."]}],[]),h=()=>{x(r=>!r)},m=r=>{p(r)},o=a.find(r=>r.key===c)||a[0];return e.jsxs(j.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${s?"open":""}`,onClick:h,"aria-expanded":s,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(f,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"CSRF"}),e.jsx("span",{className:"sub",children:"Cross Site Request Forgery - cookies, attack flow, and defenses"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:s?e.jsxs(e.Fragment,{children:[e.jsx(v,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(y,{})," Expand"]})}),e.jsx("span",{className:`chev ${s?"rot":""}`,children:e.jsx(k,{})})]})]}),e.jsxs("div",{className:`sectionBody ${s?"show":""}`,children:[e.jsxs("div",{className:"topIntro",children:[e.jsxs("div",{className:"introBadge",children:[e.jsx("span",{className:"bIcon",children:e.jsx(l,{})}),e.jsx("span",{className:"bText",children:"CSRF is mainly a risk when authentication uses cookies and endpoints change state."})]}),e.jsx("div",{className:"tabs",children:a.map(r=>{const t=r.key===c;return e.jsxs("button",{type:"button",className:`tab ${t?"on":""}`,onClick:()=>m(r.key),children:[e.jsx("span",{className:"tIcon",children:r.icon}),e.jsx("span",{className:"tText",children:r.title})]},r.key)})})]}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"cardHead",children:e.jsxs("div",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:o.icon}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:o.title}),e.jsx("div",{className:"cSummary",children:o.summary})]})]})}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:o.points.map((r,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:r})]},`${o.key}-p-${t}`))})]}),o.mentalModel?e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:o.mentalModel.title}),e.jsx("p",{className:"para",children:o.mentalModel.text})]}):null,o.code?e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:e.jsxs("span",{className:"btWithIcon",children:[e.jsx("span",{className:"btIcon",children:e.jsx(w,{})}),e.jsx("span",{children:o.code.title})]})}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:o.code.snippet})})]}):null,o.key==="pitfalls"?e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Quick reminder"}),e.jsx("p",{className:"para",children:"CSRF protection should be tested using a real browser flow, because CSRF exists because browsers attach cookies automatically."})]}):null,e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(d,{})}),e.jsx("span",{className:"hintText",children:'Interview line: "CSRF is possible because browsers automatically attach cookies to cross-site requests, so we add SameSite and CSRF tokens for write endpoints."'})]})]}),e.jsxs("div",{className:"side",children:[e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Fast recall - CSRF in 3 lines"}),e.jsxs("ul",{className:"miniList",children:[e.jsx("li",{children:"- Browser auto sends cookies, attacker abuses that"}),e.jsx("li",{children:"- A forged write request can succeed if no extra validation"}),e.jsx("li",{children:"- Fix with SameSite + CSRF tokens + origin checks"})]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Typical protection combo"}),e.jsxs("ul",{className:"miniList",children:[e.jsx("li",{children:"- SameSite=Lax"}),e.jsx("li",{children:"- HttpOnly + Secure cookies"}),e.jsx("li",{children:"- x-csrf-token for writes"}),e.jsx("li",{children:"- Origin validation"})]})]}),e.jsxs("div",{className:"miniCard",children:[e.jsx("div",{className:"miniTitle",children:"Common state changes"}),e.jsxs("ul",{className:"miniList",children:[e.jsx("li",{children:"- change password"}),e.jsx("li",{children:"- update email"}),e.jsx("li",{children:"- transfer money"}),e.jsx("li",{children:"- create order"})]})]})]})]}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(n,{})}),e.jsx("span",{className:"closingText",children:"If you use cookies for auth, assume CSRF exists unless you actively prevent it."})]})]})]})};export{N as C};
