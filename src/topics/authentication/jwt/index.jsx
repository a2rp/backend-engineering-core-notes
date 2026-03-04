// src/topics/authentication/jwt/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiKey,
    FiChevronDown,
    FiShield,
    FiLock,
    FiRefreshCcw,
    FiAlertTriangle,
    FiCheckCircle,
    FiCopy,
    FiBookOpen,
} from "react-icons/fi";

const Jwt = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("basics");
    const [copiedKey, setCopiedKey] = useState("");

    const blocks = useMemo(
        () => [
            {
                key: "basics",
                title: "What JWT is",
                icon: <FiKey />,
                points: [
                    "JWT means JSON Web Token",
                    "A JWT is a compact string that represents claims (data) signed by a server",
                    "Client sends the token on every request to prove identity",
                    "JWT is usually used as an access token (short lived)",
                ],
                note: {
                    title: "One line definition",
                    text: "JWT is a signed token that lets the server trust the data inside without storing session state in memory.",
                },
            },
            {
                key: "structure",
                title: "Token structure",
                icon: <FiBookOpen />,
                points: [
                    "JWT has 3 parts separated by dots",
                    "Header - algorithm info like HS256 or RS256",
                    "Payload - claims like userId, role, exp (expiry time)",
                    "Signature - proves the token was created by someone who has the secret or private key",
                ],
                codeTitle: "Example shape",
                code: `header.payload.signature

// header example (base64url JSON)
{
  "alg": "HS256",
  "typ": "JWT"
}

// payload example (base64url JSON)
{
  "sub": "user_123",
  "role": "ADMIN",
  "iat": 1710000000,
  "exp": 1710003600
}

// signature = sign(base64url(header) + "." + base64url(payload))`,
            },
            {
                key: "howItWorks",
                title: "How JWT auth works",
                icon: <FiShield />,
                points: [
                    "User logs in with username and password",
                    "Server verifies password and issues an access token (JWT)",
                    "Client stores token (cookie or memory) and sends it on requests",
                    "Server verifies signature and checks expiry before trusting claims",
                ],
                note: {
                    title: "Important detail",
                    text: "The server must verify the signature on every request. Never trust payload data without signature verification.",
                },
            },
            {
                key: "security",
                title: "Security rules that matter",
                icon: <FiLock />,
                points: [
                    "Always validate exp and iat, and reject expired tokens",
                    "Keep access tokens short lived to reduce damage if stolen",
                    "Do not put secrets in payload - payload is readable by anyone holding the token",
                    "Prefer HttpOnly cookies for browser apps to reduce XSS token theft risk",
                    "Use HTTPS in production so tokens are not sniffed on the network",
                ],
                warn: {
                    title: "Common mistake",
                    text: "Storing JWT in localStorage makes it easy to steal with XSS. Cookies with HttpOnly are often safer for web apps.",
                },
            },
            {
                key: "refresh",
                title: "Refresh token concept",
                icon: <FiRefreshCcw />,
                points: [
                    "Access token - short lived JWT used for most API calls",
                    "Refresh token - longer lived token used to get a new access token",
                    "Refresh token should be stored more securely than access token (often HttpOnly cookie)",
                    "On logout or compromise, refresh tokens should be invalidated server side",
                ],
                note: {
                    title: "Why refresh exists",
                    text: "If access tokens are short lived, users stay logged in using refresh tokens without re-entering password.",
                },
            },
            {
                key: "pitfalls",
                title: "Pitfalls and interview traps",
                icon: <FiAlertTriangle />,
                points: [
                    "JWT is not encryption - it is signing. Payload is readable.",
                    "Stateless does not mean revocation is free. Revoking JWT needs strategy (short expiry, token versioning, blacklist, or refresh token storage).",
                    "Do not accept alg as none. Enforce allowed algorithms in your verification library.",
                    "Do not mix keys - HS256 uses a shared secret, RS256 uses public and private keys.",
                ],
                note: {
                    title: "Interview ready line",
                    text: "JWT helps reduce server session storage, but revocation and rotation still need careful design.",
                },
            },
        ],
        [],
    );

    const quickQna = useMemo(
        () => [
            {
                q: "JWT full form",
                a: "JSON Web Token",
                icon: <FiCheckCircle />,
            },
            {
                q: "JWT provides confidentiality",
                a: "No - JWT payload is readable. It provides integrity via signature.",
                icon: <FiCheckCircle />,
            },
            {
                q: "Best place to store JWT in browser",
                a: "Often HttpOnly cookie for security. Avoid localStorage for sensitive tokens.",
                icon: <FiCheckCircle />,
            },
            {
                q: "Why short lived access token",
                a: "Limits damage if token is stolen.",
                icon: <FiCheckCircle />,
            },
        ],
        [],
    );

    const toggleMain = () => {
        setIsOpen((v) => !v);
    };

    const toggleBlock = (key) => {
        setActiveKey((prev) => (prev === key ? "" : key));
    };

    const safeCopy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);
            window.setTimeout(() => setCopiedKey(""), 900);
        } catch {
            setCopiedKey("");
        }
    };

    const active = blocks.find((b) => b.key === activeKey);

    return (
        <Styled.Wrapper id="jwt">
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={toggleMain}
                aria-expanded={isOpen}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiKey />
                    </span>
                    <span className="text">
                        <span className="title">JWT</span>
                        <span className="sub">
                            JSON Web Token - signing, expiry, storage choices,
                            refresh flow, and common traps
                        </span>
                    </span>
                </span>

                <span className="right">
                    <span className={`chev ${isOpen ? "rot" : ""}`}>
                        <FiChevronDown />
                    </span>
                </span>
            </button>

            <div className={`sectionBody ${isOpen ? "show" : ""}`}>
                <div className="topBar">
                    <div className="hint">
                        <span className="hintIcon">
                            <FiShield />
                        </span>
                        <span className="hintText">
                            Focus on: signature verification, expiry, storage,
                            and revocation strategy.
                        </span>
                    </div>

                    <div
                        className="tabs"
                        role="tablist"
                        aria-label="JWT sections"
                    >
                        {blocks.map((b) => {
                            const isActive = activeKey === b.key;
                            return (
                                <button
                                    key={b.key}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    className={`tab ${isActive ? "active" : ""}`}
                                    onClick={() => toggleBlock(b.key)}
                                    title={b.title}
                                >
                                    <span className="tIcon">{b.icon}</span>
                                    <span className="tText">{b.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="panel">
                    {!active ? (
                        <div className="empty">
                            <div className="emptyTitle">
                                Select a section to view details
                            </div>
                            <div className="emptySub">
                                JWT is simple in theory, tricky in production.
                                The sections here cover both.
                            </div>
                        </div>
                    ) : (
                        <div className="content">
                            <div className="panelHeader">
                                <div className="phLeft">
                                    <span className="phIcon">
                                        {active.icon}
                                    </span>
                                    <div className="phText">
                                        <div className="phTitle">
                                            {active.title}
                                        </div>
                                        <div className="phSub">
                                            Quick, interview ready explanation
                                            and practical rules.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block">
                                <div className="blockTitle">Key points</div>
                                <ul className="list">
                                    {active.points.map((p, idx) => (
                                        <li key={`${active.key}-p-${idx}`}>
                                            <span className="dot" />
                                            <span className="liText">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {active.note && (
                                <div className="block note">
                                    <div className="blockTitle">
                                        {active.note.title}
                                    </div>
                                    <p className="para">{active.note.text}</p>
                                </div>
                            )}

                            {active.warn && (
                                <div className="block warn">
                                    <div className="blockTitle">
                                        {active.warn.title}
                                    </div>
                                    <p className="para">{active.warn.text}</p>
                                </div>
                            )}

                            {active.code && (
                                <div className="block">
                                    <div className="codeTop">
                                        <div className="blockTitle">
                                            {active.codeTitle || "Example"}
                                        </div>
                                        <button
                                            type="button"
                                            className="copyBtn"
                                            onClick={() =>
                                                safeCopy(
                                                    active.code,
                                                    active.key,
                                                )
                                            }
                                            title="Copy code"
                                            aria-label="Copy code"
                                        >
                                            <FiCopy />
                                            <span className="copyText">
                                                {copiedKey === active.key
                                                    ? "Copied"
                                                    : "Copy"}
                                            </span>
                                        </button>
                                    </div>

                                    <pre className="code">
                                        <code>{active.code}</code>
                                    </pre>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="qna">
                    <div className="qnaTitle">Quick Q and A</div>
                    <div className="qnaGrid">
                        {quickQna.map((x, idx) => (
                            <div key={`qna-${idx}`} className="qnaCard">
                                <div className="qTop">
                                    <span className="qIcon">{x.icon}</span>
                                    <span className="qQ">{x.q}</span>
                                </div>
                                <div className="qA">{x.a}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bottomTip">
                    <span className="btIcon">
                        <FiAlertTriangle />
                    </span>
                    <span className="btText">
                        Golden rule: verify signature + check expiry on every
                        request. JWT payload is readable, not secret.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Jwt;
