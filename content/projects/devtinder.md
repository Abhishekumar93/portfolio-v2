---
title: DevTinder
slug: devtinder
category: PROFILE DISCOVERY / STATE & DATA
description: A developer networking platform with authenticated discovery, profile management, connection workflows, and a tested full-stack architecture.
technologies:
  - React
  - TypeScript
  - Zustand
  - SWR
  - Node.js
  - Express
  - MongoDB
repositoryHref: https://github.com/Abhishekumar93/dev-tinder-frontend
backendRepositoryHref: https://github.com/Abhishekumar93/dev-tinder-backend
---

## Overview

DevTinder is a developer networking application built around profile discovery and connection workflows. The frontend is implemented with React 19, TypeScript, Vite, Zustand, SWR, React Hook Form, and Zod. The backend is a TypeScript REST API built with Node.js, Express, MongoDB, and Mongoose.

The project is designed as a complete frontend-and-backend portfolio application rather than a standalone UI demo.

## What it demonstrates

- Authenticated application flows
- Password and OTP login support
- Protected and public route handling
- Persistent client-side authentication state
- Developer profile discovery
- Connection request workflows
- Profile editing with live preview
- Typed form validation
- API integration and request lifecycle handling
- Automated frontend and backend testing
- CI-based lint, test, and build validation

## Frontend architecture

The frontend uses React 19 with TypeScript and Vite.

Zustand manages persistent authentication state, while SWR is used for API-backed data fetching. Forms use React Hook Form with Zod schemas for validation.

Authentication-aware routing is handled through dedicated protected and public route components. Axios interceptors centralize credential handling and unauthorized-session behavior.

The application also uses `React.lazy` and `Suspense` for code splitting.

## Backend architecture

The backend uses Node.js, TypeScript, Express 5, MongoDB, and Mongoose.

Authentication uses JWTs stored in HTTP-only cookies. Request payloads and parameters are validated using Zod, and password handling uses bcrypt.

The discovery feed excludes users who have already been interacted with and supports pagination. Connection requests follow explicit states such as interested, ignored, accepted, and rejected.

The backend also includes centralized error formatting, health checks, graceful shutdown handling, and environment validation.

## Testing and quality

The frontend test suite uses Vitest, React Testing Library, and MSW.

The backend uses Vitest, Supertest, and MongoDB Memory Server for isolated integration testing without requiring an external MongoDB instance.

Both sides of the project include linting and build validation as part of the development workflow.

## Engineering decisions

### Separate frontend and backend repositories

The frontend and backend are maintained independently, which keeps application concerns separated and makes each side easier to inspect.

### Persistent auth state

Authentication state is persisted on the client while the backend remains responsible for validating the actual session.

### Schema-based validation

Zod is used to keep validation rules explicit and typed across user-facing forms and backend request handling.

### Testable API boundaries

MSW is used on the frontend and an in-memory MongoDB instance is used on the backend so tests can validate behavior without depending on live external services.

## Key technologies

**Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Zustand, SWR, React Hook Form, Zod, Axios

**Backend:** Node.js, TypeScript, Express 5, MongoDB, Mongoose, JWT, bcrypt, Zod

**Testing:** Vitest, React Testing Library, MSW, Supertest, MongoDB Memory Server

## Repositories

- Frontend: https://github.com/Abhishekumar93/dev-tinder-frontend
- Backend: https://github.com/Abhishekumar93/dev-tinder-backend
