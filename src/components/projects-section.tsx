'use client';

import { useState } from 'react';
import { initialProjects } from '@/lib/data';
import { ProjectCard } from './project-card';

export default function ProjectsSection() {
  const [projects, setProjects] = useState(initialProjects);

  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
            My Projects
          </h2>
          <p className="mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
