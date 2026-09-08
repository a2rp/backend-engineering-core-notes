// src/topics/hashing/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiHash,
    FiLock,
    FiShield,
    FiAlertTriangle,
    FiCheckCircle,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiBookOpen,
    FiInfo,
    FiZap,
    FiKey,
    FiCode,
    FiLayers,
} from "react-icons/fi";

const Hashing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const cards = useMemo(
        () => [
            {
                key: "whatIsHashing",
                icon: <FiHash />,
                title: "What is hashing",
                summary:
                    "Hashing converts input into a fixed length output called a hash. Same input gives same hash.",
                points: [
                    "A hash function maps data of any size to a fixed size output.",
                    "It is one-way - you cannot reliably get the original input back from the hash.",
                    "Small input change causes a big hash change (avalanche effect).",
                    "Good hashes resist collisions - two different inputs producing the same hash.",
                ],
                mentalModel:
                    "Hashing is like a fingerprint for data. You can compare fingerprints, but you cannot reconstruct the person from the fingerprint.",
                code: `// Node.js crypto hashing (fast hash)
// Use fast hashes for integrity, not for passwords

import crypto from "crypto";

const input = "hello";
const sha256 = crypto.createHash("sha256").update(input, "utf8").digest("hex");

console.log(sha256);`,
                gotchas: [
                    "Fast hashes like SHA-256 are not safe for storing passwords.",
                    "Hashing is not encryption. Encryption is reversible with a key, hashing is not.",
                ],
            },
            {
                key: "passwordStorage",
                icon: <FiLock />,
                title: "Password storage",
                summary:
                    "Passwords must be stored using slow, salted password hashing algorithms like bcrypt, scrypt, or Argon2.",
                points: [
                    "Never store plain text passwords.",
                    "Never store password hashes with fast hashes like MD5, SHA-1, SHA-256.",
                    "Use bcrypt, scrypt, or Argon2 because they are slow and expensive to brute force.",
                    "Store only the hash output and the salt (salt is usually included in bcrypt output).",
                ],
                mentalModel:
                    "A slow password hash is like making an attacker pay a heavy fee for every guess. That fee is what buys you safety.",
                code: `// Example using bcrypt (concept)
// Install: npm i bcrypt

import bcrypt from "bcrypt";

const password = "MySecretPass123";
const rounds = 12;

// Signup - hash and store
const hash = await bcrypt.hash(password, rounds);
// store hash in DB

// Login - verify
const ok = await bcrypt.compare(password, hash);
console.log(ok);`,
                gotchas: [
                    "Do not lower cost too much. Too low means easy brute force.",
                    "Do not re-hash a bcrypt hash again with SHA. It usually makes things worse and breaks upgrades.",
                ],
            },
            {
                key: "saltPepper",
                icon: <FiLayers />,
                title: "Salt and pepper",
                summary:
                    "Salt makes identical passwords produce different hashes. Pepper is an extra secret stored separately from the DB.",
                points: [
                    "Salt is random per user and stored with the hash. It blocks rainbow tables and reuse across users.",
                    "Pepper is a server secret (like an env var). It adds extra protection if the DB leaks.",
                    "If you use a pepper, rotate it carefully because rotation can break verification if not designed.",
                ],
                mentalModel:
                    "Salt is like adding a unique username-specific spice to every password before cooking. Pepper is a secret spice jar stored in your kitchen, not in the recipe book.",
                code: `// Pepper concept (pseudo)
// passwordHash = hash(password + PEPPER, salt)

const PEPPER = process.env.PASSWORD_PEPPER;

function withPepper(password) {
  return password + PEPPER;
}

// Then pass withPepper(password) into bcrypt.hash or argon2`,
                gotchas: [
                    "If pepper leaks, you lose the pepper benefit. Protect secrets well.",
                    "Salt must be random and unique per password.",
                ],
            },
            {
                key: "integrityVsPasswords",
                icon: <FiShield />,
                title: "Hashing for integrity vs passwords",
                summary:
                    "Fast hashing is great for integrity checks. Password hashing needs slow algorithms designed for passwords.",
                points: [
                    "Integrity use case - file download verification, cache keys, content fingerprints.",
                    "Password use case - bcrypt, scrypt, Argon2 only.",
                    "Fast hashes are optimized to be computed quickly, attackers love that.",
                ],
                mentalModel:
                    "Fast hashes are race cars - good for speed. Password hashes should be heavy trucks - slow and hard to accelerate.",
                code: `// Integrity example - verify file checksum
// You compute SHA-256 of a file and compare with known good hash

import crypto from "crypto";
import fs from "fs";

const h = crypto.createHash("sha256");
fs.createReadStream("./big.zip").on("data", (chunk) => h.update(chunk))
  .on("end", () => console.log(h.digest("hex")));`,
                gotchas: [
                    "Do not use SHA-256 for password storage.",
                    "Do not confuse hashing with signing. Signing needs keys and proves authenticity.",
                ],
            },
            {
                key: "timingSafeCompare",
                icon: <FiKey />,
                title: "Timing safe comparison",
                summary:
                    "Comparing secrets using normal string comparison can leak info via timing. Use constant time compare for secrets.",
                points: [
                    "Timing attacks can reveal partial matches if comparisons stop early.",
                    "Use crypto.timingSafeEqual when comparing tokens or hashes of equal length.",
                    "Always normalize data and ensure same length buffers before comparing.",
                ],
                mentalModel:
                    "If your comparison takes longer when more characters match, an attacker can learn your secret one character at a time.",
                code: `import crypto from "crypto";

const a = Buffer.from("aabbcc", "hex");
const b = Buffer.from("aabbcc", "hex");

const ok = crypto.timingSafeEqual(a, b);
console.log(ok);`,
                gotchas: [
                    "timingSafeEqual throws if lengths differ. Handle length checks first.",
                    "For passwords, use bcrypt.compare or argon2.verify instead of manual compares.",
                ],
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
                        <span className="title">Hashing</span>
                        <span className="sub">
                            Password storage, salts, integrity hashes, and
                            common security pitfalls
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
                        <div className="introTitle">Why hashing matters</div>
                        <div className="introSub">
                            Hashing shows up everywhere in backend work - auth,
                            password storage, request integrity, caching keys,
                            and secure token handling. Getting hashing wrong is
                            a top reason for account takeovers after database
                            leaks.
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {cards.map((c) => {
                        const open = activeKey === c.key;

                        return (
                            <div key={c.key} className="card">
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
                                            {c.points.map((p, idx) => (
                                                <li key={`${c.key}-p-${idx}`}>
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
                                        <p className="para">{c.mentalModel}</p>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            <span className="tIcon">
                                                <FiCode />
                                            </span>
                                            <span>Example</span>
                                        </div>
                                        <pre className="code">
                                            <code>{c.code}</code>
                                        </pre>
                                    </div>

                                    <div className="block warn">
                                        <div className="blockTitle">
                                            <span className="tIcon">
                                                <FiAlertTriangle />
                                            </span>
                                            <span>Common pitfalls</span>
                                        </div>
                                        <ul className="list">
                                            {c.gotchas.map((g, idx) => (
                                                <li key={`${c.key}-g-${idx}`}>
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
                                            <FiCheckCircle />
                                        </span>
                                        <span className="hintText">
                                            Revision tip: In an interview, say
                                            why bcrypt is used for passwords and
                                            why SHA-256 is not.
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
                        Rule to remember - fast hashes for integrity, slow
                        hashes for passwords, and always salt.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Hashing;
