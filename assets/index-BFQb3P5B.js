import{c as u,r as i,j as e,v as g,b as f,u as l,x as v,M as y,f as b,h as w,L as k,s as c,t as j,F as N,y as S,o as A}from"./index-w7GzmdvE.js";const C={Wrapper:u.section`
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

                .pIcon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .pIcon svg {
                    width: 14px;
                    height: 14px;
                    color: color-mix(
                        in srgb,
                        var(--color-primary) 86%,
                        var(--color-text-primary)
                    );
                }
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
            flex-direction: column;
            gap: 8px;

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

            .closingWarn {
                display: inline-flex;
                align-items: center;
                gap: 8px;

                font-size: 12.5px;
                color: var(--color-text-muted);
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
    `},_=()=>{const[o,d]=i.useState(!1),[p,n]=i.useState(null),x=i.useMemo(()=>[{key:"whatIs",title:"What is OAuth",icon:e.jsx(g,{}),summary:"OAuth is an authorization framework. It lets an app access a user resource without sharing the user password with that app.",points:["OAuth is about authorization, not authentication.","OAuth gives your app a limited access token, not the user password.","Tokens can be scoped, time limited, and revoked depending on provider."],mentalModel:{title:"Mental model",text:"OAuth is like a hotel key card. You do not get the master key to the building. You get a temporary card that opens only certain doors."},example:{title:"Example scenario",code:`// You build an app that wants to read a user's Google Drive files.
// You should NOT ask for the Google password.
// Instead, you redirect the user to Google to approve access.
// Google gives your app an access token to call Google APIs.`},pitfalls:["Do not say OAuth is login by itself. OAuth is permission delegation."]},{key:"roles",title:"Core roles and terms",icon:e.jsx(f,{}),summary:"OAuth has standard roles. Knowing these terms makes every flow easy to understand.",points:["Resource Owner - the user who owns the data.","Client - your app that wants access (web app, mobile app, backend).","Authorization Server - issues tokens (Google, GitHub, etc).","Resource Server - hosts the APIs with the protected data.","Scope - what the token can access (read profile, read email)."],mentalModel:{title:"Mental model",text:"Your app asks the authorization server for permission. The resource server checks tokens before serving data."},example:{title:"Example mapping",code:`// GitHub OAuth
// Resource Owner - the GitHub user
// Authorization Server - github.com login and consent screen
// Resource Server - api.github.com
// Client - your app`},pitfalls:["Mixing up authorization server and resource server in your explanation."]},{key:"authCode",title:"Authorization Code flow",icon:e.jsx(l,{}),summary:"Most common secure flow for web apps. User approves on provider. Your app exchanges a code for tokens on the server side.",points:["Step 1 - redirect user to provider authorize endpoint with client_id and redirect_uri and scopes.","Step 2 - user logs in and approves. Provider redirects back with an authorization code.","Step 3 - your backend exchanges that code for access token using client_secret.","Step 4 - your backend calls the provider API using the access token."],mentalModel:{title:"Mental model",text:"The code is like a claim ticket. It is useless by itself unless your server exchanges it with the secret."},example:{title:"Flow sketch",code:`// Browser -> Provider
GET /authorize?response_type=code&client_id=...&redirect_uri=...&scope=...

// Provider -> Browser -> Your server redirect
GET /oauth/callback?code=...

// Server -> Provider token exchange (server-to-server)
POST /token
  grant_type=authorization_code
  code=...
  client_id=...
  client_secret=...
  redirect_uri=...`},pitfalls:["Do not exchange the code from frontend if you have a server. Keep client_secret on server only.","Always validate state to prevent CSRF style attacks on the redirect."]},{key:"pkce",title:"PKCE",icon:e.jsx(v,{}),summary:"PKCE protects public clients (mobile apps, SPAs) where you cannot safely store a client_secret.",points:["PKCE stands for Proof Key for Code Exchange.","Client creates a code_verifier and sends a derived code_challenge in the authorize request.","When exchanging the code, client must send the original code_verifier.","Even if an attacker steals the code, they cannot exchange it without the verifier."],mentalModel:{title:"Mental model",text:"PKCE adds a private proof string that only the original client knows. The code alone is not enough."},example:{title:"Flow sketch",code:`// Step 1 - client makes code_verifier and code_challenge
// Step 2 - authorize request includes code_challenge
GET /authorize?...&code_challenge=...&code_challenge_method=S256

// Step 3 - token exchange includes code_verifier
POST /token
  grant_type=authorization_code
  code=...
  code_verifier=...`},pitfalls:["Do not skip PKCE for SPAs. It is the modern baseline."]},{key:"tokens",title:"Access token and refresh token",icon:e.jsx(y,{}),summary:"Access tokens are short lived. Refresh tokens can get new access tokens without asking user to login again.",points:["Access token - used on API calls. Usually short life to reduce risk.","Refresh token - used only to get a new access token. Should be stored very carefully.","Some providers rotate refresh tokens. Old refresh token becomes invalid after use."],mentalModel:{title:"Mental model",text:"Access token is your daily pass. Refresh token is your identity proof locked in a safe, used rarely."},example:{title:"Refresh flow sketch",code:`// When access token expires
POST /token
  grant_type=refresh_token
  refresh_token=...
  client_id=...
  client_secret=...`},pitfalls:["Never put refresh tokens in localStorage for browser apps if you can avoid it.","Do not send refresh tokens to third party scripts in the page."]},{key:"security",title:"Security checklist and pitfalls",icon:e.jsx(b,{}),summary:"OAuth is secure when you implement the boring details correctly. Most failures are in the details.",points:["Always use HTTPS in production.","Validate redirect_uri and do not allow open redirect patterns.","Use state parameter and verify it on callback.","Use PKCE for public clients.","Use least privilege scopes. Ask only what you need.","Store tokens securely. Prefer httpOnly cookies for your own session."],mentalModel:{title:"Mental model",text:"OAuth is like airport security. One missing check makes the whole system weak."},example:{title:"State parameter idea",code:`// Before redirect - store state in server session
const state = crypto.randomUUID();
session.oauthState = state;

// In authorize URL
&state=state

// On callback - verify
if (req.query.state !== session.oauthState) {
  return res.status(400).send("Invalid state");
}`},pitfalls:["Missing state validation leads to login CSRF style attacks.","Allowing any redirect_uri leads to token leakage.","Using implicit flow for SPAs is outdated. Prefer auth code with PKCE."]}],[]),h=()=>{d(r=>!r),o&&n(null)},m=r=>{n(t=>t===r?null:r)};return e.jsxs(C.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${o?"open":""}`,onClick:h,"aria-expanded":o,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(l,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"OAuth"}),e.jsx("span",{className:"sub",children:"Authorization framework, flows, PKCE, tokens, and security checklist"})]})]}),e.jsxs("span",{className:"right",children:[e.jsxs("span",{className:"pill",children:[e.jsx("span",{className:"pIcon",children:o?e.jsx(w,{}):e.jsx(k,{})}),e.jsx("span",{className:"pText",children:o?"Collapse":"Expand"})]}),e.jsx("span",{className:`chev ${o?"rot":""}`,children:e.jsx(c,{})})]})]}),e.jsxs("div",{className:`sectionBody ${o?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(j,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What you should be able to explain"}),e.jsx("div",{className:"introSub",children:"Explain OAuth as authorization, name the roles, and walk through Authorization Code flow with PKCE. Then explain why state and redirect_uri validation matter."})]})]}),e.jsx("div",{className:"grid",children:x.map(r=>{const t=p===r.key;return e.jsxs("div",{className:`card ${t?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>m(r.key),"aria-expanded":t,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${t?"rot":""}`,children:e.jsx(c,{})})})]}),e.jsxs("div",{className:`cardBody ${t?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.points.map((a,s)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:a})]},`${r.key}-p-${s}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.mentalModel.title}),e.jsx("p",{className:"para",children:r.mentalModel.text})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Example"}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.example.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.pitfalls.map((a,s)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:a})]},`${r.key}-g-${s}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(N,{})}),e.jsx("span",{className:"hintText",children:"Revision tip: Say OAuth in one line, then name the roles, then explain why PKCE exists."})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(S,{})}),e.jsx("span",{className:"closingText",children:"Interview one-liner: OAuth lets a client access a resource server with scoped tokens issued by an authorization server, without sharing user passwords."}),e.jsxs("span",{className:"closingWarn",children:[e.jsx(A,{})," Always mention state and PKCE."]})]})]})]})};export{_ as O};
