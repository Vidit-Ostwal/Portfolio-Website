export interface Project {
  title: string;
  description: string;
  detail: string;
  tech: string[];
  github: string;
  demo?: string;
  status: 'active' | 'archived';
  category: 'project' | 'oss';
}

export const projects: Project[] = [
  {
    title: 'CrewAI Contributions',
    description: 'Top 10 contributor to CrewAI — an open-source framework for orchestrating role-playing AI agents.',
    detail: `CrewAI is one of the most popular agentic AI frameworks in the Python ecosystem. My contributions span across core agent orchestration logic, tool integrations, and documentation improvements.\n\nKey contributions include improving agent memory handling, adding support for custom LLM providers, and writing the flow-based execution model for complex multi-agent pipelines. Reviewed and co-authored chapters in the official book on CrewAI.\n\nBeing a top 10 contributor means understanding the framework deeply — not just surface-level API usage but the internal task delegation, inter-agent communication patterns, and how crews handle state across long-running workflows.`,
    tech: ['Python', 'LangChain', 'CrewAI', 'OpenAI API', 'Pydantic'],
    github: 'https://github.com/crewAIInc/crewAI',
    status: 'active',
    category: 'oss',
  },
  {
    title: 'Agentic AI Research Environment',
    description: 'A sandbox for experimenting with multi-agent systems — task decomposition, memory, and tool use.',
    detail: `Built to explore the boundaries of what autonomous AI agents can do without human-in-the-loop supervision.\n\nThe environment supports spawning multiple agents with different roles and memory scopes. Agents can use tools (web search, code execution, file I/O) and coordinate via a shared context bus. The goal was to understand failure modes: when do agents get stuck in loops, when do they hallucinate tool outputs, when does coordination overhead outweigh parallel gains?\n\nLearnings from this directly informed my CrewAI contributions — particularly around the flow execution model and error recovery in agent chains.`,
    tech: ['Python', 'CrewAI', 'LangChain', 'FastAPI', 'Redis'],
    github: 'https://github.com/Vidit-Ostwal',
    status: 'active',
    category: 'project',
  },
  {
    title: 'RL Environment Suite',
    description: 'Custom Gymnasium-compatible environments for testing reinforcement learning algorithms on agentic tasks.',
    detail: `Standard RL benchmarks (CartPole, Atari, MuJoCo) don't capture the complexity of decision-making in language-grounded or tool-augmented settings. This suite adds environments where agents must reason over text observations, plan multi-step tool use, and handle sparse rewards.\n\nEnvironments include: a text-based navigation maze, a tool-calling economy simulation, and a multi-agent negotiation game. Each is Gymnasium-compatible so you can plug in any standard RL algorithm (PPO, SAC, DQN) as a baseline.\n\nThe design philosophy: environments should stress-test planning and long-horizon reasoning, not just reaction time or pattern matching.`,
    tech: ['Python', 'Gymnasium', 'PyTorch', 'Stable-Baselines3', 'NumPy'],
    github: 'https://github.com/Vidit-Ostwal',
    status: 'active',
    category: 'project',
  },
  {
    title: 'CrewAI Hackathon — Runner-Up',
    description: '2nd place globally in CrewAI Fall Hackathon. Built a fully autonomous research and report generation agent pipeline.',
    detail: `For the CrewAI Global Fall Hackathon, I built an end-to-end autonomous research pipeline that takes a topic as input and produces a structured, cited research report — no human intervention required.\n\nThe pipeline: a research coordinator crew breaks the topic into sub-questions, individual researcher agents search the web and extract key findings, a synthesizer agent merges findings into a coherent narrative, and a critic agent reviews for logical gaps and hallucinations before a final editor produces the output.\n\nThe key technical challenge was managing context length across the pipeline and preventing agents from "telephone game" degradation — where each handoff loses fidelity. Solved by embedding a shared structured state object that all agents read from and write to, rather than passing free-form text.`,
    tech: ['Python', 'CrewAI', 'Serper API', 'OpenAI', 'Pydantic'],
    github: 'https://github.com/Vidit-Ostwal',
    status: 'archived',
    category: 'project',
  },
];

export interface SubstackPost {
  title: string;
  url: string;
  date: string;
  summary: string;
  category: string;
}

export const substackPosts: SubstackPost[] = [
  {
    title: 'MoE Routing Calculation (Excel Walkthrough)',
    url: 'https://docs.google.com/spreadsheets/d/1jVwHc-BfOCop92g6tAfQOeTDb8Nfl3yunvQ3dwR1gI0/edit?usp=sharing',
    date: '2026-01-25',
    summary: 'Step-by-step Excel breakdown of router logits → top-k selection → normalized expert probabilities. Includes top-k masking, −∞ replacement, softmax, and final expert routing weights.',
    category: 'Mixture of Experts',
  },
  {
    title: 'Building MakeMyDocsBot',
    url: 'https://viditostwal.substack.com/p/building-makemydocsbot',
    date: '2025-12-20',
    summary: 'Automated multi-language documentation sync across feature branches.',
    category: 'Agentic Systems & Tooling',
  },
  {
    title: 'How Does Temperature Change LLM Responses?',
    url: 'https://viditostwal.substack.com/p/how-does-temperature-changes-the',
    date: '2025-07-09',
    summary: 'Effect of temperature on next-token probability distribution.',
    category: 'LLM Behavior & Sampling',
  },
  {
    title: 'KV (Key-Value) Cache in Transformers',
    url: 'https://viditostwal.substack.com/p/kv-key-value-cache-in-transformers',
    date: '2025-07-26',
    summary: 'Reducing inference latency using KV cache.',
    category: 'Transformers & LLM Internals',
  },
  {
    title: 'Masked Self-Attention',
    url: 'https://www.notion.so/viditostwal/Self-Attention-in-Transformers-216e478805d48005b515fac90e1d76e0',
    date: '2025-06-25',
    summary: 'How masking enforces autoregressive generation in decoder-only transformers.',
    category: 'Transformers & LLM Internals',
  },
  {
    title: 'Self-Attention in Transformers',
    url: 'https://www.notion.so/viditostwal/Self-Attention-in-Transformers-216e478805d48005b515fac90e1d76e0',
    date: '2025-06-21',
    summary: 'How queries, keys, and values compute attention weights and why it matters.',
    category: 'Transformers & LLM Internals',
  },
  {
    title: 'Training the Tokenizer',
    url: 'https://www.notion.so/207e478805d48090b34fcc5c8e8c3c01?v=207e478805d480cfac6c000ca3c80482',
    date: '2025-06-03',
    summary: 'How tokenizers are trained and why the vocabulary choice shapes model behavior.',
    category: 'Transformers & LLM Internals',
  },
];
