import Carousel from "@/components/carousel-section/Carousel";
import Hero from "@/components/hero-section/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Carousel/>
    </div>
  );
}
