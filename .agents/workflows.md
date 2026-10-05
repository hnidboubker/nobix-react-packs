# WORKFLOWS

Development workflows and processes for this project.

---

## 10-Phase Development Workflow

All work is organized into 10 sequential phases, each tracked as GitHub issue.

### Phase 1: Setup & Configuration (Issue #2)

**Goal:** Initialize package with proper configuration

**Steps:**
1. Create `package.json` (ESM, peer dependencies)
2. Create `tsconfig.json` (strict mode, React 19)
3. Create folder structure (`src/components/`, `src/templates/`, etc.)
4. Create `README.md` with overview
5. Set up `.gitignore`

**Verification Checkpoints:**
- ✅ `npm install` succeeds
- ✅ `npm run build` passes (TypeScript strict)
- ✅ All folders exist
- ✅ README is readable

**Agent:** cc-react-frontend-expert-agent  
**Output:** Build succeeds, folder structure ready

**⏸️ CONFIRM BEFORE → Phase 2**
```
Human: Phase 1 looks good, proceed to Phase 2?
Agent: Ready to start Phase 2
```

---

### Phase 2: Core Components (Issue #3)

**Goal:** Build foundational React components

**Components:**
- `Sidebar.tsx` (main component, state management)
- `SidebarMenu.tsx` (menu group)
- `SidebarItem.tsx` (navigation item)
- `SidebarIcon.tsx` (icon renderer)

**Workflow:**
1. cc-react-frontend-expert-agent → Write components
2. cc-react-frontend-inspector-agent → Quality check
3. cx-react-frontend-review-agent → Independent review

**Verification Checkpoints:**
- ✅ All 4 components created
- ✅ TypeScript strict mode passes
- ✅ No console errors
- ✅ Props are typed
- ✅ Tests pass (>80%)

**Agent:** cc-react-frontend-expert-agent  
**Output:** All 4 components working, no console errors

**⏸️ CONFIRM BEFORE → Phase 3**
```
Human: Phase 2 components look good, proceed to Phase 3?
Agent: Ready to start Phase 3
```

---

### Phase 3: Templates (Issue #4)

**Goal:** Create 3 ready-to-use layout templates

**Templates:**
- `DefaultSidebar.tsx` (standard layout)
- `CompactSidebar.tsx` (dense layout)
- `FloatingSidebar.tsx` (modern/floating)

**Workflow:**
1. cc-react-frontend-expert-agent → Write templates
2. Test template switching
3. Verify responsive behavior

**Verification Checkpoints:**
- ✅ All 3 templates created
- ✅ Sidebar switches between templates correctly
- ✅ Responsive behavior verified
- ✅ No visual breaks
- ✅ TypeScript passes

**Agent:** cc-react-frontend-expert-agent  
**Output:** 3 templates implemented, all switching correctly

**⏸️ CONFIRM BEFORE → Phase 4**
```
Human: Phase 3 templates look good, proceed to Phase 4?
Agent: Ready to start Phase 4
```

---

### Phase 4: Types & Interfaces (Issue #5)

**Goal:** Define all TypeScript types and contracts

**Files:**
- `src/types/sidebar.types.ts`
- `src/types/sidebar-menu.types.ts`
- `src/types/sidebar-item.types.ts`
- `src/enums/sidebar-template.enum.ts`
- `src/enums/sidebar-position.enum.ts`

**Workflow:**
1. cc-react-frontend-expert-agent → Write types
2. Verify TypeScript strict mode passes
3. Document all interfaces

**Verification Checkpoints:**
- ✅ All types defined
- ✅ TypeScript strict: zero errors
- ✅ All interfaces documented
- ✅ No implicit `any`
- ✅ Enums working

**Agent:** cc-react-frontend-expert-agent  
**Output:** All types defined, zero TS errors

**⏸️ CONFIRM BEFORE → Phase 5**
```
Human: Phase 4 types look good, proceed to Phase 5?
Agent: Ready to start Phase 5
```

---

### Phase 5: Utilities & Helpers (Issue #6)

**Goal:** Create utility functions and default configs

**Files:**
- `src/structs/sidebar.struct.ts` (defaults)
- `src/utils/sidebar.utils.ts` (helpers)

**Functions:**
- `getSidebarTemplate()`
- `createSidebarClasses()`
- `isItemDisabled()`
- Navigation state helpers

**Verification Checkpoints:**
- ✅ All utilities created
- ✅ Functions tested
- ✅ Defaults working
- ✅ No errors
- ✅ Utils are reusable

**Agent:** cc-react-frontend-expert-agent  
**Output:** All utilities tested and working

**⏸️ CONFIRM BEFORE → Phase 6**
```
Human: Phase 5 utilities look good, proceed to Phase 6?
Agent: Ready to start Phase 6
```

