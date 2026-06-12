export type ShowcaseProject = {
  name: string;
  tagline: string;
  github: string;
  bullets: string[];
  /** Month + year, e.g. "Jun 2026". */
  made?: string;
  liveLink?: string;
  xPost?: string;
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    name: 'Automatic UI Fixing Harness',
    tagline:
      'Black-box UI defect discovery for locally hosted web apps — Playwright exploration, LLM-assisted goals and verification, and an HTML findings report.',
    github: 'https://github.com/Vidit-Ostwal/Automatic-UI-Fixing-Harness',
    made: 'Jun 2026',
    bullets: [
      'Four-phase pipeline: BFS exploration in a real browser → LLM converts paths into plain-English test goals → parallel goal-driven executors → per-step LLM verifier that emits structured findings.',
      'Executors resolve instructions at runtime instead of replaying raw trajectories — app-agnostic design with Docker lifecycle management, DOM heuristics, and crash-detection fallbacks when the LLM is off.',
      'Single CLI (run_harness.py) with composable modes — full pipeline, planner-only, run-goals, multi-pass rollout, and report-only — default target is a buggy Memos Docker image, but the harness generalizes to any local web app.',
    ],
  },
  {
    name: 'Understanding Prime Env Skill',
    tagline:
      'Skill and installer that produce a rich, self-contained HTML report explaining any Prime Intellect verifiers environment.',
    github: 'https://github.com/Vidit-Ostwal/Understanding-prime-env',
    made: 'May 2026',
    liveLink: 'https://www.npmjs.com/package/understanding-prime-env',
    xPost: 'https://x.com/ViditOstwal/status/2058570288993042477',
    bullets: [
      'Walks the environment source and emits environment_overview.html—dataset and task samples, every reward/metric with weights and scoring range, rollout logic from prompt to final score, and a full config reference.',
      'Ships as an npm CLI (npx understanding-prime-env) with interactive setup plus flags for Claude Code, Cursor, Windsurf, GitHub Copilot, Zed, or all tools in one go.',
      'Meant to be used from inside a verifiers env folder so you can ask your assistant to “explain this environment” and get an overview styled to match the Prime Intellect platform.',
    ],
  },
  {
    name: 'Price Negotiation RL',
    tagline: 'RL environment where an LLM agent negotiates prices against an LLM-powered seller using real marketplace listings.',
    github: 'https://github.com/Vidit-Ostwal/price-negotiation-rl-OpenEnv',
    made: 'Mar 2026',
    liveLink: 'https://viditostwal-price-negotiation.hf.space/',
    xPost: 'https://x.com/ViditOstwal/status/2052078129263571069',
    bullets: [
      'Three difficulty levels (Easy / Medium / Hard) with varying zones of possible agreement — from a $480 ZOPA down to no ZOPA, testing walk-away discipline.',
      'Six-component reward system on a [−1, 1] scale: surplus capture, walk-away correctness, output compliance, closing speed, opening offer quality, and concession smoothness.',
      'Walk-away penalty weighted 5× — trains the agent to value discipline over forcing a bad deal.',
      'Pure Python arithmetic grader ensures reproducibility; stochastic LLM sampling on both sides creates diverse training signal across episodes.',
      'Deployable on Hugging Face Spaces, Docker, or locally via uv; ships with a browser playground showing real-time reward breakdowns.',
    ],
  },
  {
    name: 'Maze Bench',
    tagline: 'Ice-sliding multi-player maze environment on OpenEnv for benchmarking planning and coordination in RL agents.',
    github: 'https://github.com/Vidit-Ostwal/Maze-Bench-OpenEnv',
    made: 'Apr 2026',
    liveLink: 'https://viditostwal-maze-env.hf.space/web/',
    xPost: 'https://x.com/ViditOstwal/status/2052373348706091170',
    bullets: [
      'Ice-sliding mechanics — agents slide until hitting a wall or another player, requiring multi-step lookahead over reactive movement.',
      'Simultaneous multi-player movement; solved only when every player reaches an exit cell in the same phase.',
      'Reward shaping penalises repeated actions (−1), reversals, and revisited board states scaled by prior visit count.',
      'Standard OpenEnv reset()/step() API — compatible with any RL training loop without environment-specific wrappers.',
      'Includes dataset validation tooling and GIF rendering from recorded rollouts for debugging agent trajectories.',
    ],
  },
  {
    name: 'MakeMyDocsBot',
    tagline: 'CrewAI-powered bot that auto-syncs multilingual documentation across feature branches via a Git pre-push hook.',
    github: 'https://github.com/Vidit-Ostwal/MakeMyDocsBot',
    made: 'Oct 2025',
    xPost: 'https://x.com/ViditOstwal/status/1984629588887212078',
    bullets: [
      '2nd Runner-Up at the CrewAI Fall Agentic AI Challenge.',
      'Detects English documentation changes and auto-generates synchronised translations (Korean, Brazilian Portuguese) with no manual intervention.',
      'Runs as a Git pre-push hook — fires before any feature branch push, prompting the developer to sync docs before code lands.',
      'Agent-based architecture with specialised CrewAI agents for change detection, translation, and cross-branch synchronisation.',
      'Minimal setup: Python 3.12+, uv, and an OpenAI key — clone + uv sync + one hook registration.',
    ],
  },
  {
    name: 'RLM Demo',
    tagline: 'Full-stack interactive console for demonstrating and chatting with Reinforcement Learning models and agentic systems.',
    github: 'https://github.com/Vidit-Ostwal/RLM-demo',
    made: 'Jan 2026',
    liveLink: 'https://huggingface.co/spaces/ViditOstwal/RLM-Interactive-Console',
    xPost: 'https://x.com/ViditOstwal/status/2014769757434872304',
    bullets: [
      'Chat interface for real-time interaction with RL models, backed by smolagents for agent-based reasoning and step-by-step trace display.',
      'FastAPI backend (Python 3.12+) paired with a Next.js 15 / React 19 frontend — clean separation of model logic and UI.',
      'Integrates Hugging Face datasets directly; response caching via JSON files keeps repeated queries fast.',
      'Docker-first production deployment — single container exposes the full stack on port 7860, ready for Hugging Face Spaces.',
      'Environment-driven config (HF token, model name) makes swapping the underlying model a one-line change.',
    ],
  },
];
