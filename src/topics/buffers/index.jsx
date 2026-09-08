// src/topics/buffers/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiBox,
    FiCpu,
    FiInfo,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiBookOpen,
    FiArrowRight,
    FiZap,
    FiAlertTriangle,
    FiHash,
    FiFileText,
    FiGlobe,
} from "react-icons/fi";

const Buffers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const cards = useMemo(
        () => [
            {
                key: "whatIs",
                title: "What is a Buffer",
                icon: <FiBox />,
                summary:
                    "A Buffer is a Node.js type used to store raw binary bytes. It is how Node represents data from files, sockets, and streams.",
                bullets: [
                    "A string is text. A Buffer is bytes.",
                    "Buffers are used for network protocols, file I/O, images, audio, and any non-text payload.",
                    "When Node receives data from streams, you often get Buffer chunks.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A Buffer is a box of bytes. You can interpret those bytes as text using an encoding, but the inside is always raw bytes.",
                },
            },
            {
                key: "create",
                title: "Creating buffers",
                icon: <FiCpu />,
                summary:
                    "Buffers can be created from strings, allocated with a size, or created from an array of bytes.",
                bullets: [
                    "Buffer.from creates a Buffer from a string or array.",
                    "Buffer.alloc creates a zero-filled Buffer of a fixed size.",
                    "Buffer.allocUnsafe is faster but may contain old memory. Use it only when you overwrite the buffer fully.",
                ],
                example: {
                    title: "Examples - from and alloc",
                    code: `// from string
const a = Buffer.from("hello", "utf8");
console.log(a); // <Buffer 68 65 6c 6c 6f>

// fixed size (safe)
const b = Buffer.alloc(10);
console.log(b); // 10 bytes, all 0

// faster, unsafe if you do not fill it
const c = Buffer.allocUnsafe(10);
c.fill(0); // overwrite to make it safe in practice`,
                },
                gotchas: [
                    "Avoid Buffer.allocUnsafe unless you understand the risk.",
                    "Always be clear about encoding when converting to or from strings.",
                ],
            },
            {
                key: "encoding",
                title: "Encodings",
                icon: <FiHash />,
                summary:
                    "Encoding is how bytes are interpreted as text or how text is converted into bytes. Common encodings are utf8, base64, and hex.",
                bullets: [
                    "utf8 is standard text encoding.",
                    "base64 is common for transporting binary in text formats like JSON.",
                    "hex is useful for debugging byte content.",
                ],
                example: {
                    title: "Examples - utf8, base64, hex",
                    code: `const buf = Buffer.from("hi", "utf8");

console.log(buf.toString("utf8"));   // hi
console.log(buf.toString("base64")); // aGk=
console.log(buf.toString("hex"));    // 6869

// reverse base64 to bytes
const back = Buffer.from("aGk=", "base64");
console.log(back.toString("utf8")); // hi`,
                },
                gotchas: [
                    "Wrong encoding can corrupt data or show weird characters.",
                    "Do not assume every Buffer is text data.",
                ],
            },
            {
                key: "streams",
                title: "Buffers with streams",
                icon: <FiGlobe />,
                summary:
                    "Streams emit data as Buffer chunks (unless you set an encoding). This is how Node handles large data efficiently.",
                bullets: [
                    "Readable streams emit chunks: Buffer by default.",
                    "You can call stream.setEncoding('utf8') to get strings instead.",
                    "For binary files, do not set encoding. Keep Buffer chunks.",
                ],
                example: {
                    title: "Example - collecting stream data",
                    code: `import fs from "fs";

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

s.on("error", (err) => console.error(err));`,
                },
                gotchas: [
                    "Collecting all chunks defeats streaming. Prefer piping for large files.",
                    "Always handle stream errors.",
                ],
            },
            {
                key: "compareString",
                title: "Buffer vs string",
                icon: <FiFileText />,
                summary:
                    "Strings are for human readable text. Buffers are for raw bytes. Mixing them without encoding awareness causes bugs.",
                bullets: [
                    "String length counts characters, Buffer length counts bytes.",
                    "Some characters take multiple bytes in utf8.",
                    "Use Buffer when dealing with sockets, files, crypto, compression, images.",
                ],
                example: {
                    title: "Example - bytes vs characters",
                    code: `const s = "✓"; // a check mark
console.log(s.length); // 1 character

const b = Buffer.from(s, "utf8");
console.log(b.length); // 3 bytes in utf8`,
                },
                gotchas: [
                    "Never use string operations for binary data.",
                    "When you log buffers, use hex for debugging.",
                ],
            },
            {
                key: "security",
                title: "Security and safety notes",
                icon: <FiAlertTriangle />,
                summary:
                    "Buffers are low level. Unsafe usage can leak memory or break payloads. Follow safe patterns by default.",
                bullets: [
                    "Prefer Buffer.alloc over allocUnsafe for safety.",
                    "Do not trust incoming bytes - validate sizes and limits.",
                    "In servers, enforce max payload sizes to avoid memory pressure.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Buffers are like raw electricity. Powerful and necessary, but you need insulation and safety rules.",
                },
            },
        ],
        [],
    );

    const handleToggleMain = () => {
        setIsOpen((v) => !v);
        if (isOpen) setActiveKey(null);
    };

    const handleToggleCard = (key) => {
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
                        <span className="title">Buffers</span>
                        <span className="sub">
                            Raw bytes, encodings, streams, and safe usage in
                            Node.js
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
                        <div className="introTitle">Why buffers matter</div>
                        <div className="introSub">
                            Buffers show up everywhere in backend work - files,
                            APIs, streams, uploads, images, crypto, compression,
                            and sockets. If you understand buffers, you debug
                            low level issues faster and avoid encoding bugs.
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {cards.map((c) => {
                        const open = activeKey === c.key;

                        return (
                            <div
                                key={c.key}
                                className={`card ${open ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="cardHeader"
                                    onClick={() => handleToggleCard(c.key)}
                                    aria-expanded={open}
                                >
                                    <span className="cLeft">
                                        <span className="cIcon">{c.icon}</span>
                                        <span className="cText">
                                            <span className="cTitle">
                                                {c.title}
                                            </span>
                                            <span className="cSummary">
                                                {c.summary}
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
                                            {c.bullets.map((b, idx) => (
                                                <li key={`${c.key}-b-${idx}`}>
                                                    <span className="dot" />
                                                    <span className="liText">
                                                        {b}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {c.mentalModel && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                {c.mentalModel.title}
                                            </div>
                                            <p className="para">
                                                {c.mentalModel.text}
                                            </p>
                                        </div>
                                    )}

                                    {c.example && (
                                        <div className="block">
                                            <div className="blockTitle">
                                                {c.example.title}
                                            </div>
                                            <pre className="code">
                                                <code>{c.example.code}</code>
                                            </pre>
                                        </div>
                                    )}

                                    {c.gotchas && (
                                        <div className="block warn">
                                            <div className="blockTitle">
                                                Common pitfalls
                                            </div>
                                            <ul className="list">
                                                {c.gotchas.map((g, idx) => (
                                                    <li
                                                        key={`${c.key}-g-${idx}`}
                                                    >
                                                        <span className="dot" />
                                                        <span className="liText">
                                                            {g}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="footerHint">
                                        <span className="hintIcon">
                                            <FiArrowRight />
                                        </span>
                                        <span className="hintText">
                                            Revision tip: Explain Buffers in 2
                                            lines and give one encoding example.
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
                        Most weird backend bugs are either timing issues or
                        encoding issues. Buffers solve the second category when
                        you treat bytes carefully.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Buffers;