---

### Phase 6: Customization & Slots (Issue #7)

**Goal:** Implement multi-level customization

**Features:**
1. Header slot (custom header)
2. Footer slot (custom footer)
3. Item render slot (custom renderer)
4. Menu render slot
5. CSS class customization
6. Position support (left/right)

**Workflow:**
1. cc-react-frontend-expert-agent → Implement slots
2. cc-react-frontend-inspector-agent → Quality check
3. Create examples showing all levels

**Verification Checkpoints:**
- ✅ Header slot works
- ✅ Footer slot works
- ✅ Item renderer slot works
- ✅ All examples functional
- ✅ Position switching works

**Agent:** cc-react-frontend-expert-agent  
**Output:** All slots functional, examples work

**⏸️ CONFIRM BEFORE → Phase 7**
```
Human: Phase 6 customization looks good, proceed to Phase 7?
Agent: Ready to start Phase 7
```

---

### Phase 7: Public API & Exports (Issue #8)

**Goal:** Create clean public API

**Actions:**
1. Create `src/index.ts` entry point
2. Export components: Sidebar, SidebarMenu, SidebarItem, SidebarIcon
3. Export types: SidebarProps, SidebarItem, SidebarMenu, SidebarIcon
4. Export enums: SidebarTemplate, SidebarPosition
5. Do NOT export: templates, internal utils, structs
6. Verify tree-shaking works

**Workflow:**
1. cc-react-frontend-expert-agent → Write index.ts
2. cc-react-frontend-inspector-agent → Verify exports
3. Test imports work correctly

**Verification Checkpoints:**
- ✅ `src/index.ts` created
- ✅ All public exports present
- ✅ No internal exports
- ✅ Import examples work
- ✅ Tree-shaking verified

**Agent:** cc-react-frontend-expert-agent  
**Output:** Single clean entry point, proper tree-shaking

**⏸️ CONFIRM BEFORE → Phase 8**
```
Human: Phase 7 API looks good, proceed to Phase 8?
Agent: Ready to start Phase 8
```

---

### Phase 8: Testing & QA (Issue #9)

**Goal:** Achieve >85% code coverage

**Testing Strategy:**
1. Unit tests for each component
2. Integration tests for templates
3. React 18 & 19 compatibility tests
4. Coverage target: 85%+ overall

**Workflow:**
1. cx-react-frontend-tests-agent → Design test strategy
2. cx-react-frontend-tests-agent → Write comprehensive tests
3. cx-react-frontend-review-agent → Review test quality
4. cc-react-frontend-validate-agent → Verify coverage

**Verification Checkpoints:**
- ✅ Unit tests written
- ✅ Integration tests written
- ✅ React 18 compatible
- ✅ React 19 compatible
- ✅ Coverage ≥85%
- ✅ All tests passing

**Agent:** cx-react-frontend-tests-agent  
**Output:** 85%+ coverage, all tests passing

**⏸️ CONFIRM BEFORE → Phase 9**
```
Human: Phase 8 tests look good (85%+ coverage), proceed to Phase 9?
Agent: Ready to start Phase 9
```

---

### Phase 9: Documentation & Examples (Issue #10)

**Goal:** Complete documentation

**Deliverables:**
1. Update README with features
2. Installation instructions
3. Usage examples (basic + advanced)
4. API documentation
5. Template showcase
6. TypeScript guide
7. Customization guide
8. FAQ

**Workflow:**
1. cc-react-frontend-expert-agent → Write docs
2. Verify examples are runnable
3. Check clarity and completeness

**Verification Checkpoints:**
- ✅ README complete
- ✅ Installation instructions clear
- ✅ Examples runnable
- ✅ API documented
- ✅ TypeScript guide included
- ✅ Customization guide included

**Agent:** cc-react-frontend-expert-agent  
**Output:** Comprehensive docs, examples work

**⏸️ CONFIRM BEFORE → Phase 10**
```
Human: Phase 9 documentation looks good, proceed to Phase 10 (publishing)?
Agent: Ready to start Phase 10
```

---

### Phase 10: Publishing & Release (Issue #11)

**Goal:** Publish to npm registry

**Steps:**
1. Verify all tests pass
2. Build package
3. Create CHANGELOG.md
4. Set version to 0.1.0
5. Create git tag (v0.1.0)
6. Publish to npm (`npm publish --access public`)
7. Verify installation works

**Workflow:**
1. cc-react-frontend-validate-agent → Final validation
2. human-controlled-git → Git operations (user-controlled)
3. Publish to npm registry

**Verification Checkpoints:**
- ✅ All tests pass
- ✅ Build succeeds
- ✅ CHANGELOG created
- ✅ Version set to 0.1.0
- ✅ Git tag created
- ✅ npm publish succeeds
- ✅ Installation verified

