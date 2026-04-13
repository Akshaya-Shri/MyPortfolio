import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string;
  githubUrl: string;
  liveUrl: string;
  badge?: string;
};

export function ProjectCard({ title, description, techStack, githubUrl, liveUrl, badge }: ProjectCardProps) {
  const tech = techStack.split(',').map((t) => t.trim());
  const hasLiveUrl = liveUrl && liveUrl !== '#';
  const isFreelance = badge?.toLowerCase() === 'freelance';

  return (
    <Card className={`group relative flex h-full flex-col overflow-hidden rounded-3xl transition duration-500 ease-out ${isFreelance ? 'border border-primary/30 bg-gradient-to-br from-primary/10 via-card/80 to-secondary/15 shadow-2xl shadow-primary/20 ring-1 ring-primary/20 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_25px_60px_rgba(59,130,246,0.18)]' : 'border border-border/70 bg-card/80 shadow-xl shadow-primary/10 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/25'}`}>
      <div className={`pointer-events-none absolute inset-x-0 top-0 ${isFreelance ? 'h-2 from-accent to-primary' : 'h-1 from-primary to-secondary'} bg-gradient-to-r opacity-90 transition-all duration-500 group-hover:h-2`} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-70 mix-blend-screen" />
      <CardHeader className="relative z-10">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>
            {isFreelance ? (
              <span className="mt-2 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent shadow-sm shadow-accent/10">
                Featured freelance build
              </span>
            ) : null}
          </div>
          {badge ? (
            <Badge className={`animate-pulse ${isFreelance ? 'bg-destructive text-destructive-foreground' : ''}`} variant={isFreelance ? 'destructive' : 'default'}>
              {badge}
            </Badge>
          ) : null}
        </div>
        <CardDescription className="min-h-[5rem] text-foreground/85 transition-colors duration-300 group-hover:text-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 flex-grow">
        <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 p-4 shadow-inner shadow-primary/5 transition duration-500 group-hover:shadow-primary/10">
          <div className="flex flex-wrap gap-3">
            {tech.map((t) => (
              <Badge key={t} variant="secondary" className="transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="relative z-10 flex flex-col gap-3 bg-card/70 p-4 mt-auto border-t border-border/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-foreground/70 transition-colors duration-300 group-hover:text-foreground">
          Interactive demo and code links
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button asChild variant="ghost" size="icon">
            <Link href={githubUrl} target="_blank" aria-label={`GitHub for ${title}`}>
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          {hasLiveUrl ? (
            <Button asChild variant="secondary" size="sm">
              <Link href={liveUrl} target="_blank" aria-label={`View live site for ${title}`}>
                <span className="flex items-center gap-2">
                  Live <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
}
