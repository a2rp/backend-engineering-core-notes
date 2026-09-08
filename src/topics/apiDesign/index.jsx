// src/topics/apiDesign/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiBookOpen,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
    FiLink,
    FiLayers,
    FiCheckCircle,
    FiAlertTriangle,
    FiHash,
    FiSearch,
    FiFilter,
    FiBarChart2,
    FiSliders,
    FiTag,
    FiCode,
    FiArrowRight,
} from "react-icons/fi";

const ApiDesign = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const topics = useMemo(
        () => [
            {
                key: "restPrinciples",
                title: "REST principles",
                icon: <FiLink />,
                summary:
                    "REST is an architectural style for designing APIs around resources with predictable URLs, methods, and responses.",
                bullets: [
                    "Resource based URLs - use nouns, not verbs. Example - /users, /orders, /products",
                    "HTTP methods express intent - GET read, POST create, PUT replace, PATCH partial update, DELETE remove",
                    "Statelessness - each request should contain enough info to be processed without server remembering previous requests",
                    "Representation - client and server exchange representations like JSON, not database rows",
                    "Consistency is more important than being clever - predictable APIs scale better across teams",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A REST API is like a structured library. Shelves are resources, and HTTP methods are actions you can perform on those shelves.",
                },
                example: {
                    title: "Example - good resource naming",
                    code: `// Good
GET    /users
GET    /users/42
POST   /users
PATCH  /users/42
DELETE /users/42

// Avoid verbs in paths
// Bad
POST /createUser
GET  /getUsers`,
                },
                gotchas: [
                    "Do not mix naming styles. Pick one and stay consistent.",
                    "Avoid deeply nested resources unless it truly represents ownership.",
                ],
            },
            {
                key: "resourceNaming",
                title: "Resource naming",
                icon: <FiTag />,
                summary:
                    "Resource naming is about clean, stable URLs that represent things, not actions.",
                bullets: [
                    "Use plural nouns for collections - /users, /orders",
                    "Use IDs for single resources - /users/42",
                    "Use hyphens in multi-word segments - /payment-methods",
                    "For relationships, use nesting only when the child cannot exist without the parent - /users/42/orders",
                    "Use query params for modifiers like filter, sort, pagination - keep path stable",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "A path should answer - what is this thing. Query params answer - how do you want it.",
                },
                example: {
                    title: "Example - nesting vs query params",
                    code: `// Child depends on parent, nesting is OK
GET /users/42/orders

// If orders are global, prefer query params
GET /orders?userId=42`,
                },
                gotchas: [
                    "Over-nesting makes URLs unreadable and hard to maintain.",
                ],
            },
            {
                key: "paginationFiltering",
                title: "Pagination and filtering",
                icon: <FiFilter />,
                summary:
                    "Pagination prevents huge responses. Filtering lets clients ask for a subset of data without extra endpoints.",
                bullets: [
                    "Offset pagination - page and limit. Simple but can be slow on large datasets and can shift with new inserts",
                    "Cursor pagination - use a stable cursor like createdAt or id. Better for large lists and infinite scroll",
                    "Filtering with query params - status, date ranges, search terms",
                    "Return metadata - total count (optional), next cursor, hasMore",
                    "Always validate pagination inputs to prevent abuse - max limit and sane defaults",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Pagination is like reading a book in pages. Filtering is choosing only chapters you care about.",
                },
                example: {
                    title: "Example - common patterns",
                    code: `// Offset pagination
GET /users?page=2&limit=20

// Cursor pagination
GET /users?cursor=2026-03-01T00:00:00.000Z&limit=20

// Filtering
GET /orders?status=delivered&minTotal=500`,
                },
                gotchas: [
                    "Never allow limit=100000. Put a hard max like 50 or 100.",
                    "Cursor must be stable and indexed for speed.",
                ],
            },
            {
                key: "sortingSearching",
                title: "Sorting and searching",
                icon: <FiSliders />,
                summary:
                    "Sorting is ordering results. Searching is matching text or fields, often using partial matches.",
                bullets: [
                    "Sorting with sort and order params. Example - sort=createdAt and order=desc",
                    "Allow a safe set of sortable fields to prevent SQL injection style issues or heavy queries",
                    "Searching can be simple - q=term - or advanced with field specific filters",
                    "For full-text search at scale, use search engines or DB full-text features",
                    "Always define how search behaves - case sensitivity, partial match rules",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Sorting chooses the order of items you already selected. Searching changes which items are selected.",
                },
                example: {
                    title: "Example - sorting and searching",
                    code: `GET /products?sort=price&order=asc
GET /products?q=wireless%20mouse
GET /products?brand=logitech&q=mouse&sort=rating&order=desc`,
                },
                gotchas: [
                    "Do not let clients sort by any field without validation.",
                    "Search queries can be expensive. Add rate limiting and caching.",
                ],
            },
            {
                key: "statusCodes",
                title: "Status codes",
                icon: <FiHash />,
                summary:
                    "Status codes communicate what happened. They are not decoration. Clients use them for logic and error handling.",
                bullets: [
                    "200 OK - successful request",
                    "201 Created - resource created (often returns the new resource or location)",
                    "204 No Content - success with no body (common for delete)",
                    "400 Bad Request - validation error or malformed input",
                    "401 Unauthorized - missing or invalid auth",
                    "403 Forbidden - authenticated but not allowed",
                    "404 Not Found - resource does not exist",
                    "409 Conflict - duplicate or conflicting update",
                    "422 Unprocessable Entity - validation style errors (some teams use 400 instead, consistency matters)",
                    "429 Too Many Requests - rate limited",
                    "500 Internal Server Error - server failure",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Status codes are like traffic signals for clients. They tell the client what to do next without reading human text.",
                },
                example: {
                    title: "Example - practical responses",
                    code: `// Create user
201 Created
{
  "id": "u_42",
  "name": "Neha"
}

// Invalid input
400 Bad Request
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "email is required",
    "fields": { "email": "required" }
  }
}`,
                },
                gotchas: [
                    "Do not return 200 for everything. Use correct codes.",
                    "Do not leak internal error details in 500 responses.",
                ],
            },
            {
                key: "errorShape",
                title: "Error response shape",
                icon: <FiAlertTriangle />,
                summary:
                    "A consistent error shape makes debugging easier and improves client reliability.",
                bullets: [
                    "Always return an error object with code and message",
                    "Include requestId or correlationId so logs can be searched",
                    "For validation errors, include field wise details",
                    "Avoid leaking stack traces or internal DB errors",
                    "Keep messages user safe and developer useful",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Errors are part of your API contract. A stable error shape is as important as a stable success response.",
                },
                example: {
                    title: "Example - recommended error format",
                    code: `{
  "error": {
    "code": "AUTH_REQUIRED",
    "message": "Login required",
    "requestId": "req_9f2c"
  }
}`,
                },
                gotchas: [
                    "If clients cannot rely on error shape, they will implement messy workarounds.",
                ],
            },
            {
                key: "versioning",
                title: "Versioning strategies",
                icon: <FiLayers />,
                summary:
                    "Versioning prevents breaking existing clients. The best version is the one you rarely need because you designed your API carefully.",
                bullets: [
                    "Path versioning - /v1/users. Simple and common.",
                    "Header versioning - Accept: application/vnd.app.v1+json. More strict, less visible.",
                    "Query param versioning - /users?version=1. Usually not preferred but used sometimes.",
                    "Avoid breaking changes - add fields, do not remove or rename without a new version.",
                    "Deprecate gracefully - support old versions for a window and communicate timeline.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Versioning is like releasing a new remote control layout. Old TVs should still work until users upgrade.",
                },
                example: {
                    title: "Example - safe evolution",
                    code: `// v1 response
{ "id": "u1", "name": "Ashish" }

// v2 adds fields without breaking old clients
{ "id": "u1", "name": "Ashish", "role": "admin" }`,
                },
                gotchas: [
                    "Do not version for every tiny change. Version only for breaking changes.",
                    "Avoid removing fields. Mark them deprecated and keep them for a while.",
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
                        <span className="title">API design</span>
                        <span className="sub">
                            REST, naming, pagination, sorting, status codes,
                            errors, versioning
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
                            What great API design is
                        </div>
                        <div className="introSub">
                            A great API is predictable, consistent, and safe
                            under real-world usage. It should be easy to
                            consume, hard to misuse, and stable over time.
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
                                            Revision tip: Say the best status
                                            codes for create, update, delete,
                                            and validation errors.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiCheckCircle />
                    </span>
                    <span className="closingText">
                        Consistency beats perfection. A predictable API is
                        easier to scale, test, secure, and maintain.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ApiDesign;
