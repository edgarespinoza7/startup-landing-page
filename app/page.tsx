import Carousel from "@/components/carousel-section/Carousel";
import Footer from "@/components/footer/Footer";
import Cta from "@/components/cta/Cta";
import FourthSection from "@/components/fourth-section/FourthSection";
import Hero from "@/components/hero-section/Hero";
import Navbar from "@/components/navbar/Navbar";
import Pricing from "@/components/pricing-section/Pricing";
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
      <FourthSection/>
      <Pricing/>
      <Cta/>
      <Footer/>
    </div>
  );
}
