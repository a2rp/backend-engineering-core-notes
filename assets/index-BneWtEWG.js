import{c as f,r as s,j as e,t as b,y as v,P as y,h as w,x as i,f as n,o as c,s as l,L as j}from"./index-BfYXeRa6.js";const k={Wrapper:f.section`
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
                    var(--color-error) 12%,
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
                max-width: 920px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .badge {
                font-size: 12px;
                font-weight: 900;
                padding: 7px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
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

        .topNote {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-error) 10%, transparent),
                transparent
            );

            .noteIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-error) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .noteTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .noteSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
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
                    var(--color-error) 10%,
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
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .codeTitle .codeIcon {
            width: 26px;
            height: 26px;
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
                    var(--color-error) 70%,
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

        .smallNote {
            margin-top: 10px;
            font-size: 12px;
            color: var(--color-text-muted);
            line-height: 1.5;
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
    `},N=()=>{const[o,d]=s.useState(!1),[p,t]=s.useState("what"),x=s.useMemo(()=>[{key:"what",title:"What is XSS",icon:e.jsx(b,{}),summary:"XSS (Cross Site Scripting) happens when an attacker makes your site run their JavaScript in a victim's browser.",points:["The attacker does not hack the server directly - they trick the browser into executing injected script.","Impact is on users - stolen sessions, data theft, fake UI, actions performed as the user.","Root cause is untrusted input being treated as HTML or JavaScript."]},{key:"types",title:"Types of XSS",icon:e.jsx(v,{}),summary:"Same core bug, different delivery methods. Know these names for interviews.",points:["Stored XSS - payload is saved on the server (comments, profile bio) and served to many users.","Reflected XSS - payload comes from request (query string) and is reflected in response immediately.","DOM XSS - payload stays in client side code (dangerous innerHTML usage) without server changes."]},{key:"exampleBad",title:"Bad example",icon:e.jsx(y,{}),summary:"Rendering untrusted input as HTML is the classic foot-gun.",codeTitle:"Example - unsafe HTML injection",code:`// BAD - do not do this
const username = req.query.name;

// Example response that becomes dangerous:
// name=<img src=x onerror=alert(1)>

res.send(\`
  <h1>Hello \${username}</h1>
\`);`,note:"If username contains HTML or script, the browser executes it as part of the page."},{key:"exampleGood",title:"Good patterns",icon:e.jsx(w,{}),summary:"Treat all input as untrusted. Encode output and avoid HTML injection.",codeTitle:"Example - safe output encoding idea",code:`// GOOD - render as text, not HTML
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
// ' becomes &#39;`,note:"Escaping means the browser shows characters, not markup."},{key:"prevention",title:"Prevention checklist",icon:e.jsx(i,{}),summary:"Defense is layers. Use multiple controls, not one magic trick.",points:["Output encoding - escape data when inserting into HTML, attributes, URLs, JS contexts.","Avoid dangerous sinks - innerHTML, dangerouslySetInnerHTML, document.write, eval.","Use Content Security Policy (CSP) - reduces blast radius if XSS slips in.","HttpOnly cookies - prevents reading cookies via JavaScript, but does not stop all XSS damage.","Validate input - helpful, but do not rely on it alone. Output encoding is the real fix."]},{key:"csp",title:"CSP in simple words",icon:e.jsx(n,{}),summary:"CSP (Content Security Policy) tells the browser what scripts are allowed to run.",points:["You can block inline scripts by default and only allow scripts from your domains.","If an attacker injects a script tag, the browser can refuse to run it.","Start with report-only mode in production to avoid breaking your app."],codeTitle:"Example - CSP header idea",code:`// Example header (adjust for your app needs)
Content-Security-Policy:
  default-src 'self';
  script-src 'self';
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'none';`},{key:"pitfalls",title:"Common pitfalls",icon:e.jsx(c,{}),summary:"These are the traps that keep showing up in real systems.",points:["Relying only on input validation. Attackers find bypasses and contexts vary.","Escaping in the wrong context. HTML escaping is not the same as JavaScript string escaping.","Allowing inline scripts while thinking CSP is enabled.","Thinking HttpOnly alone fixes XSS. It only protects cookies from being read, not user actions."]}],[]),m=()=>{d(r=>!r),o&&t(null)},h=r=>{t(a=>a===r?null:r)};return e.jsxs(k.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${o?"open":""}`,onClick:m,"aria-expanded":o,title:o?"Collapse XSS":"Expand XSS",children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(n,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"XSS"}),e.jsx("span",{className:"sub",children:"Cross Site Scripting - how injected JavaScript runs in user browsers and how to prevent it"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"badge",children:"Security"}),e.jsx("span",{className:`chev ${o?"rot":""}`,children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:`sectionBody ${o?"show":""}`,children:[e.jsxs("div",{className:"topNote",children:[e.jsx("div",{className:"noteIcon",children:e.jsx(c,{})}),e.jsxs("div",{className:"noteText",children:[e.jsx("div",{className:"noteTitle",children:"Interview line you should remember"}),e.jsx("div",{className:"noteSub",children:"XSS is not about the server running attacker code. It is about the browser executing attacker code because untrusted data was treated as markup or script."})]})]}),e.jsx("div",{className:"grid",children:x.map(r=>{const a=p===r.key;return e.jsxs("div",{className:`card ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>h(r.key),"aria-expanded":a,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${a?"rot":""}`,children:e.jsx(l,{})})})]}),e.jsxs("div",{className:`cardBody ${a?"show":""}`,children:[r.points&&e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.points.map((u,g)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:u})]},`${r.key}-p-${g}`))})]}),r.code&&e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"blockTitle codeTitle",children:[e.jsx("span",{className:"codeIcon",children:e.jsx(j,{})}),e.jsx("span",{children:r.codeTitle})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.code})}),r.note&&e.jsx("div",{className:"smallNote",children:r.note})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(i,{})}),e.jsx("span",{className:"closingText",children:"Best practical combo - escape output, avoid HTML injection, add CSP, and keep session cookies HttpOnly."})]})]})]})};export{N as X};
