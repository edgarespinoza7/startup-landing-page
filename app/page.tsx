import Carousel from "@/components/carousel-section/Carousel";
import Hero from "@/components/hero-section/Hero";
import Navbar from "@/components/navbar/Navbar";
import SecondSection from "@/components/second-section/second-section";
import ThirdSection from "@/components/third-section/ThirdSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Carousel/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}
