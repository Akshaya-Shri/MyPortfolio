import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const strengths = [
  'Quick Learner',
  'UI/UX Design Principles',
  'Performance focused',
  'Problem Solving',
  'Team Collaboration',
];

export default function AboutMeSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/profile.jpg"
              alt="Akshaya Shri"
              width={400}
              height={400}
              className="mx-auto aspect-square rounded-full object-cover shadow-lg glow"
            />
          </div>
          <div className="flex flex-col justify-center lg:col-span-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">About Me</h2>
            <p className="mt-4 text-foreground/80">
              Full-Stack Developer with a passion for designing intuitive user experiences and developing scalable web and mobile applications. Experienced in modern frameworks and tools, with a current focus on Firebase-powered app development. Dedicated to continuous learning and delivering high-quality, efficient digital solutions.
            </p>
            <p className="mt-4 text-foreground/80">
              When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and hiking in the great outdoors.
            </p>
            <Card className="mt-8 bg-card/50">
              <CardHeader>
                <CardTitle>Key Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {strengths.map((strength) => (
                    <li key={strength} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
