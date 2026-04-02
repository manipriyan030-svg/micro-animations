'use client';
import { useState } from 'react';
import { animations } from '@/animations';
import { CATEGORIES } from '@/lib/constants';
import AnimationCard from './AnimationCard';
import type { AnimationCategory } from '@/animations/types';

export default function AnimationGrid() {
  const [category, setCategory] = useState<string>('all');

  const filtered = category === 'all'
    ? animations
    : animations.filter(a => a.category === category as AnimationCategory);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Micro <span className="text-accent">Animations</span>
        </h1>
        <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
          Browse, customize, and export beautiful micro animations. No signup required.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              category === cat.id
                ? 'bg-accent text-white shadow-md shadow-accent/20'
                : 'bg-surface-2 text-muted hover:bg-card-hover hover:text-foreground'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filtered.map(anim => (
          <AnimationCard key={anim.id} animation={anim} />
        ))}
      </div>
    </div>
  );
}
