# UI Project Plan

## Overview

This project serves two purposes:

1. **UI Theme Libraries** — A set of React component themes built on shadcn/ui + Tailwind for use across the team
2. **OpenAPI Client Generator** — A CLI tool that generates type-safe TypeScript clients from OpenAPI schemas

---

## Package Structure (Monorepo)

```
ui/
├── packages/
│   ├── themes/
│   │   ├── core/                  # Shared primitives, tokens, utilities
│   │   ├── graphite/              # Linear-inspired theme
│   │   ├── paper/                 # Tldraw-inspired theme
│   │   └── business/              # Stripe-inspired theme
│   │
│   └── openapi-client/
│       ├── cli/                   # CLI entry point
│       ├── parser/                # OpenAPI schema parser
│       ├── codegen/               # Code generation engine
│       └── runtime/               # Shared runtime (fetch wrapper, types)
│
├── apps/
│   └── docs/                      # Documentation site / storybook
│
├── docs/
│   └── plans/                     # Planning documents
│
├── turbo.json                     # Turborepo config
├── pnpm-workspace.yaml            # pnpm workspaces
└── package.json                   # Root package.json
```

---

## Part 1: UI Theme Libraries

### Architecture

Each theme package exports:
- Pre-styled shadcn/ui components
- Tailwind CSS preset (colors, typography, spacing, animations)
- CSS variables for runtime theming
- Optional: React context for theme switching

```
@yourorg/theme-core       # Base components + shared utilities
@yourorg/theme-graphite   # Extends core with Linear aesthetic
@yourorg/theme-paper      # Extends core with Tldraw aesthetic
@yourorg/theme-business   # Extends core with Stripe aesthetic
```

### Theme Details

#### Graphite (Linear-inspired)

