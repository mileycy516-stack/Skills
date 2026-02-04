---
name: git-advanced-workflows
description: Master advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog to maintain clean history and recover from any situation. Use when managing complex Git histories, collaborating on feature branches, or troubleshooting repository issues.
---

# Git Advanced Workflows

Master advanced Git techniques to maintain clean history, collaborate effectively, and recover from any situation with confidence.

## When to Use This Skill
- Cleaning up commit history before merging (rebase)
- Applying specific commits across branches (cherry-pick)
- Finding commits that introduced bugs (bisect)
- Working on multiple features simultaneously (worktrees)
- Recovering from Git mistakes or lost commits (reflog)
- Synchronizing diverged branches

## Workflow
1.  **Context**: Are you cleaning history, recovering lost work, or isolating a bug?
2.  **Safety**: Always create a backup branch before destructive operations (`git branch backup-before-rebase`).
3.  **Execute**: Use the specific command (rebase -i, bisect, reflog).
4.  **Verify**: Check log/tests to ensure integrity.
5.  **Push**: If history changed, use `--force-with-lease`.

## Instructions

### 1. Interactive Rebase (The History Editor)
Use to squash typos, reword messages, or reorder commits.
```bash
git rebase -i HEAD~5
# Commands: pick, reword, edit, squash, fixup, drop
```
*   **Autosquash**: `git commit --fixup HEAD` -> `git rebase -i --autosquash main`.

### 2. Cherry-Picking (The Sniper)
Apply specific commits to another branch without merging.
```bash
git cherry-pick abc1234
git cherry-pick abc1234..def5678 # Range
git cherry-pick -n abc1234 # Stage only (no commit)
```

### 3. Git Bisect (The Bug Hunter)
Binary search to find the exact commit that broke something.
```bash
git bisect start
git bisect bad              # Current is broken
git bisect good v1.0.0      # v1.0.0 was working
# Git checks out middle commit... you test...
git bisect good # or bad
# Repeat until found
git bisect reset
```

### 4. Worktrees (The Multitasker)
Check out multiple branches in parallel folders. No more stash/switch ping-pong.
```bash
git worktree add ../feature-folder feature/new-stuff
# Work there...
git worktree remove ../feature-folder
```

### 5. Reflog (The Time Machine)
Recover "lost" commits after a hard reset or delete.
```bash
git reflog
# Find the hash BEFORE you messed up (e.g., abc1234)
git reset --hard abc1234
# Or restore a deleted branch
git branch recovered-branch abc1234
```

## Resources
- [Rebase Guide](references/git-rebase-guide.md)
- [Conflict Resolution](references/git-conflict-resolution.md)
- [Recovery & Safety](references/git-recovery.md)
