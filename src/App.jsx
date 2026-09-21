import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

const HomePage = lazy(() => import("./pages/HomePage"));
const NodeInternalsPage = lazy(() => import("./pages/NodeInternalsPage"));
const ApiDesignPage = lazy(() => import("./pages/ApiDesignPage"));
const AuthenticationPage = lazy(() => import("./pages/AuthenticationPage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const PerformancePage = lazy(() => import("./pages/PerformancePage"));
const ObservabilityPage = lazy(() => import("./pages/ObservabilityPage"));
const EventLoopPage = lazy(() => import("./pages/EventLoopPage"));
const StreamsPage = lazy(() => import("./pages/StreamsPage"));
const BuffersPage = lazy(() => import("./pages/BuffersPage"));
const TimersPage = lazy(() => import("./pages/TimersPage"));
const MicrotasksPage = lazy(() => import("./pages/MicrotasksPage"));
const BackpressurePage = lazy(() => import("./pages/BackpressurePage"));
const ClusterWorkersPage = lazy(() => import("./pages/ClusterWorkersPage"));
const RestPrinciplesPage = lazy(() => import("./pages/RestPrinciplesPage"));
const VersioningPage = lazy(() => import("./pages/VersioningPage"));
const StatusCodesPage = lazy(() => import("./pages/StatusCodesPage"));
const JwtPage = lazy(() => import("./pages/JwtPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const OAuthPage = lazy(() => import("./pages/OAuthPage"));
const XssPage = lazy(() => import("./pages/XssPage"));
const CsrfPage = lazy(() => import("./pages/CsrfPage"));
const RateLimitingPage = lazy(() => import("./pages/RateLimitingPage"));
const HashingPage = lazy(() => import("./pages/HashingPage"));
const ValidationPage = lazy(() => import("./pages/ValidationPage"));
const HeadersPage = lazy(() => import("./pages/HeadersPage"));
const CachingPage = lazy(() => import("./pages/CachingPage"));
const RedisPage = lazy(() => import("./pages/RedisPage"));
const CdnPage = lazy(() => import("./pages/CdnPage"));
const LoggingPage = lazy(() => import("./pages/LoggingPage"));
const StructuredLogsPage = lazy(() => import("./pages/StructuredLogsPage"));
const ErrorTrackingPage = lazy(() => import("./pages/ErrorTrackingPage"));

const RouteLoader = () => (
    <div className="routeLoader" role="status" aria-live="polite">
        <span className="spinner" />
        <span>Loading notes...</span>
    </div>
);

const RoutedContent = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [location.pathname]);

    return (
        <Suspense key={location.pathname} fallback={<RouteLoader />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/node-internals" element={<NodeInternalsPage />} />
                <Route path="/node-internals/event-loop" element={<EventLoopPage />} />
                <Route path="/node-internals/timers" element={<TimersPage />} />
                <Route path="/node-internals/microtasks" element={<MicrotasksPage />} />
                <Route path="/node-internals/streams" element={<StreamsPage />} />
                <Route path="/node-internals/buffers" element={<BuffersPage />} />
                <Route path="/node-internals/backpressure" element={<BackpressurePage />} />
                <Route path="/node-internals/cluster-workers" element={<ClusterWorkersPage />} />
                <Route path="/api-design" element={<ApiDesignPage />} />
                <Route path="/api-design/rest-principles" element={<RestPrinciplesPage />} />
                <Route path="/api-design/versioning" element={<VersioningPage />} />
                <Route path="/api-design/status-codes" element={<StatusCodesPage />} />
                <Route path="/authentication" element={<AuthenticationPage />} />
                <Route path="/authentication/jwt" element={<JwtPage />} />
                <Route path="/authentication/cookies" element={<CookiesPage />} />
                <Route path="/authentication/oauth" element={<OAuthPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/security/xss" element={<XssPage />} />
                <Route path="/security/csrf" element={<CsrfPage />} />
                <Route path="/security/rate-limiting" element={<RateLimitingPage />} />
                <Route path="/security/hashing" element={<HashingPage />} />
                <Route path="/security/validation" element={<ValidationPage />} />
                <Route path="/security/headers" element={<HeadersPage />} />
                <Route path="/performance" element={<PerformancePage />} />
                <Route path="/performance/caching" element={<CachingPage />} />
                <Route path="/performance/redis" element={<RedisPage />} />
                <Route path="/performance/cdn" element={<CdnPage />} />
                <Route path="/observability" element={<ObservabilityPage />} />
                <Route path="/observability/logging-and-monitoring" element={<LoggingPage />} />
                <Route path="/observability/structured-logs" element={<StructuredLogsPage />} />
                <Route path="/observability/error-tracking" element={<ErrorTrackingPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
};

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setHeaderVisible(
                currentScrollY <= 0 || currentScrollY < previousScrollY,
            );
            setShowTopButton(currentScrollY > 420);

            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [sidebarOpen]);

    return (
        <BrowserRouter basename="/backend-engineering-core-notes">
            <Styled.Wrapper>
                <Styled.Header className={headerVisible ? "" : "hidden"}>
                    <Header onMenuClick={() => setSidebarOpen(true)} />
                </Styled.Header>
                <Styled.Body>
                    <Sidebar
                        isOpen={sidebarOpen}
                        onClose={() => setSidebarOpen(false)}
                    />
                    <Styled.Main>
                        <Styled.Content>
                            <RoutedContent />
                            <Footer />
                        </Styled.Content>
                    </Styled.Main>
                </Styled.Body>

                {showTopButton && (
                    <Styled.GoToTop
                        type="button"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        aria-label="Go to top"
                        title="Go to top"
                    >
                        <span aria-hidden="true">&uarr;</span>
                    </Styled.GoToTop>
                )}
            </Styled.Wrapper>
        </BrowserRouter>
    );
};

export default App;
