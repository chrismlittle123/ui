# Agent Instructions

## Project Overview

ui is a component library monorepo with Storybook for development. Built with TypeScript.

- **Tier:** internal
- **Package:** `ui-monorepo` (monorepo root)

## Quick Reference

| Task | Command |
|------|---------|
| Install | `pnpm install` |
| Build | `pnpm build` |
| Type check | `pnpm typecheck` |

## Architecture

```
packages/
  ui/          # Component library (npm published)
apps/
  storybook/   # Storybook development environment
```

See `docs/` for detailed architecture documentation.

## Standards & Guidelines

This project uses [@standards-kit/conform](https://github.com/chrismlittle123/standards-kit) for coding standards.

- **Config:** `standards.toml` (extends `typescript-internal` from the standards registry)
- **Guidelines:** https://chrismlittle123.github.io/standards/

Use the MCP tools to query standards at any time:

| Tool | Purpose |
|------|---------|
| `get_standards` | Get guidelines matching a context (e.g., `typescript react components`) |
| `list_guidelines` | List all available guidelines |
| `get_guideline` | Get a specific guideline by ID |
| `get_ruleset` | Get a tool configuration ruleset (e.g., `typescript-internal`) |

## Workflow

- **Branch:** Create feature branches from `main`
- **CI:** GitHub Actions runs build and typecheck on PRs
- **Deploy:** npm publish for the `packages/ui` package
- **Commits:** Use conventional commits (`feat:`, `fix:`, `chore:`, etc.)

## Project-Specific Notes

- Root-level code checks (lint, typecheck) are disabled — these run at the package level
- The component library is published to npm from `packages/ui`
