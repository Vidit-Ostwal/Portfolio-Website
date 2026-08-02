export type EmploymentType = 'Full Time' | 'Part Time' | 'Contract' | 'Internship';

export interface Role {
  title: string;
  company: string;
  employmentType: EmploymentType;
  start: string;
  end: string;
  current: boolean;
  bullets: string[];
}

export const experience: Role[] = [
  {
    title: 'Teaching Assistant',
    company: 'Outskill',
    employmentType: 'Contract',
    start: 'Aug 2026',
    end: 'Aug 2026',
    current: false,
    bullets: [
      'TA consultant for E6 and E7 cohorts — helped design course content and ran breakout rooms, quizzes, and live sessions.',
      'Supported 320+ learners, resolving doubts in group settings and 1-on-1 sessions.',
      'Covered RAG, Hugging Face, agents, MCP, observability, and deployments.',
    ],
  },
  {
    title: 'Machine Learning — Generative AI',
    company: 'Piramal Capital & Housing Finance Limited',
    employmentType: 'Full Time',
    start: 'Nov 2023',
    end: 'July 2026',
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
    company: 'Piramal Capital & Housing Finance Limited',
    employmentType: 'Full Time',
    start: 'Jul 2023',
    end: 'Oct 2023',
    current: false,
    bullets: [
      'Orchestrated data pipelines for real-time feature delivery to ML models, improving model performance by 15%.',
      'Designed and deployed scalable microservices architecture, reducing feature serving latency by 20%.',
      'Used Python and Spark to optimise end-to-end feature store functionality for various ML workloads.',
    ],
  },
  {
    title: 'Junior Associate',
    company: 'Indus Insights',
    employmentType: 'Internship',
    start: 'Jan 2023',
    end: 'Jun 2023',
    current: false,
    bullets: [
      'Developed dynamic forecasting models using delinquency buckets and economic adjustments for seasonal and annual client planning.',
      'Led client meetings presenting findings on acquisition, response rates, and intent validation.',
      'Took initiative on ad-hoc analyses beyond core responsibilities, demonstrating adaptability.',
    ],
  },
  {
    title: 'University Leader',
    company: 'Community Classroom',
    employmentType: 'Internship',
    start: 'Jul 2021',
    end: 'Sep 2021',
    current: false,
    bullets: [
      'Founded and led a university community promoting accessible education for all.',
      'Conducted workshops to foster a programming culture on campus.',
    ],
  },
  {
    title: 'Project Leader — Machine Learning',
    company: 'Swecha',
    employmentType: 'Internship',
    start: 'Jun 2021',
    end: 'Jul 2021',
    current: false,
    bullets: [
      'Designed and implemented a fact-checking ML model, scraping news articles from reputable sources.',
      'Compared scraped articles against user-input news using textual entailment analysis to enhance accuracy.',
      'Developed skills in machine learning, data scraping, and NLP.',
    ],
  },
];
