import { Button } from '@/components/ui/button';
import AnimatedBackground from './animated-background';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline">
          Akshaya Shri
        </h1>
        <p className="mt-4 text-lg text-primary sm:text-xl md:text-2xl">
          AI-Powered App Engineer
        </p>
        <p className="mx-auto mt-6 max-w-[700px] text-foreground/80 md:text-xl">
          A passionate Full-Stack Developer who loves crafting intuitive user experiences and building scalable web & mobile applications. Always exploring new technologies — currently focused on Firebase-powered app development
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
