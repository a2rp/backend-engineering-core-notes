// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import NodeInternals from "./topics/nodeInternals";
import EventLoop from "./topics/eventLoop";
import Streams from "./topics/streams";
import Buffers from "./topics/buffers";
import ApiDesign from "./topics/apiDesign";
import RestPrinciples from "./topics/apiDesign/restPrinciples";
import Versioning from "./topics/apiDesign/versioning";
import StatusCodes from "./topics/statusCodes";
import Authentication from "./topics/authentication";
import Jwt from "./topics/authentication/jwt";
import Cookies from "./topics/authentication/cookies";
import OAuth from "./topics/authentication/oauth";
import Security from "./topics/security";
import Xss from "./topics/security/xss";
import Csrf from "./topics/security/csrf";
import RateLimiting from "./topics/rateLimiting";
import Hashing from "./topics/hashing";
import Caching from "./topics/caching";
import Redis from "./topics/redis";
import Cdn from "./topics/cdn";
import LoggingAndMonitoring from "./topics/loggingAndMonitoring";
import StructuredLogs from "./topics/observability/structuredLogs";
import ErrorTracking from "./topics/errorTracking";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <About />

                    <NodeInternals />
                    <EventLoop />
                    <Streams />
                    <Buffers />
                    <ApiDesign />
                    <RestPrinciples />
                    <Versioning />
                    <StatusCodes />
                    <Authentication />
                    <Jwt />
                    <Cookies />
                    <OAuth />
                    <Security />
                    <Xss />
                    <Csrf />
                    <RateLimiting />
                    <Hashing />
                    <Caching />
                    <Redis />
                    <Cdn />
                    <LoggingAndMonitoring />
                    <StructuredLogs />
                    <ErrorTracking />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
