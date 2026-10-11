---
title: RAWG Games
slug: rawg-games
category: SERVERLESS FRONTEND / CLOUD INTEGRATION
description: A game discovery app using Next.js with AWS API Gateway and Lambda as a serverless API layer.
technologies:
  - Next.js
  - TypeScript
  - AWS API Gateway
  - AWS Lambda
  - Python
repositoryHref: https://github.com/Abhishekumar93/rawg-games
backendRepositoryHref: https://github.com/Abhishekumar93/api-gateway-game-list
---

## Overview

RAWG Games is a responsive game-discovery application built with Next.js and TypeScript.

Instead of exposing the third-party RAWG API key in the browser, the frontend communicates through an AWS serverless layer using API Gateway and Python Lambda functions.

The project demonstrates how a frontend application can be separated from third-party credentials while still supporting search, pagination, and dynamic detail pages.

## What it demonstrates

- Next.js frontend development
- Responsive game-list and detail interfaces
- Debounced search
- Pagination
- Dynamic game-detail routing
- AWS API Gateway integration
- AWS Lambda functions written in Python
- Third-party API proxying
- Server-side API-key handling
- Safe rendering of rich external content
- Remote image optimization

## Architecture

```text
Next.js frontend
  -> AWS API Gateway
  -> Python AWS Lambda
  -> RAWG API
```

The response then returns through the same chain back to the frontend.

## Frontend architecture

The frontend uses Next.js, React, TypeScript, Tailwind CSS, Axios, and DOMPurify.

The application includes:

- responsive game cards
- debounced search
- previous/next pagination
- slug-based detail pages
- remote image handling through `next/image`
- sanitized rendering of game descriptions
- external links to official game websites

## Serverless API layer

The companion backend repository contains two Python Lambda handlers exposed through Amazon API Gateway.

One Lambda handles searchable and paginated game-list requests. The second handles game-detail requests using a dynamic game slug.

The RAWG API key is read from the Lambda environment rather than being included in the frontend bundle.

## Security decision

The main architectural reason for the serverless layer is credential isolation.

```text
Browser
  -> public API Gateway endpoint
  -> Lambda reads RAWG_API_KEY from its environment
  -> Lambda calls RAWG
```

This prevents the RAWG API key from being shipped to the client.

## Engineering decisions

### API Gateway as the public boundary

The frontend only knows about the public API Gateway endpoint. It does not communicate directly with RAWG using a private API key.

### Separate Lambda responsibilities

Game-list/search requests and individual game-detail requests are handled by separate Lambda functions.

### Debounced search

Search input is debounced before requests are dispatched to reduce unnecessary API calls while the user is typing.

### Sanitized external HTML

RAWG descriptions can contain HTML, so the frontend sanitizes that content with DOMPurify before rendering it.

## Deployment note

The frontend has been deployed through Vercel, while its working data flow depends on the associated AWS API Gateway and Lambda resources.

The AWS resources may be intentionally retired because this is a portfolio project and keeping an old cloud environment active indefinitely is not required to demonstrate the architecture.

For that reason, the portfolio should treat the repository and project-detail page as the durable project evidence rather than depending on the live demo being permanently available.

## Key technologies

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, Axios, DOMPurify

**Cloud:** Amazon API Gateway, AWS Lambda

**Backend runtime:** Python

**External API:** RAWG Video Games Database API

**Deployment:** Vercel for the frontend

## Repositories

- Frontend: https://github.com/Abhishekumar93/rawg-games
- Serverless backend: https://github.com/Abhishekumar93/api-gateway-game-list
