'use client';

import { skillCategories, type Skill } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


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
  
const renderSkill = (skill: Skill) => {
    const hasLogo = !!LanguageLogos[skill.name];
    const Logo = hasLogo ? LanguageLogos[skill.name] : null;

    const skillElement = (
        <div className="flex items-center gap-3 p-2 rounded-md bg-background/50 justify-center h-12 w-full">
            {Logo && <Logo className="h-6 w-6" />}
            {!hasLogo && <span className="font-medium text-center">{skill.name}</span>}
            {skill.name.includes('/') && !hasLogo ? <span className="font-medium">{skill.name}</span> : null}
        </div>
    );

    if (hasLogo) {
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
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-semibold mb-6 text-accent">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                        {renderSkill(skill)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
