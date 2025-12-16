import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string;
  githubUrl: string;
  liveUrl: string;
};

export function ProjectCard({ title, description, techStack, githubUrl, liveUrl }: ProjectCardProps) {
  const tech = techStack.split(',').map(t => t.trim());

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="min-h-[4.5rem]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 bg-card/50 p-4 mt-auto">
        <Button asChild variant="ghost" size="icon">
          <Link href={githubUrl} target="_blank" aria-label={`GitHub for ${title}`}>
            <Github className="h-5 w-5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
