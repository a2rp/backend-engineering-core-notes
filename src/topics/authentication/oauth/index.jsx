// src/topics/authentication/oauth/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiKey,
    FiShield,
    FiLock,
    FiGlobe,
    FiRefreshCw,
    FiAlertTriangle,
    FiChevronDown,
    FiBookOpen,
    FiInfo,
    FiArrowRight,
    FiZap,
    FiCheckCircle,
    FiCode,
} from "react-icons/fi";

const OAuth = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeKey, setActiveKey] = useState(null);

    const cards = useMemo(
        () => [
            {
                key: "whatIs",
                title: "What is OAuth",
                icon: <FiGlobe />,
                summary:
                    "OAuth is an authorization framework. It lets an app access a user resource without sharing the user password with that app.",
                points: [
                    "OAuth is about authorization, not authentication.",
                    "OAuth gives your app a limited access token, not the user password.",
                    "Tokens can be scoped, time limited, and revoked depending on provider.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "OAuth is like a hotel key card. You do not get the master key to the building. You get a temporary card that opens only certain doors.",
                },
                example: {
                    title: "Example scenario",
                    code: `// You build an app that wants to read a user's Google Drive files.
// You should NOT ask for the Google password.
// Instead, you redirect the user to Google to approve access.
// Google gives your app an access token to call Google APIs.`,
                },
                pitfalls: [
                    "Do not say OAuth is login by itself. OAuth is permission delegation.",
                ],
            },
            {
                key: "roles",
                title: "Core roles and terms",
                icon: <FiBookOpen />,
                summary:
                    "OAuth has standard roles. Knowing these terms makes every flow easy to understand.",
                points: [
                    "Resource Owner - the user who owns the data.",
                    "Client - your app that wants access (web app, mobile app, backend).",
                    "Authorization Server - issues tokens (Google, GitHub, etc).",
                    "Resource Server - hosts the APIs with the protected data.",
                    "Scope - what the token can access (read profile, read email).",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Your app asks the authorization server for permission. The resource server checks tokens before serving data.",
                },
                example: {
                    title: "Example mapping",
                    code: `// GitHub OAuth
// Resource Owner - the GitHub user
// Authorization Server - github.com login and consent screen
// Resource Server - api.github.com
// Client - your app`,
                },
                pitfalls: [
                    "Mixing up authorization server and resource server in your explanation.",
                ],
            },
            {
                key: "authCode",
                title: "Authorization Code flow",
                icon: <FiKey />,
                summary:
                    "Most common secure flow for web apps. User approves on provider. Your app exchanges a code for tokens on the server side.",
                points: [
                    "Step 1 - redirect user to provider authorize endpoint with client_id and redirect_uri and scopes.",
                    "Step 2 - user logs in and approves. Provider redirects back with an authorization code.",
                    "Step 3 - your backend exchanges that code for access token using client_secret.",
                    "Step 4 - your backend calls the provider API using the access token.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "The code is like a claim ticket. It is useless by itself unless your server exchanges it with the secret.",
                },
                example: {
                    title: "Flow sketch",
                    code: `// Browser -> Provider
GET /authorize?response_type=code&client_id=...&redirect_uri=...&scope=...

// Provider -> Browser -> Your server redirect
GET /oauth/callback?code=...

// Server -> Provider token exchange (server-to-server)
POST /token
  grant_type=authorization_code
  code=...
  client_id=...
  client_secret=...
  redirect_uri=...`,
                },
                pitfalls: [
                    "Do not exchange the code from frontend if you have a server. Keep client_secret on server only.",
                    "Always validate state to prevent CSRF style attacks on the redirect.",
                ],
            },
            {
                key: "pkce",
                title: "PKCE",
                icon: <FiLock />,
                summary:
                    "PKCE protects public clients (mobile apps, SPAs) where you cannot safely store a client_secret.",
                points: [
                    "PKCE stands for Proof Key for Code Exchange.",
                    "Client creates a code_verifier and sends a derived code_challenge in the authorize request.",
                    "When exchanging the code, client must send the original code_verifier.",
                    "Even if an attacker steals the code, they cannot exchange it without the verifier.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "PKCE adds a private proof string that only the original client knows. The code alone is not enough.",
                },
                example: {
                    title: "Flow sketch",
                    code: `// Step 1 - client makes code_verifier and code_challenge
// Step 2 - authorize request includes code_challenge
GET /authorize?...&code_challenge=...&code_challenge_method=S256

// Step 3 - token exchange includes code_verifier
POST /token
  grant_type=authorization_code
  code=...
  code_verifier=...`,
                },
                pitfalls: [
                    "Do not skip PKCE for SPAs. It is the modern baseline.",
                ],
            },
            {
                key: "tokens",
                title: "Access token and refresh token",
                icon: <FiRefreshCw />,
                summary:
                    "Access tokens are short lived. Refresh tokens can get new access tokens without asking user to login again.",
                points: [
                    "Access token - used on API calls. Usually short life to reduce risk.",
                    "Refresh token - used only to get a new access token. Should be stored very carefully.",
                    "Some providers rotate refresh tokens. Old refresh token becomes invalid after use.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "Access token is your daily pass. Refresh token is your identity proof locked in a safe, used rarely.",
                },
                example: {
                    title: "Refresh flow sketch",
                    code: `// When access token expires
POST /token
  grant_type=refresh_token
  refresh_token=...
  client_id=...
  client_secret=...`,
                },
                pitfalls: [
                    "Never put refresh tokens in localStorage for browser apps if you can avoid it.",
                    "Do not send refresh tokens to third party scripts in the page.",
                ],
            },
            {
                key: "security",
                title: "Security checklist and pitfalls",
                icon: <FiShield />,
                summary:
                    "OAuth is secure when you implement the boring details correctly. Most failures are in the details.",
                points: [
                    "Always use HTTPS in production.",
                    "Validate redirect_uri and do not allow open redirect patterns.",
                    "Use state parameter and verify it on callback.",
                    "Use PKCE for public clients.",
                    "Use least privilege scopes. Ask only what you need.",
                    "Store tokens securely. Prefer httpOnly cookies for your own session.",
                ],
                mentalModel: {
                    title: "Mental model",
                    text: "OAuth is like airport security. One missing check makes the whole system weak.",
                },
                example: {
                    title: "State parameter idea",
                    code: `// Before redirect - store state in server session
const state = crypto.randomUUID();
session.oauthState = state;

// In authorize URL
&state=${`state`}

// On callback - verify
if (req.query.state !== session.oauthState) {
  return res.status(400).send("Invalid state");
}`,
                },
                pitfalls: [
                    "Missing state validation leads to login CSRF style attacks.",
                    "Allowing any redirect_uri leads to token leakage.",
                    "Using implicit flow for SPAs is outdated. Prefer auth code with PKCE.",
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
                        <FiKey />
                    </span>
                    <span className="text">
                        <span className="title">OAuth</span>
                        <span className="sub">
                            Authorization framework, flows, PKCE, tokens, and
                            security checklist
                        </span>
                    </span>
                </span>

                <span className="right">
                    <span className="pill">
                        <span className="pIcon">
                            {isOpen ? <FiCheckCircle /> : <FiCode />}
                        </span>
                        <span className="pText">
                            {isOpen ? "Collapse" : "Expand"}
                        </span>
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
                            What you should be able to explain
                        </div>
                        <div className="introSub">
                            Explain OAuth as authorization, name the roles, and
                            walk through Authorization Code flow with PKCE. Then
                            explain why state and redirect_uri validation
                            matter.
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
                                            {c.mentalModel.title}
                                        </div>
                                        <p className="para">
                                            {c.mentalModel.text}
                                        </p>
                                    </div>

                                    <div className="block">
                                        <div className="blockTitle">
                                            Example
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
                                            {c.pitfalls.map((g, idx) => (
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
                                            Revision tip: Say OAuth in one line,
                                            then name the roles, then explain
                                            why PKCE exists.
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
                        Interview one-liner: OAuth lets a client access a
                        resource server with scoped tokens issued by an
                        authorization server, without sharing user passwords.
                    </span>
                    <span className="closingWarn">
                        <FiAlertTriangle /> Always mention state and PKCE.
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default OAuth;
