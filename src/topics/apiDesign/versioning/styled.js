// src/topics/apiDesign/versioning/styled.js
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
                    var(--color-primary) 14%,
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
                max-height: 8000px;
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
                color-mix(in srgb, var(--color-primary) 10%, transparent),
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
                    var(--color-primary) 14%,
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

        .concepts {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            border-bottom: 1px solid var(--color-border);

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }

            .concept {
                border-radius: 16px;
                border: 1px solid var(--color-border);
                background: linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );
                box-shadow: 0 16px 36px var(--color-shadow);

                padding: 12px;
                display: flex;
                gap: 12px;
                align-items: flex-start;

                transition:
                    transform 160ms ease,
                    border-color 160ms ease,
                    box-shadow 160ms ease;

                &:hover {
                    transform: translateY(-2px);
                    border-color: var(--color-border-light);
                    box-shadow: 0 20px 44px var(--color-shadow);
                }

                .cIcon {
                    width: 38px;
                    height: 38px;
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

                .cTitle {
                    font-weight: 900;
                    color: var(--color-text-primary);
                    margin-bottom: 4px;
                }

                .cSub {
                    font-size: 12.5px;
                    color: var(--color-text-secondary);
                    line-height: 1.55;
                }
            }
        }

        .sectionTitle {
            padding: 14px 14px 0 14px;
            font-weight: 900;
            color: var(--color-text-primary);
            display: flex;
            flex-direction: column;
            gap: 4px;

            .sectionTitleHint {
                font-size: 12px;
                color: var(--color-text-muted);
                font-weight: 800;
            }
        }

        .strategyLayout {
            padding: 14px;
            display: grid;
            grid-template-columns: 360px 1fr;
            gap: 12px;
            border-bottom: 1px solid var(--color-border);

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .tabs {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .tab {
            width: 100%;
            text-align: left;

            display: flex;
            align-items: center;
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
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;

            .tabIcon {
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

            .tabText {
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .tabTitle {
                font-weight: 900;
                color: var(--color-text-primary);
            }

            .tabLabel {
                font-size: 12px;
                font-weight: 900;
                color: var(--color-text-muted);
            }

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
                box-shadow: 0 20px 44px var(--color-shadow);
            }

            &.on {
                border-color: color-mix(
                    in srgb,
                    var(--color-primary) 48%,
                    var(--color-border)
                );
                box-shadow:
                    0 0 0 3px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 20px 44px var(--color-shadow);
            }
        }

        .panel {
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

        .panelTop {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);

            display: flex;
            justify-content: space-between;
            gap: 12px;
            align-items: flex-start;

            .panelHead {
                display: flex;
                gap: 12px;
                min-width: 0;
            }

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
                    var(--color-primary) 12%,
                    var(--color-surface)
                );
                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .pTitle {
                font-weight: 900;
                color: var(--color-text-primary);
                margin-bottom: 4px;
            }

            .pSummary {
                font-size: 13px;
                color: var(--color-text-secondary);
                line-height: 1.55;
            }

            .badge {
                flex: 0 0 auto;
                padding: 8px 10px;
                border-radius: 999px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface) 70%,
                    transparent
                );
                color: var(--color-text-secondary);
                font-size: 12px;
                font-weight: 900;
            }
        }

        .panelGrid {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .rulesPitfalls {
            padding: 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            @media (width < 980px) {
                grid-template-columns: 1fr;
            }
        }

        .box {
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

        .box.good {
            background: linear-gradient(
                180deg,
                color-mix(
                    in srgb,
                    var(--color-accent) 10%,
                    var(--color-surface)
                ),
                var(--color-surface-2)
            );
        }

        .box.warn {
            background: linear-gradient(
                180deg,
                color-mix(
                    in srgb,
                    var(--color-warning) 10%,
                    var(--color-surface)
                ),
                var(--color-surface-2)
            );
        }

        .boxTitle {
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            font-weight: 900;
            color: var(--color-text-primary);

            display: flex;
            align-items: center;
            gap: 10px;
        }

        .codeBox {
            margin: 0 14px 14px 14px;
        }

        .list {
            padding: 12px 14px 14px 14px;
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
            margin: 0 14px 0 14px;
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

        .tipRow {
            padding: 12px 14px 14px 14px;
            display: flex;
            align-items: center;
            gap: 10px;

            .tipIcon {
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

            .tipText {
                font-size: 12.5px;
                color: var(--color-text-secondary);
                line-height: 1.5;
                font-weight: 800;
            }
        }

        .closing {
            margin: 14px;
            padding: 12px 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
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
                    var(--color-primary) 12%,
                    var(--color-surface)
                );

                color: var(--color-text-primary);
                flex: 0 0 auto;
            }

            .closingText {
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
            .box,
            .concept {
                transition: none !important;
            }
        }
    `,
};
