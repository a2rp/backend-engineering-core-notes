import{c as y,r as n,j as e,h as p,F as t,o as l,P as x,b as w,p as j,q as N,s as m,t as k,y as T}from"./index-Cfj_xNHZ.js";const q={Wrapper:y.section`
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

        .quickMap {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .qmTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 10px;
            }

            .qmGrid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 12px;

                @media (width < 980px) {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }

                @media (width < 520px) {
                    grid-template-columns: 1fr;
                }
            }

            .qmCard {
                border: 1px solid var(--color-border);
                background: linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );
                border-radius: 16px;
                padding: 12px;
                box-shadow: 0 14px 30px var(--color-shadow);

                transition:
                    transform 140ms ease,
                    border-color 140ms ease;

                &:hover {
                    transform: translateY(-2px);
                    border-color: var(--color-border-light);
                }
            }

            .qmTop {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 6px;
            }

            .qmIcon {
                width: 34px;
                height: 34px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);

                svg {
                    width: 16px;
                    height: 16px;
                }
            }

            .qmIcon.good {
                background: color-mix(
                    in srgb,
                    var(--color-success) 14%,
                    transparent
                );
                color: var(--color-success);
            }

            .qmIcon.info {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    transparent
                );
                color: var(--color-primary);
            }

            .qmIcon.warn {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 14%,
                    transparent
                );
                color: var(--color-warning);
            }

            .qmIcon.bad {
                background: color-mix(
                    in srgb,
                    var(--color-error) 14%,
                    transparent
                );
                color: var(--color-error);
            }

            .qmText {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 13px;
            }

            .qmSub {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
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

            .cIcon.good {
                background: color-mix(
                    in srgb,
                    var(--color-success) 14%,
                    transparent
                );
                color: var(--color-success);
            }

            .cIcon.info {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    transparent
                );
                color: var(--color-primary);
            }

            .cIcon.warn {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 14%,
                    transparent
                );
                color: var(--color-warning);
            }

            .cIcon.bad {
                background: color-mix(
                    in srgb,
                    var(--color-error) 14%,
                    transparent
                );
                color: var(--color-error);
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
                max-height: 4200px;
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

        .codes {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .codeRow {
            display: grid;
            grid-template-columns: 130px 1fr;
            gap: 12px;
            padding: 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 620px) {
                grid-template-columns: 1fr;
            }
        }

        .codeTag {
            align-self: start;
            justify-self: start;
            padding: 8px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );

            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 0.2px;
        }

        .codeInfo {
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
        }

        .when {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mini {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .miniTitle {
            font-size: 12px;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        .miniCode {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 10px;
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

        .pit {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            padding: 10px 10px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );

            .pitIcon {
                color: var(--color-warning);
                padding-top: 2px;
                flex: 0 0 auto;
            }

            .pitText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
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
            .qmCard,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},C=()=>{const[o,h]=n.useState(!1),[u,c]=n.useState(null),g=n.useMemo(()=>[{key:"2xx",title:"2xx - Success",icon:e.jsx(p,{}),summary:"Request was received and processed successfully. Use specific codes to describe what happened.",codes:[{code:"200 OK",when:"Standard success response. Use when you return data or a normal success message.",example:`GET /users - return list of users
PUT /users/12 - return updated user`,pitfall:"Avoid using 200 for everything. If you created something, consider 201."},{code:"201 Created",when:"A new resource was created. Usually used for POST create endpoints.",example:`POST /users - created a user
Response: return created user and Location header`,pitfall:"If nothing is created, do not use 201. For async jobs, consider 202."},{code:"204 No Content",when:"Success but no response body. Common for delete or update when you do not return data.",example:`DELETE /users/12 - successfully deleted
Response body should be empty`,pitfall:"Do not send JSON body with 204. Many clients ignore it."}],keyPoints:["2xx means the request succeeded at the HTTP layer.","Pick codes that match the API action. It helps clients behave correctly.","204 is great when you do not want payload. It saves bandwidth."],shape:{title:"Typical success response shape",code:`// Example success JSON shape
{
  "ok": true,
  "data": {
    "id": "12",
    "name": "Neha"
  }
}`}},{key:"3xx",title:"3xx - Redirection",icon:e.jsx(t,{}),summary:"Client must take another action to complete the request. Common on web flows and caching.",codes:[{code:"301 Moved Permanently",when:"Resource moved permanently. Browsers and caches may remember it.",example:"GET /docs - permanently moved to /documentation",pitfall:"Be careful in APIs. Clients might cache 301 and ignore future changes."},{code:"302 Found",when:"Temporary redirect. Common in login flows.",example:"After login redirect to a dashboard page",pitfall:"For APIs, redirects are often unexpected unless you are doing web auth flows."},{code:"304 Not Modified",when:"Used with caching headers. Means client cache is still valid, so no body is sent.",example:`GET /assets with If-None-Match and ETag
Server replies 304 if unchanged`,pitfall:"You must implement caching headers correctly for 304 to make sense."}],keyPoints:["3xx is more common in browsers than pure JSON APIs.","304 is powerful for caching and performance when using ETag or If-Modified-Since."],shape:{title:"Caching example idea",code:`// Client sends
If-None-Match: "etag-value"

// Server sends if same
304 Not Modified
// no body`}},{key:"4xx",title:"4xx - Client errors",icon:e.jsx(l,{}),summary:"Client sent something wrong. The server understood the request, but cannot or will not process it.",codes:[{code:"400 Bad Request",when:"Malformed request or validation failed. Use for invalid payloads and missing required fields.",example:`POST /users with missing email
Response includes validation errors`,pitfall:"Do not use 400 for auth failures. Use 401 or 403."},{code:"401 Unauthorized",when:"Authentication is missing or invalid. Means you need to login or provide valid credentials.",example:"Missing token or invalid session cookie",pitfall:"401 is about identity. Permission issues are usually 403."},{code:"403 Forbidden",when:"Authenticated but not allowed. The identity is known but lacks permission.",example:"User logged in but tries to access admin route",pitfall:"Do not leak sensitive permission rules. Use consistent error message."},{code:"404 Not Found",when:"Resource not found. Used when ID does not exist or route is unknown.",example:"GET /users/999 where user 999 does not exist",pitfall:"For security, sometimes 404 is used instead of 403 to hide existence of a resource."},{code:"409 Conflict",when:"Request conflicts with current state. Common for unique constraint or version conflicts.",example:`POST /users with email already exists
Update conflicts with optimistic locking`,pitfall:"Avoid using 400 for conflicts. 409 makes client logic cleaner."},{code:"429 Too Many Requests",when:"Rate limit exceeded. Client is sending too many requests.",example:`Login attempts too fast
API calls exceed quota`,pitfall:"Always include Retry-After when possible."}],keyPoints:["4xx means client must change something before retrying.","400 is validation and payload issues.","401 is identity missing or invalid.","403 is identity ok but permission denied.","429 is throttling and rate limits."],shape:{title:"Recommended error response shape",code:`// Example error JSON shape
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "issue": "missing" }
    ]
  }
}`}},{key:"5xx",title:"5xx - Server errors",icon:e.jsx(x,{}),summary:"Server failed to process a valid request. Usually not the client fault. Log these with correlation IDs.",codes:[{code:"500 Internal Server Error",when:"Generic server crash or unhandled error.",example:`Unhandled exception
Database connection failed unexpectedly`,pitfall:"Do not expose stack traces to clients. Log internally."},{code:"502 Bad Gateway",when:"Upstream service or proxy returned invalid response. Common behind load balancers.",example:"Nginx received invalid response from Node server",pitfall:"Often indicates upstream crash or misconfiguration."},{code:"503 Service Unavailable",when:"Service temporarily unavailable. Maintenance or overloaded.",example:`Deploy window
Database under heavy load`,pitfall:"Return Retry-After if you know when to retry."},{code:"504 Gateway Timeout",when:"Upstream took too long to respond. Timeout between services.",example:"API gateway waited too long for backend response",pitfall:"Tune timeouts and investigate slow queries or dependency slowness."}],keyPoints:["5xx means the client request is usually fine but the server failed.","Always log 5xx with request id, user id if safe, route, and error.","If your system uses multiple services, 502 and 504 become common signals."],shape:{title:"Production logging reminder",code:`// Log with context
{
  "level": "error",
  "msg": "request failed",
  "route": "GET /users/12",
  "status": 500,
  "requestId": "req_8f2a",
  "error": "DB_TIMEOUT"
}`}}],[]),f=()=>{h(r=>!r),o&&c(null)},v=r=>{c(s=>s===r?null:r)},b=r=>r==="2xx"?"good":r==="3xx"?"info":r==="4xx"?"warn":"bad";return e.jsxs(q.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${o?"open":""}`,onClick:f,"aria-expanded":o,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(w,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Status codes"}),e.jsx("span",{className:"sub",children:"2xx success, 3xx redirect, 4xx client errors, 5xx server errors - practical API usage"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:o?e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{})," Expand"]})}),e.jsx("span",{className:`chev ${o?"rot":""}`,children:e.jsx(m,{})})]})]}),e.jsxs("div",{className:`sectionBody ${o?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(k,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Why status codes matter"}),e.jsxs("div",{className:"introSub",children:["HTTP status codes are signals for clients. When you choose them correctly, frontend logic becomes simpler, retries become safer, and debugging becomes faster.",e.jsx("br",{}),"Use clear codes for clear behavior."]})]})]}),e.jsxs("div",{className:"quickMap",children:[e.jsx("div",{className:"qmTitle",children:"Quick mapping you should remember"}),e.jsxs("div",{className:"qmGrid",children:[e.jsxs("div",{className:"qmCard",children:[e.jsxs("div",{className:"qmTop",children:[e.jsx("span",{className:"qmIcon good",children:e.jsx(p,{})}),e.jsx("span",{className:"qmText",children:"2xx - success"})]}),e.jsx("div",{className:"qmSub",children:"Client can proceed normally"})]}),e.jsxs("div",{className:"qmCard",children:[e.jsxs("div",{className:"qmTop",children:[e.jsx("span",{className:"qmIcon info",children:e.jsx(t,{})}),e.jsx("span",{className:"qmText",children:"3xx - redirect and cache"})]}),e.jsx("div",{className:"qmSub",children:"Client must take another step"})]}),e.jsxs("div",{className:"qmCard",children:[e.jsxs("div",{className:"qmTop",children:[e.jsx("span",{className:"qmIcon warn",children:e.jsx(l,{})}),e.jsx("span",{className:"qmText",children:"4xx - client error"})]}),e.jsx("div",{className:"qmSub",children:"Client must fix request"})]}),e.jsxs("div",{className:"qmCard",children:[e.jsxs("div",{className:"qmTop",children:[e.jsx("span",{className:"qmIcon bad",children:e.jsx(x,{})}),e.jsx("span",{className:"qmText",children:"5xx - server error"})]}),e.jsx("div",{className:"qmSub",children:"Server failed, log and investigate"})]})]})]}),e.jsx("div",{className:"grid",children:g.map(r=>{const s=u===r.key,d=b(r.key);return e.jsxs("div",{className:`card ${s?"open":""} ${d}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>v(r.key),"aria-expanded":s,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:`cIcon ${d}`,children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${s?"rot":""}`,children:e.jsx(m,{})})})]}),e.jsxs("div",{className:`cardBody ${s?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"When to use"}),e.jsx("div",{className:"codes",children:r.codes.map((a,i)=>e.jsxs("div",{className:"codeRow",children:[e.jsx("div",{className:"codeTag",children:a.code}),e.jsxs("div",{className:"codeInfo",children:[e.jsx("div",{className:"when",children:a.when}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"miniTitle",children:"Example"}),e.jsx("pre",{className:"miniCode",children:e.jsx("code",{children:a.example})})]}),e.jsxs("div",{className:"pit",children:[e.jsx("span",{className:"pitIcon",children:e.jsx(l,{})}),e.jsx("span",{className:"pitText",children:a.pitfall})]})]})]},`${r.key}-c-${i}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.keyPoints.map((a,i)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:a})]},`${r.key}-kp-${i}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.shape.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.shape.code})})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(t,{})}),e.jsxs("span",{className:"hintText",children:["Interview tip: Explain ",r.key," in one sentence and give 2 real examples."]})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(T,{})}),e.jsx("span",{className:"closingText",children:"Good status codes reduce bugs. They turn API behavior into predictable client behavior."})]})]})]})};export{C as S};
