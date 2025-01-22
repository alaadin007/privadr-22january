import OpenAI from 'openai';

// Only initialize OpenAI if API key is available
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export { openai };