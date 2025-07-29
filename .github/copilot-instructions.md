# Copilot Instructions for E-Commarce (NestJS)

## Architecture Overview
- This is a NestJS-based monorepo for an e-commerce backend, written in TypeScript.
- Main entry: `src/main.ts` bootstraps the app using `AppModule`.
- Core modules: `Admin` and `User` (each with their own controller, service, and module files).
- Shared logic is in `app.controller.ts`, `app.service.ts`, and `app.module.ts`.
- Follows standard NestJS dependency injection and module boundaries.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start server (dev):** `npm run start:dev`
- **Start server (prod):** `npm run start:prod`
- **Run unit tests:** `npm run test`
- **Run e2e tests:** `npm run test:e2e` (see `test/app.e2e-spec.ts`)
- **Check coverage:** `npm run test:cov`
- **Build for production:** `npm run build` (uses `tsconfig.build.json`)

## Project Conventions
- **Module structure:** Each domain (e.g., `Admin`, `User`) has its own folder with `controller`, `service`, and `module` files.
- **TypeScript config:** Use `tsconfig.json` for dev, `tsconfig.build.json` for production builds.
- **Testing:** Unit tests are colocated with source files; e2e tests are in `test/`.
- **Linting:** Uses ESLint config in `eslint.config.mjs`.
- **Nest CLI:** Project is configured via `nest-cli.json`.

## Integration Points
- No database or external API integration is present in the base structure; add providers/services as needed.
- For deployment, see [NestJS Mau](https://mau.nestjs.com) or standard NestJS deployment docs.

## Patterns & Examples
- **Controllers** handle HTTP requests and delegate to services (see `src/Admin/admin.controller.ts`).
- **Services** encapsulate business logic (see `src/User/user.service.ts`).
- **Modules** wire up controllers/services (see `src/Admin/admin.module.ts`).
- **AppModule** imports feature modules and sets up global providers.

## Key Files
- `src/main.ts`: App bootstrap
- `src/app.module.ts`: Root module
- `src/Admin/`, `src/User/`: Feature modules
- `test/app.e2e-spec.ts`: End-to-end tests
- `eslint.config.mjs`: Linting rules
- `nest-cli.json`: Nest CLI config
- `tsconfig*.json`: TypeScript configs

---

**For AI agents:**
- Follow NestJS module/service/controller patterns for new features.
- Use existing test and build scripts for validation.
- Reference feature modules for structure and naming conventions.
- Ask for clarification if a workflow or integration is unclear.
