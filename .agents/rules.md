# RULES

Essential rules and guidelines for this project.

---

## 🚨 Processus Strict (NON-NÉGOCIABLE)

### Exécution strictement contrôlée

**Aucune initiative.**
- Aucune supposition.
- Aucune interprétation.
- Aucune déduction.
- Aucune action non explicitement demandée.
- Aucune modification non explicitement demandée.
- Aucun « j'ai cru », « j'ai compris » ou formulation équivalente.
- Aucune excuse inventée.
- Aucune justification non fondée.
- Aucun comportement basé sur une intention supposée.

**Exécution strictement limitée aux procédures définies et aux instructions explicitement fournies.**

### Validation et arrêt

- Aucun processus, agent ou étape du workflow ne doit être lancé sans validation explicite préalable.
- En cas d'information manquante ou d'instruction ambiguë : **ARRÊT du processus et demande de validation ou de précision**.
- Aucune décision autonome pour compléter, modifier ou contourner une procédure.

### Entrée explicite requise

- **Chaque action** nécessite une **instruction explicite**.
- **Chaque modification** nécessite une **validation explicite**.
- **Chaque étape** du workflow nécessite une **confirmation explicite**.

---

## Code Quality Standards

### TypeScript

- Strict mode enabled (`tsconfig.json`)
- No `any` types (use `unknown` + type guards)
- Explicit return types for functions
- Interface > type for object shapes

### Components

- Functional components (hooks only)
- Props interface at top of file
- Destructure props in function signature
- No default exports for components

### Public API

Only export from `src/index.ts`:
- Components: `Sidebar` (not internal templates)
- Types: `SidebarProps`, `SidebarItemProps`, `SidebarMenuProps`, `SidebarIconProps`
- Enums: `SidebarTemplate`, `SidebarPosition`

**Do NOT export:**
- Internal template components (DefaultSidebar, CompactSidebar, FloatingSidebar)
- Internal utilities or helpers
- Implementation details

---

## Testing Standards

### Coverage Requirements

- Minimum: **10 tests** per component
- Minimum coverage: **70%**
- Target coverage: **85%+**

### Test Framework

- **Framework:** Vitest
- **Library:** React Testing Library
- **Focus:** User-visible behavior, not implementation

### Test Organization

- Test files: `__tests__/ComponentName.test.tsx` or `ComponentName.test.tsx`
- Describe blocks: Group by behavior
- Test names: Describe what user sees/does

---

## Pre-Commit Checklist

Before committing code:

- [ ] `npm run build` passes (TypeScript strict, zero errors)
- [ ] `npm run lint` passes (ESLint)
- [ ] `npm test` passes (all tests green)
- [ ] `npm test -- --coverage` shows ≥70% coverage
- [ ] No console errors or warnings
- [ ] Branch is `dev` (not `main`)
- [ ] Commit message is clear and descriptive
- [ ] Related issue is referenced in commit message

**All gates must pass before commit.**

---

## Quality Gates

**Build Gate:**
```bash
npm run build
# Must output: "compiled successfully"
# Must have: zero TypeScript errors
# Must pass: strict mode check
```

**Test Gate:**
```bash
npm test
# Must have: all tests passing
# Must have: ≥70% coverage
```

**Lint Gate:**
```bash
npm run lint
# Must have: zero errors
# Must have: zero warnings (optional)
```

---

## Architecture Guidelines

### Component Structure

- One component = one file
- Props interface at top
- JSX last (logic before UI)
- Hooks near top (after props)
- No business logic in components
- Extract complex hooks to separate files

### Template Pattern

**Sidebar.tsx** (behavior + state)
```tsx
- Manages collapsed state (controlled/uncontrolled)
- Selects template based on props.template
- Passes all props to selected template
```

**Template files** (layout only)
```tsx
- Receive SidebarTemplateProps
- Render layout and styling
- Pass items/menus to SidebarItem/SidebarMenu
- No state logic
```

### Prop Drilling

- Use props for components < 3 levels deep
- Use Context for global state (theme, user, etc.)
- Keep prop lists < 8 props (use object if more)

---

## Git Workflow

### Branch Strategy

- **main**: Release/production only
- **dev**: All phases, all features (default branch)

All work happens on `dev` branch.

### Commit Messages

Format:
```
<type>: <short description>

<optional detailed explanation>

Closes #<issue-number>
```

Types:
- `feat:` — New feature
- `fix:` — Bug fix
- `refactor:` — Code reorganization (no behavior change)
- `docs:` — Documentation
- `test:` — Tests
- `chore:` — Config, deps, etc.

### Before Pushing

```bash
git status                    # Verify branch is dev
git diff                      # Review changes
npm run build && npm test     # Verify quality gates
git log --oneline -5          # Review recent commits
```

---

## Performance Considerations

### Rendering

- Use React.memo for expensive components
- Use useCallback for event handlers passed as props
- Avoid inline object/array literals in JSX
- Prevent unnecessary re-renders with proper dependencies

### Bundle Size

- Tree-shake unused exports
- No large dependencies (prefer native/stdlib)
- Lazy load heavy components if needed
- Monitor with `npm run build -- --analyze` (if available)

---

## Accessibility (a11y)

### Minimum Requirements

- Keyboard navigation (Tab, Enter, Escape)
- ARIA labels for interactive elements
- Color contrast ≥ 4.5:1 for text
- Focus indicators visible
- Semantic HTML (button, nav, main, etc.)

### Testing

- Test with keyboard only
- Test with screen reader (NVDA, JAWS)
- Test with high contrast mode
- Test with zoom at 200%

---

## Workflow State File

Location: `workflows/react-frontend-workflow/workflow-state.json`

**Required fields:**
```json
{
  "issueNumber": 4,
  "phaseName": "CODING",
  "status": "in_progress",
  "agent": "cc-react-frontend-expert-agent",
  "startTime": "2026-10-05T12:00:00Z",
  "filesModified": ["src/templates/DefaultSidebar.tsx"],
  "buildStatus": "pending",
  "testStatus": "pending",
  "reviewStatus": "pending"
}
```

Never overwrite manually. Use agents to update.

---

## Phase Completion Criteria

### General Requirements (All Phases)

- [ ] All files created/modified as planned
- [ ] TypeScript strict mode passes
- [ ] No console errors or warnings
- [ ] Build succeeds
- [ ] Code follows guidelines in this file
- [ ] Commit message references issue

### Phase-Specific

See `workflows.md` for phase-specific verification checkpoints.

---

## Blocking Conditions

Work **MUST STOP** when:

1. **Build fails** — TypeScript errors, compilation issues
2. **Critical anomalies** — Inspector finds blockers
3. **Tests fail** — Coverage < 70% or tests don't pass
4. **Review rejected** — Reviewer blocks approval
5. **Validation failed** — Requirements not met

**On block:** Return to Coding phase with feedback.

---

**Project:** @projet-example/sidebar  
**Phases:** 10 (issues #2-#11)  
**Enforcement:** Strict
