---
title: Chatbox
slug: chatbox
category: REAL-TIME MESSAGE FLOW
description: A real-time messaging application built with Next.js and Socket.IO, with authenticated rooms, resilient connection handling, and tested client-server flows.
technologies:
  - Next.js
  - React
  - TypeScript
  - Socket.IO
  - Node.js
  - Express
  - MongoDB
repositoryHref: https://github.com/Abhishekumar93/chatbox-frontend
backendRepositoryHref: https://github.com/Abhishekumar93/chatbox-backend
---

## Overview

Chatbox is a real-time one-to-one messaging application with a Next.js frontend and a Node.js, Express, MongoDB, and Socket.IO backend.

The project focuses on real-time connection lifecycle management, authenticated socket communication, conversation routing, and integration testing rather than only basic message rendering.

## What it demonstrates

- Next.js App Router architecture
- Real-time bidirectional communication
- Authenticated Socket.IO connections
- Room-based messaging
- Typing indicators
- Reconnection handling
- Room re-registration after reconnect
- Socket listener and timer cleanup
- HTTP-only cookie authentication
- Protected application routes
- Responsive conversation UI
- Automated integration testing
- GitHub Actions CI

## Frontend architecture

The frontend is built with Next.js 15, React 19, and TypeScript.

Next.js middleware protects authenticated routes using cookie inspection. The messaging interface uses Socket.IO Client for real-time communication while REST APIs handle authentication, user data, and conversation history.

Socket initialization is designed to be safe around server-side rendering. The application also handles reconnection states, re-registers rooms when required, and cleans up listeners and pending timers during navigation.

Desktop and mobile layouts use different conversation navigation patterns while sharing the same underlying messaging behavior.

## Backend architecture

The backend uses Node.js, Express, TypeScript, MongoDB, Mongoose, and Socket.IO.

JWT authentication is stored in HTTP-only cookies and is also validated during the Socket.IO handshake.

Socket actions verify the authenticated user rather than trusting client-supplied identity. Room membership is validated before users can join rooms or send messages.

Presence supports multiple active browser tabs by tracking a set of socket IDs per user and marking a user offline only when their final active connection disconnects.

## Real-time flow

```text
Next.js client
  -> authenticated Socket.IO connection
  -> join validated conversation room
  -> send message event
  -> backend validates participant
  -> persist message
  -> broadcast to room participants
```

Typing and stop-typing events use the same authenticated room model.

## Testing and quality

The frontend uses Vitest, React Testing Library, and MSW for integration-focused testing across authentication, route guards, REST behavior, conversation history, and Socket.IO interactions.

The backend uses Vitest, Supertest, and MongoDB Memory Server. Socket integration tests cover connection authentication, room authorization, sender validation, and multi-connection presence.

GitHub Actions runs linting, formatting checks, coverage, and build validation.

## Engineering decisions

### SSR-safe socket initialization

Socket creation is deferred so browser-only real-time behavior does not conflict with server rendering.

### Authenticated socket identity

The server derives user identity from the authenticated session instead of trusting IDs supplied by the client.

### Explicit connection lifecycle handling

Reconnection, room registration, listener cleanup, and timer cleanup are treated as application behavior rather than incidental implementation details.

### Multi-tab presence handling

Presence is tracked per active socket so opening multiple tabs does not incorrectly toggle a user's online state.

## Known scope boundaries

The backend is intentionally scoped as a portfolio and learning project.

It does not implement horizontal Socket.IO scaling with Redis, offline push notifications, or refresh-token rotation.

## Key technologies

**Frontend:** Next.js 15, React 19, TypeScript, Socket.IO Client, Axios

**Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, Socket.IO, Passport JWT

**Testing:** Vitest, React Testing Library, MSW, Supertest, MongoDB Memory Server

**CI:** GitHub Actions

## Repositories

- Frontend: [chatbox-frontend](https://github.com/Abhishekumar93/chatbox-frontend)
- Backend: [chatbox-backend](https://github.com/Abhishekumar93/chatbox-backend)
