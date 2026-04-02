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

      {/* Divider */}
      <div className="mt-16 sm:mt-24 flex items-center gap-4 max-w-4xl mx-auto">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border bg-card-bg animate-[spin_8s_linear_infinite]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-card-border to-transparent" />
      </div>

      {/* Content Section */}
      <section className="mt-12 sm:mt-16 max-w-4xl mx-auto space-y-16">
        {/* What are Micro Animations */}
        <div className="relative group">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative rounded-2xl border border-card-border bg-card-bg p-6 sm:p-10">
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                  What are Micro <span className="text-accent">Animations</span>?
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  Micro animations are small, subtle motion effects applied to UI elements like buttons, icons, toggles, and loaders. Unlike full page transitions or complex motion graphics, micro animations focus on tiny, purposeful movements. A hamburger menu morphing into a close icon, a heart icon pulsing on click, or a spinner indicating loading state. They are lightweight, typically built with CSS or SVG, and add personality and responsiveness to any interface without slowing it down.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Micro Animations Matter */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Why Micro <span className="text-accent">Animations</span> Matter
            </h2>
            <p className="mt-2 text-sm text-muted">Four reasons to add motion to your interfaces</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
                title: 'Visual Feedback',
                desc: 'They instantly communicate that an action has been registered. A button press, a toggle switch, or a form submission. This reduces user uncertainty.',
                delay: '0ms',
              },
              {
                icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
                title: 'Better UX',
                desc: 'Motion guides attention, smooths transitions, and makes interfaces feel alive. Users perceive animated UIs as faster and more polished.',
                delay: '100ms',
              },
              {
                icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
                title: 'Lightweight',
                desc: 'Built with pure CSS and SVG, micro animations add zero dependencies and minimal file size. Perfect for performance conscious projects.',
                delay: '200ms',
              },
              {
                icon: <><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></>,
                title: 'Brand Polish',
                desc: 'Small details separate good design from great design. Micro animations add a layer of craft that makes your product feel premium and intentional.',
                delay: '300ms',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-card-border bg-card-bg p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
                style={{ animationDelay: item.delay }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/10 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                </div>
                <h3 className="text-sm sm:text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
