import{c as u,r as i,j as e,g as l,K as y,n as b,o as f,X as v,f as w,y as c,b as k,p as j,q as I,s as d,t as N,F as T}from"./index-w7GzmdvE.js";const M={Wrapper:u.section`
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
                max-height: 3200px;
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
    `},S=()=>{const[o,p]=i.useState(!1),[x,n]=i.useState(null),m=i.useMemo(()=>[{key:"why",title:"Why logging and monitoring exist",icon:e.jsx(l,{}),summary:"Logs tell you what happened. Monitoring tells you what is happening. Together they make production debuggable.",bullets:["Without logs you guess. With logs you know what the code actually did.","Without monitoring you react late. With monitoring you see problems early.","In production, bugs are normal. Observability is the superpower that makes them solvable."],mentalModel:{title:"Mental model",text:"Logs are the story of past events. Monitoring is the live dashboard of system health."},example:{title:"Example - what you want to answer fast",code:`// Questions logs and monitoring should help answer
// - Which endpoint is failing right now
// - How many users are impacted
// - Is it database, cache, network, or code
// - When did it start and what changed`},gotchas:["If you only log errors, you miss the cause.","If you log everything, you drown in noise and cost."]},{key:"structuredLogs",title:"Structured logs",icon:e.jsx(y,{}),summary:"Structured logs are logs written as consistent fields, usually JSON, so machines can search, filter, and aggregate them reliably.",bullets:["A structured log has fields like level, message, requestId, userId, route, statusCode, durationMs.","Structured logs work best with log search tools because you can filter by fields.","Human readable text logs are fine for dev, but structured logs win in production."],mentalModel:{title:"Mental model",text:"A structured log is like a spreadsheet row. A plain string log is like a random sentence in a diary."},example:{title:"Example - Node style structured log",code:`// Example log object (could be JSON)
console.log(JSON.stringify({
  level: "info",
  msg: "request complete",
  requestId: "req_9f1c",
  method: "GET",
  path: "/api/users",
  statusCode: 200,
  durationMs: 37,
  ts: new Date().toISOString()
}));

// Why it helps:
// - filter by requestId
// - group by statusCode
// - average durationMs per route`},gotchas:["Do not log passwords, tokens, cookies, or secrets.","Avoid logging full request bodies blindly."]},{key:"correlationId",title:"Correlation IDs",icon:e.jsx(b,{}),summary:"A correlation ID (often called requestId) ties all logs for a single request across services so you can trace the full path.",bullets:["Generate a requestId at the edge (API gateway or first service).","Pass it through headers like x-request-id to downstream services.","Include requestId in every log line for that request."],mentalModel:{title:"Mental model",text:"Correlation ID is a tracking number for a request, like a courier shipment ID."},example:{title:"Example - simple Express middleware",code:`import crypto from "crypto";

app.use((req, res, next) => {
  const incoming = req.headers["x-request-id"];
  const requestId = incoming || crypto.randomUUID();

  req.requestId = requestId;
  res.setHeader("x-request-id", requestId);

  next();
});

// Later in route handlers:
console.log(JSON.stringify({
  level: "info",
  msg: "fetching user",
  requestId: req.requestId,
  userId: "u_123"
}));`},gotchas:["If requestId is missing, debugging distributed issues becomes painful."]},{key:"metrics",title:"Monitoring and metrics",icon:e.jsx(l,{}),summary:"Monitoring is built on metrics. Metrics are numbers over time, like request rate, error rate, and latency.",bullets:["Common API metrics: requests per second, 4xx rate, 5xx rate, p95 latency, p99 latency.","Infra metrics: CPU, memory, disk, network, database connections.","A good monitoring setup detects issues before users complain."],mentalModel:{title:"Mental model",text:"Metrics are the vital signs of your system - pulse, blood pressure, oxygen levels."},example:{title:"Example - what a useful dashboard shows",code:`// A practical dashboard usually includes
// - Traffic: requests per second per route
// - Errors: 4xx and 5xx rate
// - Latency: p50, p95, p99
// - Dependencies: DB latency, Redis hit rate
// - Saturation: CPU and memory`},gotchas:["Do not rely only on average latency. Use percentiles like p95 and p99."]},{key:"alerts",title:"Alerting",icon:e.jsx(f,{}),summary:"Alerts are rules that notify you when something abnormal happens. Alerts should be actionable, not noisy.",bullets:["Alert when users are impacted: sustained 5xx spike, high latency, failed payments.","Use thresholds and time windows to avoid false alarms.","Add runbooks: short steps that tell what to check first."],mentalModel:{title:"Mental model",text:"Alerts are smoke alarms, not decoration. If they beep too often, people ignore them."},example:{title:"Example - alert rule style",code:`// Example alert ideas
// - 5xx rate > 2% for 5 minutes
// - p95 latency > 800ms for 10 minutes
// - DB connection errors > 10 per minute
// - Queue depth growing continuously`},gotchas:["Too many alerts cause alert fatigue.","Alerts without context waste time."]},{key:"errorTracking",title:"Error tracking",icon:e.jsx(v,{}),summary:"Error tracking tools collect exceptions with stack traces, group similar errors, and show impact. This is different from logs.",bullets:["Error tracking captures stack traces and context.","It groups errors by signature so you do not chase duplicates.","It can show release version so you know which deploy introduced the error."],mentalModel:{title:"Mental model",text:"Logs are raw events. Error tracking is curated crash reports with grouping and impact."},example:{title:"Example - what error tracking should store",code:`// Typical captured context
// - error message and stack trace
// - requestId
// - route and method
// - userId (if safe)
// - environment (prod, staging)
// - release version
// - tags: region, service, instance`},gotchas:["Never send secrets to error trackers.","Sampling may be needed under high volume."]},{key:"securityLogging",title:"Security logging basics",icon:e.jsx(w,{}),summary:"Security logs help detect abuse and attacks while staying privacy safe. Log signals, not sensitive data.",bullets:["Log auth failures, rate limit hits, suspicious IP patterns, unusual user agent spikes.","Mask sensitive fields. Never store tokens or passwords.","Keep audit logs for critical actions: role change, password reset, payouts, deletions."],mentalModel:{title:"Mental model",text:"Security logs are CCTV footage. You want useful evidence, not private information leaks."},example:{title:"Example - safe audit log fields",code:`// Audit log example fields
{
  level: "warn",
  msg: "role updated",
  actorUserId: "admin_9",
  targetUserId: "u_42",
  oldRole: "employee",
  newRole: "manager",
  requestId: "req_1a2b",
  ts: "2026-03-04T07:10:00.000Z"
}`},gotchas:["Logging too much personal data can create compliance risk."]},{key:"healthChecks",title:"Health checks",icon:e.jsx(c,{}),summary:"Health checks are endpoints that prove your service is alive and ready. They are used by load balancers and orchestration.",bullets:["Liveness means process is running.","Readiness means service can handle traffic (DB reachable, migrations done).","Keep health checks fast. Avoid heavy queries."],mentalModel:{title:"Mental model",text:"Liveness is breathing. Readiness is being awake and able to work."},example:{title:"Example - typical endpoints",code:`// Common endpoints
// GET /healthz  -> liveness
// GET /readyz   -> readiness

// In a simple Node service, /healthz can return 200 always.
// /readyz can check DB connection or key dependencies.`},gotchas:["Do not make health checks slow or expensive."]}],[]),h=()=>{p(r=>!r),o&&n(null)},g=r=>{n(a=>a===r?null:r)};return e.jsxs(M.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${o?"open":""}`,onClick:h,"aria-expanded":o,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(k,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Logging and monitoring"}),e.jsx("span",{className:"sub",children:"Structured logs, correlation IDs, metrics, alerts, error tracking, and health checks"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:o?e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(I,{})," Expand"]})}),e.jsx("span",{className:`chev ${o?"rot":""}`,children:e.jsx(d,{})})]})]}),e.jsxs("div",{className:`sectionBody ${o?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(N,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Production debugging without guesswork"}),e.jsx("div",{className:"introSub",children:"Logging and monitoring are the backbone of reliable backend systems. They help you detect issues early, understand impact, and fix problems faster."})]})]}),e.jsx("div",{className:"grid",children:m.map(r=>{const a=x===r.key;return e.jsxs("div",{className:`card ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>g(r.key),"aria-expanded":a,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${a?"rot":""}`,children:e.jsx(d,{})})})]}),e.jsxs("div",{className:`cardBody ${a?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.bullets.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${r.key}-b-${t}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.mentalModel.title}),e.jsx("p",{className:"para",children:r.mentalModel.text})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.example.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.gotchas.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${r.key}-g-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(T,{})}),e.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",r.title," in 2 lines and give one real incident where it helps."]})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(c,{})}),e.jsx("span",{className:"closingText",children:"Strong backend teams treat logs and metrics as product features. If you cannot observe it, you cannot operate it."})]})]})]})};export{S as L};
