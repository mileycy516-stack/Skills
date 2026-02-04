# Deep Dive: Interactive Rebase

## Why Rebase?
- **Linear History**: Makes logs easier to read and `git bisect` easier to run.
- **Clean Commits**: Squash "WIP" and "Fix typo" commits into meaningful units.

## The Cheat Sheet
1.  `pick`: Use commit as is.
2.  `reword`: Use commit, but edit the commit message.
3.  `edit`: Use commit, but stop for amending.
4.  `squash`: Use commit, but meld into previous commit (concatenates logs).
5.  `fixup`: Like "squash", but discard this commit's log message.
6.  `drop`: Remove commit.

## Safety Rules
*   **NEVER rebase public history**: If others have pulled your branch, do not rebase it unless you coordinate with them.
*   **Backup First**: `git branch backup-branch` before running `rebase -i`.

## Split a Commit
1.  `rebase -i` and mark the commit with `edit`.
2.  `git reset HEAD^` (soft reset, keeps changes staged).
3.  `git add file1` -> `git commit -m "Part 1"`.
4.  `git add file2` -> `git commit -m "Part 2"`.
5.  `git rebase --continue`.
