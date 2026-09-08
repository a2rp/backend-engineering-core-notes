import React from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiActivity,
    FiArrowRight,
    FiBookOpen,
    FiCheckCircle,
    FiLayers,
    FiServer,
    FiShield,
    FiTarget,
} from "react-icons/fi";

const About = () => (
    <Styled.Wrapper>
        <div className="header">
            <div className="eyebrow">Backend engineering study guide</div>
            <h1>Backend Engineering Core Notes</h1>
            <p>
                A fast, structured revision sheet for backend engineering
                fundamentals using Node.js mental models. These notes are
                designed to help you quickly recall important concepts used in
                real backend systems.
            </p>
            <div className="actions">
                <NavLink className="primaryAction" to="/node-internals">
                    Start learning <FiArrowRight aria-hidden="true" />
                </NavLink>
                <span className="updatedNote">Focused notes for practical revision</span>
            </div>
        </div>

        <div className="stats" aria-label="Study guide summary">
            <div className="stat"><FiLayers aria-hidden="true" /><strong>7</strong><span>core sections</span></div>
            <div className="stat"><FiBookOpen aria-hidden="true" /><strong>24+</strong><span>topic notes</span></div>
            <div className="stat"><FiTarget aria-hidden="true" /><strong>3</strong><span>learning tracks</span></div>
        </div>

        <div className="cards">
            <div className="card">
                <div className="icon"><FiServer /></div>
                <h3>Node Internals</h3>
                <p>
                    Understand how Node.js works through the event loop,
                    asynchronous execution, streams, buffers, and runtime
                    architecture.
                </p>
            </div>
            <div className="card">
                <div className="icon"><FiShield /></div>
                <h3>Security and Authentication</h3>
                <p>
                    Review JWT authentication, cookies, OAuth flows, CSRF
                    protection, hashing strategies, and rate limiting for APIs.
                </p>
            </div>
            <div className="card">
                <div className="icon"><FiActivity /></div>
                <h3>Performance and Observability</h3>
                <p>
                    Learn how caching, Redis, CDN strategies, structured logs,
                    monitoring, and error tracking support reliable systems.
                </p>
            </div>
        </div>

        <div className="studyGrid">
            <section className="studyPanel">
                <div className="panelHeading">
                    <FiCheckCircle aria-hidden="true" />
                    <h2>Suggested study path</h2>
                </div>
                <ol className="studySteps">
                    <li><span>01</span><div><strong>Understand the runtime</strong><p>Start with the event loop, asynchronous execution, streams, and buffers.</p></div></li>
                    <li><span>02</span><div><strong>Design reliable APIs</strong><p>Review REST principles, status codes, versioning, and response behavior.</p></div></li>
                    <li><span>03</span><div><strong>Protect and operate services</strong><p>Connect authentication, security, caching, logging, and error tracking.</p></div></li>
                </ol>
            </section>

            <section className="studyPanel focusPanel">
                <div className="panelHeading">
                    <FiTarget aria-hidden="true" />
                    <h2>What to look for</h2>
                </div>
                <ul className="focusList">
                    <li>Understand the reason behind each backend pattern.</li>
                    <li>Compare trade-offs before choosing an implementation.</li>
                    <li>Use the notes as a quick reference during revision.</li>
                    <li>Move from fundamentals to production concerns.</li>
                </ul>
                <NavLink className="textLink" to="/observability">Explore observability <FiArrowRight aria-hidden="true" /></NavLink>
            </section>
        </div>
    </Styled.Wrapper>
);

export default About;
