import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

interface SkillIconProps {
  name: string;
  className?: string;
}

const skillImageMap: Record<string, string> = {
  javascript: '/logos/javascript.png',
  typescript: '/logos/typescript.png',
  html5: '/logos/html5.png',
  css: '/logos/css.png',
  react: '/logos/react.png',
  nextjs: '/logos/nextjs.png',
  nodejs: '/logos/nodejs.png',
  tailwind: '/logos/tailwind.png',
  figma: '/logos/figma.png',
  git: '/logos/git.png',
  github: '/logos/github.png',
  firebase: '/logos/firebase.png',
};

export function SkillIcon({ name, className }: SkillIconProps) {
  const key = name.toLowerCase().replace('.', '');
  const src = skillImageMap[key];

  if (!src) {
    return (
      <div className={cn('flex h-12 w-12 items-center justify-center', className)}>
        <span className="text-xs font-bold text-center">{name}</span>
      </div>
    );
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
