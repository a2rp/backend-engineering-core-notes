import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        margin-bottom: 30px;

        .header { margin-bottom: 20px; }

        .eyebrow {
            margin-bottom: 10px;
            color: var(--color-primary);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .header h1 { font-size: 28px; margin-bottom: 10px; }

        .header p {
            max-width: 720px;
            color: var(--color-text-secondary);
        }

        .actions {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 14px;
            margin-top: 20px;
        }

        .primaryAction, .textLink {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-primary);
            font-size: 13px;
            font-weight: 800;
            text-decoration: none;
        }

        .primaryAction {
            padding: 10px 14px;
            border: 1px solid color-mix(in srgb, var(--color-primary) 48%, var(--color-border));
            border-radius: 10px;
            background: color-mix(in srgb, var(--color-primary) 16%, var(--color-surface));
        }

        .primaryAction:hover,
        .textLink:hover {
            box-shadow: 0 18px 40px var(--color-shadow);
            text-shadow: 0 0 12px var(--color-text-primary);
        }

        .updatedNote { color: var(--color-text-muted); font-size: 12px; }

        .stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 18px;
        }

        .stat {
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 10px;
            align-items: center;
            padding: 12px 14px;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: color-mix(in srgb, var(--color-surface) 76%, transparent);
        }

        .stat svg { grid-row: span 2; color: var(--color-primary); }
        .stat strong { font-size: 18px; line-height: 1; }
        .stat span { color: var(--color-text-muted); font-size: 11px; }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 16px;
        }

        .card {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 16px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: linear-gradient(180deg, var(--color-surface), var(--color-surface-2));
            box-shadow: 0 12px 26px var(--color-shadow);
        }

        .icon { color: var(--color-primary); font-size: 22px; }
        .card h3 { font-size: 16px; }
        .card p { color: var(--color-text-secondary); font-size: 13px; }

        .studyGrid {
            display: grid;
            grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
            gap: 16px;
            margin-top: 18px;
        }

        .studyPanel {
            padding: 18px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: linear-gradient(180deg, var(--color-surface), var(--color-surface-2));
            box-shadow: 0 12px 26px var(--color-shadow);
        }

        .panelHeading {
            display: flex;
            align-items: center;
            gap: 9px;
            margin-bottom: 16px;
        }

        .panelHeading svg { color: var(--color-primary); }
        .panelHeading h2 { font-size: 17px; }
        .studySteps { display: grid; gap: 14px; }

        .studySteps li {
            display: grid;
            grid-template-columns: 30px 1fr;
            gap: 10px;
            align-items: start;
        }

        .studySteps li > span {
            padding-top: 2px;
            color: var(--color-primary);
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.08em;
        }

        .studySteps strong { font-size: 13px; }
        .studySteps p { margin-top: 3px; font-size: 12px; }

        .focusList { display: grid; gap: 11px; margin-bottom: 20px; }

        .focusList li {
            position: relative;
            padding-left: 18px;
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .focusList li::before {
            content: "";
            position: absolute;
            top: 0.65em;
            left: 0;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--color-primary);
        }

        .textLink svg { width: 15px; height: 15px; }

        @media (max-width: 900px) {
            .studyGrid { grid-template-columns: 1fr; }
        }

        @media (max-width: 560px) {
            .stats { grid-template-columns: 1fr; }
            .header h1 { font-size: 24px; }
        }
    `,
};
