import{c as h,r as i,j as e,v as m,V as g,a as u,M as f,y as l,o as v,W as b,f as y,p as w,q as N,s as j,t as C,h as k,B as T}from"./index-BfYXeRa6.js";const D={Wrapper:h.section`
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

        .layout {
            display: grid;
            grid-template-columns: 420px 1fr;
            gap: 14px;
            padding: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .leftNav {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 16px 36px var(--color-shadow);
        }

        .navItem {
            width: 100%;
            text-align: left;

            display: flex;
            gap: 12px;
            padding: 12px 12px;

            border-bottom: 1px solid var(--color-border);

            transition:
                transform 140ms ease,
                background-color 140ms ease,
                border-color 140ms ease;

            .nIcon {
                width: 36px;
                height: 36px;
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
                width: 16px;
                height: 16px;
            }

            .nText {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
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

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .navItem.active {
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );
        }

        .rightPanel {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 16px 36px var(--color-shadow);
        }

        .panelTop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;

            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .pIcon {
                width: 42px;
                height: 42px;
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

            .pIcon svg {
                width: 18px;
                height: 18px;
            }

            .pText {
                min-width: 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding-top: 1px;
            }

            .pTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .pSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }

            .pBadge {
                flex: 0 0 auto;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 7px 10px;
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
                white-space: nowrap;
            }

            .pBadge svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 86%,
                    var(--color-text-primary)
                );
            }
        }

        .panelBlock {
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

        .panelFooter {
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
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .fText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
                font-weight: 700;
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
            .navItem {
                transition: none !important;
            }
        }
    `},M=()=>{const[a,c]=i.useState(!1),[n,d]=i.useState("what"),t=i.useMemo(()=>[{key:"what",title:"What is a CDN",icon:e.jsx(m,{}),summary:"CDN means Content Delivery Network. It serves content from servers closer to users to reduce latency and offload your origin server.",points:["A CDN is a network of edge servers distributed across locations.","Users are routed to a nearby edge so content loads faster.","Your main server is called the origin. CDN sits in front of it."],mentalModel:{title:"Mental model",text:"Origin is the warehouse. CDN edges are local stores. Customers get items from the nearest store instead of traveling to the warehouse."},example:{title:"Common CDN use cases",code:`- Static assets: images, CSS, JS
- Video delivery and large downloads
- API acceleration (sometimes) with caching
- DDoS absorption and WAF protection (depending on provider)`}},{key:"how",title:"How a CDN works",icon:e.jsx(g,{}),summary:"The first request may go to origin, then the CDN stores a cached copy at the edge. Next users get a cache hit from the edge.",points:["User requests https://cdn.example.com/logo.png","Edge checks cache - if present: cache hit, respond immediately","If not present: cache miss, edge fetches from origin, stores it, responds","Routing is usually done by DNS or anycast, so user reaches a nearby edge"],mentalModel:{title:"Mental model",text:"Edge is like a smart vending machine. If the item is stocked, it gives instantly. If not, it goes to refill from the warehouse and then serves."},example:{title:"Cache hit vs cache miss",code:`Cache hit:
- Edge already has the file
- Fast response
- Origin load is avoided

Cache miss:
- Edge fetches from origin
- Slower for first request
- Subsequent requests become fast`}},{key:"cacheRules",title:"Caching rules",icon:e.jsx(u,{}),summary:"CDN caching depends on headers and CDN rules. You control cache behavior mostly via Cache-Control, Expires, ETag, and Vary.",points:["Cache-Control controls how long and how content can be cached.","max-age tells TTL in seconds.","public means shared caches (CDN) can cache it.","private means only browser cache, CDN should not cache.","no-store means do not store anywhere.","ETag allows revalidation with If-None-Match and can return 304 Not Modified.","Vary tells cache key variations like Vary: Accept-Encoding."],mentalModel:{title:"Mental model",text:"Headers are the caching contract. You tell the CDN what can be stored, for how long, and when it must check back with origin."},example:{title:"Good defaults for static assets",code:`// Fingerprinted asset: app.4f2c1a.js
Cache-Control: public, max-age=31536000, immutable

// Non fingerprinted asset: logo.png (changes sometimes)
Cache-Control: public, max-age=86400

// User specific response (do not CDN cache)
Cache-Control: private, no-store`}},{key:"invalidation",title:"Invalidation and versioning",icon:e.jsx(f,{}),summary:"CDN caches can become stale. You handle it with cache invalidation or better with cache busting by versioned file names.",points:["Best practice: cache busting using versioned filenames like app.hash.js.","If you cannot version, use invalidation or purge requests.","Invalidation might take time to propagate across edges.","Use shorter TTL for frequently changing content."],mentalModel:{title:"Mental model",text:"Instead of telling every store to throw old posters away, print a new poster with a new ID. Stores will fetch the new one automatically."},example:{title:"Cache busting pattern",code:`Old:
- /assets/app.js

Better:
- /assets/app.9b21f3.js

Now you can set 1 year caching safely because a new build creates a new filename.`}},{key:"perfSecurity",title:"Performance and security benefits",icon:e.jsx(l,{}),summary:"CDNs reduce latency, reduce origin bandwidth, and can add security layers like DDoS protection and WAF depending on provider.",points:["Lower latency because edge is closer to users.","Lower origin load and bandwidth cost due to caching.","Better resilience during traffic spikes.","Some CDNs provide WAF, bot protection, TLS termination, and DDoS mitigation."],mentalModel:{title:"Mental model",text:"CDN is both a speed layer and a protective shield in front of your origin."},example:{title:"Practical effect",code:`If your origin is in Mumbai and user is in Europe:
- Without CDN: every request travels far to origin
- With CDN: edge in Europe serves cached files quickly`}},{key:"pitfalls",title:"Common pitfalls",icon:e.jsx(v,{}),summary:"Most CDN issues are cache key mistakes, wrong headers, or stale content due to TTL and invalidation problems.",points:["Serving stale content because TTL is too high and no invalidation strategy exists.","Caching user specific data by mistake (missing private or no-store).","Wrong cache key - ignoring query params or headers that should vary.","Not caching at all because Cache-Control is too strict.","Assuming CDN makes API fast automatically without correct caching rules."],mentalModel:{title:"Mental model",text:"CDN is predictable if your cache rules are correct. Most bugs are self-inflicted by headers and cache keys."},example:{title:"Golden safety checks",code:`- Static assets: public + long max-age + versioned filenames
- Auth endpoints: private + no-store
- Always confirm CDN response headers: HIT or MISS and Age`}},{key:"interview",title:"Interview ready Q and A",icon:e.jsx(b,{}),summary:"These questions test whether you understand CDN behavior, caching headers, and real production tradeoffs.",points:["Q: Why is a CDN used - A: reduce latency and offload origin.","Q: Cache hit vs miss - A: hit served from edge, miss fetched from origin.","Q: How do you prevent stale assets - A: versioned filenames and long cache TTL.","Q: When not to cache - A: user specific or sensitive responses, use private or no-store.","Q: What headers matter - A: Cache-Control, ETag, Vary, Expires."],mentalModel:{title:"Mental model",text:"Interviewers want to see that you can ship fast sites without breaking correctness or security."},example:{title:"One line answer",code:"A CDN is a distributed cache in front of your origin that serves content from nearby edge locations to reduce latency and origin load."}}],[]),p=()=>{c(r=>!r)},x=r=>{d(r)},o=i.useMemo(()=>t.find(r=>r.key===n)||t[0],[t,n]);return e.jsxs(D.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:p,"aria-expanded":a,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(y,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"CDN"}),e.jsx("span",{className:"sub",children:"Edge caching, headers, invalidation, and production tradeoffs"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:a?e.jsxs(e.Fragment,{children:[e.jsx(w,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{})," Expand"]})}),e.jsx("span",{className:`chev ${a?"rot":""}`,children:e.jsx(j,{})})]})]}),e.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(C,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"What you should remember"}),e.jsx("div",{className:"introSub",children:"CDN improves speed by serving cached content from edge locations. Correct caching headers and cache busting keep it fast and safe."})]})]}),e.jsxs("div",{className:"layout",children:[e.jsx("div",{className:"leftNav",role:"tablist","aria-label":"CDN topics",children:t.map(r=>{const s=r.key===n;return e.jsxs("button",{type:"button",className:`navItem ${s?"active":""}`,onClick:()=>x(r.key),role:"tab","aria-selected":s,children:[e.jsx("span",{className:"nIcon",children:r.icon}),e.jsxs("span",{className:"nText",children:[e.jsx("span",{className:"nTitle",children:r.title}),e.jsx("span",{className:"nSub",children:r.summary})]})]},r.key)})}),e.jsxs("div",{className:"rightPanel",role:"tabpanel",children:[e.jsxs("div",{className:"panelTop",children:[e.jsx("div",{className:"pIcon",children:o.icon}),e.jsxs("div",{className:"pText",children:[e.jsx("div",{className:"pTitle",children:o.title}),e.jsx("div",{className:"pSummary",children:o.summary})]}),e.jsxs("div",{className:"pBadge",children:[e.jsx(k,{})," Core"]})]}),e.jsxs("div",{className:"panelBlock",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:o.points.map((r,s)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:r})]},`${o.key}-p-${s}`))})]}),e.jsxs("div",{className:"panelBlock",children:[e.jsx("div",{className:"blockTitle",children:o.mentalModel.title}),e.jsx("p",{className:"para",children:o.mentalModel.text})]}),e.jsxs("div",{className:"panelBlock",children:[e.jsx("div",{className:"blockTitle",children:o.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:o.example.code})})]}),e.jsxs("div",{className:"panelFooter",children:[e.jsx("span",{className:"fIcon",children:e.jsx(T,{})}),e.jsx("span",{className:"fText",children:"Revision tip: Say CDN in 1 line, then explain cache hit and miss in 2 lines."})]})]})]}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(l,{})}),e.jsx("span",{className:"closingText",children:"Fast and safe CDN setup usually means versioned assets, long cache TTL, and strict no-store for user data."})]})]})]})};export{M as C};
