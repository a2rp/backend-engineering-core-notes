// src/topics/apiDesign/versioning/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiGitBranch,
    FiTag,
    FiLink,
    FiLayers,
    FiAlertTriangle,
    FiCheckCircle,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
    FiArrowRight,
    FiHash,
    FiShield,
    FiRefreshCw,
} from "react-icons/fi";

const Versioning = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("path");

    const strategies = useMemo(
        () => [
            {
                key: "path",
                title: "Path versioning",
                icon: <FiLink />,
                label: "Most common",
                summary: "Put version in the URL path like /v1/users.",
                goodFor: [
                    "Public APIs where clarity matters",
                    "Multiple versions live together",
                    "Easy routing and caching rules",
                ],
                watchOut: [
                    "Versioning every tiny change becomes messy",
                    "Some teams forget to sunset old versions",
                ],
                example: {
                    title: "Example",
                    code: `GET /api/v1/users
POST /api/v1/orders

// When you introduce a breaking change
GET /api/v2/users`,
                },
                tip: "Use v1 only for breaking changes. For non breaking changes, evolve the same version.",
            },
            {
                key: "query",
                title: "Query parameter versioning",
                icon: <FiHash />,
                label: "Sometimes used",
                summary: "Put version in query like /users?version=1.",
                goodFor: [
                    "Internal APIs with controlled clients",
                    "Quick experiments",
                ],
                watchOut: [
                    "Easy to misuse and hard to enforce",
                    "CDN caching can get tricky if query rules are not consistent",
                    "Feels less clean in documentation",
                ],
                example: {
                    title: "Example",
                    code: `GET /api/users?version=1
GET /api/users?version=2`,
                },
                tip: "Prefer path versioning for public APIs unless you have strong reasons.",
            },
            {
                key: "header",
                title: "Header based versioning",
                icon: <FiLayers />,
                label: "Advanced",
                summary:
                    "Client sends version in a header like X-API-Version: 2.",
                goodFor: [
                    "APIs where URLs must stay stable",
                    "Some enterprise setups",
                ],
                watchOut: [
                    "Harder to test from browser directly",
                    "Docs and tooling need extra care",
                    "CDN caching needs header-aware configuration",
                ],
                example: {
                    title: "Example",
                    code: `GET /api/users
X-API-Version: 2`,
                },
                tip: "Only choose this if your gateway, docs, and caching story is mature.",
            },
            {
                key: "mediaType",
                title: "Media type versioning",
                icon: <FiTag />,
                label: "Strong but complex",
                summary:
                    "Version via Accept header like application/vnd.company.v2+json.",
                goodFor: [
                    "Content negotiation heavy systems",
                    "Strict API governance teams",
                ],
                watchOut: [
                    "Complex for most teams",
                    "Tooling friction and client confusion",
                ],
                example: {
                    title: "Example",
                    code: `GET /api/users
Accept: application/vnd.backendnotes.v2+json`,
                },
                tip: "If you do this, keep conventions strict and docs very clear.",
            },
        ],
        [],
    );

    const concepts = useMemo(
        () => [
            {
                icon: <FiShield />,
                title: "Breaking change",
                text: "A change that can break existing clients without them changing anything. Example - renaming a field, changing response shape, changing meaning of a status code.",
            },
            {
                icon: <FiRefreshCw />,
                title: "Non breaking change",
                text: "A change that should not break old clients. Example - adding an optional field, adding a new endpoint, adding a new enum value if clients handle unknown values safely.",
            },
            {
                icon: <FiCheckCircle />,
                title: "Backward compatibility",
                text: "New server version still works for old clients. This is a goal. Versioning is a tool when you cannot keep backward compatibility.",
            },
        ],
        [],
    );

    const rules = useMemo(
        () => [
            "Version only for breaking changes. Do not version for every small feature.",
            "Keep old versions alive for a defined window and publish a sunset plan.",
            "Deprecate with clear dates and communicate with clients early.",
            "Document differences between v1 and v2 in one place, do not scatter it.",
            "If you add fields, keep them optional and avoid changing existing meanings.",
        ],
        [],
    );

    const pitfalls = useMemo(
        () => [
            "Shipping v2 without migrating clients, then keeping v1 forever",
            "Breaking changes without version bump",
            "Mixing versions inside one response payload",
            "No deprecation policy and no timeline",
            "Not testing old clients against new server behavior",
        ],
        [],
    );

    const handleToggleMain = () => setIsOpen((v) => !v);
    const handleSetActive = (key) => setActiveKey(key);

    const active = strategies.find((s) => s.key === activeKey) || strategies[0];

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
                        <FiGitBranch />
                    </span>
                    <span className="text">
                        <span className="title">Versioning</span>
                        <span className="sub">
                            How to evolve APIs safely without breaking clients
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
                        <div className="introTitle">What versioning means</div>
                        <div className="introSub">
                            API versioning is the practice of managing breaking
                            changes. If you cannot keep backward compatibility,
                            you publish a new version so old clients still work
                            while new clients move forward.
                        </div>
                    </div>
                </div>

                <div className="concepts">
                    {concepts.map((c) => (
                        <div className="concept" key={c.title}>
                            <div className="cIcon">{c.icon}</div>
                            <div className="cText">
                                <div className="cTitle">{c.title}</div>
                                <div className="cSub">{c.text}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sectionTitle">
                    Pick a strategy
                    <span className="sectionTitleHint">
                        Path versioning is usually the simplest and clearest.
                    </span>
                </div>

                <div className="strategyLayout">
                    <div
                        className="tabs"
                        role="tablist"
                        aria-label="Versioning strategies"
                    >
                        {strategies.map((s) => {
                            const on = s.key === activeKey;
                            return (
                                <button
                                    key={s.key}
                                    type="button"
                                    role="tab"
                                    aria-selected={on}
                                    className={`tab ${on ? "on" : ""}`}
                                    onClick={() => handleSetActive(s.key)}
                                    title={s.summary}
                                >
                                    <span className="tabIcon">{s.icon}</span>
                                    <span className="tabText">
                                        <span className="tabTitle">
                                            {s.title}
                                        </span>
                                        <span className="tabLabel">
                                            {s.label}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="panel" role="tabpanel">
                        <div className="panelTop">
                            <div className="panelHead">
                                <div className="pIcon">{active.icon}</div>
                                <div className="pText">
                                    <div className="pTitle">{active.title}</div>
                                    <div className="pSummary">
                                        {active.summary}
                                    </div>
                                </div>
                            </div>

                            <div className="badge">{active.label}</div>
                        </div>

                        <div className="panelGrid">
                            <div className="box good">
                                <div className="boxTitle">
                                    <FiCheckCircle /> Good for
                                </div>
                                <ul className="list">
                                    {active.goodFor.map((x, idx) => (
                                        <li key={`g-${idx}`}>
                                            <span className="dot" />
                                            <span className="liText">{x}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="box warn">
                                <div className="boxTitle">
                                    <FiAlertTriangle /> Watch out
                                </div>
                                <ul className="list">
                                    {active.watchOut.map((x, idx) => (
                                        <li key={`w-${idx}`}>
                                            <span className="dot" />
                                            <span className="liText">{x}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="box codeBox">
                            <div className="boxTitle">
                                {active.example.title}
                            </div>
                            <pre className="code">
                                <code>{active.example.code}</code>
                            </pre>
                            <div className="tipRow">
                                <span className="tipIcon">
                                    <FiArrowRight />
                                </span>
                                <span className="tipText">{active.tip}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sectionTitle">
                    Practical rules
                    <span className="sectionTitleHint">
                        These keep APIs stable and teams sane.
                    </span>
                </div>

                <div className="rulesPitfalls">
                    <div className="box good">
                        <div className="boxTitle">
                            <FiCheckCircle /> Rules to follow
                        </div>
                        <ul className="list">
                            {rules.map((r, idx) => (
                                <li key={`r-${idx}`}>
                                    <span className="dot" />
                                    <span className="liText">{r}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="box warn">
                        <div className="boxTitle">
                            <FiAlertTriangle /> Common pitfalls
                        </div>
                        <ul className="list">
                            {pitfalls.map((p, idx) => (
                                <li key={`p-${idx}`}>
                                    <span className="dot" />
                                    <span className="liText">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiTag />
                    </span>
                    <span className="closingText">
                        Interview line: "I version APIs only for breaking
                        changes, keep backward compatibility by default, and
                        always publish a clear deprecation and sunset plan."
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Versioning;
