# Common Bugs Checklist

## Python
- **Mutable Default Arguments:** `def func(a=[]):` -> `def func(a=None):`
- **Broad Exception Catching:** `except:` -> `except ValueError:`
- **Mutable Class Attributes:** Defining lists/dicts at class level instead of `__init__`.
- **Integer Division:** Python 2 vs 3 division differences (if legacy).
- **Modifying List While Iterating:** Use `for item in list[:]:` or create a new list.

## JavaScript / TypeScript
- **Floating Point Math:** `0.1 + 0.2 !== 0.3`.
- **Equality:** Use `===` instead of `==`.
- **Async/Await:** Forgetting `await` on a promise.
- **Closure Loops:** `var` in loops referencing loop variable (use `let`).
- **Object Reference:** Mutating objects passed as arguments unexpectedly.
- **Date Handling:** Timezones and month indexing (0-11).

## General Logic
- **Off-by-one errors:** Loop boundaries.
- **Null Reference:** Accessing properties of null/undefined.
- **Race Conditions:** Shared state without locks.
- **Resource Leaks:** Open files or connections not closed.
