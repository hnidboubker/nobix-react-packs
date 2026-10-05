# SKILLS

Available agents and skills for this project.

---

## React Frontend Specialists

These agents implement React components for this project:

### cc-react-frontend-expert-agent

**Use for:** React component implementation

Implement Sidebar components, templates, hooks, and frontend architecture.

**Best for:**
- Sidebar component (Phase 2)
- DefaultSidebar, CompactSidebar, FloatingSidebar templates (Phase 3)
- SidebarMenu, SidebarItem, SidebarIcon components (Phase 2)
- Custom hooks (Phase 5-6)
- UI/UX improvements
- Accessibility enhancements
- Performance optimization

**Skills:**
- React + TypeScript + Tailwind CSS 4.3
- Component design
- Responsive design
- Accessibility (a11y)
- Performance optimization

---

### cc-react-frontend-inspector-agent

**Use for:** Quality inspection

Inspect components and frontend code for bugs, architecture violations, and best practices.

**Identifies:**
- Silent errors and bugs
- Architecture violations
- Best practice breaches
- Performance issues
- Accessibility gaps
- Type safety problems

---

### cc-react-frontend-validate-agent

**Use for:** Final validation before commit/merge

Verify all requirements are met and code is production-ready.

**Checks:**
- Requirements met
- Tests passing
- Coverage adequate
- Code quality good
- Documentation complete
- Ready to merge

---

## Code Review & Testing (Codex)

Independent review and deep testing:

### cx-react-frontend-review-agent

**Use for:** Independent code review

Review component code from fresh perspective.

**Reviews:**
- Component design
- Code quality
- Performance
- Security
- Accessibility
- Best practices

---

### cx-react-frontend-tests-agent

**Use for:** Test design and implementation (Phase 8)

Write comprehensive tests for components and achieve >85% coverage.

**Specializes in:**
- Vitest + React Testing Library
- Unit tests
- Integration tests
- Edge cases
- Accessibility testing
- Hook testing
- Component testing
- Coverage analysis

---

## Claude Code Built-in Skills

- `/code-review [level]` — Code review
- `/react-frontend-orchestration` — React workflow
- `/peasypilot-test-generator` — Generate tests
- `/systematic-debugging` — Debug issues
- `/brainstorming` — Plan features

---

## Workflow by Phase

| Phase | Primary Agent | Support |
|-------|---------------|---------|
| 2-4 | cc-react-frontend-expert-agent | cc-react-frontend-inspector-agent |
| 5-7 | cc-react-frontend-expert-agent | cc-react-frontend-inspector-agent |
| 8 | cx-react-frontend-tests-agent | cx-react-frontend-review-agent |
| 9-10 | cc-react-frontend-expert-agent | cc-react-frontend-validate-agent |

---

**Project:** @projet-example/sidebar  
**Phases:** 10 phases (issues #2-#11)
