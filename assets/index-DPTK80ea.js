import{c as g,r as i,j as e,t as u,k as h,Y as v,X as f,Z as l,h as b,K as y,p as j,q as w,s as d,n as N,L as k,f as q}from"./index-Cfj_xNHZ.js";const I={Wrapper:g.section`
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
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topHint {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .hintIcon {
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

            .hintTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .hintSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            display: grid;
            grid-template-columns: 420px 1fr;
            gap: 14px;
            padding: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .nav {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .navItem {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

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
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .nIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nIcon svg {
                width: 18px;
                height: 18px;
            }

            .nText {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding-top: 2px;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .nSub {
                font-size: 12px;
                color: var(--color-text-muted);
                line-height: 1.45;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .nRight {
                flex: 0 0 auto;
                padding-top: 8px;
                color: var(--color-text-muted);
                opacity: 0.9;
            }

            &:hover {
                transform: translateY(-1px);
                border-color: var(--color-border-light);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .navItem.active {
            border-color: color-mix(
                in srgb,
                var(--color-primary) 46%,
                var(--color-border)
            );
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 18px 40px var(--color-shadow);

            .nIcon {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 16%,
                    var(--color-surface)
                );
            }
        }

        .content {
            min-width: 0;
        }

        .card {
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;
        }

        .cardHead {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .cIcon {
                width: 44px;
                height: 44px;
                border-radius: 16px;

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

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .cSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .cardBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );
            padding: 14px;

            .bTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 10px;
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

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .mini {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .mTop {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
            }

            .mIcon {
                width: 30px;
                height: 30px;
                border-radius: 12px;

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
            }

            .mTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .mText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }

            &:hover {
                transform: translateY(-1px);
                border-color: var(--color-border-light);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .cardFoot {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: flex-start;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-warning) 8%, transparent)
            );

            .fIcon {
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

            .fText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        .glossary {
            margin: 14px;
            margin-top: 0;
            border: 1px solid var(--color-border);
            border-radius: 18px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            padding: 14px;

            .gTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 10px;
            }

            .gGrid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px;

                @media (width < 720px) {
                    grid-template-columns: 1fr;
                }
            }

            .gItem {
                border: 1px solid var(--color-border);
                border-radius: 14px;
                padding: 12px;

                background: linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );

                .k {
                    font-weight: 900;
                    color: var(--color-text-primary);
                    margin-bottom: 4px;
                }

                .v {
                    font-size: 13px;
                    color: var(--color-text-secondary);
                    line-height: 1.55;
                }
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .navItem,
            .mini {
                transition: none !important;
            }
        }
    `},T=()=>{const[s,c]=i.useState(!1),[n,p]=i.useState("basics"),t=i.useMemo(()=>[{key:"basics",title:"What are structured logs",icon:e.jsx(u,{}),summary:"Structured logs are logs written as objects (usually JSON) so machines can filter, search, and alert reliably.",points:["Normal logs are free text - hard to parse consistently.","Structured logs are key-value data - easy to query and aggregate.","You can answer questions like 'show all errors for userId 42' without regex pain."],code:`// Unstructured (hard to query)
console.log("User 42 failed to pay, order 9, reason: card_declined");

// Structured (easy to query)
console.log(JSON.stringify({
  level: "error",
  msg: "payment_failed",
  userId: "42",
  orderId: "9",
  reason: "card_declined"
}));`},{key:"fields",title:"Core fields to include",icon:e.jsx(h,{}),summary:"A consistent log shape makes dashboards, alerts, and debugging fast.",points:["level - debug, info, warn, error","msg - short event name, like 'payment_failed'","ts - timestamp (ISO string) or logger adds it automatically","service - service name, like 'billing-api'","env - dev, staging, prod","requestId - correlation id for one request across logs","userId - if available, but do not log sensitive info","durationMs - for performance visibility","err - error object fields (name, message, stack) for errors"],code:`// A good baseline shape
{
  "level": "info",
  "msg": "http_request_done",
  "service": "orders-api",
  "env": "prod",
  "requestId": "req_01J...",
  "method": "GET",
  "path": "/orders/9",
  "status": 200,
  "durationMs": 18
}`},{key:"nodeExample",title:"Node.js example with requestId",icon:e.jsx(v,{}),summary:"Add a requestId at the edge, then attach it to every log in that request.",points:["Generate requestId for each request (or accept from gateway).","Put requestId in response header so clients can share it.","Log start and end with durationMs.","On errors, include requestId and error fields."],code:`import crypto from "crypto";
import express from "express";

const app = express();

const makeId = () => "req_" + crypto.randomBytes(8).toString("hex");

app.use((req, res, next) => {
  const requestId = req.header("x-request-id") || makeId();
  req.requestId = requestId;
  res.setHeader("x-request-id", requestId);

  const start = Date.now();

  console.log(JSON.stringify({
    level: "info",
    msg: "http_request_start",
    requestId,
    method: req.method,
    path: req.path
  }));

  res.on("finish", () => {
    console.log(JSON.stringify({
      level: "info",
      msg: "http_request_done",
      requestId,
      method: req.method,
      path: req.path,
      status: res.statusCode,
      durationMs: Date.now() - start
    }));
  });

  next();
});

app.get("/health", (req, res) => {
  console.log(JSON.stringify({
    level: "info",
    msg: "health_check",
    requestId: req.requestId
  }));
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  console.log(JSON.stringify({
    level: "error",
    msg: "unhandled_error",
    requestId: req.requestId,
    err: {
      name: err?.name,
      message: err?.message,
      stack: err?.stack
    }
  }));
  res.status(500).json({ error: "internal_error", requestId: req.requestId });
});

app.listen(3000);`},{key:"querying",title:"How structured logs help in production",icon:e.jsx(f,{}),summary:"They turn debugging into searching and filtering instead of guessing.",points:["Filter by requestId to see one request journey.","Group by msg to see top error types.","Track latency with durationMs percentiles.","Alert on error rate spikes for msg values like 'payment_failed'."],code:`// Example queries (conceptual)
// Find a request
requestId = "req_abc123"

// Find all errors for an endpoint
msg = "http_request_done" AND path = "/orders" AND status >= 500

// Find slow requests
msg = "http_request_done" AND durationMs > 1000`},{key:"pitfalls",title:"Common mistakes and rules",icon:e.jsx(l,{}),summary:"Structured logs are powerful, but you must be disciplined.",points:["Do not log secrets - passwords, tokens, cookies, card data, OTPs.","Keep msg stable - treat it like an event name, not a paragraph.","Avoid huge payload logs - log ids, not full objects.","Do not mix shapes randomly - keep consistent keys across services.","Use proper levels - info for normal, warn for unusual, error for failures.","In production, prefer a logger library that writes JSON and handles errors well."],code:`// Bad - leaks secrets
console.log(JSON.stringify({
  level: "info",
  msg: "login_attempt",
  email: "a@b.com",
  password: "123456"
}));

// Better - log minimal safe fields
console.log(JSON.stringify({
  level: "info",
  msg: "login_attempt",
  email: "a@b.com",
  hasPassword: true
}));`},{key:"checklist",title:"Interview ready checklist",icon:e.jsx(b,{}),summary:"Use these lines when explaining structured logs in interviews.",points:["Structured logs are machine readable key-value logs, usually JSON.","They enable filtering, aggregation, alerting, and correlation across services.","I include requestId, service, env, level, msg, and durationMs.","I avoid logging sensitive data and keep log shapes consistent."],code:`// 2 line interview answer
// Structured logs are JSON key-value logs that tools can query reliably.
// With requestId and consistent fields, debugging becomes fast search and correlation.`}],[]),x=()=>{c(r=>!r)},m=r=>{p(r)},o=t.find(r=>r.key===n)||t[0];return e.jsxs(I.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${s?"open":""}`,onClick:x,"aria-expanded":s,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(y,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Structured logs"}),e.jsx("span",{className:"sub",children:"JSON logs, consistent fields, requestId correlation, production debugging"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:s?e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(w,{})," Expand"]})}),e.jsx("span",{className:`chev ${s?"rot":""}`,children:e.jsx(d,{})})]})]}),e.jsxs("div",{className:`sectionBody ${s?"show":""}`,children:[e.jsxs("div",{className:"topHint",children:[e.jsx("div",{className:"hintIcon",children:e.jsx(N,{})}),e.jsxs("div",{className:"hintText",children:[e.jsx("div",{className:"hintTitle",children:"One rule that saves hours"}),e.jsx("div",{className:"hintSub",children:"Every request should have a requestId, and every log line for that request should include it."})]})]}),e.jsxs("div",{className:"layout",children:[e.jsx("div",{className:"nav",children:t.map(r=>{const a=r.key===n;return e.jsxs("button",{type:"button",className:`navItem ${a?"active":""}`,onClick:()=>m(r.key),"aria-current":a?"true":"false",children:[e.jsx("span",{className:"nIcon",children:r.icon}),e.jsxs("span",{className:"nText",children:[e.jsx("span",{className:"nTitle",children:r.title}),e.jsx("span",{className:"nSub",children:r.summary})]}),e.jsx("span",{className:"nRight",children:e.jsx(d,{})})]},r.key)})}),e.jsx("div",{className:"content",children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardHead",children:[e.jsx("div",{className:"cIcon",children:o.icon}),e.jsxs("div",{className:"cText",children:[e.jsx("div",{className:"cTitle",children:o.title}),e.jsx("div",{className:"cSummary",children:o.summary})]})]}),e.jsxs("div",{className:"cardBody",children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"bTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:o.points.map((r,a)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:r})]},`${o.key}-p-${a}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"bTitle",children:"Example and pattern"}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:o.code})})]}),e.jsxs("div",{className:"miniGrid",children:[e.jsxs("div",{className:"mini",children:[e.jsxs("div",{className:"mTop",children:[e.jsx("span",{className:"mIcon",children:e.jsx(k,{})}),e.jsx("span",{className:"mTitle",children:"Practical tip"})]}),e.jsx("div",{className:"mText",children:"Prefer a JSON logger in production (pino, winston) so logs are valid JSON and include timestamps and error serializers."})]}),e.jsxs("div",{className:"mini",children:[e.jsxs("div",{className:"mTop",children:[e.jsx("span",{className:"mIcon",children:e.jsx(q,{})}),e.jsx("span",{className:"mTitle",children:"Security tip"})]}),e.jsx("div",{className:"mText",children:"Never log secrets - redact headers like Authorization, cookies, and payment data. Log ids, not payloads."})]})]})]}),e.jsxs("div",{className:"cardFoot",children:[e.jsx("span",{className:"fIcon",children:e.jsx(l,{})}),e.jsx("span",{className:"fText",children:"If logs are unstructured, on-call becomes guesswork. Structured logs turn on-call into search and filters."})]})]})})]}),e.jsxs("div",{className:"glossary",children:[e.jsx("div",{className:"gTitle",children:"Mini glossary"}),e.jsxs("div",{className:"gGrid",children:[e.jsxs("div",{className:"gItem",children:[e.jsx("div",{className:"k",children:"requestId"}),e.jsx("div",{className:"v",children:"A unique id for one request, used to correlate logs."})]}),e.jsxs("div",{className:"gItem",children:[e.jsx("div",{className:"k",children:"correlation"}),e.jsx("div",{className:"v",children:"Linking logs across services using requestId or trace id."})]}),e.jsxs("div",{className:"gItem",children:[e.jsx("div",{className:"k",children:"log level"}),e.jsx("div",{className:"v",children:"Severity of a log - debug, info, warn, error."})]}),e.jsxs("div",{className:"gItem",children:[e.jsx("div",{className:"k",children:"msg"}),e.jsx("div",{className:"v",children:'Short stable event name, like "payment_failed".'})]})]})]})]})]})};export{T as S};
