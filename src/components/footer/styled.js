import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: grid;
        gap: 18px;
        padding: 22px 0 8px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .footerTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 0;
        }

        .logo {
            width: 34px;
            height: 34px;
            flex: 0 0 auto;
            object-fit: contain;
        }

        .copyright {
            margin: 0;
            color: var(--color-text-muted);
            line-height: 1.5;
        }

        .copyright a {
            color: var(--color-text-secondary);
            font-weight: 800;
            text-decoration: none;

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }
        }

        .supportLinks,
        .footerLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .supportLinks {
            justify-content: flex-end;
        }

        .iconLink {
            width: 34px;
            height: 34px;

            display: grid;
            place-items: center;

            border: 1px solid var(--color-border);
            border-radius: 9px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
            text-decoration: none;

            transition:
                box-shadow 160ms ease,
                text-shadow 160ms ease;

            &:hover {
                box-shadow: 0 18px 40px var(--color-shadow);
                text-shadow: 0 0 12px var(--color-text-primary);
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }

        @media (max-width: 600px) {
            .footerTop {
                align-items: flex-start;
                flex-direction: column;
            }

            .supportLinks {
                justify-content: flex-start;
            }
        }
    `,
};
