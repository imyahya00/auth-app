import { GoogleGenAI } from '@google/genai';
import config from '../config/environment.js';

const ai = new GoogleGenAI({ apiKey: config.secretKeys.geminiAPIKey });

export const extractMemoryMetadata = async (memory) => {
  const prompt = `
    Analyze the following memory. Extract:
    1. Type of life event (e.g., Achievement, Loss, Travel, Relationship etc)
    2. Title (summarize in a short phrase)
    3. Mood (happy, excited, sad, blessed etc.)

    Memory: "${memory}"
    Respond with only valid JSON: { "type": "", "title": "", "mood": "" }
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: prompt
  });

  let text = response.text;
  try {
    return JSON.parse(text);
  } catch {
    const cleaned = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleaned);
  }
};