import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiActivity, FiBookOpen, FiChevronDown, FiDatabase, FiHome, FiLock, FiServer, FiShield, FiX } from "react-icons/fi";
import { Styled } from "./styled";

const links = [
    { to: "/", label: "Overview", icon: FiHome, end: true },
    {
        to: "/node-internals",
        label: "Node internals",
        icon: FiServer,
        children: [
            ["event-loop", "Event loop"], ["timers", "Timers"], ["microtasks", "Microtasks"],
            ["streams", "Streams"], ["buffers", "Buffers"], ["backpressure", "Backpressure"], ["cluster-workers", "Cluster and workers"],
        ],
    },
    {
        to: "/api-design", label: "API design", icon: FiBookOpen,
        children: [["rest-principles", "REST principles"], ["versioning", "Versioning"], ["status-codes", "Status codes"]],
    },
    {
        to: "/authentication", label: "Authentication", icon: FiLock,
        children: [["jwt", "JWT"], ["cookies", "Cookies"], ["oauth", "OAuth"]],
    },
    {
        to: "/security", label: "Security", icon: FiShield,
        children: [["xss", "XSS"], ["csrf", "CSRF"], ["rate-limiting", "Rate limiting"], ["hashing", "Hashing"], ["validation", "Input validation"], ["headers", "Security headers"]],
    },
    {
        to: "/performance", label: "Performance", icon: FiDatabase,
        children: [["caching", "Caching"], ["redis", "Redis"], ["cdn", "CDN"]],
    },
    {
        to: "/observability", label: "Observability", icon: FiActivity,
        children: [["logging-and-monitoring", "Logging and monitoring"], ["structured-logs", "Structured logs"], ["error-tracking", "Error tracking"]],
    },
];

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();
    const activeGroup = links.find((link) => link.to !== "/" && location.pathname.startsWith(link.to));
    const [expanded, setExpanded] = useState(activeGroup?.to || null);

    const toggleGroup = (to) => setExpanded((current) => (current === to ? null : to));

    return (
        <>
            <Styled.Backdrop className={isOpen ? "visible" : ""} onClick={onClose} aria-hidden="true" />
            <Styled.Wrapper className={isOpen ? "open" : ""} aria-label="Notes navigation">
                <div className="drawerHeader">
                    <div className="eyebrow">Study guide</div>
                    <button type="button" className="closeButton" onClick={onClose} aria-label="Close notes navigation" title="Close notes navigation"><FiX aria-hidden="true" /></button>
                </div>
                <nav>
                    {links.map(({ to, label, icon: Icon, end, children }) => {
                        const isGroupOpen = activeGroup
                            ? activeGroup.to === to && expanded === to
                            : expanded === to;
                        return (
                            <div className="navGroup" key={to}>
                                <div className="navRow">
                                    <NavLink to={to} end={end} onClick={() => { setExpanded(to); onClose(); }}>
                                        <Icon aria-hidden="true" /><span>{label}</span>
                                    </NavLink>
                                    {children && <button type="button" className="submenuToggle" onClick={() => toggleGroup(to)} aria-label={`${isGroupOpen ? "Collapse" : "Expand"} ${label} submenu`} aria-expanded={isGroupOpen}><FiChevronDown aria-hidden="true" /></button>}
                                </div>
                                {children && <div className={`submenu ${isGroupOpen ? "open" : ""}`}>
                                    {children.map(([slug, childLabel]) => <NavLink key={slug} to={`${to}/${slug}`} onClick={() => { setExpanded(to); onClose(); }}>{childLabel}</NavLink>)}
                                </div>}
                            </div>
                        );
                    })}
                </nav>
                <div className="hint">Choose a section, then open a topic from its submenu.</div>
            </Styled.Wrapper>
        </>
    );
};

export default Sidebar;
