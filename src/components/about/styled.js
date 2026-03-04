import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        margin-bottom: 30px;

        .header {
            margin-bottom: 20px;
        }

        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        .header p {
            max-width: 720px;
            color: var(--color-text-secondary);
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 16px;
        }

        .card {
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 26px var(--color-shadow);
        }

        .icon {
            font-size: 22px;
            color: var(--color-primary);
        }

        .card h3 {
            font-size: 16px;
        }

        .card p {
            font-size: 13px;
            color: var(--color-text-secondary);
        }
    `,
};
