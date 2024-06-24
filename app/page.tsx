import Carousel from "@/components/carousel-section/Carousel";
import Hero from "@/components/hero-section/Hero";
import Navbar from "@/components/navbar/Navbar";
import SecondSection from "@/components/second-section/second-section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Carousel/>
      <SecondSection/>
    </div>
  );
}
