# Finchly Theme Implementation Plan

## Executive Summary

This plan outlines the creation of a new "finchly" UI library theme, directly inspired by the [palindrom-ai/finchly](https://github.com/palindrom-ai/finchly) repository. The finchly theme features a warm, earthy color palette with terracotta primary colors and cream backgrounds, creating a distinctive aesthetic that differs from the existing business (Stripe-inspired) and newspaper (editorial) themes.

Additionally, several new components discovered in the finchly repo will be added to all three themes (finchly, business, and newspaper) to expand the component library.

---

## Part 1: Finchly Design System Analysis

### 1.1 Color Palette

The finchly design system uses a warm, earthy palette with semantic color naming:

```css
/* Foreground colors */
--fg0: #000000          /* Pure black - headers */
--fg1: #3b3b3b          /* Primary text */
--fg2: #4d4d4d          /* Secondary text */
--fg3: #636363          /* Tertiary text */
--fg4: #707070          /* Quaternary text */
--fgSerious: #db1b06    /* Destructive/error */
--fgSuccess: #006430    /* Success state */
--fgModerate: #a65006   /* Warning state */
--fgAccent: #b55643     /* Accent/primary brand */

/* Background colors */
--bg1: #faf8f5          /* Main background - warm cream */
--bg2: #f5f2ec          /* Secondary background */
--bg3: #e7e3d6          /* Tertiary/muted background */
--bgSerious: #fae6e6    /* Error background */
--bgSerious2: #ffcdc7   /* Error background hover */
--bgSuccess: #d1fadf    /* Success background */
--bgModerate: #fff4e3   /* Warning background */
--bgAccent: #ffe8d6     /* Accent background */
--bgAccentPrimary: #fff0e5  /* Primary accent background */

/* Separator colors */
--separator1: #ddd8cc   /* Primary borders */
--separator2: #c5bfb0   /* Secondary borders */
```

### 1.2 Design Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `--radius` | `0.625rem` (10px) | Larger, softer corners than business theme |
| `--primary` | `#b55643` | Terracotta/rust brand color |
| `--primary-hover` | `#9b4637` | Darker hover state |
| `--secondary` | `#d4a954` | Golden/amber accent |
| `--background` | `#faf8f5` | Warm cream |

### 1.3 Typography

- **Font Family**: System sans-serif (Apple System, Segoe UI, etc.)
- **Text Colors**: Hierarchical grays with warm undertones
- **Button Style**: `rounded-full` with pill-shaped buttons

### 1.4 Key Visual Characteristics

1. **Warm, earthy aesthetic** - cream backgrounds, terracotta accents
2. **Pill-shaped buttons** - `rounded-full` instead of subtle corners
3. **Layered backgrounds** - multiple background shades for depth
4. **Semantic color naming** - fg1, bg1, separator1 pattern
5. **Glass-like effects** - backdrop blur on overlays

---

## Part 2: Existing Theme Structure

### 2.1 Current Components (22 total per theme)

#### Actions (2)
- `Button` - with variants: default, destructive, outline, secondary, ghost, link
- `DropdownMenu` - full menu system

#### Forms (6)
- `Input` - text input field
- `Label` - form labels
- `Checkbox` - checkable input
- `Select` - dropdown select
- `Switch` - toggle switch
- `Textarea` - multiline text

#### Layout (3)
- `Card` - CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- `Separator` - visual divider
- `Accordion` - collapsible sections

#### Feedback (3)
- `Alert` - alert messages with variants
- `Skeleton` - loading placeholders
- `Toast` - notification toasts

#### Overlays (3)
- `Dialog` - modal dialogs
- `Popover` - floating content
- `Tooltip` - hover hints

#### Navigation (1)
- `Tabs` - TabsList, TabsTrigger, TabsContent

#### Data Display (3)
- `Avatar` - user avatars
- `Badge` - status badges
- `Table` - data tables

---

## Part 3: New Components to Add

Based on analysis of the finchly repository, the following new components should be added to **all three themes**:

### 3.1 New Actions Components

| Component | Description | Source File |
|-----------|-------------|-------------|
| `IconButton` | Button styled for icon-only actions | icon-button.tsx |
| `Toggle` | Toggle button with on/off states | toggle.tsx |

### 3.2 New Layout Components

| Component | Description | Source File |
|-----------|-------------|-------------|
| `PageSection` | Section with title and grid layout | page-section.tsx |

### 3.3 New Navigation Components

| Component | Description | Source File |
|-----------|-------------|-------------|
| `Breadcrumbs` | Breadcrumb navigation trail | breadcrumbs.tsx |

### 3.4 New Feedback Components

| Component | Description | Source File |
|-----------|-------------|-------------|
| `ConfirmDialog` | Confirmation dialog for destructive actions | confirm-dialog.tsx |

### 3.5 New Data Display Components

| Component | Description | Source File |
|-----------|-------------|-------------|
| `AuthorBadge` | Author avatar with name and timestamp | author-badge.tsx |
| `CodeBlock` | Code block with copy button | code-block.tsx |
| `TimelineStep` | Numbered step in a timeline | timeline-step.tsx |

---

## Part 4: Implementation Plan

### Phase 1: Create Finchly Theme Package Structure

1. Create directory: `packages/themes/finchly/`
2. Copy structure from business theme:
   ```
   finchly/
   ├── package.json
   ├── tsconfig.json
   ├── tsup.config.ts
   ├── tailwind.config.ts
   └── src/
       ├── index.ts
       ├── styles/
       │   └── globals.css
       └── components/
           ├── index.ts
           ├── actions/
           │   ├── index.ts
           │   ├── button.tsx
           │   ├── dropdown-menu.tsx
           │   ├── icon-button.tsx
           │   └── toggle.tsx
           ├── forms/
           │   ├── index.ts
           │   ├── input.tsx
           │   ├── label.tsx
           │   ├── checkbox.tsx
           │   ├── select.tsx
           │   ├── switch.tsx
           │   └── textarea.tsx
           ├── layout/
           │   ├── index.ts
           │   ├── card.tsx
           │   ├── separator.tsx
           │   ├── accordion.tsx
           │   └── page-section.tsx
           ├── feedback/
           │   ├── index.ts
           │   ├── alert.tsx
           │   ├── skeleton.tsx
           │   ├── toast.tsx
           │   └── confirm-dialog.tsx
           ├── overlays/
           │   ├── index.ts
           │   ├── dialog.tsx
           │   ├── popover.tsx
           │   └── tooltip.tsx
           ├── navigation/
           │   ├── index.ts
           │   ├── tabs.tsx
           │   └── breadcrumbs.tsx
           └── data-display/
               ├── index.ts
               ├── avatar.tsx
               ├── badge.tsx
               ├── table.tsx
               ├── author-badge.tsx
               ├── code-block.tsx
               └── timeline-step.tsx
   ```

### Phase 2: Implement Finchly CSS Variables

Create `globals.css` with finchly's warm color palette:
- Terracotta primary (#b55643)
- Warm cream background (#faf8f5)
- Golden amber secondary (#d4a954)
- Semantic fg/bg/separator color scales
- 10px border radius

### Phase 3: Implement Finchly Components

Adapt each component to finchly's aesthetic:
- **Button**: `rounded-full` pill shape, terracotta primary
- **Card**: Warm borders, subtle shadows
- **Input**: Rounded corners, warm focus states
- **Badge**: `rounded-full` pills
- **All components**: Use finchly color tokens

### Phase 4: Add New Components to Business & Newspaper

For each new component (IconButton, Toggle, PageSection, Breadcrumbs, ConfirmDialog, AuthorBadge, CodeBlock, TimelineStep):

1. Add to `packages/themes/business/src/components/[category]/`
2. Add to `packages/themes/newspaper/src/components/[category]/`
3. Update respective index.ts files
4. Style appropriately for each theme's aesthetic

---

## Part 5: Component Specifications

### 5.1 IconButton Component

```typescript
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
```

**Finchly styling**:
- Pill-shaped background on hover
- Backdrop blur effect
- Focus ring styling

### 5.2 Toggle Component

```typescript
interface ToggleProps {
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}
```

Uses `@radix-ui/react-toggle` primitive.

### 5.3 PageSection Component

```typescript
interface PageSectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}
```

Grid-based layout with title on left, content on right (4-column grid on desktop).

### 5.4 Breadcrumbs Component

```typescript
// Components: Breadcrumbs, BreadcrumbHome, Breadcrumb, BreadcrumbSeparator
interface BreadcrumbProps {
  href?: string;
  children: React.ReactNode;
}
```

### 5.5 ConfirmDialog Component

```typescript
interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
}
```

Uses @headlessui/react Dialog with Transition animations.

### 5.6 AuthorBadge Component

```typescript
interface AuthorBadgeProps {
  author: { id: string; name: string; email?: string };
  timestamp?: string | Date;
  size?: 'sm' | 'md';
  showTimestamp?: boolean;
  clickable?: boolean;
}
```

### 5.7 CodeBlock Component

```typescript
interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}
```

Features copy-to-clipboard button.

### 5.8 TimelineStep Component

```typescript
interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}
```

---

## Part 6: Dependencies

### New Dependencies Required

```json
{
  "@radix-ui/react-toggle": "^1.1.0",
  "@headlessui/react": "^2.0.0"
}
```

Note: @headlessui/react is needed for ConfirmDialog (uses HeadlessUI Transition/Dialog). Alternatively, we can implement using only Radix primitives for consistency.

---

## Part 7: File Changes Summary

### New Files (Finchly Theme)
- `packages/themes/finchly/` - entire new theme directory (29 files)

### Modified Files (Business Theme) - Add New Components
- `packages/themes/business/src/components/actions/icon-button.tsx` (new)
- `packages/themes/business/src/components/actions/toggle.tsx` (new)
- `packages/themes/business/src/components/actions/index.ts` (update)
- `packages/themes/business/src/components/layout/page-section.tsx` (new)
- `packages/themes/business/src/components/layout/index.ts` (update)
- `packages/themes/business/src/components/navigation/breadcrumbs.tsx` (new)
- `packages/themes/business/src/components/navigation/index.ts` (update)
- `packages/themes/business/src/components/feedback/confirm-dialog.tsx` (new)
- `packages/themes/business/src/components/feedback/index.ts` (update)
- `packages/themes/business/src/components/data-display/author-badge.tsx` (new)
- `packages/themes/business/src/components/data-display/code-block.tsx` (new)
- `packages/themes/business/src/components/data-display/timeline-step.tsx` (new)
- `packages/themes/business/src/components/data-display/index.ts` (update)
- `packages/themes/business/package.json` (add toggle dependency)

### Modified Files (Newspaper Theme) - Add New Components
- Same pattern as business theme (14 files)

---

## Part 8: Testing Plan

1. Build all three themes successfully
2. Verify TypeScript types are correctly exported
3. Visual testing of each component in each theme
4. Verify color tokens render correctly in light mode
5. Verify dark mode works for finchly theme

---

## Execution Order

1. Create finchly theme package structure and configuration files
2. Implement finchly globals.css with color palette
3. Implement all existing components with finchly styling
4. Implement new components (IconButton, Toggle, etc.) for finchly
5. Add new components to business theme
6. Add new components to newspaper theme
7. Update all package.json dependencies
8. Build and verify all themes
