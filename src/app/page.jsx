"use client"
import HeroImage from '@/components/home/HeroImage'
import OurProducts from '@/components/home/OurProducts';

export default function Home() {

  return (
    <div className="w-full h-[100vh] box-border">
      <HeroImage/>
      <OurProducts />
    </div>
  );
}
