# backend-engineering-core-notes

A single-page, at-a-glance revision project for backend engineering concepts using Node.js patterns.

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
- GitHub Pages deployment

---

## Local Setup

```bash
npm install
npm run dev
```

---

## Notes Style

- Single expand-collapse sections per topic
- Beginner-friendly definitions and examples
- Full forms for important short forms
- Interview-ready phrasing and pitfalls

## License

MIT
