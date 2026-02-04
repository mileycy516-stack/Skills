# Advanced RAG Patterns

## 1. Parent-Child Chunking
*   **Concept**: Retrieving small chunks loses context. Index small chunks, but retrieve their *parent* (larger chunk).
*   **Implementation**: Split document into 500-token blocks (Parents). Split each Parent into 100-token chunks (Children). Embed children. When a child matches, return the Parent.

## 2. Hypothetical Document Embeddings (HyDE)
*   **Concept**: User questions don't look like document answers.
*   **Implementation**: Ask LLM to *hallucinate* a hypothetical answer to the question. Embed that *answer*. Search against real documents using the hypothetical answer vector.

## 3. Self-Querying Retriever
*   **Concept**: User query contains metadata filters ("Show me recent emails from Bob").
*   **Implementation**: Use an LLM to parse the query into a structured object `{ filter: { sender: "Bob", date: { $gt: "2023-01-01" } }, query: "emails" }`. Execute structured search.
