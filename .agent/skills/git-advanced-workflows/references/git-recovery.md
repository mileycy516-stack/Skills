# Git Recovery & Safety

## The Golden Rule
**If you committed it, you can recover it.** (Usually for up to 90 days).

## Undo Last Commit
*   **Keep changes**: `git reset --soft HEAD^`
*   **Discard changes**: `git reset --hard HEAD^` (WARNING: Destructive)

## Restore Deleted Branch
1.  Run `git reflog`.
2.  Look for `checkout: moving from <deleted-branch> to ...`.
3.  Note the hash (e.g., `abc1234`).
4.  `git branch <deleted-branch> abc1234`.

## Force Push Safely
Never use `--force` (-f). Always use `--force-with-lease`.
*   **Why?**: Checks if the remote branch has moved since you last fetched. If a teammate pushed code, it will fail (saving you from overwriting their work).
*   `git push --force-with-lease origin feature/branch`
