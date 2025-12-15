import { internships, education } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

function TimelineItem({ icon, title, subtitle, date, description }: TimelineItemProps) {
  return (
    <div className="relative pl-12 pb-12">
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        {icon}
      </div>
      <div className="absolute left-4 top-8 h-full w-0.5 bg-border -translate-x-1/2" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-foreground/60">{date}</p>
      </div>
      <p className="mt-1 text-accent">{subtitle}</p>
      <p className="mt-2 text-foreground/80">{description}</p>
    </div>
  );
}


export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
            My Journey
          </h2>
          <p className="mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            A timeline of my internship and academic background.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-16">
          <div>
            <h3 className="mb-8 text-2xl font-semibold flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-accent"/>
              Internship
            </h3>
            <div className="relative">
              {internships.map((exp, index) => (
                <TimelineItem 
                  key={index}
                  icon={<Briefcase className="h-5 w-5" />}
                  title={exp.title}
                  subtitle={exp.company}
                  date={exp.date}
                  description={exp.description}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-8 text-2xl font-semibold flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent"/>
              Education
            </h3>
            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem 
                  key={index}
                  icon={<GraduationCap className="h-5 w-5" />}
                  title={edu.title}
                  subtitle={edu.institution}
                  date={edu.date}
                  description={edu.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
