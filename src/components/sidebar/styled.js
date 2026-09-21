import styled from "styled-components";

export const Styled = {
    Backdrop: styled.div`
        display: none;

        @media (max-width: 760px) {
            position: fixed;
            inset: 64px 0 0;
            z-index: 105;
            background: color-mix(in srgb, var(--color-bg) 62%, transparent);
            backdrop-filter: blur(3px);

            &.visible { display: block; }
        }
    `,
    Wrapper: styled.aside`
        position: sticky;
        top: 64px;
        align-self: flex-start;
        width: 248px;
        height: calc(100vh - 64px);
        flex: 0 0 248px;
        padding: 26px 16px;
        border-right: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 62%, var(--color-bg));
        overflow-y: auto;

        .drawerHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .eyebrow {
            padding: 0 12px 12px;
            color: var(--color-text-muted);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        .closeButton {
            display: none;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            color: var(--color-text-secondary);
            background: var(--color-surface-2);

            svg { width: 18px; height: 18px; }
        }

        nav { display: grid; gap: 5px; }

        .navGroup { display: grid; gap: 4px; }
        .navRow { display: flex; align-items: stretch; gap: 4px; }

        nav a {
            display: flex;
            align-items: center;
            gap: 11px;
            min-height: 42px;
            padding: 0 12px;
            border: 1px solid transparent;
            border-radius: 11px;
            color: var(--color-text-secondary);
            font-size: 13px;
            font-weight: 700;
            text-decoration: none;
            transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
        }

        .navRow > a { flex: 1; }

        .submenuToggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            border: 1px solid transparent;
            border-radius: 10px;
            color: var(--color-text-muted);
            cursor: pointer;
        }

        .submenuToggle:hover {
            box-shadow: 0 18px 40px var(--color-shadow);
            text-shadow: 0 0 12px var(--color-text-primary);
        }

        .submenuToggle svg { width: 15px; height: 15px; transition: transform 160ms ease; }
        .navGroup:has(.submenu.open) .submenuToggle svg { transform: rotate(180deg); }

        .submenu {
            display: grid;
            gap: 3px;
            max-height: 0;
            padding-left: 24px;
            overflow: hidden;
            opacity: 0;
            transition: max-height 200ms ease, opacity 160ms ease;
        }

        .submenu.open { max-height: 420px; opacity: 1; }

        .submenu a {
            min-height: 30px;
            padding: 0 10px;
            border-left: 1px solid var(--color-border);
            border-radius: 0 8px 8px 0;
            color: var(--color-text-muted);
            font-size: 12px;
            font-weight: 600;
        }

        .submenu a.active {
            color: var(--color-primary);
            border-left-color: var(--color-primary);
            background: color-mix(in srgb, var(--color-primary) 8%, transparent);
        }

        .submenu a:hover {
            box-shadow: 0 18px 40px var(--color-shadow);
            text-shadow: 0 0 12px var(--color-text-primary);
        }

        nav a svg { width: 17px; height: 17px; flex: 0 0 auto; }

        nav a:hover {
            box-shadow: 0 18px 40px var(--color-shadow);
            text-shadow: 0 0 12px var(--color-text-primary);
        }

        nav a.active {
            color: var(--color-text-primary);
            background: color-mix(in srgb, var(--color-primary) 14%, var(--color-surface));
            border-color: color-mix(in srgb, var(--color-primary) 34%, var(--color-border));
            box-shadow: 0 8px 18px var(--color-shadow);
        }

        nav a.active svg { color: var(--color-primary); }

        .hint {
            margin: 24px 12px 0;
            color: var(--color-text-muted);
            font-size: 12px;
            line-height: 1.55;
        }

        @media (max-width: 760px) {
            position: fixed;
            top: 64px;
            left: 0;
            z-index: 110;
            width: min(82vw, 300px);
            height: calc(100vh - 64px);
            flex-basis: auto;
            padding: 22px 16px;
            border-right: 1px solid var(--color-border);
            border-bottom: 0;
            transform: translateX(-105%);
            transition: transform 220ms ease;
            box-shadow: 18px 0 36px var(--color-shadow);

            &.open { transform: translateX(0); }

            .closeButton { display: inline-flex; }
            nav { display: grid; gap: 5px; }
            nav a { min-height: 42px; }
            .hint { display: block; }

        }
    `,
};
