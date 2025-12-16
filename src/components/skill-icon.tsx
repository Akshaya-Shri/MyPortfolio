import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

const skillImageMap: { [key: string]: string } = {
  JavaScript: '/javascript.png',
  TypeScript: '/typescript.png',
  HTML5: '/html.png',
  CSS3: '/css.png',
  React: '/react.png',
  'Next.js': '/nextjs.png',
  'Node.js': '/nodejs.png',
  'Tailwind CSS': '/tailwind.png',
  Figma: '/figma.png',
  Git: '/git.png',
  GitHub: '/github.png',
  Firebase: '/firebase.png',
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className }: SkillIconProps) {
  const src = skillImageMap[name];

  if (!src) {
    // Fallback for skills without a specific icon
    return <span className={cn('text-sm font-bold', className)}>{name}</span>;
  }

  return (
    <div className={cn('relative h-12 w-12', className)}>
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes="48px"
        className="object-contain"
        unoptimized
      />
    </div>
  );
}
