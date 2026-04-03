import { Metadata } from 'next';
import { animations } from '@/animations';
import AnimationClient from './AnimationClient';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const anim = animations.find(a => a.id === id);
  const name = anim ? anim.name : id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: name,
    description: `Customize and export the ${name} micro animation. Adjust color, size, speed, and download the code.`,
  };
}

export default async function AnimationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <AnimationClient id={id} />;
}
