// src/topics/nodeInternals/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiClock,
    FiLayers,
    FiZap,
    FiGitPullRequest,
    FiArrowRight,
    FiPlay,
    FiPause,
    FiBookOpen,
    FiInfo,
    FiChevronDown,
    FiActivity,
    FiBox,
    FiWind,
} from "react-icons/fi";

const NodeInternals = ({ focusKey }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const topics = useMemo(
        () => [
            {
                key: "eventLoop",
                title: "Event loop",
                icon: <FiActivity />,
                summary:
                    "Node.js runs JavaScript on a single main thread and uses the event loop to keep work moving without blocking.",
                bullets: [
                    "Node.js is single threaded for JavaScript execution. It can still do many things at once because I/O work is handled by the OS and libuv.",
                    "The event loop is a loop that checks queues and runs callbacks when something is ready.",
                    "If you block the thread with heavy CPU work, the event loop cannot process other callbacks and your server feels stuck.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Think of the event loop as a smart receptionist. It picks the next ready task and runs it. If the receptionist is forced to do heavy work, the entire office stops.",
                },
                example: {
                    title: "Example - blocking vs non blocking",
                    code: `// Blocking example (bad for servers)
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
});`,
                },
                gotchas: [
                    "CPU heavy loops block everything.",
                    "Too many synchronous operations slow down all requests.",
                ],
            },
            {
                key: "timers",
                title: "Timers",
                icon: <FiClock />,
                summary:
                    "Timers schedule callbacks in the future. They do not guarantee exact timing, only that it runs after the delay when the event loop gets a chance.",
                bullets: [
                    "setTimeout runs once after at least the delay.",
                    "setInterval repeats, but delays can drift if the event loop is busy.",
                    "Use timers for retry backoff, cleanup jobs, and polling. Avoid using them as precise clocks.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A timer is like a reminder note. The reminder appears after the delay, but you still read it only when you are free.",
                },
                example: {
                    title: "Example - drift in intervals",
                    code: `let n = 0;

const id = setInterval(() => {
  n += 1;
  console.log("tick", n, new Date().toISOString());
  // If you do heavy work here, next ticks get delayed.
  if (n === 5) clearInterval(id);
}, 1000);`,
                },
                gotchas: [
                    "Intervals drift under load.",
                    "Do not run long work inside setInterval without control.",
                ],
            },
            {
                key: "microVsMacro",
                title: "Microtasks vs macrotasks",
                icon: <FiLayers />,
                summary:
                    "Microtasks run before the next macrotask. In Node.js, Promise callbacks are microtasks. Timers are macrotasks.",
                bullets: [
                    "Microtasks include Promise.then, queueMicrotask.",
                    "Macrotasks include setTimeout, setInterval, I/O callbacks.",
                    "If you keep scheduling microtasks forever, you can starve the event loop and timers feel delayed.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Microtasks are like urgent sticky notes that you must finish before you take the next normal task.",
                },
                example: {
                    title: "Example - order",
                    code: `console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");

// Typical output:
// A
// B
// promise
// timeout`,
                },
                gotchas: [
                    "Too many microtasks can delay timers and I/O callbacks.",
                ],
            },
            {
                key: "streams",
                title: "Streams",
                icon: <FiWind />,
                summary:
                    "Streams handle data in chunks instead of loading everything into memory. This is crucial for files, network, and large payloads.",
                bullets: [
                    "Readable stream produces chunks. Writable stream consumes chunks.",
                    "Transform stream modifies chunks (like gzip compression).",
                    "Streaming improves memory usage and lets you start sending data early.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Streaming is like drinking water with a straw. You do not need the entire bucket in your mouth to start drinking.",
                },
                example: {
                    title: "Example - pipe a file to response",
                    code: `import fs from "fs";

app.get("/download", (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  const stream = fs.createReadStream("./big.zip");
  stream.pipe(res);
});`,
                },
                gotchas: [
                    "Always handle errors on streams.",
                    "Streaming is safer for large files than fs.readFile.",
                ],
            },
            {
                key: "buffers",
                title: "Buffers",
                icon: <FiBox />,
                summary:
                    "Buffers represent raw binary data. They are used for network protocols, files, images, and any non-text payload.",
                bullets: [
                    "A Buffer is not the same as a string. A string is text. A Buffer is bytes.",
                    "Encoding matters: utf8, base64, hex.",
                    "When you receive data from a stream, you often get Buffer chunks.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A Buffer is a box of bytes. You can label it as text using an encoding, but the inside is still bytes.",
                },
                example: {
                    title: "Example - Buffer basics",
                    code: `const buf = Buffer.from("hello", "utf8");
console.log(buf); // <Buffer 68 65 6c 6c 6f>

console.log(buf.toString("utf8")); // hello
console.log(buf.toString("base64")); // aGVsbG8=`,
                },
                gotchas: [
                    "Wrong encoding leads to corrupted output.",
                    "Do not assume all data is utf8 text.",
                ],
            },
            {
                key: "backpressure",
                title: "Backpressure",
                icon: <FiGitPullRequest />,
                summary:
                    "Backpressure means the consumer cannot keep up with the producer. Streams support backpressure so memory does not explode.",
                bullets: [
                    "If you read too fast and write too slow, chunks pile up in memory.",
                    "pipe handles backpressure by pausing the readable when the writable is overloaded.",
                    "Backpressure is a core reason streams are safe for large data flows.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Backpressure is like traffic control. If the road ahead is jammed, you slow down new cars entering the road.",
                },
                example: {
                    title: "Example - why pipe is safe",
                    code: `// pipe automatically manages flow control
readableStream.pipe(writableStream);

// If writable is slow, readable gets paused.
// This prevents uncontrolled memory growth.`,
                },
                gotchas: [
                    "If you manually handle data events, you must manage flow yourself.",
                ],
            },
            {
                key: "clusterWorkers",
                title: "Cluster and worker threads",
                icon: <FiCpu />,
                summary:
                    "Cluster runs multiple Node processes. Worker threads run multiple threads inside one process. Choose based on workload.",
                bullets: [
                    "Cluster is great for scaling HTTP servers across CPU cores. Each worker is a separate process with its own event loop.",
                    "Worker threads are useful for CPU heavy tasks without blocking the main event loop.",
                    "For typical APIs, cluster helps with concurrency. For heavy compute, worker threads help keep requests responsive.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Cluster is multiple restaurants. Worker threads are multiple cooks inside one restaurant.",
                },
                example: {
                    title: "Example - when to use what",
                    code: `// Use cluster: many HTTP requests, scale across CPU cores
// Use worker threads: image processing, encryption, heavy calculations

// Rule of thumb:
// - I/O bound: scale with cluster or more instances
// - CPU bound: use worker threads or external job workers`,
                },
                gotchas: [
                    "Do not share memory assumptions across cluster processes.",
                    "Worker threads add complexity, use only when needed.",
                ],
            },
        ],
        [],
    );

    const visibleTopics = focusKey
        ? topics.filter((topic) => topic.key === focusKey)
        : topics;

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
                        <span className="title">Node internals</span>
                        <span className="sub">
                            Event loop, timers, tasks, streams, buffers, and
                            runtime scaling concepts
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
                            Why Node internals matter
                        </div>
                        <div className="introSub">
                            Backend interviews and real production debugging
                            often depend on how well you understand Node.js
                            behavior under load. These notes focus on practical
                            behavior, not theory.
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {visibleTopics.map((t) => {
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
                                            Revision tip: Explain {t.title} in 2
                                            lines like you are teaching a junior
                                            developer.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiZap />
                    </span>
                    <span className="closingText">
                        If your API feels slow or stuck, first suspect blocking
                        code, uncontrolled concurrency, and missing
                        backpressure.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default NodeInternals;
