import React, { createElement } from "react";
import {
    FaCodepen,
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedinIn,
    FaMugHot,
    FaStar,
    FaYoutube,
} from "react-icons/fa6";
import { links, supportLinks } from "../../data/links";
import { Styled } from "./styled";

const socialIcons = {
    portfolio: FaGlobe,
    github: FaGithub,
    codepen: FaCodepen,
    linkedin: FaLinkedinIn,
    facebook: FaFacebookF,
    youtube: FaYoutube,
    email: FaEnvelope,
};

const supportIcons = {
    Support: FaHeart,
    "Buy Me A Coffee": FaMugHot,
    Patreon: FaStar,
};

const FooterLink = ({ item, icon }) => {
    const isEmail = item.href.startsWith("mailto:");

    return (
        <a
            className="iconLink"
            href={item.href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            aria-label={item.label}
            title={item.label}
        >
            {createElement(icon, { "aria-hidden": "true" })}
        </a>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <div className="footerTop">
                <div className="brand">
                    <img
                        className="logo"
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Backend Engineering Core Notes logo"
                    />

                    <p className="copyright">
                        Copyright &copy; {currentYear}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </p>
                </div>

                <div className="supportLinks" aria-label="Support links">
                    {supportLinks.map((item) => (
                        <FooterLink
                            key={item.href}
                            item={item}
                            icon={supportIcons[item.label]}
                        />
                    ))}
                </div>
            </div>

            <nav className="footerLinks" aria-label="Social links">
                {links.map((item) => (
                    <FooterLink
                        key={item.id}
                        item={item}
                        icon={socialIcons[item.icon]}
                    />
                ))}
            </nav>
        </Styled.Wrapper>
    );
};

export default Footer;
