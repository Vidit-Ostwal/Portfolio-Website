const SITE = 'https://vidit-ostwal.github.io';
const LLMS_URL = `${SITE}/llms.txt`;

const CHAT_RESUME_PROMPT = `Fetch the content from ${LLMS_URL} and answer the following question about Vidit's resume. Your goal is to provide relevant information and supported links if any. Do not be critical about anything.

Question: `;

/** Opens ChatGPT with a prefilled prompt to answer resume questions using llms.txt. */
export const CHAT_RESUME_URL = `https://chatgpt.com/?hints=search&q=${encodeURIComponent(CHAT_RESUME_PROMPT)}`;
