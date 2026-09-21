import{c as u,r as i,j as e,a as g,E as y,i as b,v as l,D as f,f as v,h as w,o as j,b as k,p as T,q as N,s as c,t as S,L as C}from"./index-BfYXeRa6.js";const I={Wrapper:u.section`
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
    `},E=()=>{const[a,d]=i.useState(!1),[p,n]=i.useState(null),x=i.useMemo(()=>[{key:"clientServer",title:"Client and server separation",icon:e.jsx(g,{}),summary:"Frontend and backend have separate responsibilities. The client requests, the server responds. Both can evolve independently.",points:["Client handles UI and user interactions.","Server owns data, rules, validation, and persistence.","This separation lets you change UI without changing the API contract, and scale server separately."],mentalModel:"Client is the shopper. Server is the store. Shopper asks, store decides and returns.",example:`GET /users/42
200 OK
{
  "id": 42,
  "name": "Neha"
}`,pitfalls:["Do not let UI concerns leak into API design.","Do not return HTML pages from JSON APIs unless it is intentional."]},{key:"stateless",title:"Stateless requests",icon:e.jsx(y,{}),summary:"Each request should contain everything needed to understand it. The server should not depend on previous requests to process the current one.",points:["Auth info is sent with every request, like cookie or Authorization header.","Scaling is easier because any server instance can handle any request.","Stateless does not mean no sessions. It means the server should not keep hidden conversational state per request flow."],mentalModel:"Every request is a fresh form you submit. The server reads that form and responds. No memory games.",example:`GET /orders?status=pending&page=2
Authorization: Bearer <token>

200 OK
{
  "page": 2,
  "items": [...]
}`,pitfalls:["Server memory based state breaks horizontal scaling.","Hidden state makes bugs hard to reproduce."]},{key:"resourceBased",title:"Resources, not actions",icon:e.jsx(b,{}),summary:"REST is about resources. Use nouns in URLs. Use HTTP methods for actions.",points:["Use /users, /orders, /products as resources.","Use methods - GET read, POST create, PUT replace, PATCH update, DELETE remove.","Avoid verbs in URL like /getUsers or /createOrder."],mentalModel:"URL names the thing. HTTP method describes what you want to do with the thing.",example:`POST /orders
{
  "productId": 10,
  "qty": 2
}

201 Created
{
  "id": 901,
  "status": "pending"
}`,pitfalls:["Do not mix verbs into URL if a method already represents the action.","Keep resource naming consistent and predictable."]},{key:"uniformInterface",title:"Uniform interface",icon:e.jsx(l,{}),summary:"A consistent, predictable interface across resources. Clients should not need special rules for each endpoint.",points:["Same patterns for pagination, filtering, sorting across endpoints.","Consistent response shape and consistent error format.","Use standard HTTP semantics - status codes, content type, headers."],mentalModel:"Like driving any car. Steering is always the wheel, not different controls per car.",example:`GET /products?page=1&limit=20&sort=-price

200 OK
{
  "items": [...],
  "page": 1,
  "limit": 20,
  "total": 240
}`,pitfalls:["Inconsistent parameter names confuse clients.","Changing response shapes randomly causes frontend breakage."]},{key:"cacheable",title:"Cacheable responses",icon:e.jsx(f,{}),summary:"Responses should declare if they can be cached. Caching improves speed and reduces server load.",points:["Safe reads like GET are often cacheable if data is not user specific.","Use Cache-Control and ETag when relevant.","Caching is not only CDN. Browser caching is also valuable."],mentalModel:"If many people ask the same question, keep the answer on the wall so you do not repeat yourself.",example:`GET /public/products

200 OK
Cache-Control: public, max-age=60
ETag: "v1-products-abc"`,pitfalls:["Do not cache private user data publicly.","If caching exists, have a plan for invalidation."]},{key:"layeredSystem",title:"Layered system",icon:e.jsx(v,{}),summary:"Clients do not need to know if they are talking to the real server or a gateway, cache, load balancer, or proxy.",points:["API gateway can handle auth, rate limits, logging.","Load balancers distribute traffic across instances.","CDN and reverse proxies can cache and compress responses."],mentalModel:"Client sees one door. Behind the door are multiple rooms that handle the work.",example:"Client -> CDN -> Load Balancer -> API Gateway -> Node API -> Database",pitfalls:["Debugging is harder if you do not add correlation IDs.","Make sure your layers forward the right headers."]},{key:"idempotency",title:"Idempotency",icon:e.jsx(w,{}),summary:"An operation is idempotent if repeating it gives the same final result. This matters for retries and reliability.",points:["GET is idempotent. Safe reads do not change state.","PUT is typically idempotent because it replaces a resource with the same state each time.","POST is usually not idempotent because it creates new resources each time, unless you add an idempotency key."],mentalModel:"Pressing elevator button again does not change the destination. That is idempotent.",example:`PUT /users/42
{
  "name": "Ashish"
}

Calling this multiple times keeps the user name as "Ashish".`,pitfalls:["Retries on POST can create duplicate orders without an idempotency strategy."]},{key:"restNotReligion",title:"REST is a style, not a religion",icon:e.jsx(j,{}),summary:"REST principles help with clarity and scale, but real systems sometimes need exceptions. Be consistent and explain the choice.",points:["Sometimes you need action endpoints like /auth/login. That is fine.","Batch operations and complex queries may not fit pure REST.","The goal is predictable API contracts, not perfect theory."],mentalModel:"Use the rules to build a readable city, not to punish yourself for one weird building.",example:`POST /auth/login
POST /reports/generate

These are acceptable when they represent processes rather than resources.`,pitfalls:["Avoid random exceptions. Document them clearly."]}],[]),h=()=>{d(r=>!r),a&&n(null)},m=r=>{n(s=>s===r?null:r)};return e.jsxs(I.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:h,"aria-expanded":a,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(k,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"REST principles"}),e.jsx("span",{className:"sub",children:"Resource thinking, statelessness, consistent contracts, caching, layers, idempotency"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:a?e.jsxs(e.Fragment,{children:[e.jsx(T,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{})," Expand"]})}),e.jsx("span",{className:`chev ${a?"rot":""}`,children:e.jsx(c,{})})]})]}),e.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(S,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What REST is trying to solve"}),e.jsx("div",{className:"introSub",children:"REST makes APIs predictable. Predictable APIs are easier to build, test, scale, and consume. Focus on clear resources, consistent patterns, and correct HTTP semantics."})]})]}),e.jsx("div",{className:"grid",children:x.map(r=>{const s=p===r.key;return e.jsxs("div",{className:`card ${s?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>m(r.key),"aria-expanded":s,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${s?"rot":""}`,children:e.jsx(c,{})})})]}),e.jsxs("div",{className:`cardBody ${s?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.points.map((o,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:o})]},`${r.key}-p-${t}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Mental model"}),e.jsx("p",{className:"para",children:r.mentalModel})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Example"}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.example})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.pitfalls.map((o,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:o})]},`${r.key}-pit-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(C,{})}),e.jsx("span",{className:"hintText",children:"Interview tip: Define REST in 2 lines and give one example of resource naming."})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(l,{})}),e.jsx("span",{className:"closingText",children:"Strong REST is mostly about consistency. Your API should feel obvious to use even without reading docs."})]})]})]})};export{E as R};
