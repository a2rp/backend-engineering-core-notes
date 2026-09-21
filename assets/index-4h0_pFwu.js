import{c as u,r as i,j as e,y as c,S as g,v as y,M as f,f as v,U as b,p as w,q as j,s as l,t as k,F as N}from"./index-BfYXeRa6.js";const C={Wrapper:u.section`
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
    `},I=()=>{const[r,d]=i.useState(!1),[p,n]=i.useState("basics"),x=i.useMemo(()=>[{key:"basics",title:"Caching basics",icon:e.jsx(c,{}),summary:"Cache stores a copy of expensive data so future requests are faster and cheaper.",bullets:["Cache hit means data found in cache and served quickly.","Cache miss means not found, so you compute or fetch from source, then store it for next time.","Caching improves latency and reduces load on databases and downstream services.","Cache is not a source of truth. Your database is the source of truth."],mentalModel:{title:"Mental model",text:"Cache is like keeping the most used tools on your desk instead of going to the store room every time."},example:{title:"Example - in-memory cache idea",code:`// Simple in-memory cache pattern (per process)
const cache = new Map();

async function getUser(userId) {
  const key = \`user:\${userId}\`;

  if (cache.has(key)) {
    return { fromCache: true, value: cache.get(key) };
  }

  const value = await db.users.findById(userId);
  cache.set(key, value);

  return { fromCache: false, value };
}

// Real production usually uses Redis for shared cache.`},gotchas:["In-memory cache is per process. In a multi-instance server, each instance has its own cache.","Memory grows if you never evict keys. Use TTL or size limits.","Stale data is normal. You must design how stale is acceptable."]},{key:"redis",title:"Redis patterns",icon:e.jsx(g,{}),summary:"Redis is commonly used as a shared cache and as a fast data structure store for backend systems.",bullets:["TTL means time to live. Key expires automatically after TTL.","Common keys: user sessions, rate limit counters, product lists, precomputed responses.","Cache aside is the most common pattern: app checks cache, on miss fetches DB, then sets cache.","Avoid caching very large objects if it increases network and memory cost too much."],mentalModel:{title:"Mental model",text:"Redis is a shared super-fast shelf that all your app servers can access."},example:{title:"Example - cache aside with TTL",code:`// Cache-aside using Redis (pseudo)
const key = \`products:page:\${page}\`;

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const data = await db.products.list({ page });
await redis.set(key, JSON.stringify(data), { EX: 60 }); // 60 seconds TTL

return data;`},gotchas:["Cache stampede: many requests miss at once and all hit DB. Use locking or request coalescing.","Hot keys: a single key is requested too often. Consider sharding keys or local cache layer.","Serialization bugs: store and read consistently with JSON, msgpack, etc."]},{key:"cdn",title:"CDN caching",icon:e.jsx(y,{}),summary:"CDN caches content at edge locations near users. Best for static assets and cacheable API responses.",bullets:["CDN reduces latency by serving from a nearby edge instead of your origin server.","Static assets: images, JS, CSS are perfect for CDN caching.","API caching is possible when responses are safe to cache and vary rules are correct.","Cache-Control headers decide how long content is cacheable."],mentalModel:{title:"Mental model",text:"A CDN is many mini servers across the world that keep copies so users do not always travel to your origin."},example:{title:"Example - cache headers quick view",code:`// Typical static asset caching
Cache-Control: public, max-age=31536000, immutable

// For API data that changes often
Cache-Control: public, max-age=60

// For user-specific responses
Cache-Control: private, no-store`},gotchas:["Wrong caching for user-specific data can leak private content.","Missing Vary headers can cause incorrect cached variants.","CDN cache invalidation costs money and time. Plan versioned assets."]},{key:"invalidation",title:"Cache invalidation and freshness",icon:e.jsx(f,{}),summary:"Cache invalidation is the hard part. Decide when cache should update and how stale is allowed.",bullets:["TTL-based invalidation: data expires after a fixed time. Simple and common.","Write-through: writes go to cache and DB together. Reads hit cache more often.","Write-behind: cache writes first, DB updates later. Faster but riskier if failure happens.","Event-based invalidation: on DB change, delete or update related keys."],mentalModel:{title:"Mental model",text:"Freshness is a budget. If you can tolerate 30 seconds stale data, TTL is easy. If you need real-time accuracy, cache gets harder."},example:{title:"Example - delete key on update",code:`// On product update, invalidate product and list keys (pseudo)
await db.products.update(id, payload);

// Invalidate related cache keys
await redis.del(\`product:\${id}\`);
await redis.del("products:page:1");
await redis.del("products:page:2");

// Better: use key patterns carefully or maintain a version key.`},gotchas:["Over-invalidation removes benefits. Under-invalidation serves stale data too long.","Key design matters: plan key names and groups from day one.","Cache consistency is not free. Keep it simple unless requirements demand more."]},{key:"security",title:"Caching and security",icon:e.jsx(v,{}),summary:"Caching can accidentally store sensitive responses. Always decide what is safe to cache.",bullets:["Never cache secrets, tokens, or personalized pages in a public cache.","Use private or no-store for user-specific responses.","Be careful with shared caches and multi-tenant systems.","For auth, cache must not bypass permission checks."],mentalModel:{title:"Mental model",text:"A cache is a place where copies live. If a copy is sensitive and ends up in the wrong place, it becomes a data leak."},example:{title:"Example - safe defaults",code:`// Safe for user-specific endpoints
Cache-Control: private, no-store

// Safe for public docs or public data
Cache-Control: public, max-age=60`},gotchas:["CDN caching + missing user separation is a common security incident pattern."]}],[]),h=()=>{d(a=>!a),r&&n(null)},m=a=>{n(s=>s===a?null:a)};return e.jsxs(C.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${r?"open":""}`,onClick:h,"aria-expanded":r,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(b,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Caching"}),e.jsx("span",{className:"sub",children:"Basics, Redis patterns, CDN caching, invalidation, and safety rules"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:r?e.jsxs(e.Fragment,{children:[e.jsx(w,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Expand"]})}),e.jsx("span",{className:`chev ${r?"rot":""}`,children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:`sectionBody ${r?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(k,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Why caching matters"}),e.jsx("div",{className:"introSub",children:"Caching is one of the easiest ways to make an API feel fast. It also introduces correctness risks if you cache the wrong thing. These notes focus on practical patterns used in production."})]})]}),e.jsx("div",{className:"grid",children:x.map(a=>{const s=p===a.key;return e.jsxs("div",{className:`card ${s?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>m(a.key),"aria-expanded":s,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:a.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:a.title}),e.jsx("span",{className:"cSummary",children:a.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${s?"rot":""}`,children:e.jsx(l,{})})})]}),e.jsxs("div",{className:`cardBody ${s?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:a.bullets.map((o,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:o})]},`${a.key}-b-${t}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:a.mentalModel.title}),e.jsx("p",{className:"para",children:a.mentalModel.text})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:a.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:a.example.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:a.gotchas.map((o,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:o})]},`${a.key}-g-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(N,{})}),e.jsx("span",{className:"hintText",children:'Revision tip: Say "what is cached", "where it is cached", "for how long", and "how it is invalidated".'})]})]})]},a.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(c,{})}),e.jsx("span",{className:"closingText",children:"Always define a freshness rule. If you cannot explain your invalidation strategy, your cache will eventually lie to you."})]})]})]})};export{I as C};
