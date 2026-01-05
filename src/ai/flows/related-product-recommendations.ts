'use server';

/**
 * @fileOverview Recommends related products based on a given product description.
 *
 * - getRelatedProducts - A function that takes a product description and returns a list of related products.
 * - RelatedProductsInput - The input type for the getRelatedProducts function.
 * - RelatedProductsOutput - The return type for the getRelatedProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RelatedProductsInputSchema = z.object({
  productDescription: z
    .string()
    .describe('The description of the product for which to find related products.'),
  productNames: z.array(z.string()).describe('List of available product names to choose from.'),
});
export type RelatedProductsInput = z.infer<typeof RelatedProductsInputSchema>;

const RelatedProductsOutputSchema = z.object({
  relatedProducts: z
    .array(z.string())
    .describe('A list of names of products related to the input product description.'),
});
export type RelatedProductsOutput = z.infer<typeof RelatedProductsOutputSchema>;

export async function getRelatedProducts(input: RelatedProductsInput): Promise<RelatedProductsOutput> {
  return relatedProductsFlow(input);
}

const relatedProductsPrompt = ai.definePrompt({
  name: 'relatedProductsPrompt',
  input: {schema: RelatedProductsInputSchema},
  output: {schema: RelatedProductsOutputSchema},
  prompt: `You are an expert e-commerce product recommendation system.
Given a product description and a list of available product names, you will return a list of product names that are related to the product described in the description.

Description: {{{productDescription}}}

Available Products: {{{productNames}}}

Related Products:`, 
});

const relatedProductsFlow = ai.defineFlow(
  {
    name: 'relatedProductsFlow',
    inputSchema: RelatedProductsInputSchema,
    outputSchema: RelatedProductsOutputSchema,
  },
  async input => {
    const {output} = await relatedProductsPrompt(input);
    return output!;
  }
);
