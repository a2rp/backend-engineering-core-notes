import{c as h,r as i,j as e,i as u,k as g,l as b,m as f,n as v,o as y,a as w,b as j,p as k,q as T,s as l,t as N,F as E,h as A}from"./index-Cfj_xNHZ.js";import{R as S}from"./index-CPbqab6D.js";import{V as I}from"./index-DjBcsDY9.js";import{S as F}from"./index-B1pgu7FE.js";const C={Wrapper:h.section`
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
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
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
                border-color: var(--color-border-light);
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
                max-height: 2400px;
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
    `},R=()=>{const[s,c]=i.useState(!1),[d,n]=i.useState(null),p=i.useMemo(()=>[{key:"restPrinciples",title:"REST principles",icon:e.jsx(u,{}),summary:"REST is an architectural style for designing APIs around resources with predictable URLs, methods, and responses.",bullets:["Resource based URLs - use nouns, not verbs. Example - /users, /orders, /products","HTTP methods express intent - GET read, POST create, PUT replace, PATCH partial update, DELETE remove","Statelessness - each request should contain enough info to be processed without server remembering previous requests","Representation - client and server exchange representations like JSON, not database rows","Consistency is more important than being clever - predictable APIs scale better across teams"],mentalModel:{title:"Mental model",text:"A REST API is like a structured library. Shelves are resources, and HTTP methods are actions you can perform on those shelves."},example:{title:"Example - good resource naming",code:`// Good
GET    /users
GET    /users/42
POST   /users
PATCH  /users/42
DELETE /users/42

// Avoid verbs in paths
// Bad
POST /createUser
GET  /getUsers`},gotchas:["Do not mix naming styles. Pick one and stay consistent.","Avoid deeply nested resources unless it truly represents ownership."]},{key:"resourceNaming",title:"Resource naming",icon:e.jsx(g,{}),summary:"Resource naming is about clean, stable URLs that represent things, not actions.",bullets:["Use plural nouns for collections - /users, /orders","Use IDs for single resources - /users/42","Use hyphens in multi-word segments - /payment-methods","For relationships, use nesting only when the child cannot exist without the parent - /users/42/orders","Use query params for modifiers like filter, sort, pagination - keep path stable"],mentalModel:{title:"Mental model",text:"A path should answer - what is this thing. Query params answer - how do you want it."},example:{title:"Example - nesting vs query params",code:`// Child depends on parent, nesting is OK
GET /users/42/orders

// If orders are global, prefer query params
GET /orders?userId=42`},gotchas:["Over-nesting makes URLs unreadable and hard to maintain."]},{key:"paginationFiltering",title:"Pagination and filtering",icon:e.jsx(b,{}),summary:"Pagination prevents huge responses. Filtering lets clients ask for a subset of data without extra endpoints.",bullets:["Offset pagination - page and limit. Simple but can be slow on large datasets and can shift with new inserts","Cursor pagination - use a stable cursor like createdAt or id. Better for large lists and infinite scroll","Filtering with query params - status, date ranges, search terms","Return metadata - total count (optional), next cursor, hasMore","Always validate pagination inputs to prevent abuse - max limit and sane defaults"],mentalModel:{title:"Mental model",text:"Pagination is like reading a book in pages. Filtering is choosing only chapters you care about."},example:{title:"Example - common patterns",code:`// Offset pagination
GET /users?page=2&limit=20

// Cursor pagination
GET /users?cursor=2026-03-01T00:00:00.000Z&limit=20

// Filtering
GET /orders?status=delivered&minTotal=500`},gotchas:["Never allow limit=100000. Put a hard max like 50 or 100.","Cursor must be stable and indexed for speed."]},{key:"sortingSearching",title:"Sorting and searching",icon:e.jsx(f,{}),summary:"Sorting is ordering results. Searching is matching text or fields, often using partial matches.",bullets:["Sorting with sort and order params. Example - sort=createdAt and order=desc","Allow a safe set of sortable fields to prevent SQL injection style issues or heavy queries","Searching can be simple - q=term - or advanced with field specific filters","For full-text search at scale, use search engines or DB full-text features","Always define how search behaves - case sensitivity, partial match rules"],mentalModel:{title:"Mental model",text:"Sorting chooses the order of items you already selected. Searching changes which items are selected."},example:{title:"Example - sorting and searching",code:`GET /products?sort=price&order=asc
GET /products?q=wireless%20mouse
GET /products?brand=logitech&q=mouse&sort=rating&order=desc`},gotchas:["Do not let clients sort by any field without validation.","Search queries can be expensive. Add rate limiting and caching."]},{key:"statusCodes",title:"Status codes",icon:e.jsx(v,{}),summary:"Status codes communicate what happened. They are not decoration. Clients use them for logic and error handling.",bullets:["200 OK - successful request","201 Created - resource created (often returns the new resource or location)","204 No Content - success with no body (common for delete)","400 Bad Request - validation error or malformed input","401 Unauthorized - missing or invalid auth","403 Forbidden - authenticated but not allowed","404 Not Found - resource does not exist","409 Conflict - duplicate or conflicting update","422 Unprocessable Entity - validation style errors (some teams use 400 instead, consistency matters)","429 Too Many Requests - rate limited","500 Internal Server Error - server failure"],mentalModel:{title:"Mental model",text:"Status codes are like traffic signals for clients. They tell the client what to do next without reading human text."},example:{title:"Example - practical responses",code:`// Create user
201 Created
{
  "id": "u_42",
  "name": "Neha"
}

// Invalid input
400 Bad Request
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "email is required",
    "fields": { "email": "required" }
  }
}`},gotchas:["Do not return 200 for everything. Use correct codes.","Do not leak internal error details in 500 responses."]},{key:"errorShape",title:"Error response shape",icon:e.jsx(y,{}),summary:"A consistent error shape makes debugging easier and improves client reliability.",bullets:["Always return an error object with code and message","Include requestId or correlationId so logs can be searched","For validation errors, include field wise details","Avoid leaking stack traces or internal DB errors","Keep messages user safe and developer useful"],mentalModel:{title:"Mental model",text:"Errors are part of your API contract. A stable error shape is as important as a stable success response."},example:{title:"Example - recommended error format",code:`{
  "error": {
    "code": "AUTH_REQUIRED",
    "message": "Login required",
    "requestId": "req_9f2c"
  }
}`},gotchas:["If clients cannot rely on error shape, they will implement messy workarounds."]},{key:"versioning",title:"Versioning strategies",icon:e.jsx(w,{}),summary:"Versioning prevents breaking existing clients. The best version is the one you rarely need because you designed your API carefully.",bullets:["Path versioning - /v1/users. Simple and common.","Header versioning - Accept: application/vnd.app.v1+json. More strict, less visible.","Query param versioning - /users?version=1. Usually not preferred but used sometimes.","Avoid breaking changes - add fields, do not remove or rename without a new version.","Deprecate gracefully - support old versions for a window and communicate timeline."],mentalModel:{title:"Mental model",text:"Versioning is like releasing a new remote control layout. Old TVs should still work until users upgrade."},example:{title:"Example - safe evolution",code:`// v1 response
{ "id": "u1", "name": "Ashish" }

// v2 adds fields without breaking old clients
{ "id": "u1", "name": "Ashish", "role": "admin" }`},gotchas:["Do not version for every tiny change. Version only for breaking changes.","Avoid removing fields. Mark them deprecated and keep them for a while."]}],[]),m=()=>{c(r=>!r),s&&n(null)},x=r=>{n(o=>o===r?null:r)};return e.jsxs(C.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${s?"open":""}`,onClick:m,"aria-expanded":s,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(j,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"API design"}),e.jsx("span",{className:"sub",children:"REST, naming, pagination, sorting, status codes, errors, versioning"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:s?e.jsxs(e.Fragment,{children:[e.jsx(k,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{})," Expand"]})}),e.jsx("span",{className:`chev ${s?"rot":""}`,children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:`sectionBody ${s?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(N,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What great API design is"}),e.jsx("div",{className:"introSub",children:"A great API is predictable, consistent, and safe under real-world usage. It should be easy to consume, hard to misuse, and stable over time."})]})]}),e.jsx("div",{className:"grid",children:p.map(r=>{const o=d===r.key;return e.jsxs("div",{className:`card ${o?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>x(r.key),"aria-expanded":o,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${o?"rot":""}`,children:e.jsx(l,{})})})]}),e.jsxs("div",{className:`cardBody ${o?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.bullets.map((a,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:a})]},`${r.key}-b-${t}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.mentalModel.title}),e.jsx("p",{className:"para",children:r.mentalModel.text})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.example.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.gotchas.map((a,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:a})]},`${r.key}-g-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(E,{})}),e.jsx("span",{className:"hintText",children:"Revision tip: Say the best status codes for create, update, delete, and validation errors."})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(A,{})}),e.jsx("span",{className:"closingText",children:"Consistency beats perfection. A predictable API is easier to scale, test, secure, and maintain."})]})]})]})},D=()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(S,{}),e.jsx(I,{}),e.jsx(F,{})]});export{D as default};
