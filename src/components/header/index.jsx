// src/components/header/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";

const THEME_LS_KEY = "backend-engineering-core-notes-theme";

const Header = ({ onMenuClick }) => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") {
            return "dark";
        }

        return localStorage.getItem(THEME_LS_KEY) || "dark";
    });

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, [theme]);

    useEffect(() => {
        localStorage.setItem(THEME_LS_KEY, theme);
    }, [theme]);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}
                            <img
                                src={`${import.meta.env.BASE_URL}images/transparentLogo.png`}
                                alt="Backend Engineering Core Notes logo"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">
                                backend-engineering-core-notes
                            </div>
                            <div className="subTitle">
                                Node internals, APIs, auth, security, caching,
                                observability
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        className="menuButton"
                        onClick={onMenuClick}
                        aria-label="Open notes navigation"
                        title="Open notes navigation"
                    >
                        <FiMenu aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
