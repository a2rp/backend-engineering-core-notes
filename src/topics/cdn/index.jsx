// src/topics/cdn/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiGlobe,
    FiZap,
    FiMapPin,
    FiLayers,
    FiShield,
    FiRefreshCw,
    FiClock,
    FiCheckCircle,
    FiAlertTriangle,
    FiHelpCircle,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
} from "react-icons/fi";

const Cdn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState("what");

    const sections = useMemo(
        () => [
            {
                key: "what",
                title: "What is a CDN",
                icon: <FiGlobe />,
                summary:
                    "CDN means Content Delivery Network. It serves content from servers closer to users to reduce latency and offload your origin server.",
                points: [
                    "A CDN is a network of edge servers distributed across locations.",
                    "Users are routed to a nearby edge so content loads faster.",
                    "Your main server is called the origin. CDN sits in front of it.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Origin is the warehouse. CDN edges are local stores. Customers get items from the nearest store instead of traveling to the warehouse.",
                },
                example: {
                    title: "Common CDN use cases",
                    code: `- Static assets: images, CSS, JS
- Video delivery and large downloads
- API acceleration (sometimes) with caching
- DDoS absorption and WAF protection (depending on provider)`,
                },
            },
            {
                key: "how",
                title: "How a CDN works",
                icon: <FiMapPin />,
                summary:
                    "The first request may go to origin, then the CDN stores a cached copy at the edge. Next users get a cache hit from the edge.",
                points: [
                    "User requests https://cdn.example.com/logo.png",
                    "Edge checks cache - if present: cache hit, respond immediately",
                    "If not present: cache miss, edge fetches from origin, stores it, responds",
                    "Routing is usually done by DNS or anycast, so user reaches a nearby edge",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Edge is like a smart vending machine. If the item is stocked, it gives instantly. If not, it goes to refill from the warehouse and then serves.",
                },
                example: {
                    title: "Cache hit vs cache miss",
                    code: `Cache hit:
- Edge already has the file
- Fast response
- Origin load is avoided

Cache miss:
- Edge fetches from origin
- Slower for first request
- Subsequent requests become fast`,
                },
            },
            {
                key: "cacheRules",
                title: "Caching rules",
                icon: <FiLayers />,
                summary:
                    "CDN caching depends on headers and CDN rules. You control cache behavior mostly via Cache-Control, Expires, ETag, and Vary.",
                points: [
                    "Cache-Control controls how long and how content can be cached.",
                    "max-age tells TTL in seconds.",
                    "public means shared caches (CDN) can cache it.",
                    "private means only browser cache, CDN should not cache.",
                    "no-store means do not store anywhere.",
                    "ETag allows revalidation with If-None-Match and can return 304 Not Modified.",
                    "Vary tells cache key variations like Vary: Accept-Encoding.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Headers are the caching contract. You tell the CDN what can be stored, for how long, and when it must check back with origin.",
                },
                example: {
                    title: "Good defaults for static assets",
                    code: `// Fingerprinted asset: app.4f2c1a.js
Cache-Control: public, max-age=31536000, immutable

// Non fingerprinted asset: logo.png (changes sometimes)
Cache-Control: public, max-age=86400

// User specific response (do not CDN cache)
Cache-Control: private, no-store`,
                },
            },
            {
                key: "invalidation",
                title: "Invalidation and versioning",
                icon: <FiRefreshCw />,
                summary:
                    "CDN caches can become stale. You handle it with cache invalidation or better with cache busting by versioned file names.",
                points: [
                    "Best practice: cache busting using versioned filenames like app.hash.js.",
                    "If you cannot version, use invalidation or purge requests.",
                    "Invalidation might take time to propagate across edges.",
                    "Use shorter TTL for frequently changing content.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Instead of telling every store to throw old posters away, print a new poster with a new ID. Stores will fetch the new one automatically.",
                },
                example: {
                    title: "Cache busting pattern",
                    code: `Old:
- /assets/app.js

Better:
- /assets/app.9b21f3.js

Now you can set 1 year caching safely because a new build creates a new filename.`,
                },
            },
            {
                key: "perfSecurity",
                title: "Performance and security benefits",
                icon: <FiZap />,
                summary:
                    "CDNs reduce latency, reduce origin bandwidth, and can add security layers like DDoS protection and WAF depending on provider.",
                points: [
                    "Lower latency because edge is closer to users.",
                    "Lower origin load and bandwidth cost due to caching.",
                    "Better resilience during traffic spikes.",
                    "Some CDNs provide WAF, bot protection, TLS termination, and DDoS mitigation.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "CDN is both a speed layer and a protective shield in front of your origin.",
                },
                example: {
                    title: "Practical effect",
                    code: `If your origin is in Mumbai and user is in Europe:
- Without CDN: every request travels far to origin
- With CDN: edge in Europe serves cached files quickly`,
                },
            },
            {
                key: "pitfalls",
                title: "Common pitfalls",
                icon: <FiAlertTriangle />,
                summary:
                    "Most CDN issues are cache key mistakes, wrong headers, or stale content due to TTL and invalidation problems.",
                points: [
                    "Serving stale content because TTL is too high and no invalidation strategy exists.",
                    "Caching user specific data by mistake (missing private or no-store).",
                    "Wrong cache key - ignoring query params or headers that should vary.",
                    "Not caching at all because Cache-Control is too strict.",
                    "Assuming CDN makes API fast automatically without correct caching rules.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "CDN is predictable if your cache rules are correct. Most bugs are self-inflicted by headers and cache keys.",
                },
                example: {
                    title: "Golden safety checks",
                    code: `- Static assets: public + long max-age + versioned filenames
- Auth endpoints: private + no-store
- Always confirm CDN response headers: HIT or MISS and Age`,
                },
            },
            {
                key: "interview",
                title: "Interview ready Q and A",
                icon: <FiHelpCircle />,
                summary:
                    "These questions test whether you understand CDN behavior, caching headers, and real production tradeoffs.",
                points: [
                    "Q: Why is a CDN used - A: reduce latency and offload origin.",
                    "Q: Cache hit vs miss - A: hit served from edge, miss fetched from origin.",
                    "Q: How do you prevent stale assets - A: versioned filenames and long cache TTL.",
                    "Q: When not to cache - A: user specific or sensitive responses, use private or no-store.",
                    "Q: What headers matter - A: Cache-Control, ETag, Vary, Expires.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Interviewers want to see that you can ship fast sites without breaking correctness or security.",
                },
                example: {
                    title: "One line answer",
                    code: `A CDN is a distributed cache in front of your origin that serves content from nearby edge locations to reduce latency and origin load.`,
                },
            },
        ],
        [],
    );

    const handleToggleMain = () => {
        setIsOpen((v) => !v);
    };

    const handleSelect = (key) => {
        setActiveKey(key);
    };

    const active = useMemo(() => {
        return sections.find((s) => s.key === activeKey) || sections[0];
    }, [sections, activeKey]);

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
                        <FiShield />
                    </span>
                    <span className="text">
                        <span className="title">CDN</span>
                        <span className="sub">
                            Edge caching, headers, invalidation, and production
                            tradeoffs
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
                            What you should remember
                        </div>
                        <div className="introSub">
                            CDN improves speed by serving cached content from
                            edge locations. Correct caching headers and cache
                            busting keep it fast and safe.
                        </div>
                    </div>
                </div>

                <div className="layout">
                    <div
                        className="leftNav"
                        role="tablist"
                        aria-label="CDN topics"
                    >
                        {sections.map((s) => {
                            const isActive = s.key === activeKey;
                            return (
                                <button
                                    key={s.key}
                                    type="button"
                                    className={`navItem ${isActive ? "active" : ""}`}
                                    onClick={() => handleSelect(s.key)}
                                    role="tab"
                                    aria-selected={isActive}
                                >
                                    <span className="nIcon">{s.icon}</span>
                                    <span className="nText">
                                        <span className="nTitle">
                                            {s.title}
                                        </span>
                                        <span className="nSub">
                                            {s.summary}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="rightPanel" role="tabpanel">
                        <div className="panelTop">
                            <div className="pIcon">{active.icon}</div>
                            <div className="pText">
                                <div className="pTitle">{active.title}</div>
                                <div className="pSummary">{active.summary}</div>
                            </div>
                            <div className="pBadge">
                                <FiCheckCircle /> Core
                            </div>
                        </div>

                        <div className="panelBlock">
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

                        <div className="panelBlock">
                            <div className="blockTitle">
                                {active.mentalModel.title}
                            </div>
                            <p className="para">{active.mentalModel.text}</p>
                        </div>

                        <div className="panelBlock">
                            <div className="blockTitle">
                                {active.example.title}
                            </div>
                            <pre className="code">
                                <code>{active.example.code}</code>
                            </pre>
                        </div>

                        <div className="panelFooter">
                            <span className="fIcon">
                                <FiClock />
                            </span>
                            <span className="fText">
                                Revision tip: Say CDN in 1 line, then explain
                                cache hit and miss in 2 lines.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiZap />
                    </span>
                    <span className="closingText">
                        Fast and safe CDN setup usually means versioned assets,
                        long cache TTL, and strict no-store for user data.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Cdn;
