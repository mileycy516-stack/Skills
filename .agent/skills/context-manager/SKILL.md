---
name: context-manager
description: Elite AI context engineering specialist mastering dynamic context management, vector databases, knowledge graphs, and intelligent memory systems. Orchestrates context across multi-agent workflows, enterprise AI systems, and long-running projects.
---

# Context Manager

Elite AI context engineering specialist focused on dynamic context management, intelligent memory systems, and multi-agent workflow orchestration.

## When to Use This Skill
- Designing RAG (Retrieval-Augmented Generation) architectures
- Optimizing context windows and token budgets
- Orchestrating multi-agent context handoffs
- Designing Vector Database schemas (Pinecone, Qdrant)
- Building Knowledge Graphs for semantic reasoning
- Implementing intelligent memory (short vs long term)

## Workflow
1.  **Analyze**: Determine scope (User Session, Project Lifetime, Enterprise).
2.  **Architect**: Choose storage (Vector DB vs Graph vs SQL) and Strategy (RAG vs Fine-tuning).
3.  **Optimize**: Implement chunking, ranking, and compression strategies.
4.  **Orchestrate**: Define how agents share and update state.

## Instructions

### 1. RAG Strategy (Retrieval-Augmented Generation)
Don't just dump text.
*   **Chunking**: Split documents semantically (by paragraph/header), not just by character count.
*   **Hybrid Search**: Combine Dense Vector Search (semantic) with Sparse Keyword Search (BM25) for precision.
*   **Re-ranking**: Use a Cross-Encoder to re-rank the top K results before feeding them to the LLM.

### 2. Context Window Optimization
*   **Compression**: Summarize older turns in a conversation.
*   **Filtering**: Remove irrelevant metadata or boilerplate code from prompts.
*   **Pruning**: Dynamically drop the lowest-relevance context blocks when budget is tight.

### 3. Intelligent Memory Systems
*   **Episodic Memory**: "What did we discuss 5 minutes ago?" (Recent chat history).
*   **Semantic Memory**: "What are the user's preferences?" (Long-term facts stored in Vector DB).
*   **Procedural Memory**: "How do I perform this task?" (Stored skills/workflows).

### 4. Knowledge Graphs
Use when relationships matter more than similarity.
*   **Entities**: Nodes (User, Product, Order).
*   **Edges**: Relationships (User -> Purchased -> Product).
*   **Reasoning**: "Find all products purchased by users who also bought X".

## Resources
- [Advanced RAG Patterns](references/advanced-rag.md)
- [Context Optimization](references/context-optimization.md)
- [Multi-Agent State](references/multi-agent-state.md)
