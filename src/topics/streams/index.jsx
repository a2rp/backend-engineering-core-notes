// src/topics/streams/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiWind,
    FiBookOpen,
    FiInfo,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiArrowRight,
    FiAlertTriangle,
    FiZap,
    FiRepeat,
    FiDownload,
    FiUpload,
    FiShuffle,
    FiTool,
} from "react-icons/fi";

const Streams = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const topics = useMemo(
        () => [
            {
                key: "what",
                title: "What are streams",
                icon: <FiWind />,
                summary:
                    "Streams process data in chunks. You do not load everything into memory at once.",
                bullets: [
                    "Streams are built for large data: files, network responses, uploads, logs, video, zip, etc.",
                    "Instead of reading the full content, Node reads and writes small chunks over time.",
                    "This keeps memory stable and lets you start sending data immediately.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Streams are like a conveyor belt. Items arrive one by one, and you process each item without waiting for the whole truck to unload.",
                },
                example: {
                    title: "Example - why streams matter",
                    code: `// Bad for large files (loads everything into memory)
const data = await fs.promises.readFile("./big.mp4");
res.send(data);

// Good for large files (streams chunks)
fs.createReadStream("./big.mp4").pipe(res);`,
                },
                gotchas: [
                    "Avoid readFile for very large files in APIs.",
                    "Streaming starts response early, which is good for user experience.",
                ],
            },
            {
                key: "types",
                title: "Types of streams",
                icon: <FiShuffle />,
                summary:
                    "Node streams are mainly Readable, Writable, Duplex, and Transform.",
                bullets: [
                    "Readable - produces data chunks. Example: fs.createReadStream.",
                    "Writable - consumes chunks. Example: fs.createWriteStream.",
                    "Duplex - readable + writable. Example: TCP socket.",
                    "Transform - duplex that modifies chunks. Example: gzip compression.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Readable is a tap, Writable is a bucket, Duplex is a pipe both ways, Transform is a filter between tap and bucket.",
                },
                example: {
                    title: "Example - transform with gzip",
                    code: `import fs from "fs";
import zlib from "zlib";

const gzip = zlib.createGzip();

fs.createReadStream("./big.txt")
  .pipe(gzip)
  .pipe(fs.createWriteStream("./big.txt.gz"));`,
                },
                gotchas: [
                    "Transform streams are perfect for compression, encryption, and parsing.",
                ],
            },
            {
                key: "pipe",
                title: "pipe",
                icon: <FiRepeat />,
                summary:
                    "pipe connects streams and automatically handles flow control and backpressure.",
                bullets: [
                    "pipe forwards chunks from readable to writable.",
                    "pipe pauses reading if writable is slow, preventing memory growth.",
                    "pipe is safer than manual data event handling for most cases.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "pipe is an automatic hose with a smart valve. If the bucket fills too fast, it slows the water.",
                },
                example: {
                    title: "Example - file download",
                    code: `import fs from "fs";

app.get("/download", (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  fs.createReadStream("./big.zip").pipe(res);
});`,
                },
                gotchas: [
                    "Always attach error handlers, especially for file streams.",
                ],
            },
            {
                key: "backpressure",
                title: "Backpressure",
                icon: <FiZap />,
                summary:
                    "Backpressure means the receiver cannot keep up with the sender. Streams support this to prevent memory explosion.",
                bullets: [
                    "If the writable is slower, readable must pause to avoid buffering too much.",
                    "pipe manages backpressure automatically.",
                    "Without backpressure, Node can buffer huge amounts and crash your process.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Backpressure is traffic control. If the road ahead is jammed, you slow down cars entering the road.",
                },
                example: {
                    title: "Example - manual data handling needs control",
                    code: `// If you do manual streaming, you must handle pause/resume
readable.on("data", (chunk) => {
  const ok = writable.write(chunk);
  if (!ok) readable.pause();
});

writable.on("drain", () => {
  readable.resume();
});`,
                },
                gotchas: [
                    "Most bugs in manual streaming come from ignoring backpressure.",
                ],
            },
            {
                key: "errors",
                title: "Error handling",
                icon: <FiAlertTriangle />,
                summary:
                    "Streams can fail mid-way. Always handle errors to avoid crashes and partial responses.",
                bullets: [
                    "File missing, permission issues, broken network, client disconnect.",
                    "If you do not listen for error events, Node can crash.",
                    "When streaming to HTTP response, handle both stream errors and res close events.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A stream is a long-running operation. Anything can break during the journey, so you must handle failures along the way.",
                },
                example: {
                    title: "Example - safe streaming to response",
                    code: `import fs from "fs";

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
});`,
                },
                gotchas: [
                    "If client disconnects, destroy the stream to save resources.",
                    "If headers already sent, you cannot change status code.",
                ],
            },
            {
                key: "realUse",
                title: "Real backend uses",
                icon: <FiTool />,
                summary:
                    "Streams show up in many backend features. Knowing them improves performance and stability.",
                bullets: [
                    "File uploads and downloads",
                    "Proxying request bodies to another service",
                    "Logging pipelines and ETL style processing",
                    "Compression and encryption middleware",
                    "Large JSON parsing with streaming parsers",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Any time data is big or continuous, streaming is the safest and most scalable shape.",
                },
                example: {
                    title: "Example - streaming upload to disk",
                    code: `import fs from "fs";

// req is a readable stream in Node HTTP
app.post("/upload", (req, res) => {
  const out = fs.createWriteStream("./upload.bin");
  req.pipe(out);

  out.on("finish", () => res.send("uploaded"));
  out.on("error", () => res.status(500).send("write failed"));
});`,
                },
                gotchas: [
                    "Validate size and type for uploads. Streams do not remove security risks.",
                ],
            },
        ],
        [],
    );

    const handleToggleMain = () => {
        setIsOpen((v) => !v);
        if (isOpen) setActiveKey(null);
    };

    const handleToggleItem = (key) => {
        setActiveKey((prev) => (prev === key ? null : key));
    };

    return (
        <Styled.Wrapper>
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={handleToggleMain}
                aria-expanded={isOpen}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiBookOpen />
                    </span>
                    <span className="text">
                        <span className="title">Streams</span>
                        <span className="sub">
                            Chunked data flow, pipe, backpressure, error
                            handling
                        </span>
                    </span>
                </span>

                <span className="right">
                    <span className="pill">
                        {isOpen ? (
                            <>
                                <FiPause /> Collapse
                            </>
                        ) : (
                            <>
                                <FiPlay /> Expand
                            </>
                        )}
                    </span>
                    <span className={`chev ${isOpen ? "rot" : ""}`}>
                        <FiChevronDown />
                    </span>
                </span>
            </button>

            <div className={`sectionBody ${isOpen ? "show" : ""}`}>
                <div className="intro">
                    <div className="introIcon">
                        <FiInfo />
                    </div>
                    <div className="introText">
                        <div className="introTitle">
                            Why streams are a core backend skill
                        </div>
                        <div className="introSub">
                            Streams help you build fast and memory-safe APIs.
                            They are critical for large files, network proxying,
                            uploads, downloads, and compression pipelines.
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {topics.map((t) => {
                        const open = activeKey === t.key;

                        return (
                            <div
                                key={t.key}
                                className={`card ${open ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="cardHeader"
                                    onClick={() => handleToggleItem(t.key)}
                                    aria-expanded={open}
                                >
                                    <span className="cLeft">
                                        <span className="cIcon">{t.icon}</span>
                                        <span className="cText">
                                            <span className="cTitle">
                                                {t.title}
                                            </span>
                                            <span className="cSummary">
                                                {t.summary}
                                            </span>
                                        </span>
                                    </span>

                                    <span className="cRight">
                                        <span
                                            className={`cChev ${
                                                open ? "rot" : ""
                                            }`}
                                        >
                                            <FiChevronDown />
                                        </span>
                                    </span>
                                </button>

                                <div
                                    className={`cardBody ${open ? "show" : ""}`}
                                >
                                    <div className="block">
                                        <div className="blockTitle">
                                            Key points
                                        </div>
                                        <ul className="list">
                                            {t.bullets.map((b, idx) => (
                                                <li key={`${t.key}-b-${idx}`}>
                                                    <span className="dot" />
                                                    <span className="liText">
                                                        {b}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            {t.mentalModel.title}
                                        </div>
                                        <p className="para">
                                            {t.mentalModel.text}
                                        </p>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            {t.example.title}
                                        </div>
                                        <pre className="code">
                                            <code>{t.example.code}</code>
                                        </pre>
                                    </div>

                                    <div className="block warn">
                                        <div className="blockTitle">
                                            Common pitfalls
                                        </div>
                                        <ul className="list">
                                            {t.gotchas.map((g, idx) => (
                                                <li key={`${t.key}-g-${idx}`}>
                                                    <span className="dot" />
                                                    <span className="liText">
                                                        {g}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="footerHint">
                                        <span className="hintIcon">
                                            <FiArrowRight />
                                        </span>
                                        <span className="hintText">
                                            Revision tip: Explain streams and
                                            backpressure with a simple "tap and
                                            bucket" story.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiDownload />
                    </span>
                    <span className="closingText">
                        Production habit: Prefer streaming for big data. It
                        saves memory, reduces latency, and avoids backend
                        crashes.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Streams;
