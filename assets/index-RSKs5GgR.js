import{c as g,r as i,j as e,g as f,B as b,a as y,C as v,J as k,A as w,z as j,b as N,p as T,q as I,s as d,t as M,F as B,y as C}from"./index-Cfj_xNHZ.js";const S={Wrapper:g.section`
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
    `},P=({focusKey:n})=>{const[o,p]=i.useState(!1),[m,l]=i.useState(null),c=i.useMemo(()=>[{key:"eventLoop",title:"Event loop",icon:e.jsx(f,{}),summary:"Node.js runs JavaScript on a single main thread and uses the event loop to keep work moving without blocking.",bullets:["Node.js is single threaded for JavaScript execution. It can still do many things at once because I/O work is handled by the OS and libuv.","The event loop is a loop that checks queues and runs callbacks when something is ready.","If you block the thread with heavy CPU work, the event loop cannot process other callbacks and your server feels stuck."],mentalModel:{title:"Mental model",text:"Think of the event loop as a smart receptionist. It picks the next ready task and runs it. If the receptionist is forced to do heavy work, the entire office stops."},example:{title:"Example - blocking vs non blocking",code:`// Blocking example (bad for servers)
app.get("/heavy", (req, res) => {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // busy wait for 2 seconds
  }
  res.send("done");
});

// Better idea - offload heavy compute (worker thread) or redesign
// Non-blocking I/O example is natural in Node:
app.get("/file", async (req, res) => {
  const data = await fs.promises.readFile("a.txt", "utf8");
  res.send(data);
});`},gotchas:["CPU heavy loops block everything.","Too many synchronous operations slow down all requests."]},{key:"timers",title:"Timers",icon:e.jsx(b,{}),summary:"Timers schedule callbacks in the future. They do not guarantee exact timing, only that it runs after the delay when the event loop gets a chance.",bullets:["setTimeout runs once after at least the delay.","setInterval repeats, but delays can drift if the event loop is busy.","Use timers for retry backoff, cleanup jobs, and polling. Avoid using them as precise clocks."],mentalModel:{title:"Mental model",text:"A timer is like a reminder note. The reminder appears after the delay, but you still read it only when you are free."},example:{title:"Example - drift in intervals",code:`let n = 0;

const id = setInterval(() => {
  n += 1;
  console.log("tick", n, new Date().toISOString());
  // If you do heavy work here, next ticks get delayed.
  if (n === 5) clearInterval(id);
}, 1000);`},gotchas:["Intervals drift under load.","Do not run long work inside setInterval without control."]},{key:"microVsMacro",title:"Microtasks vs macrotasks",icon:e.jsx(y,{}),summary:"Microtasks run before the next macrotask. In Node.js, Promise callbacks are microtasks. Timers are macrotasks.",bullets:["Microtasks include Promise.then, queueMicrotask.","Macrotasks include setTimeout, setInterval, I/O callbacks.","If you keep scheduling microtasks forever, you can starve the event loop and timers feel delayed."],mentalModel:{title:"Mental model",text:"Microtasks are like urgent sticky notes that you must finish before you take the next normal task."},example:{title:"Example - order",code:`console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");

// Typical output:
// A
// B
// promise
// timeout`},gotchas:["Too many microtasks can delay timers and I/O callbacks."]},{key:"streams",title:"Streams",icon:e.jsx(v,{}),summary:"Streams handle data in chunks instead of loading everything into memory. This is crucial for files, network, and large payloads.",bullets:["Readable stream produces chunks. Writable stream consumes chunks.","Transform stream modifies chunks (like gzip compression).","Streaming improves memory usage and lets you start sending data early."],mentalModel:{title:"Mental model",text:"Streaming is like drinking water with a straw. You do not need the entire bucket in your mouth to start drinking."},example:{title:"Example - pipe a file to response",code:`import fs from "fs";

app.get("/download", (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  const stream = fs.createReadStream("./big.zip");
  stream.pipe(res);
});`},gotchas:["Always handle errors on streams.","Streaming is safer for large files than fs.readFile."]},{key:"buffers",title:"Buffers",icon:e.jsx(k,{}),summary:"Buffers represent raw binary data. They are used for network protocols, files, images, and any non-text payload.",bullets:["A Buffer is not the same as a string. A string is text. A Buffer is bytes.","Encoding matters: utf8, base64, hex.","When you receive data from a stream, you often get Buffer chunks."],mentalModel:{title:"Mental model",text:"A Buffer is a box of bytes. You can label it as text using an encoding, but the inside is still bytes."},example:{title:"Example - Buffer basics",code:`const buf = Buffer.from("hello", "utf8");
console.log(buf); // <Buffer 68 65 6c 6c 6f>

console.log(buf.toString("utf8")); // hello
console.log(buf.toString("base64")); // aGVsbG8=`},gotchas:["Wrong encoding leads to corrupted output.","Do not assume all data is utf8 text."]},{key:"backpressure",title:"Backpressure",icon:e.jsx(w,{}),summary:"Backpressure means the consumer cannot keep up with the producer. Streams support backpressure so memory does not explode.",bullets:["If you read too fast and write too slow, chunks pile up in memory.","pipe handles backpressure by pausing the readable when the writable is overloaded.","Backpressure is a core reason streams are safe for large data flows."],mentalModel:{title:"Mental model",text:"Backpressure is like traffic control. If the road ahead is jammed, you slow down new cars entering the road."},example:{title:"Example - why pipe is safe",code:`// pipe automatically manages flow control
readableStream.pipe(writableStream);

// If writable is slow, readable gets paused.
// This prevents uncontrolled memory growth.`},gotchas:["If you manually handle data events, you must manage flow yourself."]},{key:"clusterWorkers",title:"Cluster and worker threads",icon:e.jsx(j,{}),summary:"Cluster runs multiple Node processes. Worker threads run multiple threads inside one process. Choose based on workload.",bullets:["Cluster is great for scaling HTTP servers across CPU cores. Each worker is a separate process with its own event loop.","Worker threads are useful for CPU heavy tasks without blocking the main event loop.","For typical APIs, cluster helps with concurrency. For heavy compute, worker threads help keep requests responsive."],mentalModel:{title:"Mental model",text:"Cluster is multiple restaurants. Worker threads are multiple cooks inside one restaurant."},example:{title:"Example - when to use what",code:`// Use cluster: many HTTP requests, scale across CPU cores
// Use worker threads: image processing, encryption, heavy calculations

// Rule of thumb:
// - I/O bound: scale with cluster or more instances
// - CPU bound: use worker threads or external job workers`},gotchas:["Do not share memory assumptions across cluster processes.","Worker threads add complexity, use only when needed."]}],[]),x=n?c.filter(r=>r.key===n):c,h=()=>{p(r=>!r),o&&l(null)},u=r=>{l(a=>a===r?null:r)};return e.jsxs(S.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${o?"open":""}`,onClick:h,"aria-expanded":o,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(N,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Node internals"}),e.jsx("span",{className:"sub",children:"Event loop, timers, tasks, streams, buffers, and runtime scaling concepts"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:o?e.jsxs(e.Fragment,{children:[e.jsx(T,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(I,{})," Expand"]})}),e.jsx("span",{className:`chev ${o?"rot":""}`,children:e.jsx(d,{})})]})]}),e.jsxs("div",{className:`sectionBody ${o?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(M,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Why Node internals matter"}),e.jsx("div",{className:"introSub",children:"Backend interviews and real production debugging often depend on how well you understand Node.js behavior under load. These notes focus on practical behavior, not theory."})]})]}),e.jsx("div",{className:"grid",children:x.map(r=>{const a=m===r.key;return e.jsxs("div",{className:`card ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>u(r.key),"aria-expanded":a,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${a?"rot":""}`,children:e.jsx(d,{})})})]}),e.jsxs("div",{className:`cardBody ${a?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.bullets.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${r.key}-b-${t}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.mentalModel.title}),e.jsx("p",{className:"para",children:r.mentalModel.text})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.example.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.gotchas.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${r.key}-g-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(B,{})}),e.jsxs("span",{className:"hintText",children:["Revision tip: Explain ",r.title," in 2 lines like you are teaching a junior developer."]})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(C,{})}),e.jsx("span",{className:"closingText",children:"If your API feels slow or stuck, first suspect blocking code, uncontrolled concurrency, and missing backpressure."})]})]})]})};export{P as N};
