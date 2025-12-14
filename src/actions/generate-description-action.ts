'use server';

import { generateProjectDescription } from '@/ai/flows/generate-project-description';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(1, 'Title is required.'),
  techStack: z.string().min(1, 'Tech stack is required.'),
});

type State = {
  success: boolean;
  description?: string;
  error?: string;
};

export async function generateDescriptionAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    title: formData.get('title'),
    techStack: formData.get('techStack'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors.title?.[0] || validatedFields.error.flatten().fieldErrors.techStack?.[0]
    };
  }

  try {
    const { description } = await generateProjectDescription(validatedFields.data);
    return { success: true, description };
  } catch (e) {
    return { success: false, error: 'Failed to generate description. Please try again.' };
  }
}
