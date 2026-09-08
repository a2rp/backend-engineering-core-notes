# Project Documentation

## Overview

`backend-engineering-core-notes` is a React and Vite study guide for backend engineering concepts. The notes are grouped into practical sections covering Node.js internals, API design, authentication, security, performance, and observability.

The interface uses a fixed header, a left navigation menu, and a right content area. Each section is available through a browser route and is loaded only when that route is opened.

## Technology

- React 18
- Vite
- React Router DOM
- styled-components
- react-icons
- GitHub Pages deployment

## Project structure

```text
src/
  App.jsx                 Application shell and route definitions
  App.styled.js           Main shell styles
  main.jsx                React entry point
  index.css               Global reset and base styles
  theme.css               Dark and light theme variables
  components/
    header/               Fixed header and theme toggle
    sidebar/              Static route navigation
    about/                Overview content
    footer/               Footer content
  pages/                  Lazy-loaded route page groups
  topics/                 Individual backend engineering notes
public/
  images/                 Logo assets
  _redirects              SPA fallback for compatible static hosts
```

## Navigation routes

The application uses `BrowserRouter` with the basename `/backend-engineering-core-notes`. Category menus in the sidebar can be expanded to reveal topic links. Every topic link is a real nested route with its own lazy-loaded page.

| Route | Content |
| --- | --- |
| `/` | Project overview |
| `/node-internals` | Node internals, event loop, streams, and buffers |
| `/api-design` | API design, REST principles, versioning, and status codes |
| `/authentication` | Authentication, JWT, cookies, and OAuth |
| `/security` | Security, XSS, CSRF, rate limiting, and hashing |
| `/performance` | Caching, Redis, and CDN |
| `/observability` | Logging, structured logs, and error tracking |

Examples of nested topic links include `/node-internals/event-loop`, `/authentication/jwt`, and `/security/csrf`.

For local development, Vite serves the application at a URL similar to:

```text
http://localhost:5173/backend-engineering-core-notes/
```

## Routing and lazy loading

Route page modules are loaded with `React.lazy`. The route tree is wrapped in `Suspense` and displays a spinner while a page chunk is loading.

The Suspense boundary uses the current pathname as its key:

```jsx
<Suspense key={location.pathname} fallback={<RouteLoader />}>
```

This resets the loading boundary when the user changes sections. Unknown routes redirect to the overview route.

## Layout behavior

- The header remains fixed at the top of the viewport.
- The desktop sidebar stays visible below the header.
- The content area displays the selected route on the right.
- On narrow screens, the sidebar becomes a horizontally scrollable navigation row.
- The header includes a light and dark theme toggle.
- Category submenus expand and collapse in the sidebar.
- Topic content stays open in the main area so the reading flow is clean.
- Each child topic has its own route and page module.
- The selected navigation item receives an active state from `NavLink`.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the linter:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The Vite base path is configured as `/backend-engineering-core-notes/` for project-site deployment.

Before deployment, the `predeploy` script:

1. Builds the application.
2. Copies `dist/index.html` to `dist/404.html` for BrowserRouter fallback on GitHub Pages.

Deploy with:

```bash
npm run deploy
```

The deploy script publishes the `dist` directory to the `gh-pages` branch.

## Adding a new section

1. Add the topic component under `src/topics/`.
2. Create a page group under `src/pages/`.
3. Add a lazy import and route in `src/App.jsx`.
4. Add a matching `NavLink` entry in `src/components/sidebar/index.jsx`.
5. Run `npm run lint` and `npm run build`.

Keep topic content self-contained in its topic folder and keep route labels short enough for the mobile navigation row.

## Verification checklist

Before committing changes, run:

```bash
npm run lint
npm run build
```

Also verify that each sidebar item opens the expected route and that a direct route refresh works in the deployed project path.

## License

This project is released under the MIT License. See [LICENSE](./LICENSE).
