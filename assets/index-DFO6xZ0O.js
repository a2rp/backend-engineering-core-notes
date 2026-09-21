import{c as b,r as a,j as e,g as v,f as i,B as w,R as j,e as k,S as n,y as l,t as N,p as T,q as R,s as c,b as I,F as M,o as C,h as S}from"./index-w7GzmdvE.js";const A={Wrapper:b.section`
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
                max-height: 2200px;
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

        .samples {
            margin: 14px;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            overflow: hidden;

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 8%, transparent),
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .samplesTop {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .samplesIcon {
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

            .samplesTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .samplesSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .sampleGrid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .sampleCard {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
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

        .sampleHeader {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
        }

        .sampleLeft {
            display: flex;
            gap: 12px;
            min-width: 0;
        }

        .sampleIcon {
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
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;
        }

        .sampleTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 4px;
        }

        .sampleNote {
            font-size: 12.5px;
            color: var(--color-text-muted);
            line-height: 1.5;
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

        .pitfalls {
            margin: 14px;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            overflow: hidden;

            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
            box-shadow: 0 18px 44px var(--color-shadow);
        }

        .pitTop {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .pitIcon {
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
                    transparent
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .pitTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .pitSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .pitList {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dotWarn {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-warning) 88%,
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

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-success) 10%,
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
                    var(--color-success) 12%,
                    transparent
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
            .cardBody,
            .sampleCard {
                transition: none !important;
            }
        }
    `},L=()=>{const[s,d]=a.useState(!1),[p,t]=a.useState(null),x=a.useMemo(()=>[{key:"what",title:"What is rate limiting",icon:e.jsx(v,{}),summary:"A safety gate that limits how many requests a client can make in a time window.",points:["Goal - protect your API from abuse, bots, and accidental overload","It is not just security - it is also reliability and cost control","Usually applied per IP, per user, per API key, or per route"],mentalModel:"Think of it like a traffic signal for requests. It does not stop traffic forever - it controls the flow so the road does not collapse."},{key:"why",title:"Why it matters in production",icon:e.jsx(i,{}),summary:"Without it, one noisy client can slow down everyone and even crash your service.",points:["Stops brute force login attempts","Reduces spam and scraping","Prevents sudden spikes from taking down your servers","Helps keep database and downstream services stable"],mentalModel:"Rate limiting is a circuit breaker for traffic volume. You allow a safe amount and reject or slow down the rest."},{key:"responses",title:"How APIs respond",icon:e.jsx(w,{}),summary:"Use clear status codes and headers so clients know what happened and when to retry.",points:["Common status - 429 Too Many Requests","Return a stable error shape so frontend can show a proper message","Send retry hints using headers when possible"],mentalModel:"Clients are not mind readers. If you reject requests, tell them when they can retry."},{key:"strategies",title:"Common strategies",icon:e.jsx(j,{}),summary:"Different algorithms fit different traffic patterns. Choose based on fairness and burst handling.",points:["Fixed window - simplest, but allows boundary bursts","Sliding window - smoother limits, more accurate","Token bucket - allows bursts but controls average rate","Leaky bucket - smooth out traffic, steady output"],mentalModel:"Token bucket is like a wallet of tokens. Tokens refill over time. Each request spends one token."},{key:"where",title:"Where to apply it",icon:e.jsx(k,{}),summary:"Best placed at the edge first, then in your app for route level rules.",points:["Edge - CDN / load balancer / reverse proxy (fastest rejection)","App - Express middleware for per route or per user rules","Downstream - protect expensive endpoints like search and login"],mentalModel:"Reject early - do not let bad traffic reach expensive code paths."},{key:"state",title:"Where to store counters",icon:e.jsx(n,{}),summary:"In-memory works only for single instance. For multiple servers use shared storage like Redis.",points:["Single server - in-memory map can work but resets on restart","Multiple servers - need shared state (Redis is common)","Avoid database counters for high traffic limits - too slow and costly"],mentalModel:"If you have multiple servers, they must agree on counts. Redis helps them share the same truth."}],[]),m=a.useMemo(()=>[{key:"expressMemory",title:"Example - simple Express in-memory limiter",icon:e.jsx(l,{}),note:"Good for learning and small apps. Not recommended for multi-instance production.",code:`// Simple in-memory rate limiter (per IP per route)
// Limit: 10 requests per 60 seconds

const hits = new Map();

const rateLimit = (req, res, next) => {
  const ip = req.ip || "unknown";
  const key = \`\${ip}:\${req.path}\`;

  const now = Date.now();
  const windowMs = 60 * 1000;
  const limit = 10;

  const entry = hits.get(key) || { count: 0, start: now };

  // reset window
  if (now - entry.start >= windowMs) {
    entry.count = 0;
    entry.start = now;
  }

  entry.count += 1;
  hits.set(key, entry);

  if (entry.count > limit) {
    const retryAfterSec = Math.ceil((windowMs - (now - entry.start)) / 1000);

    res.setHeader("Retry-After", String(retryAfterSec));
    return res.status(429).json({
      ok: false,
      error: {
        code: "RATE_LIMITED",
        message: "Too many requests. Try again later.",
        retryAfterSec,
      },
    });
  }

  next();
};

// usage
app.use("/api/login", rateLimit);`},{key:"tokenBucketRedis",title:"Example - token bucket mental model (Redis style)",icon:e.jsx(n,{}),note:"This shows the idea. Real production code uses atomic operations and Lua scripts to avoid race conditions.",code:`// Token bucket concept (pseudo)
// capacity = max tokens
// refillRate = tokens per second

// store in Redis per user:
// tokens, lastRefillTs

function allowRequest(userKey) {
  // read tokens and lastRefillTs
  // refill based on time passed
  // if tokens >= 1 -> decrement and allow
  // else reject with 429 and Retry-After hint
}

// Why Redis + Lua?
// To make read-refill-decrement atomic across servers.`},{key:"headers",title:"Helpful headers to return",icon:e.jsx(N,{}),note:"Different teams use different header names. Pick a convention and keep it consistent.",code:`// Common patterns
// 429 Too Many Requests
// Retry-After: 12

// Some systems also send:
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 24
X-RateLimit-Reset: 1710000000`}],[]),h=a.useMemo(()=>["Applying the same strict limit to all endpoints - login and search need different rules","Using only IP based limits - mobile networks and shared NAT can cause false blocks","No retry hints - clients keep hammering and things get worse","In-memory limits in multi-instance production - every server counts separately","Non-atomic counter updates - race conditions allow extra requests","No allowlist for trusted internal services - breaks your own systems"],[]),u=()=>{d(r=>!r),s&&t(null)},g=r=>{t(o=>o===r?null:r)};return e.jsxs(A.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${s?"open":""}`,onClick:u,"aria-expanded":s,title:s?"Collapse section":"Expand section",children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(i,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Rate limiting"}),e.jsx("span",{className:"sub",children:"Protect APIs from abuse and overload using fair request limits"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:s?e.jsxs(e.Fragment,{children:[e.jsx(T,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(R,{})," Expand"]})}),e.jsx("span",{className:`chev ${s?"rot":""}`,children:e.jsx(c,{})})]})]}),e.jsxs("div",{className:`sectionBody ${s?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(I,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Rate limiting - quick definition"}),e.jsx("div",{className:"introSub",children:"Rate limiting sets a maximum request rate so one client cannot overwhelm the system. You usually return 429 and provide retry hints so clients back off cleanly."})]})]}),e.jsx("div",{className:"grid",children:x.map(r=>{const o=p===r.key;return e.jsxs("div",{className:`card ${o?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>g(r.key),"aria-expanded":o,title:o?"Collapse":"Expand",children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${o?"rot":""}`,children:e.jsx(c,{})})})]}),e.jsxs("div",{className:`cardBody ${o?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.points.map((f,y)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:f})]},`${r.key}-p-${y}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Mental model"}),e.jsx("p",{className:"para",children:r.mentalModel})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(M,{})}),e.jsx("span",{className:"hintText",children:"Interview line: Rate limiting is used to protect API reliability and security by controlling request volume per client."})]})]})]},r.key)})}),e.jsxs("div",{className:"samples",children:[e.jsxs("div",{className:"samplesTop",children:[e.jsx("div",{className:"samplesIcon",children:e.jsx(l,{})}),e.jsxs("div",{className:"samplesText",children:[e.jsx("div",{className:"samplesTitle",children:"Practical examples"}),e.jsx("div",{className:"samplesSub",children:"These examples show patterns you can describe in interviews and use in small projects."})]})]}),e.jsx("div",{className:"sampleGrid",children:m.map(r=>e.jsxs("div",{className:"sampleCard",children:[e.jsx("div",{className:"sampleHeader",children:e.jsxs("div",{className:"sampleLeft",children:[e.jsx("span",{className:"sampleIcon",children:r.icon}),e.jsxs("div",{className:"sampleHeadText",children:[e.jsx("div",{className:"sampleTitle",children:r.title}),e.jsx("div",{className:"sampleNote",children:r.note})]})]})}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.code})})]},r.key))})]}),e.jsxs("div",{className:"pitfalls",children:[e.jsxs("div",{className:"pitTop",children:[e.jsx("div",{className:"pitIcon",children:e.jsx(C,{})}),e.jsxs("div",{className:"pitText",children:[e.jsx("div",{className:"pitTitle",children:"Common pitfalls"}),e.jsx("div",{className:"pitSub",children:"Most real bugs come from wrong placement, wrong identity key, or wrong shared state."})]})]}),e.jsx("ul",{className:"pitList",children:h.map((r,o)=>e.jsxs("li",{children:[e.jsx("span",{className:"dotWarn"}),e.jsx("span",{className:"liText",children:r})]},`pit-${o}`))})]}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(S,{})}),e.jsx("span",{className:"closingText",children:"Best practice: enforce rate limits at the edge first, then add route specific rules inside the app, and use Redis for shared counters in multi-instance setups."})]})]})]})};export{L as R};
