---
name: react-frontend-orchestrator-workflow
description: Automated React frontend development workflow - 6 phases with automatic progression and looping
---

# React Frontend Orchestrator Workflow

Executes complete automated 6-phase development workflow with automatic progression and blocking conditions.

## Workflow Phases

**Phase 1: CODING**
- Agent: `cc-react-frontend-expert-agent`
- Create React components with TypeScript/Tailwind CSS
- Requirement: `npm run build` MUST PASS (strict mode)
- Continue if: Build passes
- Block if: Compilation errors

**Phase 2: INSPECTING**
- Agent: `cc-react-frontend-inspector-agent`
- Audit: architecture, TypeScript, accessibility, performance, bugs
- Continue if: No critical anomalies
- Block if: Critical anomalies found
- On block: Request fixes → Return to Phase 1

**Phase 3: TESTING**
- Agent: `cx-react-frontend-tests-agent`
- Create & run unit/integration tests with Vitest + React Testing Library
- Requirements:
  - Minimum 10 tests
  - Minimum 70% code coverage
  - All tests must pass
- Continue if: All requirements met
- Block if: Tests fail OR coverage < 70%

**Phase 4: REVIEW**
- Agent: `cx-react-frontend-review-agent`
- Final code review and approval
- Verdict: `approved` | `rejected`
- If rejected: Return to Phase 1 with feedback
- If approved: Continue to Phase 5

**Phase 5: VALIDATE**
- Agent: `cc-react-frontend-validate-agent`
- Validate all requirements
- Generate validation summary with:
  - ✓ Requirements validated
  - ✓ Inspection OK
  - ✓ Tests OK (70%+, 10+, all pass)
  - ✓ Review approved
  - ✓ Build passes
  - ✓ Files modified (list)
  - ✓ Commit message (drafted)

**⏸️ CONFIRMATION GATE**
- Present complete validation summary
- List all modified files
- Show proposed commit message
- Ask for user confirmation
- Do NOT proceed to git operations without explicit confirmation

**Phase 6: FINALIZATION** (after confirmation ONLY)
- Execute git operations:
  ```bash
  git add .
  git commit -m "[drafted message]"
  git push origin dev
  ```

## Usage

```bash
/react-frontend-orchestrator-workflow [issue_number]
```

Example:
```bash
/react-frontend-orchestrator-workflow 4
```

## Behavior

1. **Automatic progression:** Each phase runs and automatically decides to continue or block
2. **Looping:** If issues found, request fixes and automatically return to Phase 1
3. **Blocking conditions:** Critical anomalies, test failures, coverage < 70%, review rejection
4. **Human-controlled git:** Phase 6 ONLY runs after explicit user confirmation
5. **Detailed reporting:** Each phase produces a complete report
6. **Single invocation:** One command runs all 6 phases through to completion

## Environment Requirements

- **Branch:** Must be `dev`
- **Repository:** Must be a git repository
- **Build:** `npm run build` must pass (TypeScript strict mode)
- **Project:** Must have `package.json` and `src/` directory

## Success = All Phases Pass

- ✅ Phase 1: Compilation passes
- ✅ Phase 2: No critical anomalies detected
- ✅ Phase 3: Tests pass, coverage >= 70%
- ✅ Phase 4: Review approved
- ✅ Phase 5: All validations passed
- ✅ Phase 6: Git operations completed
- ✅ User confirmed before git (Phase 6)