**Output:** Package available on npm, installation verified

**✅ COMPLETE - Phase 10**
```
Package successfully published to npm
@projet-example/sidebar@0.1.0
```

---

## Standard Component Implementation Workflow

When implementing any React component:

```
1. cc-react-frontend-expert-agent
   ↓ Writes component

2. cc-react-frontend-inspector-agent
   ↓ Quality inspection

3. cx-react-frontend-tests-agent (if testing phase)
   ↓ Write comprehensive tests

4. cx-react-frontend-review-agent (if review needed)
   ↓ Independent code review

5. cc-react-frontend-validate-agent
   ↓ Final validation

✅ READY_FOR_COMMIT
```

---

## Bug Fix Workflow

When a bug is detected:

```
1. Create GitHub issue (auto-triggered)
   - Title: Bug description
   - Label: bug, needs-diagnosis
   
2. cc-react-frontend-expert-agent
   ↓ Diagnose root cause
   
3. cc-react-frontend-expert-agent
   ↓ Implement fix
   
4. cx-react-frontend-tests-agent
   ↓ Verify fix with tests
   
5. cc-react-frontend-inspector-agent
   ↓ Quality check
   
✅ READY_FOR_COMMIT
```

---

## Code Review Workflow

When requesting code review:

```
1. `/code-review high` (Claude Code built-in)
   ↓ Quick review from current context
   
2. cx-react-frontend-review-agent (if deep review needed)
   ↓ Independent review from fresh perspective
   
→ Compare both reviews
→ Address findings
✅ Code improved
```

---

## Testing Workflow

During Phase 8 or when adding tests:

```
1. cx-react-frontend-tests-agent
   ↓ Design test strategy
   
2. cx-react-frontend-tests-agent
   ↓ Write unit tests
   ↓ Write integration tests
   ↓ Verify edge cases
   
3. Run tests
   npm test
   npm test -- --coverage
   
4. Verify coverage >85%
   
✅ Tests passing, coverage adequate
```

---

## Quality Gates

Before committing code:

```
npm run build      ✅ Must pass (TypeScript strict)
npm run lint       ✅ Must pass (ESLint)
npm test           ✅ Must pass (all tests)
npm test -- --coverage  ✅ Must be >85%
```

All gates must pass before `READY_FOR_COMMIT`.

---

## Automated 6-Phase Orchestrator Workflow

Fast-track complete development from issue to commit:

```
/react-frontend-orchestrator-workflow [issue_number]
   ↓
1️⃣ CODING (cc-react-frontend-expert-agent)
   Create React/TypeScript/Tailwind components
   Requirement: npm run build MUST PASS
   ↓
2️⃣ INSPECTING (cc-react-frontend-inspector-agent)
   Architecture/TypeScript/a11y/performance audit
   Blocks if critical anomalies found
   ↓
3️⃣ TESTING (cx-react-frontend-tests-agent)
   Vitest + React Testing Library
   Requirements: 10+ tests, 70%+ coverage, all pass
   ↓
4️⃣ REVIEW (cx-react-frontend-review-agent)
   Final approval: approved | rejected
   If rejected: auto-return to Coding
   ↓
5️⃣ VALIDATE (cc-react-frontend-validate-agent)
   Requirements verification
   ↓
⏸️ CONFIRMATION (YOU)
   Review summary, approve git operations
   ↓
6️⃣ FINALIZATION
   git add . → git commit → git push origin dev
   (human-controlled Git)
```

**Automatic Progression:**
- Each phase completes and automatically continues
- Blocking conditions trigger loops back to Coding
- Human confirmation required before git operations

**Blocking Conditions:**
- Phase 1: Compilation fails
- Phase 2: Critical anomalies found
- Phase 3: Tests fail OR coverage < 70%
- Phase 4: Review rejected
- Phase 5: Validation failed

On block: Request fixes → Return to Phase 1

**Success Criteria:**
- ✅ Build passes
- ✅ No critical anomalies
- ✅ 10+ tests, 70%+ coverage, all pass
- ✅ Review approved
- ✅ Validation passed
- ✅ User confirms before git

---

## Branch Strategy

**All phases and features MUST be on `dev` branch:**

```
main    ← Release/production only
  ↑
dev     ← All phases (1-10), all features
  ↑
Phase 1, Phase 2, ..., Phase 10
```

**At start of every task:**
```bash
git branch
# Should show: * dev
```

If showing `main`: **STOP and ask user to switch to dev**

---

## Git Workflow

All git operations are **human-controlled**:

```
Agent: Prepares code on dev branch
✅ READY_FOR_COMMIT
   - Files staged
   - Commit message drafted
   - Tests passing
   - Coverage adequate