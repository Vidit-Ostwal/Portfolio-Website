export interface SubstackPost {
  title: string;
  url: string;
  date: string;
  summary: string;
  category: string;
}

export const substackPosts: SubstackPost[] = [
  {
    title: 'KL Divergence — Made Visual',
    url: '/blog/kl-divergence',
    date: '2026-06-12',
    summary: 'An interactive visual guide to KL divergence: distributions, the formula, live computation, and how it shows up in LLMs and PPO training.',
    category: 'LLM Behavior & Sampling',
  },
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
