---
name: prompt-engineering-mastery
description: Master the art of prompting LLMs. Includes Chain-of-Thought, System Prompting, Few-Shot Learning, and mitigating hallucinations. Use when designing AI agents, refining bot personas, or getting better results from language models.
---

# Prompt Engineering Mastery

Techniques to extract maximum intelligence, reliability, and creativity from Large Language Models (LLMs).

## When to Use This Skill
- Designing System Prompts for Agents
- Fixing LLM hallucinations or logic errors
- Creating "Persona" based bots
- Implementing complex reasoning tasks (Chain-of-Thought)
- Optimizing prompt costs (token reduction)

## Core Techniques

### 1. Structural Prompting
Organize prompts clearly using Markdown or XML tags.
```xml
<context>
You are a senior specialized in Python.
</context>

<instruction>
Review this code for security vulnerabilities.
</instruction>

<output_format>
JSON format: { "vulnerabilities": [] }
</output_format>
```

### 2. Reasoning Patterns
**Chain-of-Thought (CoT)**
Force the model to "think" before answering.
*   *Zero-Shot CoT*: Append "Let's think step by step."
*   *Few-Shot CoT*: Provide examples of the reasoning process.

**Few-Shot Learning**
Don't just tell; show.
```
Input: "The sky is blue" -> Sentiment: Neutral
Input: "I love this tool" -> Sentiment: Positive
Input: "This is garbage" ->
```

### 3. Hallucination Mitigation
*   **"Answer only from the context"**: Restrict knowledge source.
*   **"If you don't know, say 'I don't know'"**: Prevent guessing.
*   **Citation Requirement**: Ask the model to quote the source text.

## Persona Design
Define:
1.  **Identity**: "You are a Senior SRE Engineer..."
2.  **Tone**: "Professional, concise, direct."
3.  **Constraints**: "Do not apologize. Do not use filler words."

## Troubleshooting
*   *Model is lazy?* -> Add "Take a deep breath and work on this step-by-step." / "This is critical for the project."
*   *Model ignores instructions?* -> Move critical instructions to the **end** of the prompt (Recency Bias).

## Resources
- [Anthropic Prompt Library](https://docs.anthropic.com/claude/prompt-library)
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
