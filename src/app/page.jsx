"use client"
import HeroImage from '@/components/home/HeroImage'
import OurProducts from '@/components/home/OurProducts';

export default function Home() {

  console.log(window.screen.height)
  console.log(window.screen.width)

  return (
    <div className="w-full h-[100vh] box-border">
      <HeroImage/>
      <OurProducts />
    </div>
  );
}
