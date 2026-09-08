import{c as b,r as s,j as e,d as v,g as y,K as w,i as t,f as i,o as n,p as j,q as k,s as l,h as N,_ as T,X as E}from"./index-Cfj_xNHZ.js";const I={Wrapper:b.section`
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
                    var(--color-warning) 18%,
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
                max-width: 980px;
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

        .topNote {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-warning) 10%, transparent),
                transparent
            );

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
                    var(--color-warning) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .nSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            padding: 14px;
            display: grid;
            grid-template-columns: 1.05fr 0.95fr;
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            letter-spacing: 0.2px;
        }

        .cards {
            display: flex;
            flex-direction: column;
            gap: 12px;
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
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                min-width: 0;
            }

            .cIcon {
                width: 36px;
                height: 36px;
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
                width: 16px;
                height: 16px;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
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
                flex: 0 0 auto;
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
                max-height: 1400px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .list {
            padding: 12px;
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

        .note {
            margin: 0 12px 12px 12px;
            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;
            line-height: 1.5;
        }

        .examples {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .exampleCard {
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

        .exHead {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px;
            border-bottom: 1px solid var(--color-border);

            .exIcon {
                width: 36px;
                height: 36px;
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

            .exText {
                min-width: 0;
                flex: 1;
            }

            .exTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .exDesc {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .exHint {
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
                flex: 0 0 auto;
            }
        }

        .code {
            background: var(--color-code-bg);
            border-top: 1px solid var(--color-code-border);
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

        .tip {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                transparent
            );
            box-shadow: 0 16px 36px var(--color-shadow);

            padding: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            .tipIcon {
                width: 34px;
                height: 34px;
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
                flex: 0 0 auto;
            }

            .tipText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
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
            .cardBody,
            .exampleCard {
                transition: none !important;
            }
        }
    `},q=()=>{const[a,c]=s.useState(!1),[d,p]=s.useState("what"),x=s.useMemo(()=>[{key:"what",title:"What is error tracking",icon:e.jsx(v,{}),points:["Error tracking is a system that captures backend crashes and exceptions with context and groups similar errors together.","It helps you answer: what broke, where it broke, how many users are affected, and when it started.","It is not the same as console logs. Logs are raw events. Error tracking is organized incidents with grouping and alerting."],note:"Goal: turn random stack traces into actionable issues with ownership and priority."},{key:"why",title:"Why it matters in production",icon:e.jsx(y,{}),points:["Users rarely tell you the exact failure. Error tracking tells you automatically.","You can detect new regressions after a deploy by comparing error rates by release version.","It reduces time to debug because stack trace, request details, and breadcrumbs are already captured."],note:"In real teams: alert on high severity, create a ticket, fix, deploy, verify, close."},{key:"data",title:"What to capture with an error",icon:e.jsx(w,{}),points:["Error name and message.","Stack trace with file names and line numbers.","Request context: route, method, status code, request id, user id if available.","Environment and release: prod or staging, app version or git commit.","Breadcrumbs: last few important events before the crash (db call, external api call, auth step)."],note:"Do not capture secrets. Never store raw passwords, access tokens, card data, or full cookies."},{key:"flow",title:"Typical flow",icon:e.jsx(t,{}),points:["A request fails and throws an exception.","Your global error middleware catches it and reports it.","The tracker groups similar errors and increments a counter.","Alerts fire when thresholds are crossed.","You fix the bug and verify the error stops for the next release."],note:"The best flow includes correlation ids so you can jump from error to logs to traces quickly."},{key:"setup",title:"Integration pattern in Node and Express",icon:e.jsx(i,{}),points:["Install the SDK and initialize it early in the app lifecycle.","Attach request and user context safely.","Capture exceptions inside the global error handler.","Tag events with environment and release for easy filtering."],note:"Order matters: initialize before routes so it can hook into the request lifecycle."},{key:"pitfalls",title:"Common pitfalls",icon:e.jsx(n,{}),points:["Swallowing errors in try catch without reporting them.","Logging only error.message and losing stack traces.","No request id, so you cannot connect errors to logs.","Reporting too many low value errors, causing alert fatigue.","Capturing sensitive data by mistake."],note:"Alert fatigue is a silent killer. Route warnings to dashboards, page only for real incidents."}],[]),h=s.useMemo(()=>[{key:"express",title:"Example - Express error middleware",desc:"A clean pattern: keep one global error handler and report there.",code:`// app.js (conceptual)
import express from "express";

const app = express();

app.get("/api", async (req, res) => {
  // simulate failure
  throw new Error("DB connection failed");
});

// global error handler
app.use((err, req, res, next) => {
  const requestId = req.headers["x-request-id"] || "na";

  // report to error tracker here
  // captureException(err, { requestId, route: req.originalUrl, method: req.method })

  res.status(500).json({
    ok: false,
    error: {
      code: "INTERNAL_ERROR",
      message: "Something went wrong",
      requestId
    }
  });
});

export default app;`},{key:"release",title:"Example - tag release and environment",desc:"Release tags make it obvious when a bug started after a deploy.",code:`// during initialization
// initTracker({
//   environment: process.env.NODE_ENV,
//   release: process.env.APP_RELEASE || process.env.GIT_SHA
// });`},{key:"sanitize",title:"Example - sanitize sensitive fields",desc:"Remove secrets before sending any context.",code:`const sanitize = (obj) => {
  const copy = { ...obj };
  if (copy.password) copy.password = "[redacted]";
  if (copy.token) copy.token = "[redacted]";
  if (copy.authorization) copy.authorization = "[redacted]";
  return copy;
};

// captureException(err, { body: sanitize(req.body) })`}],[]),m=()=>c(r=>!r),g=r=>{p(o=>o===r?null:r)};return e.jsxs(I.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:m,"aria-expanded":a,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(n,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Error tracking"}),e.jsx("span",{className:"sub",children:"Capture, group, and alert on backend failures with context, releases, and safe metadata"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:a?e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{})," Expand"]})}),e.jsx("span",{className:`chev ${a?"rot":""}`,children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[e.jsxs("div",{className:"topNote",children:[e.jsx("span",{className:"nIcon",children:e.jsx(N,{})}),e.jsxs("div",{className:"nText",children:[e.jsx("div",{className:"nTitle",children:"What you should be able to say in an interview"}),e.jsx("div",{className:"nSub",children:'"We capture unhandled errors with request context, group them, tag by release, alert on thresholds, and fix regressions quickly without leaking secrets."'})]})]}),e.jsxs("div",{className:"layout",children:[e.jsxs("div",{className:"leftCol",children:[e.jsx("div",{className:"miniTitle",children:"Core concepts"}),e.jsx("div",{className:"cards",children:x.map(r=>{const o=d===r.key;return e.jsxs("div",{className:`card ${o?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>g(r.key),"aria-expanded":o,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsx("span",{className:"cTitle",children:r.title})]}),e.jsx("span",{className:`cChev ${o?"rot":""}`,children:e.jsx(l,{})})]}),e.jsxs("div",{className:`cardBody ${o?"show":""}`,children:[e.jsx("ul",{className:"list",children:r.points.map((u,f)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:u})]},`${r.key}-${f}`))}),e.jsx("div",{className:"note",children:r.note})]})]},r.key)})})]}),e.jsxs("div",{className:"rightCol",children:[e.jsx("div",{className:"miniTitle",children:"Examples and patterns"}),e.jsxs("div",{className:"examples",children:[h.map(r=>e.jsxs("div",{className:"exampleCard",children:[e.jsxs("div",{className:"exHead",children:[e.jsx("span",{className:"exIcon",children:e.jsx(T,{})}),e.jsxs("div",{className:"exText",children:[e.jsx("div",{className:"exTitle",children:r.title}),e.jsx("div",{className:"exDesc",children:r.desc})]}),e.jsx("span",{className:"exHint",children:e.jsx(E,{})})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.code})})]},r.key)),e.jsxs("div",{className:"tip",children:[e.jsx("span",{className:"tipIcon",children:e.jsx(i,{})}),e.jsx("div",{className:"tipText",children:"Best practice: always attach a request id and release tag. Without them, debugging becomes guesswork."})]})]})]})]}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(t,{})}),e.jsx("span",{className:"closingText",children:"Error tracking works best with structured logs and a consistent request id across services."})]})]})]})};export{q as E};
