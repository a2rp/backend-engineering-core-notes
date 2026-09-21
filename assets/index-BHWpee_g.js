import{c as f,r as s,j as e,u as d,b as w,f as p,x as k,w as j,o as x,h as i,s as N,Q as T}from"./index-w7GzmdvE.js";const S={Wrapper:f.section`
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
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
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
                flex: 0 0 auto;
                display: inline-flex;
                align-items: center;
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

        .topBar {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 8%, transparent),
                transparent
            );
        }

        .hint {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 12px 24px var(--color-shadow);
            margin-bottom: 12px;

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
                font-weight: 700;
                line-height: 1.45;
            }
        }

        .tabs {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tab {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .tIcon {
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

            .tText {
                font-size: 12.5px;
                font-weight: 900;
                color: var(--color-text-secondary);
                white-space: nowrap;
            }

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:active {
                transform: translateY(0px);
            }

            &.active {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 46%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 14%,
                            transparent
                        ),
                    0 14px 28px var(--color-shadow);

                .tText {
                    color: var(--color-text-primary);
                }
            }
        }

        .panel {
            padding: 14px;
        }

        .empty {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);

            .emptyTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 6px;
            }

            .emptySub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .content {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
        }

        .panelHeader {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: radial-gradient(
                700px 220px at 18% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 66%
            );

            .phLeft {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .phIcon {
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

            .phTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 2px;
            }

            .phSub {
                font-size: 12.5px;
                color: var(--color-text-muted);
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

        .block.note {
            background: color-mix(in srgb, var(--color-accent) 8%, transparent);
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 9%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-weight: 700;
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

        .codeTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .copyBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:active {
                transform: translateY(0px);
            }

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }
        }

        .code {
            margin-top: 10px;
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

        .qna {
            padding: 14px;
            border-top: 1px solid var(--color-border);
        }

        .qnaTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
        }

        .qnaGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .qnaCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }
        }

        .qTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 6px;
        }

        .qIcon {
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

        .qQ {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .qA {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.55;
            font-weight: 700;
        }

        .bottomTip {
            margin: 0 14px 14px 14px;
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

            .btIcon {
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

            .btText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .tab,
            .qnaCard,
            .copyBtn {
                transition: none !important;
            }
        }
    `},J=()=>{const[t,h]=s.useState(!1),[l,m]=s.useState("basics"),[g,n]=s.useState(""),c=s.useMemo(()=>[{key:"basics",title:"What JWT is",icon:e.jsx(d,{}),points:["JWT means JSON Web Token","A JWT is a compact string that represents claims (data) signed by a server","Client sends the token on every request to prove identity","JWT is usually used as an access token (short lived)"],note:{title:"One line definition",text:"JWT is a signed token that lets the server trust the data inside without storing session state in memory."}},{key:"structure",title:"Token structure",icon:e.jsx(w,{}),points:["JWT has 3 parts separated by dots","Header - algorithm info like HS256 or RS256","Payload - claims like userId, role, exp (expiry time)","Signature - proves the token was created by someone who has the secret or private key"],codeTitle:"Example shape",code:`header.payload.signature

// header example (base64url JSON)
{
  "alg": "HS256",
  "typ": "JWT"
}

// payload example (base64url JSON)
{
  "sub": "user_123",
  "role": "ADMIN",
  "iat": 1710000000,
  "exp": 1710003600
}

// signature = sign(base64url(header) + "." + base64url(payload))`},{key:"howItWorks",title:"How JWT auth works",icon:e.jsx(p,{}),points:["User logs in with username and password","Server verifies password and issues an access token (JWT)","Client stores token (cookie or memory) and sends it on requests","Server verifies signature and checks expiry before trusting claims"],note:{title:"Important detail",text:"The server must verify the signature on every request. Never trust payload data without signature verification."}},{key:"security",title:"Security rules that matter",icon:e.jsx(k,{}),points:["Always validate exp and iat, and reject expired tokens","Keep access tokens short lived to reduce damage if stolen","Do not put secrets in payload - payload is readable by anyone holding the token","Prefer HttpOnly cookies for browser apps to reduce XSS token theft risk","Use HTTPS in production so tokens are not sniffed on the network"],warn:{title:"Common mistake",text:"Storing JWT in localStorage makes it easy to steal with XSS. Cookies with HttpOnly are often safer for web apps."}},{key:"refresh",title:"Refresh token concept",icon:e.jsx(j,{}),points:["Access token - short lived JWT used for most API calls","Refresh token - longer lived token used to get a new access token","Refresh token should be stored more securely than access token (often HttpOnly cookie)","On logout or compromise, refresh tokens should be invalidated server side"],note:{title:"Why refresh exists",text:"If access tokens are short lived, users stay logged in using refresh tokens without re-entering password."}},{key:"pitfalls",title:"Pitfalls and interview traps",icon:e.jsx(x,{}),points:["JWT is not encryption - it is signing. Payload is readable.","Stateless does not mean revocation is free. Revoking JWT needs strategy (short expiry, token versioning, blacklist, or refresh token storage).","Do not accept alg as none. Enforce allowed algorithms in your verification library.","Do not mix keys - HS256 uses a shared secret, RS256 uses public and private keys."],note:{title:"Interview ready line",text:"JWT helps reduce server session storage, but revocation and rotation still need careful design."}}],[]),b=s.useMemo(()=>[{q:"JWT full form",a:"JSON Web Token",icon:e.jsx(i,{})},{q:"JWT provides confidentiality",a:"No - JWT payload is readable. It provides integrity via signature.",icon:e.jsx(i,{})},{q:"Best place to store JWT in browser",a:"Often HttpOnly cookie for security. Avoid localStorage for sensitive tokens.",icon:e.jsx(i,{})},{q:"Why short lived access token",a:"Limits damage if token is stolen.",icon:e.jsx(i,{})}],[]),v=()=>{h(r=>!r)},u=r=>{m(a=>a===r?"":r)},y=async(r,a)=>{try{await navigator.clipboard.writeText(r),n(a),window.setTimeout(()=>n(""),900)}catch{n("")}},o=c.find(r=>r.key===l);return e.jsxs(S.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${t?"open":""}`,onClick:v,"aria-expanded":t,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(d,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"JWT"}),e.jsx("span",{className:"sub",children:"JSON Web Token - signing, expiry, storage choices, refresh flow, and common traps"})]})]}),e.jsx("span",{className:"right",children:e.jsx("span",{className:`chev ${t?"rot":""}`,children:e.jsx(N,{})})})]}),e.jsxs("div",{className:`sectionBody ${t?"show":""}`,children:[e.jsxs("div",{className:"topBar",children:[e.jsxs("div",{className:"hint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(p,{})}),e.jsx("span",{className:"hintText",children:"Focus on: signature verification, expiry, storage, and revocation strategy."})]}),e.jsx("div",{className:"tabs",role:"tablist","aria-label":"JWT sections",children:c.map(r=>{const a=l===r.key;return e.jsxs("button",{type:"button",role:"tab","aria-selected":a,className:`tab ${a?"active":""}`,onClick:()=>u(r.key),title:r.title,children:[e.jsx("span",{className:"tIcon",children:r.icon}),e.jsx("span",{className:"tText",children:r.title})]},r.key)})})]}),e.jsx("div",{className:"panel",children:o?e.jsxs("div",{className:"content",children:[e.jsx("div",{className:"panelHeader",children:e.jsxs("div",{className:"phLeft",children:[e.jsx("span",{className:"phIcon",children:o.icon}),e.jsxs("div",{className:"phText",children:[e.jsx("div",{className:"phTitle",children:o.title}),e.jsx("div",{className:"phSub",children:"Quick, interview ready explanation and practical rules."})]})]})}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:o.points.map((r,a)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:r})]},`${o.key}-p-${a}`))})]}),o.note&&e.jsxs("div",{className:"block note",children:[e.jsx("div",{className:"blockTitle",children:o.note.title}),e.jsx("p",{className:"para",children:o.note.text})]}),o.warn&&e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:o.warn.title}),e.jsx("p",{className:"para",children:o.warn.text})]}),o.code&&e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"codeTop",children:[e.jsx("div",{className:"blockTitle",children:o.codeTitle||"Example"}),e.jsxs("button",{type:"button",className:"copyBtn",onClick:()=>y(o.code,o.key),title:"Copy code","aria-label":"Copy code",children:[e.jsx(T,{}),e.jsx("span",{className:"copyText",children:g===o.key?"Copied":"Copy"})]})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:o.code})})]})]}):e.jsxs("div",{className:"empty",children:[e.jsx("div",{className:"emptyTitle",children:"Select a section to view details"}),e.jsx("div",{className:"emptySub",children:"JWT is simple in theory, tricky in production. The sections here cover both."})]})}),e.jsxs("div",{className:"qna",children:[e.jsx("div",{className:"qnaTitle",children:"Quick Q and A"}),e.jsx("div",{className:"qnaGrid",children:b.map((r,a)=>e.jsxs("div",{className:"qnaCard",children:[e.jsxs("div",{className:"qTop",children:[e.jsx("span",{className:"qIcon",children:r.icon}),e.jsx("span",{className:"qQ",children:r.q})]}),e.jsx("div",{className:"qA",children:r.a})]},`qna-${a}`))})]}),e.jsxs("div",{className:"bottomTip",children:[e.jsx("span",{className:"btIcon",children:e.jsx(x,{})}),e.jsx("span",{className:"btText",children:"Golden rule: verify signature + check expiry on every request. JWT payload is readable, not secret."})]})]})]})};export{J};
