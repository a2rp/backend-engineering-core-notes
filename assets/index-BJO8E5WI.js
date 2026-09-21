import{c as y,r as t,j as e,u as f,f as c,x as d,o as k,P as w,h as j,n as N,s as p,t as S,Q as C}from"./index-w7GzmdvE.js";const T={Wrapper:y.section`
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

            .statePill {
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

            .statePill svg {
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
                max-height: 6000px;
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
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
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

        .kv {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .kvRow {
                display: grid;
                grid-template-columns: 160px 1fr;
                gap: 12px;

                padding: 10px 12px;
                border-radius: 14px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                @media (width < 520px) {
                    grid-template-columns: 1fr;
                }
            }

            .k {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .v {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .codeWrap {
            position: relative;
        }

        .copyBtn {
            position: absolute;
            top: 10px;
            right: 10px;

            display: inline-flex;
            align-items: center;
            gap: 8px;

            padding: 8px 10px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 86%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;

            box-shadow: 0 12px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            padding-top: 46px;
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
    `},R=()=>{const[a,x]=t.useState(!1),[m,n]=t.useState(null),[h,l]=t.useState(null),u=t.useMemo(()=>[{key:"basics",title:"Cookies basics",icon:e.jsx(f,{}),summary:"A cookie is a small key-value text stored by the browser and automatically sent to the server on matching requests.",points:["Cookies are attached to HTTP requests by the browser when domain and path rules match.","Cookies are often used for sessions, preferences, and feature flags.","Cookies are not private storage. Treat them as client controlled unless protected by HttpOnly and server validation."],mentalModel:{title:"Mental model",text:"Cookie is like a badge your browser shows at the door of your server on every request to prove continuity."},code:{title:"Example - Set cookie from server",snippet:`// Express example
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
});`}},{key:"cookieAttrs",title:"Cookie attributes that matter",icon:e.jsx(c,{}),summary:"Attributes decide when cookies are sent and how exposed they are to JavaScript and cross-site requests.",table:[{k:"HttpOnly",v:"JavaScript cannot read the cookie. Helps reduce XSS theft of session cookies."},{k:"Secure",v:"Cookie only sent over HTTPS. Required for SameSite=None in modern browsers."},{k:"SameSite",v:"Controls cross-site sending. Lax is common. None allows third-party usage but needs Secure."},{k:"Domain",v:"Which domain can receive it. Be careful with broad domains like .example.com."},{k:"Path",v:"Which URL paths send it. Use '/' for site-wide, or scope tighter when possible."},{k:"Expires or Max-Age",v:"How long the cookie lives. Session cookies disappear when browser closes."}],mentalModel:{title:"Mental model",text:"Attributes are the rules printed on the badge. Who can see it, where it works, and when it expires."},code:{title:"Example - Safe defaults for auth cookie",snippet:`res.cookie("sid", sid, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
  maxAge: 1000 * 60 * 60 * 24 * 7
});`}},{key:"sessions",title:"Cookies and sessions",icon:e.jsx(d,{}),summary:"Most production auth uses a session id in a cookie, and session data stored on the server or a shared store.",points:["Cookie stores only a session id. Actual user session state lives server-side (database or Redis).","Server validates sid, loads session, attaches user to request, and continues.","This approach supports instant logout by deleting session server-side."],mentalModel:{title:"Mental model",text:"Cookie holds a ticket number. The real ticket details live in the server counter system."},code:{title:"Example - Session flow in 5 lines",snippet:`// Request arrives with Cookie: sid=abc
// 1) Read sid
// 2) Lookup session in store (Redis or DB)
// 3) If valid, attach req.user
// 4) Continue route logic
// 5) If invalid, respond 401`}},{key:"csrf",title:"CSRF and cookie auth",icon:e.jsx(k,{}),summary:"Cookie based auth is vulnerable to CSRF because the browser can send cookies automatically on cross-site requests.",points:["CSRF happens when a victim is logged in and a malicious site triggers a state-changing request.","SameSite=Lax blocks many cases, but not all scenarios and not all legacy clients.","For high risk actions, use CSRF tokens or double submit tokens, plus proper SameSite policy."],mentalModel:{title:"Mental model",text:"CSRF is a trick that makes your browser show your badge to the wrong action without you noticing."},code:{title:"Example - Double submit token idea",snippet:`// 1) Server sets two cookies:
// - sid (HttpOnly) session cookie
// - csrfToken (not HttpOnly) readable by JS
// 2) Frontend sends csrfToken in header:
//   X-CSRF-Token: <csrfToken_cookie_value>
// 3) Server verifies header matches csrfToken cookie`}},{key:"pitfalls",title:"Common pitfalls",icon:e.jsx(w,{}),summary:"Most cookie bugs are misconfigurations: wrong SameSite, missing Secure, or domain and path mistakes.",pitfalls:["SameSite=None without Secure breaks in modern browsers.","Using broad Domain shares auth across subdomains unexpectedly.","Not setting path correctly can cause multiple cookies with same name but different paths.","Assuming cookies are private. Anything not HttpOnly can be read by scripts.","For cross-origin frontend, you must enable credentials on both client and server."],code:{title:"Example - Cross origin cookie checklist",snippet:`// Frontend request
fetch("https://api.example.com/me", {
  credentials: "include"
});

// Backend headers
// Access-Control-Allow-Credentials: true
// Access-Control-Allow-Origin: https://app.example.com
// Set-Cookie must include Secure for HTTPS and correct SameSite`}}],[]),g=()=>{x(o=>!o),a&&n(null)},b=o=>{n(r=>r===o?null:o)},v=async(o,r)=>{try{await navigator.clipboard.writeText(o),l(r),window.setTimeout(()=>l(null),900)}catch{}};return e.jsxs(T.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:g,"aria-expanded":a,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(d,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Cookies"}),e.jsx("span",{className:"sub",children:"Cookie auth, session patterns, attributes, and CSRF safety"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"statePill",children:a?e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Open"]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{})," Closed"]})}),e.jsx("span",{className:`chev ${a?"rot":""}`,children:e.jsx(p,{})})]})]}),e.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(S,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What to remember"}),e.jsx("div",{className:"introSub",children:"Cookies are powerful because the browser sends them automatically. That power also creates risks. Know attributes, session flow, and CSRF protection."})]})]}),e.jsx("div",{className:"grid",children:u.map(o=>{const r=m===o.key;return e.jsxs("div",{className:`card ${r?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>b(o.key),"aria-expanded":r,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:o.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:o.title}),e.jsx("span",{className:"cSummary",children:o.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${r?"rot":""}`,children:e.jsx(p,{})})})]}),e.jsxs("div",{className:`cardBody ${r?"show":""}`,children:[o.points&&e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:o.points.map((s,i)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${o.key}-p-${i}`))})]}),o.table&&e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Attributes cheat sheet"}),e.jsx("div",{className:"kv",children:o.table.map(s=>e.jsxs("div",{className:"kvRow",children:[e.jsx("div",{className:"k",children:s.k}),e.jsx("div",{className:"v",children:s.v})]},`${o.key}-${s.k}`))})]}),o.mentalModel&&e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:o.mentalModel.title}),e.jsx("p",{className:"para",children:o.mentalModel.text})]}),o.pitfalls&&e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Pitfalls"}),e.jsx("ul",{className:"list",children:o.pitfalls.map((s,i)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${o.key}-g-${i}`))})]}),o.code&&e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:o.code.title}),e.jsxs("div",{className:"codeWrap",children:[e.jsxs("button",{type:"button",className:"copyBtn",onClick:()=>v(o.code.snippet,o.key),title:"Copy code","aria-label":"Copy code",children:[e.jsx(C,{}),h===o.key?"Copied":"Copy"]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:o.code.snippet})})]})]})]})]},o.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(c,{})}),e.jsx("span",{className:"closingText",children:"Best practice for auth cookies - HttpOnly + Secure + SameSite=Lax, plus CSRF tokens for sensitive actions."})]})]})]})};export{R as C};
