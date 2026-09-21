// src/topics/eventLoop/styled.js
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
                box-shadow: 0 12px 22px var(--color-shadow);
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
                max-width: 920px;
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
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
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
                max-height: 9000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topNote {
            display: flex;
            gap: 12px;
            padding: 14px;

            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .noteIcon {
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

            .noteTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .noteSub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .layout {
            display: grid;
            grid-template-columns: 360px minmax(0, 1fr);
            gap: 14px;
            padding: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .leftNav {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .navItem {
            width: 100%;
            text-align: left;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

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
                transform 150ms ease,
                border-color 150ms ease,
                box-shadow 150ms ease;

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
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .nText {
                display: flex;
                flex-direction: column;
                gap: 3px;
                min-width: 0;
                flex: 1;
            }

            .nTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .nSub {
                font-size: 12.5px;
                color: var(--color-text-muted);
                line-height: 1.45;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            .nArrow {
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
                flex: 0 0 auto;

                transition: transform 160ms ease;
            }

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:hover .nArrow {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &.active {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 45%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 14%,
                            transparent
                        ),
                    0 18px 44px var(--color-shadow);
            }

            &.active .nIcon {
                background: color-mix(
                    in srgb,
                    var(--color-primary) 18%,
                    var(--color-surface)
                );
            }
        }

        .rightContent {
            min-width: 0;
        }

        .panel {
            display: none;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;

            &.show {
                display: block;
            }
        }

        .panelHeader {
            display: flex;
            gap: 12px;
            padding: 14px;

            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent
            );

            .pIcon {
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
                box-shadow: 0 12px 22px var(--color-shadow);
            }

            .pHeadText {
                min-width: 0;
            }

            .pTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 2px;
            }

            .pSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }
        }

        .panelBody {
            padding: 14px;
        }

        .block {
            padding: 12px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
            margin-bottom: 12px;
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
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
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );

                box-shadow: 0 10px 18px var(--color-shadow);
                flex: 0 0 auto;
            }

            .dot.warn {
                background: color-mix(
                    in srgb,
                    var(--color-warning) 78%,
                    var(--color-text-primary)
                );
            }

            .liText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .extra {
            margin-top: 14px;
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 74%,
                transparent
            );
            box-shadow: 0 18px 44px var(--color-shadow);
            overflow: hidden;
        }

        .extraTitle {
            padding: 14px;
            font-weight: 900;
            color: var(--color-text-primary);
            border-bottom: 1px solid var(--color-border);

            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 8%, transparent),
                transparent
            );
        }

        .examplesGrid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .exCard {
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
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }
        }

        .exHead {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);

            .exIcon {
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
                flex: 0 0 auto;
            }

            .exName {
                font-weight: 900;
                color: var(--color-text-primary);
                font-size: 13px;
                line-height: 1.45;
            }
        }

        .code {
            background: var(--color-code-bg);
            border-top: 1px solid var(--color-code-border);
            padding: 12px 14px;
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

        .pitfalls {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-warning) 8%,
                transparent
            );
        }

        .pitTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;

            .pitIcon {
                width: 30px;
                height: 30px;
                border-radius: 12px;

                display: inline-flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-warning) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .pitText {
                font-weight: 900;
                color: var(--color-text-primary);
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

            .cIcon {
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

            .cText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .navItem,
            .exCard {
                transition: none !important;
            }
        }
    `,
};