| Aspect | Description |
|--------|-------------|
| **Colors** | Dark backgrounds (#1a1a1a, #242424), muted text, accent purples/blues |
| **Typography** | Inter or SF Pro, tight letter-spacing, medium weights |
| **Components** | Minimal borders, subtle shadows, keyboard shortcut hints |
| **Motion** | Snappy 150ms transitions, spring animations |
| **Vibe** | Professional, focused, power-user friendly |

#### Paper (Tldraw-inspired)

| Aspect | Description |
|--------|-------------|
| **Colors** | Warm whites (#fefefe), soft grays, hand-picked accent palette |
| **Typography** | Rounded sans-serif, relaxed spacing, friendly weights |
| **Components** | Sketchy borders (subtle wobble), soft shadows, canvas feel |
| **Motion** | Playful easing, subtle bounce, drawn-on effects |
| **Vibe** | Creative, approachable, whiteboard energy |

#### Business (Stripe-inspired)

| Aspect | Description |
|--------|-------------|
| **Colors** | Clean whites, deep purples (#635bff), confident gradients |
| **Typography** | System fonts with fallbacks, clear hierarchy, polished |
| **Components** | Precise borders, layered shadows, glass effects |
| **Motion** | Smooth 200-300ms transitions, subtle parallax |
| **Vibe** | Trustworthy, premium, enterprise-ready |

### Core Package Contents

```typescript
// @yourorg/theme-core

// Base component primitives (unstyled or minimally styled)
export * from './components/button';
export * from './components/input';
export * from './components/card';
// ... etc

// Utilities
export { cn } from './utils/cn';           // clsx + tailwind-merge
export { createTheme } from './utils/theme';

// Types
export type { ThemeConfig, ComponentProps } from './types';
```

### Theme Package Contents

```typescript
// @yourorg/theme-graphite

// Tailwind preset for this theme
export { default as tailwindPreset } from './tailwind-preset';

// Pre-configured components
export * from './components';

// CSS variables (importable)
import './styles/variables.css';
```

### Usage Example

```tsx
// tailwind.config.ts
import { tailwindPreset } from '@yourorg/theme-graphite';

export default {
  presets: [tailwindPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@yourorg/theme-graphite/**/*.js',
  ],
};

// App.tsx
import { Button, Card, Input } from '@yourorg/theme-graphite';
import '@yourorg/theme-graphite/styles.css';

function App() {
  return (
    <Card>
      <Input placeholder="Search..." />
      <Button>Submit</Button>
    </Card>
  );
}
```

---

## Part 2: OpenAPI Client Generator

### Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   OpenAPI Spec  │────▶│     Parser      │────▶│    Codegen      │
│   (JSON/YAML)   │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                        ┌───────────────────────────────┼───────────────────────────────┐
                        ▼                               ▼                               ▼
               ┌─────────────────┐             ┌─────────────────┐             ┌─────────────────┐
               │  TypeScript     │             │  React Query    │             │  Zod Schemas    │
               │  Types          │             │  Hooks          │             │  (validation)   │
               └─────────────────┘             └─────────────────┘             └─────────────────┘
```

### CLI Interface

```bash
# Basic usage
npx @yourorg/openapi-client generate --input ./api.yaml --output ./src/api

# With options
npx @yourorg/openapi-client generate \
  --input https://api.example.com/openapi.json \
  --output ./src/api \
  --hooks                    # Generate React Query hooks
  --zod                      # Generate Zod schemas
  --base-url /api            # Default base URL
```

### Generated Output Structure

```
src/api/
├── index.ts                 # Main exports
├── client.ts                # Configured fetch client
├── types.ts                 # All TypeScript types from schemas
├── schemas.ts               # Zod schemas (if --zod)
├── hooks/                   # React Query hooks (if --hooks)
│   ├── index.ts
│   ├── useGetUsers.ts
│   ├── useCreateUser.ts
│   └── ...
└── endpoints/
    ├── users.ts
    ├── posts.ts
    └── ...
```

### Generated Code Examples

#### Types (types.ts)

```typescript
// Auto-generated from OpenAPI schema

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface CreateUserRequest {
  email: string;
  name: string;
}

export interface ApiError {
  code: string;
  message: string;
}
```

#### Zod Schemas (schemas.ts)

```typescript
// Auto-generated Zod schemas for runtime validation
import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  createdAt: z.string().datetime(),
});

export const CreateUserRequestSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

export type User = z.infer<typeof UserSchema>;
```

#### Fetch Client (client.ts)

```typescript
// Thin fetch wrapper with type safety

export interface ClientConfig {
  baseUrl: string;
  headers?: Record<string, string>;
  onRequest?: (request: Request) => Request | Promise<Request>;
  onResponse?: (response: Response) => Response | Promise<Response>;
  onError?: (error: ApiError) => void;
}

export function createClient(config: ClientConfig) {
  return {
    async request<T>(
      method: string,
      path: string,
      options?: RequestOptions
    ): Promise<T> {
      // Implementation
    },
  };
}

// Default client instance
export const client = createClient({
  baseUrl: process.env.API_BASE_URL ?? '',
});
```

#### Endpoints (endpoints/users.ts)

```typescript
// Auto-generated endpoint functions
import { client } from '../client';
import { User, CreateUserRequest } from '../types';
import { UserSchema } from '../schemas';

export async function getUsers(): Promise<User[]> {
  const response = await client.request<User[]>('GET', '/users');
  return UserSchema.array().parse(response); // Runtime validation
}

export async function getUser(id: string): Promise<User> {
  const response = await client.request<User>('GET', `/users/${id}`);
  return UserSchema.parse(response);
}

export async function createUser(data: CreateUserRequest): Promise<User> {
  const response = await client.request<User>('POST', '/users', { body: data });
  return UserSchema.parse(response);
}
```

#### React Query Hooks (hooks/useGetUsers.ts)

```typescript
// Auto-generated React Query hooks
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUsers, getUser, createUser } from '../endpoints/users';
import type { User, CreateUserRequest } from '../types';

export const userKeys = {
  all: ['users'] as const,
  detail: (id: string) => ['users', id] as const,
};

export function useGetUsers() {
  return useQuery({
    queryKey: userKeys.all,
    queryFn: getUsers,
  });
}

export function useGetUser(id: string) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => getUser(id),
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateUserRequest) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
}
```

### Parser Package

Responsibilities:
- Parse OpenAPI 3.0 and 3.1 specs (JSON and YAML)
- Resolve $ref references
- Normalize schemas into internal representation
- Extract endpoints, types, and validation rules

```typescript
// @yourorg/openapi-client/parser

export interface ParsedSpec {
  info: ApiInfo;
  endpoints: Endpoint[];
  schemas: Schema[];
}

