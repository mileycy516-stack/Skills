# Context Optimization Strategies

## 1. Token Budgeting
Allocate specific percentages of the context window to different sources.
*   **System Prompt**: 10% (Fixed Instructions)
*   **Relevant Documents (RAG)**: 50% (The Data)
*   **Conversation History**: 30% (Recent Turns)
*   **Scratchpad**: 10% (Reasoning space)

## 2. Summarization (Progressive)
Instead of dropping old history, summarize it.
*   *Turn 1-5*: Raw text.
*   *Turn 6*: Summarize Turns 1-5 into a single paragraph "Summary of previous discussion".
*   *Turn 7-10*: Raw text.

## 3. Metadata Filtering
Don't feed raw JSON with 50 fields to the LLM if it only needs `name` and `id`.
*   **Projection**: filtering the object keys before stringifying into the prompt.
