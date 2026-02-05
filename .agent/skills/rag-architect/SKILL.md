---
name: rag-architect
description: Design and implement Retrieval-Augmented Generation (RAG) systems. Mastering vector databases, embeddings, chunking strategies, and hybrid search to ground AI responses in your private data.
---

# RAG Architect

Design systems that connect LLMs to your private data (Retrieve -> Augment -> Generate).

## When to Use This Skill
- Building "Chat with your Data" applications
- Selecting a Vector Database (Pinecone, Milvus, pgvector)
- Designing Chunking Strategies (Fixed-size, Semantic, Markdown)
- Hybrid Search (Keyword + Semantic) implementation
- Reducing hallucinations with grounded context

## Core Concepts

### 1. Ingestion Pipeline (The "Loader")
Garbage In, Chatbot Out.
1.  **Load**: Extract text from PDF, HTML, Notion.
2.  **Chunk**: Break into pieces.
    *   *Fixed*: 500 chars (Simple, breaks context).
    *   *Semantic*: Break by paragraphs/headers (Smart).
3.  **Embed**: Convert text to vectors (OpenAI `text-embedding-3-small`, Cohere).

### 2. Retrieval Strategies
**Vector Search (Semantic)**
*   Finds "meaning". ("Can I bring my dog?" matches "Pet Policy").
*   *Pros*: Understands intent.
*   *Cons*: Fails on exact keywords (IDs, acronyms).

**Keyword Search (Lexical)**
*   BM25 / TF-IDF.
*   *Pros*: Precise for exact terms.
*   *Cons*: Dumb.

**Hybrid Search (The Gold Standard)**
*   Combine Vector + Keyword.
*   Use **Reciprocal Rank Fusion (RRF)** to re-rank results.

### 3. Generation (The "Synthesis")
Construct the final prompt.
```
Answer the question based ONLY on the following context:
{retrieved_chunks}

Question: {user_query}
```

## Advanced RAG
*   **HyDE (Hypothetical Document Embeddings)**: Generate a fake answer, embed that, then search.
*   **Parent Document Retriever**: Search small chunks, but return the big parent chunk to the LLM.
*   **Re-ranking**: Use a Cross-Encoder (Cohere Rerank) to score the top 20 retrieved docs before sending to LLM.

## Resources
- [LangChain RAG Docs](https://python.langchain.com/docs/use_cases/question_answering/)
- [Building RAG from Scratch](https://www.youtube.com/watch?v=bmHPW8f7UHA)
