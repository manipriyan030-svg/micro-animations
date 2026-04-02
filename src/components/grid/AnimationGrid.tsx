'use client';
import { useState } from 'react';
import { animations } from '@/animations';
import { CATEGORIES } from '@/lib/constants';
import AnimationCard from './AnimationCard';
import type { AnimationCategory } from '@/animations/types';

export default function AnimationGrid() {
  const [category, setCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filtered = animations
    .filter(a => category === 'all' || a.category === category as AnimationCategory)
    .filter(a => {
      if (!search) return true;
      const q = search.toLowerCase();
      return a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q) || a.category.includes(q) || a.trigger.includes(q);
    });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero */}
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Micro <span className="text-accent">Animations</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-muted max-w-xl mx-auto">
          Browse, customize, and export beautiful micro animations. No signup required.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 sm:mb-8 max-w-md mx-auto">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search animations..."
            className="w-full rounded-xl border border-border-subtle bg-surface pl-10 pr-4 py-2.5 text-sm outline-none placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={`rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium transition-all ${
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
      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted text-sm">No animations found for &ldquo;{search}&rdquo;</p>
          <button onClick={() => { setSearch(''); setCategory('all'); }} className="mt-2 text-accent text-sm hover:underline">
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map(anim => (
            <AnimationCard key={anim.id} animation={anim} />
          ))}
        </div>
      )}
    </div>
  );
}
