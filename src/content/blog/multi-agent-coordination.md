---
title: "What I Learned Building Multi-Agent Pipelines"
date: "2025-03-10"
summary: "Practical lessons from building autonomous agent pipelines — what breaks, what scales, and what the benchmarks don't tell you."
tags: ["agentic-ai", "crewai", "llm"]
draft: false
---

After spending the last year building multi-agent systems — both in production and as side experiments — here's what I actually learned that papers and tutorials don't cover.

## The coordination overhead problem

Every multi-agent system tutorial shows you the happy path: agents coordinate smoothly, tasks get delegated, outputs get merged. What they don't show you is that as the number of agents grows, the coordination overhead often outpaces the parallelism benefit.

The intuition from distributed systems applies here too: if two agents need to share context to produce a correct output, and that context transfer is lossy (which it always is with LLMs), you're paying a "context degradation tax" on every handoff.

My rule of thumb: **use multiple agents when the tasks are genuinely independent**. If agents need to read each other's outputs to produce their own, you probably want a single agent with a structured loop instead.

## State management is the hard part

The easy part of building a multi-agent system is defining the agents and their roles. The hard part is state: what do agents remember, how do they update shared state, and what happens when two agents try to write to the same context simultaneously?

In my CrewAI hackathon project, I solved this by introducing a typed shared state object (a Pydantic model) that all agents read from and write to — with explicit "sections" owned by each agent. No free-form text passing between agents. This single change eliminated most of the "telephone game" degradation I was seeing.

## Long-horizon tasks expose LLM memory limits

Agents working on long-horizon tasks (research, writing, code review) will hit the context window eventually. The naive solution is "just use a bigger context window." The better solution is designing the task decomposition so each agent's subtask fits cleanly within its context window, with a summary mechanism for cross-agent communication.

This is actually a useful constraint: if you can't summarize what the previous agent found in 3-4 sentences, your task decomposition is probably wrong.

## What's next

I'm exploring hybrid architectures: RL-trained "meta-agents" that learn to orchestrate other agents based on feedback signals, rather than hardcoding the orchestration logic. More on that soon.
