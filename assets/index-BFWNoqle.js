import{c as m,r as i,j as e,n as g,x as f,a as u,f as y,u as b,b as v,p as w,q as k,s as c,t as j,L as N,o as S,h as P,y as I}from"./index-Cfj_xNHZ.js";const H={Wrapper:m.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .left {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .sIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .sIcon svg {
                width: 18px;
                height: 18px;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 2px;
                min-width: 0;
            }

            .title {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .sub {
                font-size: 12px;
                color: var(--color-text-muted);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 900px;
            }

            .right {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                flex: 0 0 auto;
            }

            .pill {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }

            .pill svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-accent) 78%,
                    var(--color-text-primary)
                );
            }

            .chev {
                width: 36px;
                height: 36px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                transition: transform 180ms ease;
                color: var(--color-text-secondary);
            }

            .chev.rot {
                transform: rotate(180deg);
            }

            &:hover {
                border-color: var(--color-border-light);
                transform: translateY(-1px);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .sectionBody {
            margin-top: 12px;
            border-radius: 18px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-surface-2) 72%,
                transparent
            );

            box-shadow: 0 18px 44px var(--color-shadow);

            overflow: hidden;

            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;

            &.show {
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .intro {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-accent) 10%, transparent),
                transparent
            );

            .introIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;
                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .introTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .introSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .grid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
            overflow: hidden;

            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }
        }

        .cardHeader {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            .cLeft {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

            .cIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cText {
                display: flex;
                flex-direction: column;
                gap: 4px;
                min-width: 0;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .cSummary {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.5;
            }

            .cRight {
                flex: 0 0 auto;
                padding-top: 2px;
            }

            .cChev {
                width: 34px;
                height: 34px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 84%,
                    transparent
                );

                color: var(--color-text-secondary);
                transition: transform 180ms ease;
            }

            .cChev.rot {
                transform: rotate(180deg);
            }

            &:hover .cChev {
                border-color: var(--color-border-light);
            }
        }

        .cardBody {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-6px);
            transition:
                max-height 240ms ease,
                opacity 200ms ease,
                transform 200ms ease;

            &.show {
                max-height: 2600px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;

                display: inline-flex;
                align-items: center;
                gap: 8px;

                .tIcon {
                    display: inline-flex;
                    color: color-mix(
                        in srgb,
                        var(--color-accent) 80%,
                        var(--color-text-primary)
                    );
                }
            }
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            li {
                display: flex;
                gap: 10px;
                align-items: flex-start;
            }

            .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                margin-top: 6px;

                background: color-mix(
                    in srgb,
                    var(--color-accent) 72%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 12px;
            overflow: auto;

            code {
                font-family:
                    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                    "Liberation Mono", "Courier New", monospace;
                font-size: 12px;
                color: var(--color-text-primary);
                line-height: 1.55;
                white-space: pre;
            }
        }

        .footerHint {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: center;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-accent) 8%, transparent)
            );

            .hintIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .closingIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-accent) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .card,
            .cardBody {
                transition: none !important;
            }
        }
    `},F=()=>{const[a,l]=i.useState(!1),[d,n]=i.useState(null),p=i.useMemo(()=>[{key:"whatIsHashing",icon:e.jsx(g,{}),title:"What is hashing",summary:"Hashing converts input into a fixed length output called a hash. Same input gives same hash.",points:["A hash function maps data of any size to a fixed size output.","It is one-way - you cannot reliably get the original input back from the hash.","Small input change causes a big hash change (avalanche effect).","Good hashes resist collisions - two different inputs producing the same hash."],mentalModel:"Hashing is like a fingerprint for data. You can compare fingerprints, but you cannot reconstruct the person from the fingerprint.",code:`// Node.js crypto hashing (fast hash)
// Use fast hashes for integrity, not for passwords

import crypto from "crypto";

const input = "hello";
const sha256 = crypto.createHash("sha256").update(input, "utf8").digest("hex");

