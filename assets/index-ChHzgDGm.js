import{c as u,r as t,j as e,S as l,B as g,a as f,f as y,A as b,R as v,t as w,y as k,p as j,q as T,s as c,F as N,w as R}from"./index-Cfj_xNHZ.js";const C={Wrapper:u.section`
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
    `},I=()=>{const[a,d]=t.useState(!1),[p,n]=t.useState(null),m=t.useMemo(()=>[{key:"what",title:"What Redis is",icon:e.jsx(l,{}),summary:"Redis is an in-memory data store, often used as a cache, key-value store, and lightweight data structure server.",points:["In-memory means data is stored in RAM, so reads and writes are very fast.","Redis is commonly used for caching, rate limiting, sessions, queues, and realtime counters.","Redis can persist data to disk using snapshots (RDB) or append-only log (AOF), but RAM is the main performance source."],mentalModel:"Think of Redis as a super fast shared memory box for your backend. You put small, frequently used data there so your database does less work.",exampleTitle:"Example - cache flow",code:`// Cache aside pattern (high level)
const key = "user:42";

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const user = await db.users.findById(42);

await redis.set(key, JSON.stringify(user), { EX: 60 }); // 60 seconds TTL
return user;`,pitfalls:["Redis is not your primary database for complex queries.","Store only cache-friendly data - small, frequently accessed, easy to recompute."]},{key:"ttl",title:"TTL and cache invalidation",icon:e.jsx(g,{}),summary:"TTL is Time To Live. It decides how long a cached key stays valid before Redis removes it.",points:["TTL helps prevent serving stale data forever.","Short TTL reduces staleness but increases database load.","Long TTL reduces database load but increases staleness risk. Use versioning or explicit invalidation for critical data."],mentalModel:"TTL is an expiry sticker on data. After the time passes, Redis throws it away so you are forced to refresh from the source.",exampleTitle:"Example - product cache with version",code:`// Versioned keys reduce invalidation pain
const version = await redis.get("products:version") || "v1";
const key = \`products:\${version}:page:1\`;

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const page = await db.products.findPage(1);
await redis.set(key, JSON.stringify(page), { EX: 120 });
return page;

// When you deploy a new pricing rule or bulk update:
// await redis.incr("products:version");`,pitfalls:["Cache invalidation is hard - prefer TTL plus explicit busting for important changes.","Do not cache forever unless data never changes."]},{key:"patterns",title:"Common Redis patterns",icon:e.jsx(f,{}),summary:"Redis becomes powerful when you use small patterns that solve real backend pain points.",points:["Caching - cache responses, user profiles, product pages.","Counters - views, likes, rate counters.","Rate limiting - block abusive clients.","Sessions - store session data for cookie-based auth flows.","Queues - simple job queue using lists or streams (concept)."],mentalModel:"Redis patterns are like Lego blocks. Small primitives combine into useful backend features.",exampleTitle:"Example - counter",code:`// Page view counter
await redis.incr("page:/home:views");

// Read the counter
const views = await redis.get("page:/home:views");`,pitfalls:["Keep keys consistent - naming conventions matter for debugging.","Do not store large blobs without thinking about memory."]},{key:"rateLimit",title:"Rate limiting with Redis",icon:e.jsx(y,{}),summary:"Rate limiting restricts how many requests a client can make in a time window.",points:["Simple approach: key per client per route per window.","Use TTL so the counter resets automatically.","This protects your API from abuse and reduces load spikes."],mentalModel:"Rate limiting is a bouncer at the door. If someone keeps spamming, they get blocked for a while.",exampleTitle:"Example - fixed window limit",code:`// Fixed window: 100 requests per minute
const key = \`rl:\${ip}:\${route}:\${minuteBucket}\`;

const count = await redis.incr(key);

if (count === 1) {
  await redis.expire(key, 60); // 60 seconds
}

if (count > 100) {
  // return 429 Too Many Requests
}`,pitfalls:["Fixed window can allow bursts at window edges. Sliding window and token bucket are better but more complex.","Always include route or action in the key to avoid blocking everything."]},{key:"stampede",title:"Cache stampede and protection",icon:e.jsx(b,{}),summary:"Cache stampede happens when many requests miss the cache at the same time and hit the database together.",points:["This often happens when a popular key expires and traffic is high.","Use locking or request coalescing to ensure only one request rebuilds the cache.","Add small random jitter to TTL so many keys do not expire together."],mentalModel:"Stampede is when everyone rushes to the database at once because the cache door just closed.",exampleTitle:"Example - TTL jitter",code:`// Add random jitter to spread expiry times
const base = 60; // seconds
const jitter = Math.floor(Math.random() * 15); // 0 to 14
await redis.set(key, value, { EX: base + jitter });`,pitfalls:["Locks must have TTL to avoid deadlocks if a worker crashes.","Do not rebuild cache inside a long critical section if it can take seconds."]},{key:"ops",title:"Operational notes",icon:e.jsx(v,{}),summary:"Redis is fast, but you still need to run it safely in production.",points:["Memory is the main constraint. Know your maxmemory policy.","Have a plan for eviction - keys removed when memory is full.","Keep Redis private - do not expose to public internet.","Monitor hit rate, memory usage, latency, and evictions."],mentalModel:"Treat Redis as a performance engine. Great power, but you must watch heat and fuel levels.",exampleTitle:"Example - safe thinking checklist",code:`// Before caching something, ask:
- Is this data small?
- Is it requested often?
- Can I tolerate staleness for 30-120 seconds?
- Do I know how to invalidate it?
- What happens if Redis is down?`,pitfalls:["If Redis goes down, your system should still work - maybe slower, but not broken.","Never assume cache is the source of truth for critical data."]},{key:"glossary",title:"Mini glossary",icon:e.jsx(w,{}),summary:"Quick full forms and terms used around Redis and caching.",points:["TTL - Time To Live","Eviction - removing keys when memory is full","Hit - request served from cache","Miss - request not found in cache","Cache aside - app reads cache first, fills cache on miss","Jitter - adding small randomness to expiry times"],mentalModel:"Glossary is your fast recall layer. Read it before interviews.",exampleTitle:"Example - hit rate idea",code:`// Hit rate (concept)
hitRate = hits / (hits + misses)

// Higher hit rate usually means lower DB load.`,pitfalls:["A high hit rate is good, but not if it serves wrong or stale data for business critical flows."]}],[]),x=()=>{d(r=>!r),a&&n(null)},h=r=>{n(s=>s===r?null:r)};return e.jsxs(C.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:x,"aria-expanded":a,title:a?"Collapse Redis":"Expand Redis",children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(k,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Redis"}),e.jsx("span",{className:"sub",children:"Cache, TTL, rate limiting, stampede protection, and production habits"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:a?e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{})," Expand"]})}),e.jsx("span",{className:`chev ${a?"rot":""}`,children:e.jsx(c,{})})]})]}),e.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(l,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Why Redis matters in backend systems"}),e.jsx("div",{className:"introSub",children:"Redis reduces database load, speeds up hot paths, enables rate limiting, and supports simple realtime counters. Learn a few patterns well and you will use them everywhere."})]})]}),e.jsx("div",{className:"grid",children:m.map(r=>{const s=p===r.key;return e.jsxs("div",{className:`card ${s?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>h(r.key),"aria-expanded":s,title:s?`Collapse ${r.title}`:`Expand ${r.title}`,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${s?"rot":""}`,children:e.jsx(c,{})})})]}),e.jsxs("div",{className:`cardBody ${s?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.points.map((o,i)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:o})]},`${r.key}-p-${i}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Mental model"}),e.jsx("p",{className:"para",children:r.mentalModel})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.exampleTitle}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.pitfalls.map((o,i)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:o})]},`${r.key}-x-${i}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(N,{})}),e.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",r.title," in 2 lines and give 1 real example from production."]})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(R,{})}),e.jsx("span",{className:"closingText",children:"Rule: Cache makes things fast. Correctness comes first. Always plan staleness, invalidation, and fallback when Redis is unavailable."})]})]})]})};export{I as R};
