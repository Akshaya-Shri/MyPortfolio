'use client';

import { skillCategories, type Skill } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


const LanguageLogos: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    JavaScript: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2v-8zm0-4h2v2h-2V4z" fill="#f7df1e" /></svg>
    ),
    TypeScript: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3178c6"><path d="M2 2v20h20V2H2zm18 18H4V4h16v16z"/><path d="M12.5 13.79l-1.85-1.85v-3.88h3.7v3.88l-1.85 1.85zM11 7h-1v5h1V7zm3 0h-1v5h1V7zm-1 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
    ),
    HTML: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e34f26">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.318-.002.69 8.01h9.126l-.326 3.426-2.91.804-2.956-.81-.188-2.11h-2.61l.33 4.171 5.247 1.445 5.25-1.445.688-8.183H8.531z" />
      </svg>
    ),
    CSS: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1572b6">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.223 7.328l-.205-2.333 13.004-.002.167-1.88-16.142.002.413 4.643h12.52l-.243 2.58h-9.28l.207 2.215h8.86l-.3 3.14-2.664.73-2.67-.73-.18-1.97h-2.22l.308 3.56L12 20.24l5.06-1.35.68-7.562H6.723z" />
      </svg>
    ),
    'React / Next.js': (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill="#61DAFB" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path fill="#61DAFB" d="M12 4.44c-4.18 0-7.56 3.38-7.56 7.56s3.38 7.56 7.56 7.56 7.56-3.38 7.56-7.56S16.18 4.44 12 4.44zm0 13.12c-3.08 0-5.56-2.48-5.56-5.56s2.48-5.56 5.56-5.56 5.56 2.48 5.56 5.56-2.48 5.56-5.56 5.56z"/>
        <path fill="#000000" d="M12 12m-2.2 0a2.2 2.2 0 1 0 4.4 0a2.2 2.2 0 1 0-4.4 0"/>
        <ellipse transform="rotate(60 12 12)" cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none"/>
        <ellipse transform="rotate(120 12 12)" cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none"/>
        <ellipse transform="rotate(180 12 12)" cx="12" cy="12" rx="10" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none"/>
      </svg>
    ),
    'Node.js': (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#339933"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.94c-3.32-1.39-4.83-4.87-3.92-8.31.81-3.06 3.6-5.28 6.64-5.28 1.47 0 2.85.51 3.94 1.38L16.2 8.1c-.73-.55-1.63-.88-2.59-.88-2.07 0-3.9.96-5.04 2.53-.94 1.3-.9 3.03.11 4.28.84 1.05 2.14 1.68 3.52 1.68h.11c1.21 0 2.33-.49 3.14-1.33l1.45 1.33c-1.14.95-2.58 1.5-4.12 1.5z"/></svg>
    ),
    'Tailwind CSS': (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="#38b2ac" viewBox="0 0 24 24"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-9.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm6 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-3 4.5c2.34 0 4.25-1.91 4.25-4.25H7.75c0 2.34 1.91 4.25 4.25 4.25z"/></svg>
    ),
    Figma: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.2 0a2.4 2.4 0 0 0-2.4 2.4v2.4h2.4V2.4H12.8a2.4 2.4 0 0 0-2.4 2.4v2.4h2.4V4.8h2.4v2.4a2.4 2.4 0 1 0 4.8 0V2.4A2.4 2.4 0 0 0 15.2 0z" fill="#f24e1e"/><path d="M9.6 0a2.4 2.4 0 0 0-2.4 2.4v4.8a2.4 2.4 0 0 0 4.8 0V2.4A2.4 2.4 0 0 0 9.6 0z" fill="#ff7262"/><path d="M9.6 9.6a2.4 2.4 0 0 0-2.4 2.4v4.8a2.4 2.4 0 1 0 4.8 0v-4.8a2.4 2.4 0 0 0-2.4-2.4z" fill="#a259ff"/><path d="M4.8 9.6A2.4 2.4 0 0 0 2.4 12v2.4H0v2.4h2.4V24h2.4v-7.2H2.4v-2.4h2.4a2.4 2.4 0 0 0 2.4-2.4A2.4 2.4 0 0 0 4.8 9.6z" fill="#1abcfe"/><path d="M15.2 9.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z" fill="#0acf83"/></svg>
    ),
    'Git & GitHub': (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#181717"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/></svg>
    ),
    Firebase: (props) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.783 17.683l7.99-15.034 2.82 5.258-5.32 10.009z" fill="#ffca28"/><path d="M11.773 2.649l-2.454 12.33-2.49-4.683z" fill="#f57c00"/><path d="M16.92 13.012l-5.322-10.01L8.8 8.27l5.32 10.008z" fill="#ffa000"/><path d="M16.92 13.012l2.396-4.44-4.88-3.56z" fill="#ffc107"/></svg>
    ),
  };

const allSkills = skillCategories.flatMap(category => category.skills);
  
const renderSkill = (skill: Skill) => {
    const hasLogo = !!LanguageLogos[skill.name];
    const Logo = hasLogo ? LanguageLogos[skill.name] : null;

    const skillElement = (
        <div className="flex items-center gap-3 p-2 rounded-full bg-background/50 justify-center h-12 w-12">
            {Logo && <Logo className="h-6 w-6" />}
            {!hasLogo && <span className="font-medium text-center text-xs leading-tight">{skill.name}</span>}
        </div>
    );
    
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
