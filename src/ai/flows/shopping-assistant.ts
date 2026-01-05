'use server';

/**
 * @fileOverview A shopping assistant that recommends products based on a user query.
 *
 * - shoppingAssistant - A function that takes a user query and returns product recommendations.
 * - ShoppingAssistantInput - The input type for the shoppingAssistant function.
 * - ShoppingAssistantOutput - The return type for the shoppingAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { getAllProducts } from '@/lib/data';

const ProductInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

const ShoppingAssistantInputSchema = z.object({
  query: z.string().describe('The user\'s request for a product recommendation.'),
});
export type ShoppingAssistantInput = z.infer<typeof ShoppingAssistantInputSchema>;

const ShoppingAssistantOutputSchema = z.object({
  response: z.string().describe('A conversational response to the user.'),
  recommendedProducts: z
    .array(
      z.object({
        id: z.string().describe('The ID of the recommended product.'),
        name: z.string().describe('The name of the recommended product.'),
      })
    )
    .describe('A list of recommended product names and their IDs.'),
});
export type ShoppingAssistantOutput = z.infer<typeof ShoppingAssistantOutputSchema>;

const findProductsTool = ai.defineTool(
    {
      name: 'findProducts',
      description: 'Search for products available in the store based on a user query.',
      inputSchema: z.object({
        query: z.string().describe('A query describing the product to search for, including features, brand, or type.'),
      }),
      outputSchema: z.array(ProductInfoSchema),
    },
    async (input) => {
      console.log(`Searching for products with query: ${input.query}`);
      const allProducts = getAllProducts();
      
      // A more sophisticated search could use embeddings or a search index.
      // For now, we'll do a simple case-insensitive text search on name and description.
      const lowercasedQuery = input.query.toLowerCase();
      const filteredProducts = allProducts.filter(p => 
        p.name.toLowerCase().includes(lowercasedQuery) || 
        p.description.toLowerCase().includes(lowercasedQuery)
      );

      return filteredProducts.map(p => ({ id: p.id, name: p.name, description: p.description }));
    }
  );

export async function shoppingAssistant(input: ShoppingAssistantInput): Promise<ShoppingAssistantOutput> {
  return shoppingAssistantFlow(input);
}

const shoppingAssistantPrompt = ai.definePrompt({
  name: 'shoppingAssistantPrompt',
  input: { schema: ShoppingAssistantInputSchema },
  output: { schema: ShoppingAssistantOutputSchema },
  tools: [findProductsTool],
  prompt: `You are a friendly and expert e-commerce shopping assistant for 'konukooo'.
Your goal is to help users find the perfect product based on their needs and answer any questions they have about the website or its products.

- First, understand the user's query. Is it a question about a product, a request for a recommendation, or a general question about the store (e.g., "Do you have free shipping?")?
- If the user is looking for a product, use the findProductsTool to get a list of available products that match their request.
- If the user's query is vague (e.g., "I need a gift"), ask clarifying questions to narrow down the options (e.g., "Who is the gift for?", "What's your budget?").
- If you find relevant products, provide a helpful, conversational response summarizing why they are a good fit. Include the product names and their IDs in the output.
- If no relevant products are found after searching, inform the user in a friendly way and maybe suggest a broader search.
- For general questions about the website, shipping, returns, etc., provide a helpful and accurate answer. Assume standard e-commerce policies like free shipping on orders over 500, and a 30-day return policy.
- Be polite, enthusiastic, and conversational.

User query: {{{query}}}
`,
});

const shoppingAssistantFlow = ai.defineFlow(
  {
    name: 'shoppingAssistantFlow',
    inputSchema: ShoppingAssistantInputSchema,
    outputSchema: ShoppingAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await shoppingAssistantPrompt(input);
    return output!;
  }
);
