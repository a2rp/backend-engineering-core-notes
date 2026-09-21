import{c as h,r as i,j as e,C as g,D as u,E as f,y as b,o as y,H as v,b as w,p as k,q as j,s as l,t as N,F as T,I as S}from"./index-w7GzmdvE.js";const I={Wrapper:h.section`
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
    `},F=()=>{const[a,c]=i.useState(!1),[d,n]=i.useState(null),p=i.useMemo(()=>[{key:"what",title:"What are streams",icon:e.jsx(g,{}),summary:"Streams process data in chunks. You do not load everything into memory at once.",bullets:["Streams are built for large data: files, network responses, uploads, logs, video, zip, etc.","Instead of reading the full content, Node reads and writes small chunks over time.","This keeps memory stable and lets you start sending data immediately."],mentalModel:{title:"Mental model",text:"Streams are like a conveyor belt. Items arrive one by one, and you process each item without waiting for the whole truck to unload."},example:{title:"Example - why streams matter",code:`// Bad for large files (loads everything into memory)
const data = await fs.promises.readFile("./big.mp4");
res.send(data);

// Good for large files (streams chunks)
fs.createReadStream("./big.mp4").pipe(res);`},gotchas:["Avoid readFile for very large files in APIs.","Streaming starts response early, which is good for user experience."]},{key:"types",title:"Types of streams",icon:e.jsx(u,{}),summary:"Node streams are mainly Readable, Writable, Duplex, and Transform.",bullets:["Readable - produces data chunks. Example: fs.createReadStream.","Writable - consumes chunks. Example: fs.createWriteStream.","Duplex - readable + writable. Example: TCP socket.","Transform - duplex that modifies chunks. Example: gzip compression."],mentalModel:{title:"Mental model",text:"Readable is a tap, Writable is a bucket, Duplex is a pipe both ways, Transform is a filter between tap and bucket."},example:{title:"Example - transform with gzip",code:`import fs from "fs";
import zlib from "zlib";

const gzip = zlib.createGzip();

fs.createReadStream("./big.txt")
  .pipe(gzip)
  .pipe(fs.createWriteStream("./big.txt.gz"));`},gotchas:["Transform streams are perfect for compression, encryption, and parsing."]},{key:"pipe",title:"pipe",icon:e.jsx(f,{}),summary:"pipe connects streams and automatically handles flow control and backpressure.",bullets:["pipe forwards chunks from readable to writable.","pipe pauses reading if writable is slow, preventing memory growth.","pipe is safer than manual data event handling for most cases."],mentalModel:{title:"Mental model",text:"pipe is an automatic hose with a smart valve. If the bucket fills too fast, it slows the water."},example:{title:"Example - file download",code:`import fs from "fs";

app.get("/download", (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  fs.createReadStream("./big.zip").pipe(res);
});`},gotchas:["Always attach error handlers, especially for file streams."]},{key:"backpressure",title:"Backpressure",icon:e.jsx(b,{}),summary:"Backpressure means the receiver cannot keep up with the sender. Streams support this to prevent memory explosion.",bullets:["If the writable is slower, readable must pause to avoid buffering too much.","pipe manages backpressure automatically.","Without backpressure, Node can buffer huge amounts and crash your process."],mentalModel:{title:"Mental model",text:"Backpressure is traffic control. If the road ahead is jammed, you slow down cars entering the road."},example:{title:"Example - manual data handling needs control",code:`// If you do manual streaming, you must handle pause/resume
readable.on("data", (chunk) => {
  const ok = writable.write(chunk);
  if (!ok) readable.pause();
});

writable.on("drain", () => {
  readable.resume();
});`},gotchas:["Most bugs in manual streaming come from ignoring backpressure."]},{key:"errors",title:"Error handling",icon:e.jsx(y,{}),summary:"Streams can fail mid-way. Always handle errors to avoid crashes and partial responses.",bullets:["File missing, permission issues, broken network, client disconnect.","If you do not listen for error events, Node can crash.","When streaming to HTTP response, handle both stream errors and res close events."],mentalModel:{title:"Mental model",text:"A stream is a long-running operation. Anything can break during the journey, so you must handle failures along the way."},example:{title:"Example - safe streaming to response",code:`import fs from "fs";

app.get("/download", (req, res) => {
  const stream = fs.createReadStream("./big.zip");

  stream.on("error", () => {
    if (!res.headersSent) res.status(500).send("File error");
    else res.end();
  });

  res.on("close", () => {
    // client disconnected
    stream.destroy();
  });

  stream.pipe(res);
});`},gotchas:["If client disconnects, destroy the stream to save resources.","If headers already sent, you cannot change status code."]},{key:"realUse",title:"Real backend uses",icon:e.jsx(v,{}),summary:"Streams show up in many backend features. Knowing them improves performance and stability.",bullets:["File uploads and downloads","Proxying request bodies to another service","Logging pipelines and ETL style processing","Compression and encryption middleware","Large JSON parsing with streaming parsers"],mentalModel:{title:"Mental model",text:"Any time data is big or continuous, streaming is the safest and most scalable shape."},example:{title:"Example - streaming upload to disk",code:`import fs from "fs";

// req is a readable stream in Node HTTP
app.post("/upload", (req, res) => {
  const out = fs.createWriteStream("./upload.bin");
  req.pipe(out);

  out.on("finish", () => res.send("uploaded"));
  out.on("error", () => res.status(500).send("write failed"));
});`},gotchas:["Validate size and type for uploads. Streams do not remove security risks."]}],[]),m=()=>{c(r=>!r),a&&n(null)},x=r=>{n(o=>o===r?null:r)};return e.jsxs(I.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:m,"aria-expanded":a,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(w,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Streams"}),e.jsx("span",{className:"sub",children:"Chunked data flow, pipe, backpressure, error handling"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:a?e.jsxs(e.Fragment,{children:[e.jsx(k,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Expand"]})}),e.jsx("span",{className:`chev ${a?"rot":""}`,children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(N,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Why streams are a core backend skill"}),e.jsx("div",{className:"introSub",children:"Streams help you build fast and memory-safe APIs. They are critical for large files, network proxying, uploads, downloads, and compression pipelines."})]})]}),e.jsx("div",{className:"grid",children:p.map(r=>{const o=d===r.key;return e.jsxs("div",{className:`card ${o?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>x(r.key),"aria-expanded":o,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${o?"rot":""}`,children:e.jsx(l,{})})})]}),e.jsxs("div",{className:`cardBody ${o?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.bullets.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${r.key}-b-${t}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.mentalModel.title}),e.jsx("p",{className:"para",children:r.mentalModel.text})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.example.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.gotchas.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${r.key}-g-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(T,{})}),e.jsx("span",{className:"hintText",children:'Revision tip: Explain streams and backpressure with a simple "tap and bucket" story.'})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(S,{})}),e.jsx("span",{className:"closingText",children:"Production habit: Prefer streaming for big data. It saves memory, reduces latency, and avoids backend crashes."})]})]})]})};export{F as S};
