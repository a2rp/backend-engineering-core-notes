import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;
        background: var(--color-bg);
    `,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        height: 64px;
        z-index: 100;
    `,
    Body: styled.div`
        display: flex;
        min-height: 100vh;
        padding-top: 64px;

        @media (max-width: 760px) {
            display: block;
        }
    `,
    Main: styled.main`
        min-width: 0;
        flex: 1;
        min-height: calc(100vh - 64px);
        overflow: hidden;
    `,
    Content: styled.div`
        width: min(100%, 1440px);
        min-height: calc(100vh - 64px);
        margin: 0 auto;
        padding: 30px clamp(18px, 3vw, 46px) 24px;

        .routeLoader {
            min-height: 360px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        /* Topic content stays open. Navigation controls live in the sidebar. */
        & > section > .sectionHeader { display: none !important; }
        & > section > .sectionBody {
            display: block !important;
            max-height: none !important;
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
            margin-top: 0 !important;
        }
        & > section .cardBody {
            display: block !important;
            max-height: none !important;
            opacity: 1 !important;
            transform: none !important;
            visibility: visible !important;
        }
        & > section .cardHeader { cursor: default; }
        & > section .cardHeader .cRight { display: none !important; }

        .spinner {
            width: 22px;
            height: 22px;
            border: 3px solid var(--color-border);
            border-top-color: var(--color-primary);
            border-radius: 50%;
            animation: route-spin 700ms linear infinite;
        }

        @keyframes route-spin {
            to { transform: rotate(360deg); }
        }

        @media (max-width: 760px) {
            padding: 24px 16px 20px;
        }
    `,
};
