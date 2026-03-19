'use server';
/**
 * @fileOverview An AI-powered chatbot that provides instant, personalized answers to frequently asked questions about academic programs, campus life, admissions, and faculty based on available site content.
 *
 * - aiCampusGuideChatbot - A function that handles the chatbot interaction.
 * - AiCampusGuideChatbotInput - The input type for the aiCampusGuideChatbot function.
 * - AiCampusGuideChatbotOutput - The return type for the aiCampusGuideChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the chatbot.
const AiCampusGuideChatbotInputSchema = z
  .string()
  .describe('The user\'s question about academic programs, campus life, admissions, or faculty.');
export type AiCampusGuideChatbotInput = z.infer<typeof AiCampusGuideChatbotInputSchema>;

// Define the output schema for the chatbot.
const AiCampusGuideChatbotOutputSchema = z
  .string()
  .describe('The chatbot\'s instant and accurate answer to the user\'s question.');
export type AiCampusGuideChatbotOutput = z.infer<typeof AiCampusGuideChatbotOutputSchema>;

// Define the prompt for the chatbot.
const aiCampusGuideChatbotPrompt = ai.definePrompt({
  name: 'aiCampusGuideChatbotPrompt',
  input: { schema: AiCampusGuideChatbotInputSchema },
  output: { schema: AiCampusGuideChatbotOutputSchema },
  prompt: `You are Academia Horizon, an AI-powered campus guide chatbot for a university. Your purpose is to provide instant, personalized answers to frequently asked questions about academic programs, campus life, admissions, and faculty.

Answer the following user question concisely and accurately based on general university information. If you don't know the answer or the question is outside your scope, politely state that you cannot provide that information and suggest contacting the university's admissions office or relevant department.

User Question: {{{this}}}`
});

// Define the Genkit flow for the chatbot.
const aiCampusGuideChatbotFlow = ai.defineFlow(
  {
    name: 'aiCampusGuideChatbotFlow',
    inputSchema: AiCampusGuideChatbotInputSchema,
    outputSchema: AiCampusGuideChatbotOutputSchema,
  },
  async (question) => {
    const {output} = await aiCampusGuideChatbotPrompt(question);
    if (!output) {
      throw new Error('Chatbot failed to generate a response.');
    }
    return output;
  }
);

// Export the wrapper function.
export async function aiCampusGuideChatbot(
  input: AiCampusGuideChatbotInput
): Promise<AiCampusGuideChatbotOutput> {
  return aiCampusGuideChatbotFlow(input);
}
