Règles strictes et non négociables

Ces règles sont prioritaires et obligatoires. Elles ne doivent jamais être contournées, même si une autre approche semble plus simple, plus propre ou plus efficace.

1. Ne jamais modifier l’existant sans autorisation

Ne jamais modifier du code, une configuration, une documentation ou un fichier existant sans demande explicite de ma part.

Si une modification de l’existant est nécessaire pour réaliser une tâche, s’arrêter et demander mon autorisation avant de la faire.

Ne jamais considérer une demande générale comme une autorisation implicite de modifier l’existant.

2. Ne jamais supprimer

Ne jamais supprimer un fichier, dossier, composant, fonction, classe, configuration, test ou documentation existante.

Ne jamais supprimer du code parce qu’il semble inutilisé, obsolète, redondant ou incorrect.

Ne jamais supprimer un élément pour « nettoyer » le projet sans demande explicite.

Toute suppression nécessite une autorisation explicite.

3. Ne jamais écraser

Ne jamais remplacer entièrement un fichier existant sans autorisation explicite.

Ne jamais écraser une implémentation existante pour introduire une nouvelle approche.

Préserver systématiquement le comportement existant.

4. Ne jamais refactorer spontanément

Ne jamais profiter d’une tâche pour effectuer un refactoring non demandé.

Ne jamais renommer des fichiers, fonctions, variables, composants ou interfaces existants sans autorisation.

Ne jamais modifier l’architecture existante « pour améliorer » le projet sans demande explicite.

5. Ajouter plutôt que modifier

Par défaut, lorsqu'une fonctionnalité doit être ajoutée :

privilégier l’ajout de nouveaux fichiers ou composants ;

réutiliser l’existant sans le modifier lorsque c’est possible ;

préserver les API et comportements existants ;

éviter tout changement ayant un impact sur le code existant.

Si l’ajout nécessite obligatoirement une modification de l’existant, demander confirmation avant toute modification.

6. Ne jamais faire d’hypothèses destructives

L’agent ne doit jamais supposer que :

un fichier peut être supprimé ;

un composant peut être remplacé ;

une API peut être modifiée ;

un comportement peut être changé ;

une dépendance peut être retirée ;

une configuration peut être réécrite.

En cas de doute : ne rien modifier et demander.

7. Préserver la compatibilité

Ne jamais casser volontairement un comportement existant.

Ne jamais modifier une API publique sans autorisation.

Ne jamais modifier les contrats, interfaces ou types existants sans autorisation.

Ne jamais introduire de breaking change implicitement.

8. Ne jamais inventer

Ne jamais inventer un fichier, une API, une dépendance, une convention ou une architecture qui n’existe pas.

Vérifier le repository avant toute décision.

Se baser sur l’état réel du projet plutôt que sur des suppositions.

9. Vérifier avant d'agir

Avant toute modification :

Inspecter l’état actuel du repository.

Identifier précisément ce qui doit être ajouté ou modifié.

Vérifier les dépendances avec l’existant.

Déterminer si l’opération implique une modification ou suppression.

Si oui et que cela n’a pas été explicitement demandé → STOP et demander confirmation.

10. Principe de moindre impact

Lorsqu’une implémentation est demandée :

Faire le minimum nécessaire pour satisfaire la demande.

Ne pas profiter de la tâche pour :

améliorer d’autres parties du code ;

corriger des problèmes non liés ;

refactorer ;

nettoyer ;

renommer ;

déplacer ;

supprimer ;

mettre à jour des dépendances.

11. Respect strict de la demande

L’agent doit distinguer :

ce qui est explicitement demandé → peut être réalisé ;

ce qui est nécessaire pour réaliser la demande → peut être réalisé si cela ne détruit/modifie pas l’existant de manière non autorisée ;

ce qui est seulement une amélioration potentielle → ne pas réaliser ;

ce qui nécessite une modification ou suppression non autorisée → demander confirmation.

12. Règle STOP

Si une tâche ne peut pas être réalisée sans :

modifier l’existant ;

supprimer quelque chose ;

remplacer une implémentation ;

changer une API ;

changer une architecture ;

introduire un breaking change ;

alors NE PAS CONTINUER.

Présenter clairement :

ce qui bloque ;

ce qui devrait être modifié ;

pourquoi cette modification est nécessaire ;

puis attendre mon autorisation explicite.

13. Règle fondamentale

L’existant appartient au projet et doit être considéré comme protégé par défaut.

