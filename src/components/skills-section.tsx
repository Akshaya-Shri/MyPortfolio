'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { skillCategories } from '@/lib/data';

export default function SkillsSection() {
  const [progressValues, setProgressValues] = useState(
    skillCategories.flatMap(category => category.skills.map(() => 0))
  );

  useEffect(() => {
    const allSkills = skillCategories.flatMap(category => category.skills);
    const timers = allSkills.map((skill, index) =>
      setTimeout(() => {
        setProgressValues((prev) => {
          const newValues = [...prev];
          newValues[index] = skill.level;
          return newValues;
        });
      }, 150 * (index + 1)) // Stagger the animation
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  let skillIndex = -1;

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
        <div className="mx-auto mt-12 grid max-w-4xl gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-6 text-accent">{category.title}</h3>
              <div className="grid gap-8">
                {category.skills.map((skill) => {
                  skillIndex++;
                  const currentIndex = skillIndex;
                  return (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground/80">{progressValues[currentIndex]}%</span>
                      </div>
                      <Progress value={progressValues[currentIndex]} className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-accent [&>div]:to-primary" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
