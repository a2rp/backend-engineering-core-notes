// src/topics/apiDesign/restPrinciples/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiGlobe,
    FiBookOpen,
    FiChevronDown,
    FiPlay,
    FiPause,
    FiInfo,
    FiLink,
    FiLayers,
    FiCheckCircle,
    FiAlertTriangle,
    FiCode,
    FiRepeat,
    FiShuffle,
    FiShield,
} from "react-icons/fi";

const RestPrinciples = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const cards = useMemo(
        () => [
            {
                key: "clientServer",
                title: "Client and server separation",
                icon: <FiLayers />,
                summary:
                    "Frontend and backend have separate responsibilities. The client requests, the server responds. Both can evolve independently.",
                points: [
                    "Client handles UI and user interactions.",
                    "Server owns data, rules, validation, and persistence.",
                    "This separation lets you change UI without changing the API contract, and scale server separately.",
                ],
                mentalModel:
                    "Client is the shopper. Server is the store. Shopper asks, store decides and returns.",
                example: `GET /users/42
200 OK
{
  "id": 42,
  "name": "Neha"
}`,
                pitfalls: [
                    "Do not let UI concerns leak into API design.",
                    "Do not return HTML pages from JSON APIs unless it is intentional.",
                ],
            },
            {
                key: "stateless",
                title: "Stateless requests",
                icon: <FiRepeat />,
                summary:
                    "Each request should contain everything needed to understand it. The server should not depend on previous requests to process the current one.",
                points: [
                    "Auth info is sent with every request, like cookie or Authorization header.",
                    "Scaling is easier because any server instance can handle any request.",
                    "Stateless does not mean no sessions. It means the server should not keep hidden conversational state per request flow.",
                ],
                mentalModel:
                    "Every request is a fresh form you submit. The server reads that form and responds. No memory games.",
                example: `GET /orders?status=pending&page=2
Authorization: Bearer <token>

200 OK
{
  "page": 2,
  "items": [...]
}`,
                pitfalls: [
                    "Server memory based state breaks horizontal scaling.",
                    "Hidden state makes bugs hard to reproduce.",
                ],
            },
            {
                key: "resourceBased",
                title: "Resources, not actions",
                icon: <FiLink />,
                summary:
                    "REST is about resources. Use nouns in URLs. Use HTTP methods for actions.",
                points: [
                    "Use /users, /orders, /products as resources.",
                    "Use methods - GET read, POST create, PUT replace, PATCH update, DELETE remove.",
                    "Avoid verbs in URL like /getUsers or /createOrder.",
                ],
                mentalModel:
                    "URL names the thing. HTTP method describes what you want to do with the thing.",
                example: `POST /orders
{
  "productId": 10,
  "qty": 2
}

201 Created
{
  "id": 901,
  "status": "pending"
}`,
                pitfalls: [
                    "Do not mix verbs into URL if a method already represents the action.",
                    "Keep resource naming consistent and predictable.",
                ],
            },
            {
                key: "uniformInterface",
                title: "Uniform interface",
                icon: <FiGlobe />,
                summary:
                    "A consistent, predictable interface across resources. Clients should not need special rules for each endpoint.",
                points: [
                    "Same patterns for pagination, filtering, sorting across endpoints.",
                    "Consistent response shape and consistent error format.",
                    "Use standard HTTP semantics - status codes, content type, headers.",
                ],
                mentalModel:
                    "Like driving any car. Steering is always the wheel, not different controls per car.",
                example: `GET /products?page=1&limit=20&sort=-price

200 OK
{
  "items": [...],
  "page": 1,
  "limit": 20,
  "total": 240
}`,
                pitfalls: [
                    "Inconsistent parameter names confuse clients.",
                    "Changing response shapes randomly causes frontend breakage.",
                ],
            },
            {
                key: "cacheable",
                title: "Cacheable responses",
                icon: <FiShuffle />,
                summary:
                    "Responses should declare if they can be cached. Caching improves speed and reduces server load.",
                points: [
                    "Safe reads like GET are often cacheable if data is not user specific.",
                    "Use Cache-Control and ETag when relevant.",
                    "Caching is not only CDN. Browser caching is also valuable.",
                ],
                mentalModel:
                    "If many people ask the same question, keep the answer on the wall so you do not repeat yourself.",
                example: `GET /public/products

200 OK
Cache-Control: public, max-age=60
ETag: "v1-products-abc"`,
                pitfalls: [
                    "Do not cache private user data publicly.",
                    "If caching exists, have a plan for invalidation.",
                ],
            },
            {
                key: "layeredSystem",
                title: "Layered system",
                icon: <FiShield />,
                summary:
                    "Clients do not need to know if they are talking to the real server or a gateway, cache, load balancer, or proxy.",
                points: [
                    "API gateway can handle auth, rate limits, logging.",
                    "Load balancers distribute traffic across instances.",
                    "CDN and reverse proxies can cache and compress responses.",
                ],
                mentalModel:
                    "Client sees one door. Behind the door are multiple rooms that handle the work.",
                example: `Client -> CDN -> Load Balancer -> API Gateway -> Node API -> Database`,
                pitfalls: [
                    "Debugging is harder if you do not add correlation IDs.",
                    "Make sure your layers forward the right headers.",
                ],
            },
            {
                key: "idempotency",
                title: "Idempotency",
                icon: <FiCheckCircle />,
                summary:
                    "An operation is idempotent if repeating it gives the same final result. This matters for retries and reliability.",
                points: [
                    "GET is idempotent. Safe reads do not change state.",
                    "PUT is typically idempotent because it replaces a resource with the same state each time.",
                    "POST is usually not idempotent because it creates new resources each time, unless you add an idempotency key.",
                ],
                mentalModel:
                    "Pressing elevator button again does not change the destination. That is idempotent.",
                example: `PUT /users/42
{
  "name": "Ashish"
}

Calling this multiple times keeps the user name as "Ashish".`,
                pitfalls: [
                    "Retries on POST can create duplicate orders without an idempotency strategy.",
                ],
            },
            {
                key: "restNotReligion",
                title: "REST is a style, not a religion",
                icon: <FiAlertTriangle />,
                summary:
                    "REST principles help with clarity and scale, but real systems sometimes need exceptions. Be consistent and explain the choice.",
                points: [
                    "Sometimes you need action endpoints like /auth/login. That is fine.",
                    "Batch operations and complex queries may not fit pure REST.",
                    "The goal is predictable API contracts, not perfect theory.",
                ],
                mentalModel:
                    "Use the rules to build a readable city, not to punish yourself for one weird building.",
                example: `POST /auth/login
POST /reports/generate

These are acceptable when they represent processes rather than resources.`,
                pitfalls: ["Avoid random exceptions. Document them clearly."],
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
        <Styled.Wrapper id="rest-principles">
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
                        <span className="title">REST principles</span>
                        <span className="sub">
                            Resource thinking, statelessness, consistent
                            contracts, caching, layers, idempotency
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
                            What REST is trying to solve
                        </div>
                        <div className="introSub">
                            REST makes APIs predictable. Predictable APIs are
                            easier to build, test, scale, and consume. Focus on
                            clear resources, consistent patterns, and correct
                            HTTP semantics.
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
                                            Example
                                        </div>
                                        <pre className="code">
                                            <code>{c.example}</code>
                                        </pre>
                                    </div>

                                    <div className="block warn">
                                        <div className="blockTitle">
                                            Common pitfalls
                                        </div>
                                        <ul className="list">
                                            {c.pitfalls.map((p, idx) => (
                                                <li key={`${c.key}-pit-${idx}`}>
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
                                            <FiCode />
                                        </span>
                                        <span className="hintText">
                                            Interview tip: Define REST in 2
                                            lines and give one example of
                                            resource naming.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="closing">
                    <span className="closingIcon">
                        <FiGlobe />
                    </span>
                    <span className="closingText">
                        Strong REST is mostly about consistency. Your API should
                        feel obvious to use even without reading docs.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default RestPrinciples;
