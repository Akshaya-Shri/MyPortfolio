'use client';

import { skillCategories, type Skill } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

const LanguageLogos: Record<string, string> = {
    JavaScript: '/javascript.png',
    TypeScript: '/typescript.png',
    HTML: '/html.png',
    CSS: '/css.png',
    'React / Next.js': '/nextjs.png',
    'Node.js': '/nodejs.png',
    'Tailwind CSS': '/tailwind.png',
    Figma: '/figma.png',
    'Git & GitHub': '/github.png',
    Firebase: '/firebase.png',
  };

const allSkills = skillCategories.flatMap(category => category.skills);
  
const renderSkill = (skill: Skill) => {
    const logoPath = LanguageLogos[skill.name];
    let skillElement;

    if (logoPath) {
        skillElement = (
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background/50 p-2">
                <Image src={logoPath} alt={skill.name} width={48} height={48} className="object-contain" />
            </div>
        );
    } else {
        skillElement = (
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background/50 p-2">
                <span className="font-medium text-center text-xs leading-tight">{skill.name}</span>
            </div>
        );
    }
    
    return (
      <Tooltip>
          <TooltipTrigger asChild>
              {skillElement}
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
        <div className="mx-auto mt-12 grid max-w-4xl gap-12">
          <TooltipProvider>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
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