console.log(sha256);`,gotchas:["Fast hashes like SHA-256 are not safe for storing passwords.","Hashing is not encryption. Encryption is reversible with a key, hashing is not."]},{key:"passwordStorage",icon:e.jsx(f,{}),title:"Password storage",summary:"Passwords must be stored using slow, salted password hashing algorithms like bcrypt, scrypt, or Argon2.",points:["Never store plain text passwords.","Never store password hashes with fast hashes like MD5, SHA-1, SHA-256.","Use bcrypt, scrypt, or Argon2 because they are slow and expensive to brute force.","Store only the hash output and the salt (salt is usually included in bcrypt output)."],mentalModel:"A slow password hash is like making an attacker pay a heavy fee for every guess. That fee is what buys you safety.",code:`// Example using bcrypt (concept)
// Install: npm i bcrypt

import bcrypt from "bcrypt";

const password = "MySecretPass123";
const rounds = 12;

// Signup - hash and store
const hash = await bcrypt.hash(password, rounds);
// store hash in DB

// Login - verify
const ok = await bcrypt.compare(password, hash);
console.log(ok);`,gotchas:["Do not lower cost too much. Too low means easy brute force.","Do not re-hash a bcrypt hash again with SHA. It usually makes things worse and breaks upgrades."]},{key:"saltPepper",icon:e.jsx(u,{}),title:"Salt and pepper",summary:"Salt makes identical passwords produce different hashes. Pepper is an extra secret stored separately from the DB.",points:["Salt is random per user and stored with the hash. It blocks rainbow tables and reuse across users.","Pepper is a server secret (like an env var). It adds extra protection if the DB leaks.","If you use a pepper, rotate it carefully because rotation can break verification if not designed."],mentalModel:"Salt is like adding a unique username-specific spice to every password before cooking. Pepper is a secret spice jar stored in your kitchen, not in the recipe book.",code:`// Pepper concept (pseudo)
// passwordHash = hash(password + PEPPER, salt)

const PEPPER = process.env.PASSWORD_PEPPER;

function withPepper(password) {
  return password + PEPPER;
}

// Then pass withPepper(password) into bcrypt.hash or argon2`,gotchas:["If pepper leaks, you lose the pepper benefit. Protect secrets well.","Salt must be random and unique per password."]},{key:"integrityVsPasswords",icon:e.jsx(y,{}),title:"Hashing for integrity vs passwords",summary:"Fast hashing is great for integrity checks. Password hashing needs slow algorithms designed for passwords.",points:["Integrity use case - file download verification, cache keys, content fingerprints.","Password use case - bcrypt, scrypt, Argon2 only.","Fast hashes are optimized to be computed quickly, attackers love that."],mentalModel:"Fast hashes are race cars - good for speed. Password hashes should be heavy trucks - slow and hard to accelerate.",code:`// Integrity example - verify file checksum
// You compute SHA-256 of a file and compare with known good hash

import crypto from "crypto";
import fs from "fs";

const h = crypto.createHash("sha256");
fs.createReadStream("./big.zip").on("data", (chunk) => h.update(chunk))
  .on("end", () => console.log(h.digest("hex")));`,gotchas:["Do not use SHA-256 for password storage.","Do not confuse hashing with signing. Signing needs keys and proves authenticity."]},{key:"timingSafeCompare",icon:e.jsx(b,{}),title:"Timing safe comparison",summary:"Comparing secrets using normal string comparison can leak info via timing. Use constant time compare for secrets.",points:["Timing attacks can reveal partial matches if comparisons stop early.","Use crypto.timingSafeEqual when comparing tokens or hashes of equal length.","Always normalize data and ensure same length buffers before comparing."],mentalModel:"If your comparison takes longer when more characters match, an attacker can learn your secret one character at a time.",code:`import crypto from "crypto";

const a = Buffer.from("aabbcc", "hex");
const b = Buffer.from("aabbcc", "hex");

