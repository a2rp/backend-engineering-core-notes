// src/topics/authentication/jwt/styled.js
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
                flex: 0 0 auto;
                display: inline-flex;
                align-items: center;
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
                max-height: 6000px;
                opacity: 1;
                transform: translateY(0px);
            }
        }

        .topBar {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                color-mix(in srgb, var(--color-primary) 8%, transparent),
                transparent
            );
        }

        .hint {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 12px 24px var(--color-shadow);
            margin-bottom: 12px;

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
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .hintText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                font-weight: 700;
                line-height: 1.45;
            }
        }

        .tabs {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tab {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease,
                box-shadow 140ms ease;

            .tIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

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

            .tText {
                font-size: 12.5px;
                font-weight: 900;
                color: var(--color-text-secondary);
                white-space: nowrap;
            }

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:active {
                transform: translateY(0px);
            }

            &.active {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 46%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 14%,
                            transparent
                        ),
                    0 14px 28px var(--color-shadow);

                .tText {
                    color: var(--color-text-primary);
                }
            }
        }

        .panel {
            padding: 14px;
        }

        .empty {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);

            .emptyTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 6px;
            }

            .emptySub {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        }

        .content {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            box-shadow: 0 16px 36px var(--color-shadow);
        }

        .panelHeader {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            background: radial-gradient(
                700px 220px at 18% 0%,
                color-mix(in srgb, var(--color-primary) 10%, transparent),
                transparent 66%
            );

            .phLeft {
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 0;
            }

            .phIcon {
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

            .phTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 2px;
            }

            .phSub {
                font-size: 12.5px;
                color: var(--color-text-muted);
            }
        }

        .block {
            padding: 14px;
            border-top: 1px solid var(--color-border);

            .blockTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 8px;
            }
        }

        .block.note {
            background: color-mix(in srgb, var(--color-accent) 8%, transparent);
        }

        .block.warn {
            background: color-mix(
                in srgb,
                var(--color-warning) 9%,
                transparent
            );
        }

        .para {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-weight: 700;
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

        .codeTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .copyBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 12px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            &:active {
                transform: translateY(0px);
            }

            svg {
                width: 14px;
                height: 14px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
            }
        }

        .code {
            margin-top: 10px;
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

        .qna {
            padding: 14px;
            border-top: 1px solid var(--color-border);
        }

        .qnaTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
        }

        .qnaGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .qnaCard {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 12px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }
        }

        .qTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 6px;
        }

        .qIcon {
            width: 28px;
            height: 28px;
            border-radius: 10px;

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

        .qQ {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .qA {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.55;
            font-weight: 700;
        }

        .bottomTip {
            margin: 0 14px 14px 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                transparent
            );

            display: flex;
            align-items: flex-start;
            gap: 10px;

            .btIcon {
                width: 28px;
                height: 28px;
                border-radius: 10px;

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

            .btText {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
                font-weight: 800;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .sectionHeader,
            .sectionBody,
            .tab,
            .qnaCard,
            .copyBtn {
                transition: none !important;
            }
        }
    `,
};
