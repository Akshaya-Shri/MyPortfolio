import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className }: SkillIconProps) {
  // Construct the path dynamically.
  // Example: "Next.js" -> "/logos/next.js.png"
  // Example: "Tailwind CSS" -> "/logos/tailwind-css.png"
  const src = `/logos/${name.toLowerCase().replace(/\./g, '').replace(/\s/g, '-')}.png`;

  return (
    <div className={cn('relative h-12 w-12', className)}>
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes="48px"
        className="object-contain"
        unoptimized
        // The `onError` prop will fall back to text if an image fails to load.
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none'; // Hide the broken image
          const textFallback = document.createElement('span');
          textFallback.textContent = name;
          textFallback.className = 'text-sm font-bold';
          target.parentElement?.appendChild(textFallback);
        }}
      />
    </div>
  );
}
