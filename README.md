# Random Contacts API

RESTful API to provide random contacts with crud features.

## Prerequisites

- [compression](https://www.npmjs.com/package/compression)
- [cors](https://www.npmjs.com/package/cors)
- [express](https://www.npmjs.com/package/express)
- [faker](https://www.npmjs.com/package/faker)
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [tsc-watch](https://www.npmjs.com/package/tsc-watch)
- [typescript](https://www.npmjs.com/package/typescript)

## Installation

1. Install dependencies: `npm install`

2. Run in development environment: `npm run dev`

## Docs

- [API documentation & API testing](http://localhost:3000/api-docs) | Note: Server must be running.
- [Issue Tracker](https://github.com/DRampling/random-contacts-api/issues)

## Development Roadmap

- Expand GET: Paginate with `page` and `limit`.
- Expand GET: Sort with `sort` and `order`.
- Expand GET: Full text search with `q`
- Unit testing with Jest.
- Add integration tests & research ideal library (supertest?).
- Add production config.
- Add clustering and restarting with pm2.
