# backend-engineering-core-notes

A route-based revision project for backend engineering concepts using Node.js patterns.

This repo is designed as a fast reference for core backend topics - clean definitions, practical mental models, real examples, and interview-ready notes.

---

![alt text](image.png)

---

## Purpose

- Strong mental models for Node.js runtime and API behavior
- Practical security and auth understanding
- Production-focused reminders - not textbook theory
- Clean, structured notes that are easy to scan
- Quick revision for backend engineering interviews

---

## Coverage

### Node internals

- Event loop
- Timers
- Microtasks vs macrotasks
- Streams
- Buffers
- Backpressure (concept)
- Cluster and worker threads (overview)

### API design

- REST principles
- Resource naming
- Pagination and filtering
- Sorting and searching
- Status codes
- Error response shape
- Versioning strategies

### Authentication

- JWT - JSON Web Token
- Cookies and sessions
- OAuth - Open Authorization
- Refresh tokens (concept)
- CSRF-safe auth flows

### Security

- XSS - Cross Site Scripting
- CSRF - Cross Site Request Forgery
- Rate limiting
- Hashing and password storage
- Input validation and sanitization
- Security headers (overview)

### Performance

- Caching basics
- Redis (concepts + common patterns)
- CDN - Content Delivery Network
- Cache invalidation (basics)

### Observability

- Logging and monitoring
- Structured logs
- Correlation IDs (concept)
- Error tracking (overview)
- Health checks

---

## Tech Stack

- React + Vite
- styled-components
- react-icons
- react-router-dom with BrowserRouter
- GitHub Pages deployment

## Layout and navigation

The app uses a fixed header, a persistent left navigation menu, and a scrollable content area on the right. Each section is loaded only when its route is opened, with a loading spinner shown through React Suspense while the page chunk is fetched.

Available routes:

- `/` for the overview
- `/node-internals`
- `/api-design`
- `/authentication`
- `/security`
- `/performance`
- `/observability`

Each category also has dedicated child routes. For example:

- `/node-internals/event-loop`
- `/api-design/rest-principles`
- `/authentication/jwt`
- `/security/csrf`
- `/performance/redis`
- `/observability/structured-logs`

Child routes render their own lazy-loaded topic page. Navigation is handled entirely from the expandable sidebar, without hash links or DOM reference scrolling.

The Vite base path and BrowserRouter basename are both set to `/backend-engineering-core-notes`, which matches the GitHub Pages project URL.

---

## Local Setup

```bash
npm install
npm run dev
```

Open the project URL shown by Vite. For a GitHub Pages-style local path, use `/backend-engineering-core-notes/`.

---

## Notes Style

- Single expand-collapse sections per topic
- Beginner-friendly definitions and examples
- Full forms for important short forms
- Interview-ready phrasing and pitfalls

## License

MIT

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me A Coffee: [https://buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [https://patreon.com/a2rp](https://patreon.com/a2rp)