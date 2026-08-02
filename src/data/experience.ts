export interface Role {
  title: string;
  company: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export const experience: Role[] = [
  {
    title: 'Machine Learning — Generative AI',
    company: 'Piramal Capital & Housing Finance Limited · Full Time',
    period: 'Nov 2023 — July 2026',
    current: false,
    bullets: [
      'Designed and developed ARYA, an internal chatbot for the sales team using RAG and agentic systems — handled 500,000+ queries since launch and won Best AI Chatbot Product of the Year.',
      'Built Daily-Huddle, a WhatsApp-integrated chatbot for Branch Sales Managers, reducing daily huddle time by 30%.',
      'Designed CAM-Copilot, an underwriter assistant that summarises CIBIL reports, bank statements, and documents — cutting turnaround time by ~40%.',
      'Currently building an internal Text-to-SQL chatbot inspired by Uber\'s QueryGPT.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Piramal Capital & Housing Finance Limited · Full Time',
    period: 'Jul 2023 — Oct 2023',
    current: false,
    bullets: [
      'Orchestrated data pipelines for real-time feature delivery to ML models, improving model performance by 15%.',
      'Designed and deployed scalable microservices architecture, reducing feature serving latency by 20%.',
      'Used Python and Spark to optimise end-to-end feature store functionality for various ML workloads.',
    ],
  },
  {
    title: 'Junior Associate',
    company: 'Indus Insights · Internship',
    period: 'Jan 2023 — Jun 2023',
    current: false,
    bullets: [
      'Developed dynamic forecasting models using delinquency buckets and economic adjustments for seasonal and annual client planning.',
      'Led client meetings presenting findings on acquisition, response rates, and intent validation.',
      'Took initiative on ad-hoc analyses beyond core responsibilities, demonstrating adaptability.',
    ],
  },
  {
    title: 'University Leader',
    company: 'Community Classroom · Internship',
    period: 'Jul 2021 — Sep 2021',
    current: false,
    bullets: [
      'Founded and led a university community promoting accessible education for all.',
      'Conducted workshops to foster a programming culture on campus.',
    ],
  },
  {
    title: 'Project Leader — Machine Learning',
    company: 'Swecha · Internship',
    period: 'Jun 2021 — Jul 2021',
    current: false,
    bullets: [
      'Designed and implemented a fact-checking ML model, scraping news articles from reputable sources.',
      'Compared scraped articles against user-input news using textual entailment analysis to enhance accuracy.',
      'Developed skills in machine learning, data scraping, and NLP.',
    ],
  },
];
