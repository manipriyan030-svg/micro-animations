'use client';
import { useEffect } from 'react';
import { useCustomizerStore } from '@/stores/customizer-store';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimationGrid from '@/components/grid/AnimationGrid';

export default function Home() {
  const selectAnimation = useCustomizerStore(s => s.selectAnimation);

  // Clear selection when on home page
  useEffect(() => {
    selectAnimation(null);
  }, [selectAnimation]);

  return (
    <div className="flex min-h-screen flex-col dot-grid-bg">
      <Header />
      <main className="flex-1">
        <AnimationGrid />
      </main>
      <Footer />
    </div>
  );
}
