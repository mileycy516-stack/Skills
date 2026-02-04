# Multi-Agent State Management

## The "Blackboard" Pattern
Agents don't talk directly 1:1; they write to a shared "Blackboard" (State).
*   **Agent A**: Reads Blackboard, sees "Task: Research X". Performs research, writes "Result X" to Blackboard.
*   **Agent B**: Subscribes to Blackboard updates. Sees "Result X". Starts "Task: Draft Report".

## Context Handoff Protocol
When Agent A passes a task to Agent B, it shouldn't dump its entire memory.
*   **Protocol**:
    1.  **Intent**: Why am I engaging you?
    2.  **Summary**: High-level context of what happened so far.
    3.  **Artifacts**: Pointers to specific data (file paths, DB IDs) needed for the next step.
    4.  **Constraints**: specific rules for Agent B.
