# .agents/ INDEX

Complete index of all governance and workflow files in the `.agents/` directory.

**Read this first** to understand the structure and navigate to specific topics.

---

## Files Overview

| File | Purpose | When to Read |
|------|---------|--------------|
| [`INDEX.md`](./INDEX.md) | This file — complete index | Starting new work |
| [`SKILLS.md`](./SKILLS.md) | Available agents and skills | Choosing which agent to use |
| [`workflows.md`](./workflows.md) | Development workflows and processes | Planning phase work |
| [`rules.md`](./rules.md) | Essential rules and guidelines | Before committing code |

---

## Quick Navigation

### Starting New Work?

1. Read this INDEX (you're here)
2. Read [`SKILLS.md`](./SKILLS.md) to choose the right agent
3. Read [`workflows.md`](./workflows.md) to understand the workflow
4. Read [`rules.md`](./rules.md) for essential guidelines

### Implementing a Component?

1. See [`SKILLS.md`](./SKILLS.md) → Component Implementation section
2. See [`workflows.md`](./workflows.md) → Standard Component Workflow
3. Check [`rules.md`](./rules.md) for code quality standards

### Writing Tests?

1. See [`SKILLS.md`](./SKILLS.md) → cx-react-frontend-tests-agent
2. See [`workflows.md`](./workflows.md) → Testing Workflow
3. Check [`rules.md`](./rules.md) → Testing Standards

### Code Review?

1. See [`SKILLS.md`](./SKILLS.md) → Code Review Agents
2. See [`workflows.md`](./workflows.md) → Code Review Workflow
3. Check [`rules.md`](./rules.md) → Review Criteria

### Fast-Track Full Workflow?

1. See [`SKILLS.md`](./SKILLS.md) → react-frontend-orchestrator-workflow
2. See [`workflows.md`](./workflows.md) → Automated 6-Phase Orchestrator Workflow
3. Run `/react-frontend-orchestrator-workflow [issue_number]`
4. Agents handle all 6 phases automatically
5. Confirm before git operations (Phase 6)

### Ready to Commit?

1. See [`workflows.md`](./workflows.md) → Quality Gates
2. See [`rules.md`](./rules.md) → Pre-Commit Checklist
3. **STOP at READY_FOR_COMMIT** — user runs git commands

---

## File Descriptions

### SKILLS.md

Lists all available agents and skills for this project.

**Contains:**
- cc-react-frontend-expert-agent (component implementation)
- cc-react-frontend-inspector-agent (quality inspection)
- cc-react-frontend-validate-agent (final validation)
- cx-react-frontend-review-agent (independent review)
- cx-react-frontend-tests-agent (testing)
- Built-in Claude Code skills

**Use when:** Choosing which agent to invoke for a task

---

### workflows.md

Describes all workflows and processes.

**Contains:**
- 10-phase development workflow (Phases 1-10)
- Standard component implementation workflow
- Bug fix workflow
- Code review workflow
- Testing workflow
- Quality gates
- Git workflow

**Use when:** Understanding how to execute a phase or task

---

### rules.md

Essential rules and guidelines for this project.

**Contains:**
- Code quality standards
- Testing requirements
- Architecture guidelines
- Pre-commit checklist
- Quality gates
- Type safety rules
- Performance considerations

**Use when:** About to commit code or need quality guidance

---

## File Dependencies

```
CLAUDE.md / AGENTS.md (entry points)
    ↓
INDEX.md (this file — shows structure)
    ↓
SKILLS.md (choose agent)
    ↓
workflows.md (follow process)
    ↓
rules.md (verify quality)
    ↓
READY_FOR_COMMIT
```

---

## How to Use This Index

1. **First time?** Read SKILLS.md → workflows.md → rules.md
2. **Implementing code?** Jump to SKILLS.md → workflows.md
3. **Code review?** Jump to SKILLS.md → Code Review section
4. **Testing?** Jump to SKILLS.md → cx-react-frontend-tests-agent
5. **Ready to commit?** Jump to rules.md → Pre-Commit Checklist

---

## Each Session Should:

1. ✅ Read `CLAUDE.md` (architecture & commands)
2. ✅ Read `AGENTS.md` (project info)
3. ✅ Read this INDEX (navigate .agents/)
4. ✅ Reference specific files as needed
5. ✅ At end of session: Create/update HANDOFF.md

---

## Related Files (Outside .agents/)

- `CLAUDE.md` — Project architecture and commands
- `AGENTS.md` — Project overview
- `HANDOFF.md` — Session handoff (top level)
- `.nobix-packs/epic-nobix.md` — Detailed specifications
- GitHub Issues [#1-#11](https://github.com/hnidboubker/nobix-react-packs/issues) — Phase tracking

---

## Quick Links

- **📋 Phases:** [GitHub Issues #2-#11](https://github.com/hnidboubker/nobix-react-packs/issues)
- **🏗️ Architecture:** `.nobix-packs/epic-nobix.md` (25 sections)
- **💻 Commands:** See `CLAUDE.md`
- **🤖 Agents:** See `SKILLS.md`
- **⚙️ Workflows:** See `workflows.md`
- **✅ Rules:** See `rules.md`

---

## Session Workflow

**At start of each session:**
1. Read this INDEX
2. Read SKILLS.md for available agents
3. Read workflows.md for the current phase
4. Read rules.md for quality standards
5. Start work in appropriate phase

**At end of each session:**
1. Update HANDOFF.md with progress
2. List blockers and next steps
3. Document any discoveries
4. Commit any completed work

---

**Project:** @projet-example/sidebar  
**Master Epic:** [#1](https://github.com/hnidboubker/nobix-react-packs/issues/1)  
**Phases:** 10 (issues #2-#11)  
**License:** Apache 2.0
