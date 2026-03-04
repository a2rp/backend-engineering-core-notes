import React from "react";
import { Styled } from "./styled";
import { FiServer, FiShield, FiActivity } from "react-icons/fi";

const About = () => {
    return (
        <Styled.Wrapper>
            <div className="header">
                <h1>Backend Engineering Core Notes</h1>
                <p>
                    A fast, structured revision sheet for backend engineering
                    fundamentals using Node.js mental models. These notes are
                    designed to help you quickly recall important concepts used
                    in real backend systems.
                </p>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <FiServer />
                    </div>
                    <h3>Node Internals</h3>
                    <p>
                        Understand how Node.js actually works - event loop,
                        async execution, streams, buffers, and the runtime
                        architecture behind backend applications.
                    </p>
                </div>

                <div className="card">
                    <div className="icon">
                        <FiShield />
                    </div>
                    <h3>Security and Authentication</h3>
                    <p>
                        Core security concepts like JWT authentication, cookies,
                        OAuth flows, CSRF protection, hashing strategies, and
                        rate limiting used in production APIs.
                    </p>
                </div>

                <div className="card">
                    <div className="icon">
                        <FiActivity />
                    </div>
                    <h3>Performance and Observability</h3>
                    <p>
                        Learn how real backend systems stay fast and reliable
                        using caching, Redis, CDN strategies, structured logs,
                        monitoring, and error tracking.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default About;
