'use client';
import { useEffect } from 'react';
import { useCustomizerStore } from '@/stores/customizer-store';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimationGrid from '@/components/grid/AnimationGrid';
import CustomizerPanel from '@/components/customizer/CustomizerPanel';

export default function Home() {
  const selectedAnimationId = useCustomizerStore(s => s.selectedAnimationId);
  const selectAnimation = useCustomizerStore(s => s.selectAnimation);

  // Handle OAuth code from Webflow redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      // Exchange code for token
      fetch('/api/webflow/callback?' + new URLSearchParams({ code }))
        .then(res => res.text())
        .then(html => {
          // Extract token from response script
          const match = html.match(/token:\s*'([^']+)'/);
          if (match) {
            sessionStorage.setItem('webflow_token', match[1]);
            window.postMessage({ type: 'webflow_auth', token: match[1] }, '*');
          }
        })
        .catch(() => {});
      // Clean up URL
      const url = new URL(window.location.href);
      url.searchParams.delete('code');
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  // Sync URL search param with store
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('animation');
    if (id && !selectedAnimationId) {
      selectAnimation(id);
    }
  }, [selectedAnimationId, selectAnimation]);

  // Update URL when animation is selected/deselected
  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedAnimationId) {
      url.searchParams.set('animation', selectedAnimationId);
    } else {
      url.searchParams.delete('animation');
    }
    window.history.replaceState({}, '', url.toString());
  }, [selectedAnimationId]);

  return (
    <div className="flex min-h-screen flex-col dot-grid-bg">
      <Header />
      <main className="flex-1">
        {selectedAnimationId ? <CustomizerPanel /> : <AnimationGrid />}
      </main>
      <Footer />
    </div>
  );
}
