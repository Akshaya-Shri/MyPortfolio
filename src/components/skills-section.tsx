'use client';

import { skillCategories, type Skill } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


const LanguageLogos: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    JavaScript: (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.001 0C5.373 0 0 5.373 0 12s5.373 12 12.001 12C18.628 24 24 18.627 24 12S18.628 0 12.001 0z" fill="#f7df1e"/><path d="M8.225 18.281h1.565c.782 0 1.282-.218 1.637-.655.354-.436.531-1.047.531-1.832 0-.82-.19-1.485-.571-1.995-.38-.51-.933-.765-1.656-.765h-.5v2.852H8.225v-4.519h.828c.553 0 1.01.129 1.369.386.36.258.63.63.812 1.116.183.486.274 1.02.274 1.598 0 .613-.105 1.182-.314 1.706-.21.524-.515.939-.915 1.246-.4.307-.872.46-1.415.46h-1.6zM13.79 13.754h1.033c.535 0 .973.134 1.315.403.342.268.583.633.722 1.094.139.46.209.95.209 1.467 0 .553-.086 1.06-.258 1.521-.171.46-.423.832-.756 1.116-.333.284-.738.426-1.215.426h-1.05v-5.027zm.923.89v3.247h.128c.365 0 .668-.09.907-.27.24-.18.423-.44.55-.78.125-.338.188-.72.188-1.144 0-.44-.06-.82-.18-1.139-.12-.32-.301-.568-.544-.743-.243-.175-.526-.263-.85-.263h-.15z"/></svg>
    ),
    TypeScript: (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.001 0C5.373 0 0 5.373 0 12s5.373 12 12.001 12C18.628 24 24 18.627 24 12S18.628 0 12.001 0z" fill="#3178c6"/><path d="M11.758 17.514h4.482v-1.43H13.204v-4.145h2.812v-1.43H13.204V6.84h3.036V5.41H11.758v12.104zm-3.415-3.327c.228.324.5.58.814.767.315.188.65.282.997.282.528 0 .95-.145 1.264-.434.315-.29.472-.68.472-1.173 0-.36-.062-.656-.188-.888-.125-.232-.307-.43-.547-.594a1.82 1.82 0 0 0-.78-.342l-.767-.187c-.292-.07-.53-.164-.71-.282-.18-.117-.32-.262-.417-.434-.1-.172-.148-.37-.148-.593 0-.395.12-.728.36-.997.24-.27.555-.404.945-.404.305 0 .584.06.837.179.253.12.48.29.678.51l.998-1.043c-.31-.383-.674-.69-1.09-.92-.418-.23-.87-.345-1.357-.345-.51 0-.934.13-1.27.39-.334.26-.5.606-.5 1.04 0 .32.06.59.18.81.12.22.29.4.51.54.22.14.47.25.75.33l.73.18c.32.07.58.17.78.3.2.13.36.29.47.48.11.19.17.43.17.72 0 .47-.13.86-.4 1.16-.27.3-.63.45-1.08.45-.37 0-.7-.08-1-.23-.29-.15-.55-.36-.77-.63l-1.04 1.08z" fill="#fff"/></svg>
    ),
    HTML: (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.318-.002.69 8.01h9.126l-.326 3.426-2.91.804-2.956-.81-.188-2.11h-2.61l.33 4.171 5.247 1.445 5.25-1.445.688-8.183H8.531z" fill="#e34f26"/></svg>
    ),
    CSS: (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.223 7.328l-.205-2.333 13.004-.002.167-1.88-16.142.002.413 4.643h12.52l-.243 2.58h-9.28l.207 2.215h8.86l-.3 3.14-2.664.73-2.67-.73-.18-1.97h-2.22l.308 3.56L12 20.24l5.06-1.35.68-7.562H6.723z" fill="#1572b6"/></svg>
    ),
    'React / Next.js': (props) => (
       <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M12 0A12 12 0 1024 12 12 12 0 0012 0zm-1.08 4.2h2.16v10.5h-2.16zm-3.37 0h2.16v2.1h-2.16zm7.5 10.5V6.3h2.16v8.4z"/></svg>
    ),
    'Node.js': (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.833 0C5.305 0 0 5.295 0 11.828c0 6.533 5.305 11.828 11.833 11.828 6.528 0 11.833-5.295 11.833-11.828C23.666 5.295 18.36 0 11.833 0zm5.928 18.257c-.244.54-.74.9-1.343.9-.763 0-1.366-.54-1.366-1.537v-4.04H9.68v4.32c0 .998-.56 1.817-1.343 1.817-.783 0-1.322-.818-1.322-1.817V9.733c0-.976.56-1.752 1.322-1.752.762 0 1.342.776 1.342 1.752v3.74h3.368V9.524c0-.977.56-1.774 1.343-1.774.782 0 1.366.797 1.366 1.774v7.21c0 .762.06 1.284.15 1.523z" fill="#339933"/></svg>
    ),
    'Tailwind CSS': (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12.001 12C18.628 24 24 18.628 24 12c0-6.627-5.372-12-11.999-12zm5.93 9.07a1.446 1.446 0 0 1-1.026.438 1.446 1.446 0 0 1-1.026-.438 1.444 1.444 0 0 1-.438-1.026 1.444 1.444 0 0 1 .438-1.026 1.446 1.446 0 0 1 1.026-.438 1.446 1.446 0 0 1 1.026.438 1.444 1.444 0 0 1 .438 1.026 1.444 1.444 0 0 1-.438 1.026zm-8.086 0a1.446 1.446 0 0 1-1.026.438 1.446 1.446 0 0 1-1.026-.438 1.444 1.444 0 0 1-.438-1.026 1.444 1.444 0 0 1 .438-1.026 1.446 1.446 0 0 1 1.026-.438c.39 0 .74.146 1.026.438a1.444 1.444 0 0 1 .438 1.026 1.444 1.444 0 0 1-.438 1.026zm4.043 5.467c-2.34 0-4.24-1.89-4.24-4.22h8.48c0 2.33-1.9 4.22-4.24 4.22z" fill="#38b2ac"/></svg>
    ),
    Figma: (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M7.8,0H16.2C19.836,0,24,3.164,24,7.8v8.4c0,3.636-3.164,7.8-7.8,7.8H7.8C3.164,24,0,20.836,0,16.2V7.8C0,3.164,3.164,0,7.8,0Z" fill="#2c2c2c"/><path d="M12,24C15.936,24,18,20.836,18,18V6C18,3.164,15.936,0,12,0" fill="#0acf83"/><path d="M6,12C6,14.836,8.064,18,12,18V6C8.064,6,6,8.164,6,12Z" fill="#a259ff"/><path d="M6,12C6,8.164,8.064,6,12,6H18V18C18,14.836,15.936,12,12,12H6Z" fill="#f24e1e"/><path d="M12,0C8.064,0,6,3.164,6,6V12h12V6C18,3.164,15.936,0,12,0Z" fill="#ff7262"/><path d="M12,12a6,6,0,1,1,6,6,6,6,0,0,1-6-6Z" fill="#1abcfe"/></svg>
    ),
    'Git & GitHub': (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    ),
    Firebase: (props) => (
      <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firebase</title><path d="m3.682 17.15 7.854-14.68 2.79 5.166-5.22 9.726zM11.536 2.47l-2.406 11.987-2.44-4.52zM16.8 12.825 11.576 2.924 8.785 8.09l5.22 9.725zM16.8 12.825l2.36-4.37-4.8-3.5" fill="#f57c00"/></svg>
    ),
  };

const allSkills = skillCategories.flatMap(category => category.skills);
  
const renderSkill = (skill: Skill) => {
    const hasLogo = !!LanguageLogos[skill.name];
    const Logo = hasLogo ? LanguageLogos[skill.name] : null;

    const skillElement = (
        <div className="flex items-center gap-3 p-2 rounded-full bg-background/50 justify-center h-16 w-16">
            {Logo && <Logo className="h-8 w-8" />}
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