export function parseOpenApiSpec(input: string | object): ParsedSpec;
```

### Codegen Package

Responsibilities:
- Transform parsed spec into TypeScript AST
- Generate type definitions
- Generate Zod schemas
- Generate endpoint functions
- Generate React Query hooks

```typescript
// @yourorg/openapi-client/codegen

export interface GenerateOptions {
  hooks: boolean;
  zod: boolean;
  baseUrl: string;
}

export function generate(spec: ParsedSpec, options: GenerateOptions): GeneratedFiles;
```

---

## Tech Stack

### Build & Dev

| Tool | Purpose |
|------|---------|
| **pnpm** | Package manager (workspaces) |
| **Turborepo** | Monorepo build orchestration |
| **TypeScript** | Type safety everywhere |
| **tsup** | Fast TypeScript bundling |
| **Vitest** | Testing |
| **Changesets** | Version management & changelogs |

### UI Themes

| Tool | Purpose |
|------|---------|
| **React 18+** | UI framework |
| **Tailwind CSS 3+** | Styling |
| **shadcn/ui** | Component primitives |
| **Radix UI** | Accessible primitives (via shadcn) |
| **clsx + tailwind-merge** | Class utilities |

### OpenAPI Client

| Tool | Purpose |
|------|---------|
| **@apidevtools/swagger-parser** | OpenAPI parsing & validation |
| **typescript** | AST generation for codegen |
| **zod** | Runtime validation schemas |
| **@tanstack/react-query** | Data fetching hooks |
| **commander** | CLI framework |

---

## Implementation Phases

### Phase 1: Project Foundation

- [ ] Initialize monorepo with pnpm workspaces
- [ ] Configure Turborepo
- [ ] Set up TypeScript configs (base + per-package)
- [ ] Set up ESLint + Prettier
- [ ] Create package scaffolding

### Phase 2: Theme Core

- [ ] Set up theme-core package
- [ ] Integrate shadcn/ui base components
- [ ] Create shared utilities (cn, createTheme)
- [ ] Define theme token structure
- [ ] Build base component set (Button, Input, Card, etc.)

### Phase 3: Individual Themes

- [ ] **Graphite theme**
  - [ ] Define color palette and tokens
  - [ ] Create Tailwind preset
  - [ ] Style all components
  - [ ] Add motion/animation system

- [ ] **Paper theme**
  - [ ] Define color palette and tokens
  - [ ] Create Tailwind preset
  - [ ] Style all components (sketchy aesthetic)
  - [ ] Add playful animations

- [ ] **Business theme**
  - [ ] Define color palette and tokens
  - [ ] Create Tailwind preset
  - [ ] Style all components
  - [ ] Add polished transitions

### Phase 4: OpenAPI Parser

- [ ] Set up parser package
- [ ] Implement OpenAPI 3.x parsing
- [ ] Handle $ref resolution
- [ ] Create internal schema representation
- [ ] Add comprehensive tests with real specs

### Phase 5: OpenAPI Codegen

- [ ] Set up codegen package
- [ ] Implement TypeScript type generation
- [ ] Implement Zod schema generation
- [ ] Implement endpoint function generation
- [ ] Implement React Query hook generation

### Phase 6: CLI

- [ ] Set up CLI package
- [ ] Implement `generate` command
- [ ] Add configuration file support (.openapi-clientrc)
- [ ] Add watch mode for development
- [ ] Write CLI documentation

### Phase 7: Documentation & Polish

- [ ] Set up documentation site (Storybook or similar)
- [ ] Document all theme components
- [ ] Document CLI usage
- [ ] Add usage examples
- [ ] Prepare for npm publishing

---

## Open Questions

1. **Package naming** — What npm scope/org name? (`@yourorg/`, `@teamname/`, etc.)
2. **Component scope** — Full shadcn/ui set or curated subset?
3. **Theme switching** — Support runtime theme switching or build-time only?
4. **OpenAPI features** — Which OpenAPI features to prioritize? (auth, pagination, file uploads)

---

## Success Criteria

- [ ] Team can install theme packages and have styled components working in <5 minutes
- [ ] Generated API clients have zero type errors with strict TypeScript
- [ ] Runtime validation catches API contract violations before they cause bugs
- [ ] React Query hooks follow best practices (proper cache keys, optimistic updates)
- [ ] CLI is fast (<3s for typical spec) and gives helpful error messages
