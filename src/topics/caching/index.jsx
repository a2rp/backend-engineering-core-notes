// src/topics/caching/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiArchive,
    FiZap,
    FiDatabase,
    FiGlobe,
    FiRefreshCw,
    FiShield,
    FiInfo,
    FiBookOpen,
    FiPlay,
    FiPause,
    FiChevronDown,
    FiArrowRight,
} from "react-icons/fi";

const Caching = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const cards = useMemo(
        () => [
            {
                key: "basics",
                title: "Caching basics",
                icon: <FiZap />,
                summary:
                    "Cache stores a copy of expensive data so future requests are faster and cheaper.",
                bullets: [
                    "Cache hit means data found in cache and served quickly.",
                    "Cache miss means not found, so you compute or fetch from source, then store it for next time.",
                    "Caching improves latency and reduces load on databases and downstream services.",
                    "Cache is not a source of truth. Your database is the source of truth.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Cache is like keeping the most used tools on your desk instead of going to the store room every time.",
                },
                example: {
                    title: "Example - in-memory cache idea",
                    code: `// Simple in-memory cache pattern (per process)
const cache = new Map();

async function getUser(userId) {
  const key = \`user:\${userId}\`;

  if (cache.has(key)) {
    return { fromCache: true, value: cache.get(key) };
  }

  const value = await db.users.findById(userId);
  cache.set(key, value);

  return { fromCache: false, value };
}

// Real production usually uses Redis for shared cache.`,
                },
                gotchas: [
                    "In-memory cache is per process. In a multi-instance server, each instance has its own cache.",
                    "Memory grows if you never evict keys. Use TTL or size limits.",
                    "Stale data is normal. You must design how stale is acceptable.",
                ],
            },
            {
                key: "redis",
                title: "Redis patterns",
                icon: <FiDatabase />,
                summary:
                    "Redis is commonly used as a shared cache and as a fast data structure store for backend systems.",
                bullets: [
                    "TTL means time to live. Key expires automatically after TTL.",
                    "Common keys: user sessions, rate limit counters, product lists, precomputed responses.",
                    "Cache aside is the most common pattern: app checks cache, on miss fetches DB, then sets cache.",
                    "Avoid caching very large objects if it increases network and memory cost too much.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Redis is a shared super-fast shelf that all your app servers can access.",
                },
                example: {
                    title: "Example - cache aside with TTL",
                    code: `// Cache-aside using Redis (pseudo)
const key = \`products:page:\${page}\`;

const cached = await redis.get(key);
if (cached) return JSON.parse(cached);

const data = await db.products.list({ page });
await redis.set(key, JSON.stringify(data), { EX: 60 }); // 60 seconds TTL

return data;`,
                },
                gotchas: [
                    "Cache stampede: many requests miss at once and all hit DB. Use locking or request coalescing.",
                    "Hot keys: a single key is requested too often. Consider sharding keys or local cache layer.",
                    "Serialization bugs: store and read consistently with JSON, msgpack, etc.",
                ],
            },
            {
                key: "cdn",
                title: "CDN caching",
                icon: <FiGlobe />,
                summary:
                    "CDN caches content at edge locations near users. Best for static assets and cacheable API responses.",
                bullets: [
                    "CDN reduces latency by serving from a nearby edge instead of your origin server.",
                    "Static assets: images, JS, CSS are perfect for CDN caching.",
                    "API caching is possible when responses are safe to cache and vary rules are correct.",
                    "Cache-Control headers decide how long content is cacheable.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A CDN is many mini servers across the world that keep copies so users do not always travel to your origin.",
                },
                example: {
                    title: "Example - cache headers quick view",
                    code: `// Typical static asset caching
Cache-Control: public, max-age=31536000, immutable

// For API data that changes often
Cache-Control: public, max-age=60

// For user-specific responses
Cache-Control: private, no-store`,
                },
                gotchas: [
                    "Wrong caching for user-specific data can leak private content.",
                    "Missing Vary headers can cause incorrect cached variants.",
                    "CDN cache invalidation costs money and time. Plan versioned assets.",
                ],
            },
            {
                key: "invalidation",
                title: "Cache invalidation and freshness",
                icon: <FiRefreshCw />,
                summary:
                    "Cache invalidation is the hard part. Decide when cache should update and how stale is allowed.",
                bullets: [
                    "TTL-based invalidation: data expires after a fixed time. Simple and common.",
                    "Write-through: writes go to cache and DB together. Reads hit cache more often.",
                    "Write-behind: cache writes first, DB updates later. Faster but riskier if failure happens.",
                    "Event-based invalidation: on DB change, delete or update related keys.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Freshness is a budget. If you can tolerate 30 seconds stale data, TTL is easy. If you need real-time accuracy, cache gets harder.",
                },
                example: {
                    title: "Example - delete key on update",
                    code: `// On product update, invalidate product and list keys (pseudo)
await db.products.update(id, payload);

// Invalidate related cache keys
await redis.del(\`product:\${id}\`);
await redis.del("products:page:1");
await redis.del("products:page:2");

// Better: use key patterns carefully or maintain a version key.`,
                },
                gotchas: [
                    "Over-invalidation removes benefits. Under-invalidation serves stale data too long.",
                    "Key design matters: plan key names and groups from day one.",
                    "Cache consistency is not free. Keep it simple unless requirements demand more.",
                ],
            },
            {
                key: "security",
                title: "Caching and security",
                icon: <FiShield />,
                summary:
                    "Caching can accidentally store sensitive responses. Always decide what is safe to cache.",
                bullets: [
                    "Never cache secrets, tokens, or personalized pages in a public cache.",
                    "Use private or no-store for user-specific responses.",
                    "Be careful with shared caches and multi-tenant systems.",
                    "For auth, cache must not bypass permission checks.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A cache is a place where copies live. If a copy is sensitive and ends up in the wrong place, it becomes a data leak.",
                },
                example: {
                    title: "Example - safe defaults",
                    code: `// Safe for user-specific endpoints
Cache-Control: private, no-store

// Safe for public docs or public data
Cache-Control: public, max-age=60`,
                },
                gotchas: [
                    "CDN caching + missing user separation is a common security incident pattern.",
                ],
            },
        ],
        [],
    );

    const toggleMain = () => {
        setIsOpen((v) => !v);
        if (isOpen) setActiveKey(null);
    };

    const toggleCard = (key) => {
        setActiveKey((prev) => (prev === key ? null : key));
    };

    return (
        <Styled.Wrapper id="caching">
            <button
                type="button"
                className={`sectionHeader ${isOpen ? "open" : ""}`}
                onClick={toggleMain}
                aria-expanded={isOpen}
            >
                <span className="left">
                    <span className="sIcon">
                        <FiArchive />
                    </span>
                    <span className="text">
                        <span className="title">Caching</span>
                        <span className="sub">
                            Basics, Redis patterns, CDN caching, invalidation,
                            and safety rules
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
                        <div className="introTitle">Why caching matters</div>
                        <div className="introSub">
                            Caching is one of the easiest ways to make an API
                            feel fast. It also introduces correctness risks if
                            you cache the wrong thing. These notes focus on
                            practical patterns used in production.
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
                                    onClick={() => toggleCard(c.key)}
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

                                    <div className="block">
                                        <div className="blockTitle">
                                            {c.mentalModel.title}
                                        </div>
                                        <p className="para">
                                            {c.mentalModel.text}
                                        </p>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            {c.example.title}
                                        </div>
                                        <pre className="code">
                                            <code>{c.example.code}</code>
                                        </pre>
                                    </div>

                                    <div className="block warn">
                                        <div className="blockTitle">
                                            Common pitfalls
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
                                            <FiArrowRight />
                                        </span>
                                        <span className="hintText">
                                            Revision tip: Say "what is cached",
                                            "where it is cached", "for how
                                            long", and "how it is invalidated".
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
                        Always define a freshness rule. If you cannot explain
                        your invalidation strategy, your cache will eventually
                        lie to you.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Caching;
