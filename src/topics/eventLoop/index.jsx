// src/topics/eventLoop/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiActivity,
    FiBookOpen,
    FiChevronDown,
    FiCpu,
    FiClock,
    FiLayers,
    FiZap,
    FiAlertTriangle,
    FiArrowRight,
    FiPlay,
    FiPause,
    FiGitPullRequest,
} from "react-icons/fi";

const EventLoop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("overview");

    const blocks = useMemo(
        () => [
            {
                key: "overview",
                title: "What it is",
                icon: <FiActivity />,
                summary:
                    "The event loop is how Node.js keeps handling many tasks without blocking the main JavaScript thread.",
                points: [
                    "JavaScript runs on one main thread, one call stack",
                    "I/O work is handled by the OS and libuv, then callbacks get queued",
                    "The event loop picks ready callbacks and runs them when the stack is free",
                ],
                mentalModel:
                    "Think of the event loop as a scheduler that keeps checking queues. It runs the next ready callback only when the main thread is free.",
            },
            {
                key: "phases",
                title: "Phases and queues",
                icon: <FiLayers />,
                summary:
                    "Node has multiple phases. Timers and I/O callbacks do not run in the same moment, they run when their phase is reached.",
                points: [
                    "Timers phase - runs setTimeout and setInterval callbacks when due",
                    "I/O callbacks phase - runs callbacks for completed I/O",
                    "Poll phase - waits for I/O and processes ready I/O events",
                    "Check phase - runs setImmediate callbacks",
                    "Close callbacks - runs close events like socket close",
                ],
                mentalModel:
                    "Picture a roundabout with lanes. Each lane is a phase. The loop drives around and picks tasks from each lane in order.",
            },
            {
                key: "microtasks",
                title: "Microtasks vs macrotasks",
                icon: <FiZap />,
                summary:
                    "Microtasks run before the next macrotask. Promise callbacks are microtasks. Timers and I/O callbacks are macrotasks.",
                points: [
                    "Microtasks - Promise.then, queueMicrotask",
                    "Macrotasks - setTimeout, setInterval, I/O callbacks, setImmediate",
                    "Too many microtasks can starve timers and make your server feel delayed",
                ],
                mentalModel:
                    "Microtasks are urgent sticky notes you must finish before picking the next normal task.",
            },
            {
                key: "blocking",
                title: "Blocking the event loop",
                icon: <FiCpu />,
                summary:
                    "If you block the main thread, Node cannot process other requests. This is the most common reason APIs feel stuck.",
                points: [
                    "CPU heavy loops block everything - no requests handled during that time",
                    "Sync filesystem calls block - avoid fs.readFileSync in request path",
                    "Big JSON parsing and huge loops also block under load",
                ],
                mentalModel:
                    "One cashier, many customers. If the cashier starts doing heavy accounting, the queue stops moving.",
            },
            {
                key: "practical",
                title: "Practical backend signals",
                icon: <FiGitPullRequest />,
                summary:
                    "In production, event loop issues show up as slow responses, timeouts, and delayed timers under load.",
                points: [
                    "Timers drift - setInterval ticks late when the loop is busy",
                    "P99 latency increases - tail latency grows when blocking happens",
                    "Requests pile up - your reverse proxy queue grows",
                ],
                mentalModel:
                    "When the loop is healthy, callbacks run smoothly. When it is blocked, everything waits longer than expected.",
            },
        ],
        [],
    );

    const examples = useMemo(
        () => [
            {
                title: "Order example - sync, promise, timeout",
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
            {
                title: "Blocking example - busy loop",
                code: `app.get("/heavy", (req, res) => {
  const start = Date.now();

  while (Date.now() - start < 2000) {
    // busy loop for 2 seconds
  }

  res.send("done");
});

// During those 2 seconds, other requests wait.
// Fix: move CPU work to a worker thread or a separate service.`,
            },
            {
                title: "Timers drift example - interval under load",
                code: `let tick = 0;

const id = setInterval(() => {
  tick += 1;
  console.log("tick", tick, new Date().toISOString());

  // simulate heavy work
  const start = Date.now();
  while (Date.now() - start < 300) {}

  if (tick === 8) clearInterval(id);
}, 200);`,
            },
        ],
        [],
    );

    const pitfalls = useMemo(
        () => [
            "Using synchronous fs calls in request handlers",
            "Doing CPU heavy loops inside routes",
            "Spawning too many microtasks that delay timers",
            "Assuming setTimeout(0) runs immediately",
        ],
        [],
    );

    const handleToggleMain = () => {
        setIsOpen((v) => !v);
    };

    const handleSelect = (key) => {
        setActiveKey(key);
    };

    return (
        <Styled.Wrapper>
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={handleToggleMain}
                aria-expanded={isOpen}
                aria-controls="event-loop-body"
            >
                <span className="left">
                    <span className="sIcon">
                        <FiBookOpen />
                    </span>

                    <span className="text">
                        <span className="title">Event loop</span>
                        <span className="sub">
                            How Node.js schedules callbacks and why blocking
                            code makes APIs slow
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

            <div
                className={`sectionBody ${isOpen ? "show" : ""}`}
            >
                <div className="topNote">
                    <span className="noteIcon">
                        <FiClock />
                    </span>
                    <div className="noteText">
                        <div className="noteTitle">
                            Interview line you should remember
                        </div>
                        <div className="noteSub">
                            Node.js is single threaded for JavaScript execution,
                            but it handles many tasks via non blocking I/O and
                            the event loop. If you block the loop, your API
                            stalls.
                        </div>
                    </div>
                </div>

                <div className="layout">
                    <div className="leftNav">
                        {blocks.map((b) => {
                            const active = activeKey === b.key;

                            return (
                                <button
                                    key={b.key}
                                    type="button"
                                    className={`navItem ${
                                        active ? "active" : ""
                                    }`}
                                    onClick={() => handleSelect(b.key)}
                                    aria-pressed={active}
                                >
                                    <span className="nIcon">{b.icon}</span>
                                    <span className="nText">
                                        <span className="nTitle">
                                            {b.title}
                                        </span>
                                        <span className="nSub">
                                            {b.summary}
                                        </span>
                                    </span>
                                    <span className="nArrow">
                                        <FiArrowRight />
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="rightContent">
                        {blocks.map((b) => {
                            const show = activeKey === b.key;

                            return (
                                <div
                                    key={b.key}
                                    className={`panel ${show ? "show" : ""}`}
                                >
                                    <div className="panelHeader">
                                        <div className="pIcon">{b.icon}</div>
                                        <div className="pHeadText">
                                            <div className="pTitle">
                                                {b.title}
                                            </div>
                                            <div className="pSummary">
                                                {b.summary}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panelBody">
                                        <div className="block">
                                            <div className="blockTitle">
                                                Key points
                                            </div>
                                            <ul className="list">
                                                {b.points.map((p, idx) => (
                                                    <li
                                                        key={`${b.key}-p-${idx}`}
                                                    >
                                                        <span className="dot" />
                                                        <span className="liText">
                                                            {p}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="block">
                                            <div className="blockTitle">
                                                Mental model
                                            </div>
                                            <p className="para">
                                                {b.mentalModel}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="extra">
                            <div className="extraTitle">
                                Examples you can explain in an interview
                            </div>

                            <div className="examplesGrid">
                                {examples.map((ex, idx) => (
                                    <div className="exCard" key={`ex-${idx}`}>
                                        <div className="exHead">
                                            <span className="exIcon">
                                                <FiZap />
                                            </span>
                                            <span className="exName">
                                                {ex.title}
                                            </span>
                                        </div>

                                        <pre className="code">
                                            <code>{ex.code}</code>
                                        </pre>
                                    </div>
                                ))}
                            </div>

                            <div className="pitfalls">
                                <div className="pitTitle">
                                    <span className="pitIcon">
                                        <FiAlertTriangle />
                                    </span>
                                    <span className="pitText">
                                        Common pitfalls
                                    </span>
                                </div>

                                <ul className="list">
                                    {pitfalls.map((g, idx) => (
                                        <li key={`pit-${idx}`}>
                                            <span className="dot warn" />
                                            <span className="liText">{g}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="closing">
                                <span className="cIcon">
                                    <FiArrowRight />
                                </span>
                                <span className="cText">
                                    Revision tip: Explain the event loop in 2
                                    lines, then give one blocking example, then
                                    show promise vs timeout order.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default EventLoop;
