// src/topics/observability/structuredLogs/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        margin-bottom: 30px;

        .sectionHeader {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            padding: 14px;
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
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
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
                    var(--color-primary) 86%,
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

        .topHint {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .hintIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .hintSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            display: grid;
            grid-template-columns: 420px 1fr;
            gap: 14px;
            padding: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .nav {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .navItem {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;

            padding: 12px;
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

            .nIcon {
                width: 40px;
                height: 40px;
                border-radius: 14px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nIcon svg {
                width: 18px;
                height: 18px;
            }

            .nText {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding-top: 2px;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .nSub {
                font-size: 12px;
                color: var(--color-text-muted);
                line-height: 1.45;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .nRight {
                flex: 0 0 auto;
                padding-top: 8px;
                color: var(--color-text-muted);
                opacity: 0.9;
            }

            &:hover {
                transform: translateY(-1px);
                border-color: var(--color-border-light);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .navItem.active {
            border-color: color-mix(
                in srgb,
                var(--color-primary) 46%,
                var(--color-border)
            );
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 18px 40px var(--color-shadow);

            .nIcon {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 16%,
                    var(--color-surface)
                );
            }
        }

        .content {
            min-width: 0;
        }

        .card {
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;
        }

        .cardHead {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .cIcon {
                width: 44px;
                height: 44px;
                border-radius: 16px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 14%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .cIcon svg {
                width: 18px;
                height: 18px;
            }

            .cTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .cSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .cardBody {
            padding: 14px;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );
            padding: 14px;

            .bTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 10px;
            }
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
                    var(--color-primary) 78%,
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

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .mini {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 12px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .mTop {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 8px;
            }

            .mIcon {
                width: 30px;
                height: 30px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
            }

            .mTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .mText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }

            &:hover {
                transform: translateY(-1px);
                border-color: var(--color-border-light);
                box-shadow: 0 18px 40px var(--color-shadow);
            }

            &:active {
                transform: translateY(0px);
            }
        }

        .cardFoot {
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);

            display: flex;
            align-items: flex-start;
            gap: 10px;

            background: linear-gradient(
                180deg,
                transparent,
                color-mix(in srgb, var(--color-warning) 8%, transparent)
            );

            .fIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 10%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .fText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 700;
            }
        }

        .glossary {
            margin: 14px;
            margin-top: 0;
            border: 1px solid var(--color-border);
            border-radius: 18px;

            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            padding: 14px;

            .gTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 10px;
            }

            .gGrid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px;

                @media (width < 720px) {
                    grid-template-columns: 1fr;
                }
            }

            .gItem {
                border: 1px solid var(--color-border);
                border-radius: 14px;
                padding: 12px;

                background: linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );

                .k {
                    font-weight: 900;
                    color: var(--color-text-primary);
                    margin-bottom: 4px;
                }

                .v {
                    font-size: 13px;
                    color: var(--color-text-secondary);
                    line-height: 1.55;
                }
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .navItem,
            .mini {
                transition: none !important;
            }
        }
    `,
};
