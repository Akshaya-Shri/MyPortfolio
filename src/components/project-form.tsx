'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateDescriptionAction } from '@/actions/generate-description-action';
import { Wand2 } from 'lucide-react';

const projectSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters.'),
  techStack: z.string().min(3, 'Tech stack is required.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  githubUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  liveUrl: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  onProjectAdd: (project: ProjectFormValues) => void;
  setOpen: (open: boolean) => void;
}

function GenerateButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="outline" disabled={pending}>
      <Wand2 className="mr-2 h-4 w-4" />
      {pending ? 'Generating...' : 'Generate with AI'}
    </Button>
  );
}

export function ProjectForm({ onProjectAdd, setOpen }: ProjectFormProps) {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      techStack: '',
      description: '',
      githubUrl: '',
      liveUrl: '',
    },
  });

  const { toast } = useToast();
  const [generateState, generateAction] = useFormState(generateDescriptionAction, { success: false });

  useEffect(() => {
    if (generateState.success && generateState.description) {
      form.setValue('description', generateState.description);
      toast({ title: 'Description Generated!' });
    }
    if (!generateState.success && generateState.error) {
      toast({ title: 'Error', description: generateState.error, variant: 'destructive' });
    }
  }, [generateState, form, toast]);

  const onSubmit = (values: ProjectFormValues) => {
    onProjectAdd(values);
    setOpen(false);
    toast({ title: 'Project Added!', description: `${values.title} has been added to your portfolio.` });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="My Awesome App" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="techStack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tech Stack</FormLabel>
              <FormControl>
                <Textarea placeholder="Next.js, React, Tailwind CSS, Firebase, Genkit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Description</FormLabel>
                <form action={generateAction}>
                    <input type="hidden" name="title" value={form.watch('title')} />
                    <input type="hidden" name="techStack" value={form.watch('techStack')} />
                    <GenerateButton />
                </form>
              </div>
              <FormControl>
                <Textarea placeholder="A brief, engaging description of your project." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub URL</FormLabel>
              <FormControl>
                <Input placeholder="https://github.com/user/repo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="liveUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Live Demo URL</FormLabel>
              <FormControl>
                <Input placeholder="https://myapp.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">Add Project</Button>
        </div>
      </form>
    </Form>
  );
}
