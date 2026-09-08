// src/topics/statusCodes/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiCheckCircle,
    FiAlertTriangle,
    FiXCircle,
    FiInfo,
    FiZap,
    FiBookOpen,
    FiChevronDown,
    FiArrowRight,
    FiPlay,
    FiPause,
    FiSearch,
    FiShield,
    FiTool,
    FiBox,
} from "react-icons/fi";

const StatusCodes = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const groups = useMemo(
        () => [
            {
                key: "2xx",
                title: "2xx - Success",
                icon: <FiCheckCircle />,
                summary:
                    "Request was received and processed successfully. Use specific codes to describe what happened.",
                codes: [
                    {
                        code: "200 OK",
                        when: "Standard success response. Use when you return data or a normal success message.",
                        example:
                            "GET /users - return list of users\nPUT /users/12 - return updated user",
                        pitfall:
                            "Avoid using 200 for everything. If you created something, consider 201.",
                    },
                    {
                        code: "201 Created",
                        when: "A new resource was created. Usually used for POST create endpoints.",
                        example:
                            "POST /users - created a user\nResponse: return created user and Location header",
                        pitfall:
                            "If nothing is created, do not use 201. For async jobs, consider 202.",
                    },
                    {
                        code: "204 No Content",
                        when: "Success but no response body. Common for delete or update when you do not return data.",
                        example:
                            "DELETE /users/12 - successfully deleted\nResponse body should be empty",
                        pitfall:
                            "Do not send JSON body with 204. Many clients ignore it.",
                    },
                ],
                keyPoints: [
                    "2xx means the request succeeded at the HTTP layer.",
                    "Pick codes that match the API action. It helps clients behave correctly.",
                    "204 is great when you do not want payload. It saves bandwidth.",
                ],
                shape: {
                    title: "Typical success response shape",
                    code: `// Example success JSON shape
{
  "ok": true,
  "data": {
    "id": "12",
    "name": "Neha"
  }
}`,
                },
            },
            {
                key: "3xx",
                title: "3xx - Redirection",
                icon: <FiArrowRight />,
                summary:
                    "Client must take another action to complete the request. Common on web flows and caching.",
                codes: [
                    {
                        code: "301 Moved Permanently",
                        when: "Resource moved permanently. Browsers and caches may remember it.",
                        example:
                            "GET /docs - permanently moved to /documentation",
                        pitfall:
                            "Be careful in APIs. Clients might cache 301 and ignore future changes.",
                    },
                    {
                        code: "302 Found",
                        when: "Temporary redirect. Common in login flows.",
                        example: "After login redirect to a dashboard page",
                        pitfall:
                            "For APIs, redirects are often unexpected unless you are doing web auth flows.",
                    },
                    {
                        code: "304 Not Modified",
                        when: "Used with caching headers. Means client cache is still valid, so no body is sent.",
                        example:
                            "GET /assets with If-None-Match and ETag\nServer replies 304 if unchanged",
                        pitfall:
                            "You must implement caching headers correctly for 304 to make sense.",
                    },
                ],
                keyPoints: [
                    "3xx is more common in browsers than pure JSON APIs.",
                    "304 is powerful for caching and performance when using ETag or If-Modified-Since.",
                ],
                shape: {
                    title: "Caching example idea",
                    code: `// Client sends
If-None-Match: "etag-value"

// Server sends if same
304 Not Modified
// no body`,
                },
            },
            {
                key: "4xx",
                title: "4xx - Client errors",
                icon: <FiAlertTriangle />,
                summary:
                    "Client sent something wrong. The server understood the request, but cannot or will not process it.",
                codes: [
                    {
                        code: "400 Bad Request",
                        when: "Malformed request or validation failed. Use for invalid payloads and missing required fields.",
                        example:
                            "POST /users with missing email\nResponse includes validation errors",
                        pitfall:
                            "Do not use 400 for auth failures. Use 401 or 403.",
                    },
                    {
                        code: "401 Unauthorized",
                        when: "Authentication is missing or invalid. Means you need to login or provide valid credentials.",
                        example: "Missing token or invalid session cookie",
                        pitfall:
                            "401 is about identity. Permission issues are usually 403.",
                    },
                    {
                        code: "403 Forbidden",
                        when: "Authenticated but not allowed. The identity is known but lacks permission.",
                        example:
                            "User logged in but tries to access admin route",
                        pitfall:
                            "Do not leak sensitive permission rules. Use consistent error message.",
                    },
                    {
                        code: "404 Not Found",
                        when: "Resource not found. Used when ID does not exist or route is unknown.",
                        example: "GET /users/999 where user 999 does not exist",
                        pitfall:
                            "For security, sometimes 404 is used instead of 403 to hide existence of a resource.",
                    },
                    {
                        code: "409 Conflict",
                        when: "Request conflicts with current state. Common for unique constraint or version conflicts.",
                        example:
                            "POST /users with email already exists\nUpdate conflicts with optimistic locking",
                        pitfall:
                            "Avoid using 400 for conflicts. 409 makes client logic cleaner.",
                    },
                    {
                        code: "429 Too Many Requests",
                        when: "Rate limit exceeded. Client is sending too many requests.",
                        example:
                            "Login attempts too fast\nAPI calls exceed quota",
                        pitfall: "Always include Retry-After when possible.",
                    },
                ],
                keyPoints: [
                    "4xx means client must change something before retrying.",
                    "400 is validation and payload issues.",
                    "401 is identity missing or invalid.",
                    "403 is identity ok but permission denied.",
                    "429 is throttling and rate limits.",
                ],
                shape: {
                    title: "Recommended error response shape",
                    code: `// Example error JSON shape
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "issue": "missing" }
    ]
  }
}`,
                },
            },
            {
                key: "5xx",
                title: "5xx - Server errors",
                icon: <FiXCircle />,
                summary:
                    "Server failed to process a valid request. Usually not the client fault. Log these with correlation IDs.",
                codes: [
                    {
                        code: "500 Internal Server Error",
                        when: "Generic server crash or unhandled error.",
                        example:
                            "Unhandled exception\nDatabase connection failed unexpectedly",
                        pitfall:
                            "Do not expose stack traces to clients. Log internally.",
                    },
                    {
                        code: "502 Bad Gateway",
                        when: "Upstream service or proxy returned invalid response. Common behind load balancers.",
                        example:
                            "Nginx received invalid response from Node server",
                        pitfall:
                            "Often indicates upstream crash or misconfiguration.",
                    },
                    {
                        code: "503 Service Unavailable",
                        when: "Service temporarily unavailable. Maintenance or overloaded.",
                        example: "Deploy window\nDatabase under heavy load",
                        pitfall:
                            "Return Retry-After if you know when to retry.",
                    },
                    {
                        code: "504 Gateway Timeout",
                        when: "Upstream took too long to respond. Timeout between services.",
                        example:
                            "API gateway waited too long for backend response",
                        pitfall:
                            "Tune timeouts and investigate slow queries or dependency slowness.",
                    },
                ],
                keyPoints: [
                    "5xx means the client request is usually fine but the server failed.",
                    "Always log 5xx with request id, user id if safe, route, and error.",
                    "If your system uses multiple services, 502 and 504 become common signals.",
                ],
                shape: {
                    title: "Production logging reminder",
                    code: `// Log with context
{
  "level": "error",
  "msg": "request failed",
  "route": "GET /users/12",
  "status": 500,
  "requestId": "req_8f2a",
  "error": "DB_TIMEOUT"
}`,
                },
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

    const getGroupAccent = (key) => {
        if (key === "2xx") return "good";
        if (key === "3xx") return "info";
        if (key === "4xx") return "warn";
        return "bad";
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
                        <span className="title">Status codes</span>
                        <span className="sub">
                            2xx success, 3xx redirect, 4xx client errors, 5xx
                            server errors - practical API usage
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
                            Why status codes matter
                        </div>
                        <div className="introSub">
                            HTTP status codes are signals for clients. When you
                            choose them correctly, frontend logic becomes
                            simpler, retries become safer, and debugging becomes
                            faster.
                            <br />
                            Use clear codes for clear behavior.
                        </div>
                    </div>
                </div>

                <div className="quickMap">
                    <div className="qmTitle">
                        Quick mapping you should remember
                    </div>

                    <div className="qmGrid">
                        <div className="qmCard">
                            <div className="qmTop">
                                <span className="qmIcon good">
                                    <FiCheckCircle />
                                </span>
                                <span className="qmText">2xx - success</span>
                            </div>
                            <div className="qmSub">
                                Client can proceed normally
                            </div>
                        </div>

                        <div className="qmCard">
                            <div className="qmTop">
                                <span className="qmIcon info">
                                    <FiArrowRight />
                                </span>
                                <span className="qmText">
                                    3xx - redirect and cache
                                </span>
                            </div>
                            <div className="qmSub">
                                Client must take another step
                            </div>
                        </div>

                        <div className="qmCard">
                            <div className="qmTop">
                                <span className="qmIcon warn">
                                    <FiAlertTriangle />
                                </span>
                                <span className="qmText">
                                    4xx - client error
                                </span>
                            </div>
                            <div className="qmSub">Client must fix request</div>
                        </div>

                        <div className="qmCard">
                            <div className="qmTop">
                                <span className="qmIcon bad">
                                    <FiXCircle />
                                </span>
                                <span className="qmText">
                                    5xx - server error
                                </span>
                            </div>
                            <div className="qmSub">
                                Server failed, log and investigate
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid">
                    {groups.map((g) => {
                        const open = activeKey === g.key;
                        const accent = getGroupAccent(g.key);

                        return (
                            <div
                                key={g.key}
                                className={`card ${open ? "open" : ""} ${accent}`}
                            >
                                <button
                                    type="button"
                                    className="cardHeader"
                                    onClick={() => handleToggleItem(g.key)}
                                    aria-expanded={open}
                                >
                                    <span className="cLeft">
                                        <span className={`cIcon ${accent}`}>
                                            {g.icon}
                                        </span>
                                        <span className="cText">
                                            <span className="cTitle">
                                                {g.title}
                                            </span>
                                            <span className="cSummary">
                                                {g.summary}
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
                                            When to use
                                        </div>

                                        <div className="codes">
                                            {g.codes.map((c, idx) => (
                                                <div
                                                    key={`${g.key}-c-${idx}`}
                                                    className="codeRow"
                                                >
                                                    <div className="codeTag">
                                                        {c.code}
                                                    </div>

                                                    <div className="codeInfo">
                                                        <div className="when">
                                                            {c.when}
                                                        </div>

                                                        <div className="mini">
                                                            <span className="miniTitle">
                                                                Example
                                                            </span>
                                                            <pre className="miniCode">
                                                                <code>
                                                                    {c.example}
                                                                </code>
                                                            </pre>
                                                        </div>

                                                        <div className="pit">
                                                            <span className="pitIcon">
                                                                <FiAlertTriangle />
                                                            </span>
                                                            <span className="pitText">
                                                                {c.pitfall}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            Key points
                                        </div>
                                        <ul className="list">
                                            {g.keyPoints.map((b, idx) => (
                                                <li key={`${g.key}-kp-${idx}`}>
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
                                            {g.shape.title}
                                        </div>
                                        <pre className="code">
                                            <code>{g.shape.code}</code>
                                        </pre>
                                    </div>

                                    <div className="footerHint">
                                        <span className="hintIcon">
                                            <FiArrowRight />
                                        </span>
                                        <span className="hintText">
                                            Interview tip: Explain {g.key} in
                                            one sentence and give 2 real
                                            examples.
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
                        Good status codes reduce bugs. They turn API behavior
                        into predictable client behavior.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default StatusCodes;
