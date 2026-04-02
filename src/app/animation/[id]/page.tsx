'use client';
import { useEffect, use } from 'react';
import { useCustomizerStore } from '@/stores/customizer-store';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomizerPanel from '@/components/customizer/CustomizerPanel';

export default function AnimationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const selectAnimation = useCustomizerStore(s => s.selectAnimation);
  const selectedAnimationId = useCustomizerStore(s => s.selectedAnimationId);

  useEffect(() => {
    if (id && selectedAnimationId !== id) {
      selectAnimation(id);
    }
  }, [id, selectedAnimationId, selectAnimation]);

  return (
    <div className="flex min-h-screen flex-col dot-grid-bg">
      <Header />
      <main className="flex-1">
        <CustomizerPanel />
      </main>
      <Footer />
    </div>
  );
}