Toute modification est une exception.

Toute suppression est interdite par défaut.

Toute modification non explicitement autorisée doit être considérée comme interdite.

En cas de doute : ne pas agir, demander confirmation.
# Agent Rules

## Purpose

These rules define how agents must work on `@projet-example/sidebar` and its
supporting documentation.

## Scope

Apply these rules to every task performed in this repository, including:

- feature implementation;
- bug fixes;
- refactoring;
- testing and validation;
- documentation updates;
- code review.

## Branch Strategy

**CRITICAL RULE:** All phases and features MUST be developed on the `dev` branch.

- ✅ `main` — Release branch only (stable, production-ready)
- ✅ `dev` — Development branch (all features, phases, experimental work)
- ✅ `dev/*` — Feature branches (optional, from dev)

**Verification at start of every task:**
```bash
git branch          # Check current branch
# Must show: * dev (with asterisk)
```

If on `main`: **STOP** and ask user to switch to dev branch.

---

## Core Principles

1. **Always work on `dev` branch.** Verify with `git branch` before any work.
2. **Understand before changing.** Read the relevant documentation, workflows,
   source files, tests, and configuration before editing.
2. **Make the smallest correct change.** Do not introduce unrelated refactors,
   renames, dependencies, or architectural changes.
3. **Reuse existing patterns.** Follow the repository's conventions for naming,
   structure, TypeScript, React, styling, testing, and error handling.
4. **Preserve public contracts.** Do not break the public API or supported React
   18 and React 19 compatibility without an explicit requirement.
5. **Keep the package independent.** Do not add runtime dependencies on a
   consuming application or on a specific icon library such as Lucide.
6. **Prefer explicit, typed code.** Keep TypeScript strict, expose intentional
   APIs, and avoid unnecessary type assertions or duplicated logic.
7. **Treat accessibility as a requirement.** Components must support keyboard
   interaction, meaningful semantics, visible focus, and appropriate labels.

## Required Preparation

Before modifying code, the agent must:

1. Read the repository guidance and relevant files in `.agents/`.
2. Inspect the current project structure and existing implementation.
3. Identify the applicable workflow in [workflows.md](./workflows.md).
4. Check for existing components, utilities, types, tests, or documentation
   that can be reused.
5. Define the expected outcome and validation commands.

If the intended behavior or project convention is ambiguous, stop and request
clarification before making a potentially incompatible change.

## Implementation Rules

- Keep components focused and composable.
- Keep behavior in shared components and layout decisions in templates.
- Keep domain contracts in `src/types/` and predefined values in `src/enums/`.
- Keep concrete defaults and configuration structures in `src/structs/`.
- Keep reusable logic in `src/utils/`.
- Preserve the public entry point in `src/index.ts` as the supported import
  surface.
- Use generic React component types for icons so consumers can provide Lucide,
  React Icons, Heroicons, Phosphor, or custom icons.
- Do not expose internal templates, utilities, or structs unless the public API
  explicitly requires them.
- Do not add comments that merely restate the code. Add comments only when
  they explain a non-obvious decision or constraint.

## Testing and Quality Gates

After each implementation change, run the checks that apply to the project:

```bash
npm run build
npm run lint
npm test
npm test -- --coverage
```

The expected quality target is:

- TypeScript compilation succeeds in strict mode;
- linting succeeds without new warnings or errors;
- all tests pass;
- overall coverage is at least 85% when the test suite is available;
- examples and public imports remain valid.

If a command cannot be run, report the command and the reason clearly.

## Task and Issue Tracking

- Keep the implementation aligned with the applicable Epic, phase, and
  micro-task.
- Do not silently expand the scope of a task.
- Record follow-up work as a separate task instead of mixing it into the
  current change.
- Reference the relevant issue or phase in task summaries when one exists.

## Git and Change Management

Git operations remain human-controlled unless the user explicitly requests
otherwise.

Before handoff, provide:

- a concise summary of the change;
- the files changed;
- validation commands and their results;
- any known limitations or follow-up work;
- a proposed commit message when useful.

Do not use destructive commands such as `git reset --hard`, force pushes, or
bulk deletion without explicit authorization.

## Completion Criteria

A task is complete only when:

1. the requested behavior is implemented;
2. the change follows the repository architecture and conventions;
3. applicable tests and quality gates pass;
4. documentation is updated when behavior or public API changes;
5. no unrelated files or behavior were changed.
