'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { skillCategories, type Skill } from '@/lib/data';

const LanguageLogos: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    JavaScript: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 24C10.15 24 9 22.85 9 21s1.15-3 2.99-3 3.01 1.15 3.01 3-1.16 3-3.01 3zm-7-24h14v14h-14V0zM12 4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
    ),
    TypeScript: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21.99 9.02l-1.01-1.01L12 16.99 3.01 8.01 2 9.02l10 10 9.99-10zM12 3L2 9.02l10 10 10-10L12 3zm0 2.31L18.99 9 12 15.69 5.01 9 12 5.31z"/>
      </svg>
    ),
    'HTML/CSS': (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
  };
  

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

  const renderSkillName = (skill: Skill) => {
    if (LanguageLogos[skill.name]) {
      const Logo = LanguageLogos[skill.name];
      return <Logo className="h-6 w-6" />;
    }
    return <span className="font-medium">{skill.name}</span>;
  }

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
                      <div className="flex items-center justify-between">
                        {renderSkillName(skill)}
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