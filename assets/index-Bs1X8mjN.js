import{c as v,r as s,j as e,g as b,a as y,y as l,z as f,A as w,b as k,p as j,q as N,s as I,B as T,F as n,o as M}from"./index-BfYXeRa6.js";const S={Wrapper:v.section`
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
                box-shadow: 0 12px 22px var(--color-shadow);
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
                max-width: 920px;
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
                max-height: 9000px;
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
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .noteIcon {
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

            .noteTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .noteSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            display: grid;
            grid-template-columns: 360px minmax(0, 1fr);
            gap: 14px;
            padding: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .leftNav {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .navItem {
            width: 100%;
            text-align: left;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

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
                transform 150ms ease,
                border-color 150ms ease,
                box-shadow 150ms ease;

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
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nText {
                display: flex;
                flex-direction: column;
                gap: 3px;
                min-width: 0;
                flex: 1;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .nSub {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.45;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .nArrow {
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

                transition: transform 160ms ease;
            }

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:hover .nArrow {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &.active {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 45%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 14%,
                            transparent
                        ),
                    0 18px 44px var(--color-shadow);
            }

            &.active .nIcon {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 18%,
                    var(--color-surface)
                );
            }
        }

        .rightContent {
            min-width: 0;
        }

        .panel {
            display: none;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;

            &.show {
                display: block;
            }
        }

        .panelHeader {
            display: flex;
            gap: 12px;
            padding: 14px;

            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .pIcon {
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
                box-shadow: 0 12px 22px var(--color-shadow);
            }

            .pHeadText {
                min-width: 0;
            }

            .pTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 2px;
            }

            .pSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .panelBody {
            padding: 14px;
        }

        .block {
            padding: 12px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
            margin-bottom: 12px;
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
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

            .dot.warn {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 78%,
                    var(--color-text-primary)
                );
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .extra {
            margin-top: 14px;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;
        }

        .extraTitle {
            padding: 14px;
            font-weight: 900;
            color: var(--color-text-primary);
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 8%, transparent),
                transparent
            );
        }

        .examplesGrid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .exCard {
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

        .exHead {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);

            .exIcon {
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
                flex: 0 0 auto;
            }

            .exName {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 13px;
                line-height: 1.45;
            }
        }

        .code {
            background: var(--color-code-bg);
            border-top: 1px solid var(--color-code-border);
            padding: 12px 14px;
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
            padding: 14px;
            border-top: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .pitTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;

            .pitIcon {
                width: 30px;
                height: 30px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .pitText {
                font-weight: 900;
                color: var(--color-text-primary);
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

            .cIcon {
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

            .cText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .navItem,
            .exCard {
                transition: none !important;
            }
        }
    `},F=()=>{const[a,c]=s.useState(!1),[t,d]=s.useState("overview"),i=s.useMemo(()=>[{key:"overview",title:"What it is",icon:e.jsx(b,{}),summary:"The event loop is how Node.js keeps handling many tasks without blocking the main JavaScript thread.",points:["JavaScript runs on one main thread, one call stack","I/O work is handled by the OS and libuv, then callbacks get queued","The event loop picks ready callbacks and runs them when the stack is free"],mentalModel:"Think of the event loop as a scheduler that keeps checking queues. It runs the next ready callback only when the main thread is free."},{key:"phases",title:"Phases and queues",icon:e.jsx(y,{}),summary:"Node has multiple phases. Timers and I/O callbacks do not run in the same moment, they run when their phase is reached.",points:["Timers phase - runs setTimeout and setInterval callbacks when due","I/O callbacks phase - runs callbacks for completed I/O","Poll phase - waits for I/O and processes ready I/O events","Check phase - runs setImmediate callbacks","Close callbacks - runs close events like socket close"],mentalModel:"Picture a roundabout with lanes. Each lane is a phase. The loop drives around and picks tasks from each lane in order."},{key:"microtasks",title:"Microtasks vs macrotasks",icon:e.jsx(l,{}),summary:"Microtasks run before the next macrotask. Promise callbacks are microtasks. Timers and I/O callbacks are macrotasks.",points:["Microtasks - Promise.then, queueMicrotask","Macrotasks - setTimeout, setInterval, I/O callbacks, setImmediate","Too many microtasks can starve timers and make your server feel delayed"],mentalModel:"Microtasks are urgent sticky notes you must finish before picking the next normal task."},{key:"blocking",title:"Blocking the event loop",icon:e.jsx(f,{}),summary:"If you block the main thread, Node cannot process other requests. This is the most common reason APIs feel stuck.",points:["CPU heavy loops block everything - no requests handled during that time","Sync filesystem calls block - avoid fs.readFileSync in request path","Big JSON parsing and huge loops also block under load"],mentalModel:"One cashier, many customers. If the cashier starts doing heavy accounting, the queue stops moving."},{key:"practical",title:"Practical backend signals",icon:e.jsx(w,{}),summary:"In production, event loop issues show up as slow responses, timeouts, and delayed timers under load.",points:["Timers drift - setInterval ticks late when the loop is busy","P99 latency increases - tail latency grows when blocking happens","Requests pile up - your reverse proxy queue grows"],mentalModel:"When the loop is healthy, callbacks run smoothly. When it is blocked, everything waits longer than expected."}],[]),p=s.useMemo(()=>[{title:"Order example - sync, promise, timeout",code:`console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");

// Typical output:
// A
// B
// promise
// timeout`},{title:"Blocking example - busy loop",code:`app.get("/heavy", (req, res) => {
  const start = Date.now();

  while (Date.now() - start < 2000) {
    // busy loop for 2 seconds
  }

  res.send("done");
});

// During those 2 seconds, other requests wait.
// Fix: move CPU work to a worker thread or a separate service.`},{title:"Timers drift example - interval under load",code:`let tick = 0;

const id = setInterval(() => {
  tick += 1;
  console.log("tick", tick, new Date().toISOString());

  // simulate heavy work
  const start = Date.now();
  while (Date.now() - start < 300) {}

  if (tick === 8) clearInterval(id);
}, 200);`}],[]),x=s.useMemo(()=>["Using synchronous fs calls in request handlers","Doing CPU heavy loops inside routes","Spawning too many microtasks that delay timers","Assuming setTimeout(0) runs immediately"],[]),m=()=>{c(r=>!r)},h=r=>{d(r)};return e.jsxs(S.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:m,"aria-expanded":a,"aria-controls":"event-loop-body",children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(k,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Event loop"}),e.jsx("span",{className:"sub",children:"How Node.js schedules callbacks and why blocking code makes APIs slow"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:a?e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{})," Expand"]})}),e.jsx("span",{className:`chev ${a?"rot":""}`,children:e.jsx(I,{})})]})]}),e.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[e.jsxs("div",{className:"topNote",children:[e.jsx("span",{className:"noteIcon",children:e.jsx(T,{})}),e.jsxs("div",{className:"noteText",children:[e.jsx("div",{className:"noteTitle",children:"Interview line you should remember"}),e.jsx("div",{className:"noteSub",children:"Node.js is single threaded for JavaScript execution, but it handles many tasks via non blocking I/O and the event loop. If you block the loop, your API stalls."})]})]}),e.jsxs("div",{className:"layout",children:[e.jsx("div",{className:"leftNav",children:i.map(r=>{const o=t===r.key;return e.jsxs("button",{type:"button",className:`navItem ${o?"active":""}`,onClick:()=>h(r.key),"aria-pressed":o,children:[e.jsx("span",{className:"nIcon",children:r.icon}),e.jsxs("span",{className:"nText",children:[e.jsx("span",{className:"nTitle",children:r.title}),e.jsx("span",{className:"nSub",children:r.summary})]}),e.jsx("span",{className:"nArrow",children:e.jsx(n,{})})]},r.key)})}),e.jsxs("div",{className:"rightContent",children:[i.map(r=>{const o=t===r.key;return e.jsxs("div",{className:`panel ${o?"show":""}`,children:[e.jsxs("div",{className:"panelHeader",children:[e.jsx("div",{className:"pIcon",children:r.icon}),e.jsxs("div",{className:"pHeadText",children:[e.jsx("div",{className:"pTitle",children:r.title}),e.jsx("div",{className:"pSummary",children:r.summary})]})]}),e.jsxs("div",{className:"panelBody",children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.points.map((g,u)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:g})]},`${r.key}-p-${u}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Mental model"}),e.jsx("p",{className:"para",children:r.mentalModel})]})]})]},r.key)}),e.jsxs("div",{className:"extra",children:[e.jsx("div",{className:"extraTitle",children:"Examples you can explain in an interview"}),e.jsx("div",{className:"examplesGrid",children:p.map((r,o)=>e.jsxs("div",{className:"exCard",children:[e.jsxs("div",{className:"exHead",children:[e.jsx("span",{className:"exIcon",children:e.jsx(l,{})}),e.jsx("span",{className:"exName",children:r.title})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.code})})]},`ex-${o}`))}),e.jsxs("div",{className:"pitfalls",children:[e.jsxs("div",{className:"pitTitle",children:[e.jsx("span",{className:"pitIcon",children:e.jsx(M,{})}),e.jsx("span",{className:"pitText",children:"Common pitfalls"})]}),e.jsx("ul",{className:"list",children:x.map((r,o)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot warn"}),e.jsx("span",{className:"liText",children:r})]},`pit-${o}`))})]}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"cIcon",children:e.jsx(n,{})}),e.jsx("span",{className:"cText",children:"Revision tip: Explain the event loop in 2 lines, then give one blocking example, then show promise vs timeout order."})]})]})]})]})]})]})};export{F as E};
