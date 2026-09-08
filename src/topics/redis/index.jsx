// src/topics/redis/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiDatabase,
    FiZap,
    FiLayers,
    FiClock,
    FiShield,
    FiGitPullRequest,
    FiRefreshCcw,
    FiTrendingUp,
    FiInfo,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiArrowRight,
} from "react-icons/fi";

const Redis = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const cards = useMemo(
        () => [
            {
                key: "what",
                title: "What Redis is",
                icon: <FiDatabase />,
                summary:
                    "Redis is an in-memory data store, often used as a cache, key-value store, and lightweight data structure server.",
                points: [
                    "In-memory means data is stored in RAM, so reads and writes are very fast.",
                    "Redis is commonly used for caching, rate limiting, sessions, queues, and realtime counters.",
                    "Redis can persist data to disk using snapshots (RDB) or append-only log (AOF), but RAM is the main performance source.",
                ],
                mentalModel:
                    "Think of Redis as a super fast shared memory box for your backend. You put small, frequently used data there so your database does less work.",
                exampleTitle: "Example - cache flow",
                code: `// Cache aside pattern (high level)
const key = "user:42";

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const user = await db.users.findById(42);

await redis.set(key, JSON.stringify(user), { EX: 60 }); // 60 seconds TTL
return user;`,
                pitfalls: [
                    "Redis is not your primary database for complex queries.",
                    "Store only cache-friendly data - small, frequently accessed, easy to recompute.",
                ],
            },
            {
                key: "ttl",
                title: "TTL and cache invalidation",
                icon: <FiClock />,
                summary:
                    "TTL is Time To Live. It decides how long a cached key stays valid before Redis removes it.",
                points: [
                    "TTL helps prevent serving stale data forever.",
                    "Short TTL reduces staleness but increases database load.",
                    "Long TTL reduces database load but increases staleness risk. Use versioning or explicit invalidation for critical data.",
                ],
                mentalModel:
                    "TTL is an expiry sticker on data. After the time passes, Redis throws it away so you are forced to refresh from the source.",
                exampleTitle: "Example - product cache with version",
                code: `// Versioned keys reduce invalidation pain
const version = await redis.get("products:version") || "v1";
const key = \`products:\${version}:page:1\`;

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const page = await db.products.findPage(1);
await redis.set(key, JSON.stringify(page), { EX: 120 });
return page;

// When you deploy a new pricing rule or bulk update:
// await redis.incr("products:version");`,
                pitfalls: [
                    "Cache invalidation is hard - prefer TTL plus explicit busting for important changes.",
                    "Do not cache forever unless data never changes.",
                ],
            },
            {
                key: "patterns",
                title: "Common Redis patterns",
                icon: <FiLayers />,
                summary:
                    "Redis becomes powerful when you use small patterns that solve real backend pain points.",
                points: [
                    "Caching - cache responses, user profiles, product pages.",
                    "Counters - views, likes, rate counters.",
                    "Rate limiting - block abusive clients.",
                    "Sessions - store session data for cookie-based auth flows.",
                    "Queues - simple job queue using lists or streams (concept).",
                ],
                mentalModel:
                    "Redis patterns are like Lego blocks. Small primitives combine into useful backend features.",
                exampleTitle: "Example - counter",
                code: `// Page view counter
await redis.incr("page:/home:views");

// Read the counter
const views = await redis.get("page:/home:views");`,
                pitfalls: [
                    "Keep keys consistent - naming conventions matter for debugging.",
                    "Do not store large blobs without thinking about memory.",
                ],
            },
            {
                key: "rateLimit",
                title: "Rate limiting with Redis",
                icon: <FiShield />,
                summary:
                    "Rate limiting restricts how many requests a client can make in a time window.",
                points: [
                    "Simple approach: key per client per route per window.",
                    "Use TTL so the counter resets automatically.",
                    "This protects your API from abuse and reduces load spikes.",
                ],
                mentalModel:
                    "Rate limiting is a bouncer at the door. If someone keeps spamming, they get blocked for a while.",
                exampleTitle: "Example - fixed window limit",
                code: `// Fixed window: 100 requests per minute
const key = \`rl:\${ip}:\${route}:\${minuteBucket}\`;

const count = await redis.incr(key);

if (count === 1) {
  await redis.expire(key, 60); // 60 seconds
}

if (count > 100) {
  // return 429 Too Many Requests
}`,
                pitfalls: [
                    "Fixed window can allow bursts at window edges. Sliding window and token bucket are better but more complex.",
                    "Always include route or action in the key to avoid blocking everything.",
                ],
            },
            {
                key: "stampede",
                title: "Cache stampede and protection",
                icon: <FiGitPullRequest />,
                summary:
                    "Cache stampede happens when many requests miss the cache at the same time and hit the database together.",
                points: [
                    "This often happens when a popular key expires and traffic is high.",
                    "Use locking or request coalescing to ensure only one request rebuilds the cache.",
                    "Add small random jitter to TTL so many keys do not expire together.",
                ],
                mentalModel:
                    "Stampede is when everyone rushes to the database at once because the cache door just closed.",
                exampleTitle: "Example - TTL jitter",
                code: `// Add random jitter to spread expiry times
const base = 60; // seconds
const jitter = Math.floor(Math.random() * 15); // 0 to 14
await redis.set(key, value, { EX: base + jitter });`,
                pitfalls: [
                    "Locks must have TTL to avoid deadlocks if a worker crashes.",
                    "Do not rebuild cache inside a long critical section if it can take seconds.",
                ],
            },
            {
                key: "ops",
                title: "Operational notes",
                icon: <FiTrendingUp />,
                summary:
                    "Redis is fast, but you still need to run it safely in production.",
                points: [
                    "Memory is the main constraint. Know your maxmemory policy.",
                    "Have a plan for eviction - keys removed when memory is full.",
                    "Keep Redis private - do not expose to public internet.",
                    "Monitor hit rate, memory usage, latency, and evictions.",
                ],
                mentalModel:
                    "Treat Redis as a performance engine. Great power, but you must watch heat and fuel levels.",
                exampleTitle: "Example - safe thinking checklist",
                code: `// Before caching something, ask:
- Is this data small?
- Is it requested often?
- Can I tolerate staleness for 30-120 seconds?
- Do I know how to invalidate it?
- What happens if Redis is down?`,
                pitfalls: [
                    "If Redis goes down, your system should still work - maybe slower, but not broken.",
                    "Never assume cache is the source of truth for critical data.",
                ],
            },
            {
                key: "glossary",
                title: "Mini glossary",
                icon: <FiInfo />,
                summary:
                    "Quick full forms and terms used around Redis and caching.",
                points: [
                    "TTL - Time To Live",
                    "Eviction - removing keys when memory is full",
                    "Hit - request served from cache",
                    "Miss - request not found in cache",
                    "Cache aside - app reads cache first, fills cache on miss",
                    "Jitter - adding small randomness to expiry times",
                ],
                mentalModel:
                    "Glossary is your fast recall layer. Read it before interviews.",
                exampleTitle: "Example - hit rate idea",
                code: `// Hit rate (concept)
hitRate = hits / (hits + misses)

// Higher hit rate usually means lower DB load.`,
                pitfalls: [
                    "A high hit rate is good, but not if it serves wrong or stale data for business critical flows.",
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
                title={isOpen ? "Collapse Redis" : "Expand Redis"}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiZap />
                    </span>
                    <span className="text">
                        <span className="title">Redis</span>
                        <span className="sub">
                            Cache, TTL, rate limiting, stampede protection, and
                            production habits
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
                        <FiDatabase />
                    </div>
                    <div className="introText">
                        <div className="introTitle">
                            Why Redis matters in backend systems
                        </div>
                        <div className="introSub">
                            Redis reduces database load, speeds up hot paths,
                            enables rate limiting, and supports simple realtime
                            counters. Learn a few patterns well and you will use
                            them everywhere.
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
                                    title={
                                        open
                                            ? `Collapse ${c.title}`
                                            : `Expand ${c.title}`
                                    }
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
                                            {c.exampleTitle}
                                        </div>
                                        <pre className="code">
                                            <code>{c.code}</code>
                                        </pre>
                                    </div>

                                    <div className="block warn">
                                        <div className="blockTitle">
                                            Common pitfalls
                                        </div>
                                        <ul className="list">
                                            {c.pitfalls.map((p, idx) => (
                                                <li key={`${c.key}-x-${idx}`}>
                                                    <span className="dot" />
                                                    <span className="liText">
                                                        {p}
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
                                            Revision tip: Explain {c.title} in 2
                                            lines and give 1 real example from
                                            production.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiRefreshCcw />
                    </span>
                    <span className="closingText">
                        Rule: Cache makes things fast. Correctness comes first.
                        Always plan staleness, invalidation, and fallback when
                        Redis is unavailable.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Redis;
