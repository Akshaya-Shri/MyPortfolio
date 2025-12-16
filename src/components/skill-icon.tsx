import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

const skillImageMap: { [key: string]: string } = {
  JavaScript: '/javascript.svg',
  TypeScript: '/typescript.svg',
  HTML5: '/html5.svg',
  CSS3: '/css3.svg',
  React: '/react.svg',
  'Next.js': '/next-js.svg',
  'Node.js': '/node-js.svg',
  'Tailwind CSS': '/tailwind-css.svg',
  Figma: '/figma.svg',
  Git: '/git.svg',
  GitHub: '/github.svg',
  Firebase: '/firebase.svg',
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className }: SkillIconProps) {
  const src = skillImageMap[name];

  if (!src) {
    // Fallback for skills without a specific icon
    return <span className={cn('text-sm font-bold', className)}>{name.slice(0, 3)}</span>;
  }

  return (
    <div className={cn('relative h-8 w-8', className)}>
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        className="object-contain"
        unoptimized // Allows using SVGs without width/height
      />
    </div>
  );
}
