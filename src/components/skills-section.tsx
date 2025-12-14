'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';

export default function SkillsSection() {
  const [progressValues, setProgressValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const timers = skills.map((skill, index) =>
      setTimeout(() => {
        setProgressValues((prev) => {
          const newValues = [...prev];
          newValues[index] = skill.level;
          return newValues;
        });
      }, 200 * (index + 1))
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="skills" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            A snapshot of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-foreground/80">{progressValues[index]}%</span>
              </div>
              <Progress value={progressValues[index]} className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-accent [&>div]:to-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
