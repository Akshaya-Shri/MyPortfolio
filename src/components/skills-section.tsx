'use client';

import { skillCategories, type Skill } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent } from '@/components/ui/card';

const allSkills = skillCategories.flatMap(category => category.skills);
  
const renderSkill = (skill: Skill) => {
    return (
      <Tooltip>
          <TooltipTrigger asChild>
              <Card className="flex h-24 w-24 cursor-pointer items-center justify-center p-2 transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-0">
                  <span className="text-center text-xs font-medium leading-tight">{skill.name}</span>
                </CardContent>
              </Card>
          </TooltipTrigger>
          <TooltipContent>
              <p>{skill.name}</p>
          </TooltipContent>
      </Tooltip>
  );
};


export default function SkillsSection() {

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
        <div className="mx-auto mt-12 max-w-4xl">
          <TooltipProvider>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
              {allSkills.map((skill) => (
                <div key={skill.name} className="flex justify-center">
                    {renderSkill(skill)}
                </div>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