const ok = crypto.timingSafeEqual(a, b);
console.log(ok);`,gotchas:["timingSafeEqual throws if lengths differ. Handle length checks first.","For passwords, use bcrypt.compare or argon2.verify instead of manual compares."]}],[]),h=()=>{l(r=>!r),a&&n(null)},x=r=>{n(s=>s===r?null:r)};return e.jsxs(H.Wrapper,{children:[e.jsxs("button",{type:"button",className:`sectionHeader ${a?"open":""}`,onClick:h,"aria-expanded":a,children:[e.jsxs("span",{className:"left",children:[e.jsx("span",{className:"sIcon",children:e.jsx(v,{})}),e.jsxs("span",{className:"text",children:[e.jsx("span",{className:"title",children:"Hashing"}),e.jsx("span",{className:"sub",children:"Password storage, salts, integrity hashes, and common security pitfalls"})]})]}),e.jsxs("span",{className:"right",children:[e.jsx("span",{className:"pill",children:a?e.jsxs(e.Fragment,{children:[e.jsx(w,{})," Collapse"]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{})," Expand"]})}),e.jsx("span",{className:`chev ${a?"rot":""}`,children:e.jsx(c,{})})]})]}),e.jsxs("div",{className:`sectionBody ${a?"show":""}`,children:[e.jsxs("div",{className:"intro",children:[e.jsx("div",{className:"introIcon",children:e.jsx(j,{})}),e.jsxs("div",{className:"introText",children:[e.jsx("div",{className:"introTitle",children:"Why hashing matters"}),e.jsx("div",{className:"introSub",children:"Hashing shows up everywhere in backend work - auth, password storage, request integrity, caching keys, and secure token handling. Getting hashing wrong is a top reason for account takeovers after database leaks."})]})]}),e.jsx("div",{className:"grid",children:p.map(r=>{const s=d===r.key;return e.jsxs("div",{className:"card",children:[e.jsxs("button",{type:"button",className:"cardHeader",onClick:()=>x(r.key),"aria-expanded":s,children:[e.jsxs("span",{className:"cLeft",children:[e.jsx("span",{className:"cIcon",children:r.icon}),e.jsxs("span",{className:"cText",children:[e.jsx("span",{className:"cTitle",children:r.title}),e.jsx("span",{className:"cSummary",children:r.summary})]})]}),e.jsx("span",{className:"cRight",children:e.jsx("span",{className:`cChev ${s?"rot":""}`,children:e.jsx(c,{})})})]}),e.jsxs("div",{className:`cardBody ${s?"show":""}`,children:[e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Key points"}),e.jsx("ul",{className:"list",children:r.points.map((o,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:o})]},`${r.key}-p-${t}`))})]}),e.jsxs("div",{className:"block",children:[e.jsx("div",{className:"blockTitle",children:"Mental model"}),e.jsx("p",{className:"para",children:r.mentalModel})]}),e.jsxs("div",{className:"block",children:[e.jsxs("div",{className:"blockTitle",children:[e.jsx("span",{className:"tIcon",children:e.jsx(N,{})}),e.jsx("span",{children:"Example"})]}),e.jsx("pre",{className:"code",children:e.jsx("code",{children:r.code})})]}),e.jsxs("div",{className:"block warn",children:[e.jsxs("div",{className:"blockTitle",children:[e.jsx("span",{className:"tIcon",children:e.jsx(S,{})}),e.jsx("span",{children:"Common pitfalls"})]}),e.jsx("ul",{className:"list",children:r.gotchas.map((o,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"liText",children:o})]},`${r.key}-g-${t}`))})]}),e.jsxs("div",{className:"footerHint",children:[e.jsx("span",{className:"hintIcon",children:e.jsx(P,{})}),e.jsx("span",{className:"hintText",children:"Revision tip: In an interview, say why bcrypt is used for passwords and why SHA-256 is not."})]})]})]},r.key)})}),e.jsxs("div",{className:"closing",children:[e.jsx("span",{className:"closingIcon",children:e.jsx(I,{})}),e.jsx("span",{className:"closingText",children:"Rule to remember - fast hashes for integrity, slow hashes for passwords, and always salt."})]})]})]})};export{F as H};
