---
title: "RL Environments for Language Agents: Why We Need Better Benchmarks"
date: "2025-01-18"
summary: "Standard RL benchmarks don't test what matters for language-grounded agents. Here's what a better benchmark looks like."
tags: ["reinforcement-learning", "llm", "benchmarks"]
draft: false
---

CartPole doesn't care about language. Neither does Atari. Most standard RL benchmarks were designed for reactive agents operating in fully observable, well-defined state spaces. Language agents are different — they reason over text, use tools, and operate in environments where the state is often partially observable and expressed in natural language.

## The mismatch

When you drop a standard RL algorithm into a language-grounded task, a few things break immediately:

**Observation space**: Standard RL assumes a fixed-dimension observation vector. Language observations are variable-length strings. Most people serialize these to token embeddings, but this creates a large, sparse, high-dimensional input space that most RL algorithms weren't designed for.

**Action space**: In Atari, you have 18 discrete actions. In a language agent environment, the action space is the entire vocabulary — or, if you're doing tool use, a combinatorial space of tool names × parameter values. This is not tractable for tabular RL methods.

**Reward sparsity**: Language tasks typically have sparse rewards — you only know if the agent succeeded at the end of a long sequence of decisions. Standard RL algorithms struggle with sparse rewards at scale.

## What a better benchmark looks like

For my RL environment suite, I designed environments with these constraints in mind:

1. **Text-based observations** with structured schemas — the agent receives JSON-formatted observations, not free-form text. This makes the observation space less sparse while still being language-grounded.

2. **Hierarchical action spaces** — agents pick a tool/action category first, then specify parameters. This reduces the effective branching factor at each decision point.

3. **Intermediate reward signals** — even for tasks with a single terminal reward, I add auxiliary rewards for completing subtasks correctly. This provides a learning signal for the early steps of long-horizon tasks.

4. **Designed failure modes** — each environment has documented failure modes that a naive agent will hit. Benchmarks should test robustness to specific failure patterns, not just average performance.

The suite is open source. If you're working on similar problems, I'd love to compare notes.
