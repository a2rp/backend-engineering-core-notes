import{c as u,r as s,j as e,i as f,n as y,a as w,k as c,f as j,M as N,h as n,O as k,p as T,q as I,s as F,t as P,o as d,F as A}from"./index-Cfj_xNHZ.js";const S={Wrapper:u.section`
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
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
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
                max-height: 8000px;
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

        .concepts {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            border-bottom: 1px solid var(--color-border);

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }

            .concept {
                border-radius: 16px;
                border: 1px solid var(--color-border);
                background: linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );
                box-shadow: 0 16px 36px var(--color-shadow);

                padding: 12px;
                display: flex;
                gap: 12px;
                align-items: flex-start;

                transition:
                    transform 160ms ease,
                    border-color 160ms ease,
                    box-shadow 160ms ease;

                &:hover {
                    transform: translateY(-2px);
                    border-color: var(--color-border-light);
                    box-shadow: 0 20px 44px var(--color-shadow);
                }

                .cIcon {
                    width: 38px;
                    height: 38px;
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

                .cTitle {
                    font-weight: 900;
                    color: var(--color-text-primary);
                    margin-bottom: 4px;
                }

                .cSub {
                    font-size: 12.5px;
                    color: var(--color-text-secondary);
                    line-height: 1.55;
                }
            }
        }

        .sectionTitle {
            padding: 14px 14px 0 14px;
            font-weight: 900;
            color: var(--color-text-primary);
            display: flex;
            flex-direction: column;
            gap: 4px;

            .sectionTitleHint {
                font-size: 12px;
                color: var(--color-text-muted);
                font-weight: 800;
            }
        }

        .strategyLayout {
            padding: 14px;
            display: grid;
            grid-template-columns: 360px 1fr;
            gap: 12px;
            border-bottom: 1px solid var(--color-border);

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .tabs {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tab {
            width: 100%;
            text-align: left;

            display: flex;
            align-items: center;
            gap: 12px;

            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            .tabIcon {
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

            .tabText {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .tabTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .tabLabel {
                font-size: 12px;
                font-weight: 900;
                color: var(--color-text-muted);
            }

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }

            &.on {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 48%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 20px 44px var(--color-shadow);
            }
        }

        .panel {
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;
        }

        .panelTop {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            display: flex;
            justify-content: space-between;
            gap: 12px;
            align-items: flex-start;

            .panelHead {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .pIcon {
                width: 44px;
                height: 44px;
                border-radius: 16px;
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

            .pTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .pSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }

            .badge {
                flex: 0 0 auto;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface) 70%,
                    transparent
                );
                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }
        }

        .panelGrid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .rulesPitfalls {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .box {
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
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .box.good {
            background: linear-gradient(
                180deg,
                color-mix(
                    in srgb,
                    var(--color-accent) 10%,
                    var(--color-surface)
                ),
                var(--color-surface-2)
            );
        }

        .box.warn {
            background: linear-gradient(
                180deg,
                color-mix(
                    in srgb,
                    var(--color-warning) 10%,
                    var(--color-surface)
                ),
                var(--color-surface-2)
            );
        }

        .boxTitle {
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            font-weight: 900;
            color: var(--color-text-primary);

            display: flex;
            align-items: center;
            gap: 10px;
        }

        .codeBox {
            margin: 0 14px 14px 14px;
        }

        .list {
            padding: 12px 14px 14px 14px;
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
            margin: 0 14px 0 14px;
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

        .tipRow {
            padding: 12px 14px 14px 14px;
            display: flex;
            align-items: center;
            gap: 10px;

            .tipIcon {
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

            .tipText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
                font-weight: 800;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
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
                    var(--color-primary) 12%,
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
            .tab,
            .box,
            .concept {
                transition: none !important;
            }
        }
    `},C=()=>{const[i,p]=s.useState(!1),[l,x]=s.useState("path"),t=s.useMemo(()=>[{key:"path",title:"Path versioning",icon:e.jsx(f,{}),label:"Most common",summary:"Put version in the URL path like /v1/users.",goodFor:["Public APIs where clarity matters","Multiple versions live together","Easy routing and caching rules"],watchOut:["Versioning every tiny change becomes messy","Some teams forget to sunset old versions"],example:{title:"Example",code:`GET /api/v1/users
POST /api/v1/orders

// When you introduce a breaking change
GET /api/v2/users`},tip:"Use v1 only for breaking changes. For non breaking changes, evolve the same version."},{key:"query",title:"Query parameter versioning",icon:e.jsx(y,{}),label:"Sometimes used",summary:"Put version in query like /users?version=1.",goodFor:["Internal APIs with controlled clients","Quick experiments"],watchOut:["Easy to misuse and hard to enforce","CDN caching can get tricky if query rules are not consistent","Feels less clean in documentation"],example:{title:"Example",code:`GET /api/users?version=1
GET /api/users?version=2`},tip:"Prefer path versioning for public APIs unless you have strong reasons."},{key:"header",title:"Header based versioning",icon:e.jsx(w,{}),label:"Advanced",summary:"Client sends version in a header like X-API-Version: 2.",goodFor:["APIs where URLs must stay stable","Some enterprise setups"],watchOut:["Harder to test from browser directly","Docs and tooling need extra care","CDN caching needs header-aware configuration"],example:{title:"Example",code:`GET /api/users
X-API-Version: 2`},tip:"Only choose this if your gateway, docs, and caching story is mature."},{key:"mediaType",title:"Media type versioning",icon:e.jsx(c,{}),label:"Strong but complex",summary:"Version via Accept header like application/vnd.company.v2+json.",goodFor:["Content negotiation heavy systems","Strict API governance teams"],watchOut:["Complex for most teams","Tooling friction and client confusion"],example:{title:"Example",code:`GET /api/users
Accept: application/vnd.backendnotes.v2+json`},tip:"If you do this, keep conventions strict and docs very clear."}],[]),m=s.useMemo(()=>[{icon:e.jsx(j,{}),title:"Breaking change",text:"A change that can break existing clients without them changing anything. Example - renaming a field, changing response shape, changing meaning of a status code."},{icon:e.jsx(N,{}),title:"Non breaking change",text:"A change that should not break old clients. Example - adding an optional field, adding a new endpoint, adding a new enum value if clients handle unknown values safely."},{icon:e.jsx(n,{}),title:"Backward compatibility",text:"New server version still works for old clients. This is a goal. Versioning is a tool when you cannot keep backward compatibility."}],[]),g=s.useMemo(()=>["Version only for breaking changes. Do not version for every small feature.","Keep old versions alive for a defined window and publish a sunset plan.","Deprecate with clear dates and communicate with clients early.","Document differences between v1 and v2 in one place, do not scatter it.","If you add fields, keep them optional and avoid changing existing meanings."],[]),h=s.useMemo(()=>["Shipping v2 without migrating clients, then keeping v1 forever","Breaking changes without version bump","Mixing versions inside one response payload","No deprecation policy and no timeline","Not testing old clients against new server behavior"],[]),b=()=>p(r=>!r),v=r=>x(r),a=t.find(r=>r.key===l)||t[0];return e.jsxs(S.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${i?"open":""}`,onClick:b,"aria-expanded":i,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(k,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Versioning"}),e.jsx("span",{className:"sub",children:"How to evolve APIs safely without breaking clients"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:i?e.jsxs(e.Fragment,{children:[e.jsx(T,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(I,{})," Expand"]})}),e.jsx("span",{className:`chev ${i?"rot":""}`,children:e.jsx(F,{})})]})]}),e.jsxs("div",{className:`sectionBody ${i?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(P,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What versioning means"}),e.jsx("div",{className:"introSub",children:"API versioning is the practice of managing breaking changes. If you cannot keep backward compatibility, you publish a new version so old clients still work while new clients move forward."})]})]}),e.jsx("div",{className:"concepts",children:m.map(r=>e.jsxs("div",{className:"concept",children:[e.jsx("div",{className:"cIcon",children:r.icon}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:r.title}),e.jsx("div",{className:"cSub",children:r.text})]})]},r.title))}),e.jsxs("div",{className:"sectionTitle",children:["Pick a strategy",e.jsx("span",{className:"sectionTitleHint",children:"Path versioning is usually the simplest and clearest."})]}),e.jsxs("div",{className:"strategyLayout",children:[e.jsx("div",{className:"tabs",role:"tablist","aria-label":"Versioning strategies",children:t.map(r=>{const o=r.key===l;return e.jsxs("button",{type:"button",role:"tab","aria-selected":o,className:`tab ${o?"on":""}`,onClick:()=>v(r.key),title:r.summary,children:[e.jsx("span",{className:"tabIcon",children:r.icon}),e.jsxs("span",{className:"tabText",children:[e.jsx("span",{className:"tabTitle",children:r.title}),e.jsx("span",{className:"tabLabel",children:r.label})]})]},r.key)})}),e.jsxs("div",{className:"panel",role:"tabpanel",children:[e.jsxs("div",{className:"panelTop",children:[e.jsxs("div",{className:"panelHead",children:[e.jsx("div",{className:"pIcon",children:a.icon}),e.jsxs("div",{className:"pText",children:[e.jsx("div",{className:"pTitle",children:a.title}),e.jsx("div",{className:"pSummary",children:a.summary})]})]}),e.jsx("div",{className:"badge",children:a.label})]}),e.jsxs("div",{className:"panelGrid",children:[e.jsxs("div",{className:"box good",children:[e.jsxs("div",{className:"boxTitle",children:[e.jsx(n,{})," Good for"]}),e.jsx("ul",{className:"list",children:a.goodFor.map((r,o)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:r})]},`g-${o}`))})]}),e.jsxs("div",{className:"box warn",children:[e.jsxs("div",{className:"boxTitle",children:[e.jsx(d,{})," Watch out"]}),e.jsx("ul",{className:"list",children:a.watchOut.map((r,o)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:r})]},`w-${o}`))})]})]}),e.jsxs("div",{className:"box codeBox",children:[e.jsx("div",{className:"boxTitle",children:a.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:a.example.code})}),e.jsxs("div",{className:"tipRow",children:[e.jsx("span",{className:"tipIcon",children:e.jsx(A,{})}),e.jsx("span",{className:"tipText",children:a.tip})]})]})]})]}),e.jsxs("div",{className:"sectionTitle",children:["Practical rules",e.jsx("span",{className:"sectionTitleHint",children:"These keep APIs stable and teams sane."})]}),e.jsxs("div",{className:"rulesPitfalls",children:[e.jsxs("div",{className:"box good",children:[e.jsxs("div",{className:"boxTitle",children:[e.jsx(n,{})," Rules to follow"]}),e.jsx("ul",{className:"list",children:g.map((r,o)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:r})]},`r-${o}`))})]}),e.jsxs("div",{className:"box warn",children:[e.jsxs("div",{className:"boxTitle",children:[e.jsx(d,{})," Common pitfalls"]}),e.jsx("ul",{className:"list",children:h.map((r,o)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:r})]},`p-${o}`))})]})]}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(c,{})}),e.jsx("span",{className:"closingText",children:'Interview line: "I version APIs only for breaking changes, keep backward compatibility by default, and always publish a clear deprecation and sunset plan."'})]})]})]})};export{C as V};
