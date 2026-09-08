import{c as m,r as i,j as e,J as u,z as h,n as g,v as b,K as y,o as v,b as w,p as j,q as k,s as l,t as N,F as B,y as T}from"./index-Cfj_xNHZ.js";const F={Wrapper:m.section`
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
    `},S=()=>{const[o,c]=i.useState(!1),[d,n]=i.useState(null),x=i.useMemo(()=>[{key:"whatIs",title:"What is a Buffer",icon:e.jsx(u,{}),summary:"A Buffer is a Node.js type used to store raw binary bytes. It is how Node represents data from files, sockets, and streams.",bullets:["A string is text. A Buffer is bytes.","Buffers are used for network protocols, file I/O, images, audio, and any non-text payload.","When Node receives data from streams, you often get Buffer chunks."],mentalModel:{title:"Mental model",text:"A Buffer is a box of bytes. You can interpret those bytes as text using an encoding, but the inside is always raw bytes."}},{key:"create",title:"Creating buffers",icon:e.jsx(h,{}),summary:"Buffers can be created from strings, allocated with a size, or created from an array of bytes.",bullets:["Buffer.from creates a Buffer from a string or array.","Buffer.alloc creates a zero-filled Buffer of a fixed size.","Buffer.allocUnsafe is faster but may contain old memory. Use it only when you overwrite the buffer fully."],example:{title:"Examples - from and alloc",code:`// from string
const a = Buffer.from("hello", "utf8");
console.log(a); // <Buffer 68 65 6c 6c 6f>

// fixed size (safe)
const b = Buffer.alloc(10);
console.log(b); // 10 bytes, all 0

// faster, unsafe if you do not fill it
const c = Buffer.allocUnsafe(10);
c.fill(0); // overwrite to make it safe in practice`},gotchas:["Avoid Buffer.allocUnsafe unless you understand the risk.","Always be clear about encoding when converting to or from strings."]},{key:"encoding",title:"Encodings",icon:e.jsx(g,{}),summary:"Encoding is how bytes are interpreted as text or how text is converted into bytes. Common encodings are utf8, base64, and hex.",bullets:["utf8 is standard text encoding.","base64 is common for transporting binary in text formats like JSON.","hex is useful for debugging byte content."],example:{title:"Examples - utf8, base64, hex",code:`const buf = Buffer.from("hi", "utf8");

console.log(buf.toString("utf8"));   // hi
console.log(buf.toString("base64")); // aGk=
console.log(buf.toString("hex"));    // 6869

// reverse base64 to bytes
const back = Buffer.from("aGk=", "base64");
console.log(back.toString("utf8")); // hi`},gotchas:["Wrong encoding can corrupt data or show weird characters.","Do not assume every Buffer is text data."]},{key:"streams",title:"Buffers with streams",icon:e.jsx(b,{}),summary:"Streams emit data as Buffer chunks (unless you set an encoding). This is how Node handles large data efficiently.",bullets:["Readable streams emit chunks: Buffer by default.","You can call stream.setEncoding('utf8') to get strings instead.","For binary files, do not set encoding. Keep Buffer chunks."],example:{title:"Example - collecting stream data",code:`import fs from "fs";

const chunks = [];
const s = fs.createReadStream("./big.bin");

s.on("data", (chunk) => {
  // chunk is a Buffer
  chunks.push(chunk);
});

s.on("end", () => {
  const full = Buffer.concat(chunks);
  console.log("bytes", full.length);
});

s.on("error", (err) => console.error(err));`},gotchas:["Collecting all chunks defeats streaming. Prefer piping for large files.","Always handle stream errors."]},{key:"compareString",title:"Buffer vs string",icon:e.jsx(y,{}),summary:"Strings are for human readable text. Buffers are for raw bytes. Mixing them without encoding awareness causes bugs.",bullets:["String length counts characters, Buffer length counts bytes.","Some characters take multiple bytes in utf8.","Use Buffer when dealing with sockets, files, crypto, compression, images."],example:{title:"Example - bytes vs characters",code:`const s = "✓"; // a check mark
console.log(s.length); // 1 character

const b = Buffer.from(s, "utf8");
console.log(b.length); // 3 bytes in utf8`},gotchas:["Never use string operations for binary data.","When you log buffers, use hex for debugging."]},{key:"security",title:"Security and safety notes",icon:e.jsx(v,{}),summary:"Buffers are low level. Unsafe usage can leak memory or break payloads. Follow safe patterns by default.",bullets:["Prefer Buffer.alloc over allocUnsafe for safety.","Do not trust incoming bytes - validate sizes and limits.","In servers, enforce max payload sizes to avoid memory pressure."],mentalModel:{title:"Mental model",text:"Buffers are like raw electricity. Powerful and necessary, but you need insulation and safety rules."}}],[]),p=()=>{c(r=>!r),o&&n(null)},f=r=>{n(a=>a===r?null:r)};return e.jsxs(F.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${o?"open":""}`,onClick:p,"aria-expanded":o,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(w,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Buffers"}),e.jsx("span",{className:"sub",children:"Raw bytes, encodings, streams, and safe usage in Node.js"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:o?e.jsxs(e.Fragment,{children:[e.jsx(j,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{})," Expand"]})}),e.jsx("span",{className:`chev ${o?"rot":""}`,children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:`sectionBody ${o?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(N,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Why buffers matter"}),e.jsx("div",{className:"introSub",children:"Buffers show up everywhere in backend work - files, APIs, streams, uploads, images, crypto, compression, and sockets. If you understand buffers, you debug low level issues faster and avoid encoding bugs."})]})]}),e.jsx("div",{className:"grid",children:x.map(r=>{const a=d===r.key;return e.jsxs("div",{className:`card ${a?"open":""}`,children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>f(r.key),"aria-expanded":a,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${a?"rot":""}`,children:e.jsx(l,{})})})]}),e.jsxs("div",{className:`cardBody ${a?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.bullets.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${r.key}-b-${t}`))})]}),r.mentalModel&&e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.mentalModel.title}),e.jsx("p",{className:"para",children:r.mentalModel.text})]}),r.example&&e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:r.example.title}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.example.code})})]}),r.gotchas&&e.jsxs("div",{className:"block warn",children:[e.jsx("div",{className:"blockTitle",children:"Common pitfalls"}),e.jsx("ul",{className:"list",children:r.gotchas.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:s})]},`${r.key}-g-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(B,{})}),e.jsx("span",{className:"hintText",children:"Revision tip: Explain Buffers in 2 lines and give one encoding example."})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(T,{})}),e.jsx("span",{className:"closingText",children:"Most weird backend bugs are either timing issues or encoding issues. Buffers solve the second category when you treat bytes carefully."})]})]})]})};export{S as B};
