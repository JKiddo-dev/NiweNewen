import { About } from "@/components/About";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import { Services } from "@/components/Services";
import { StatisticsSection } from "@/components/StatisticsSection";
import ScrollToTopButton from "@/components/ScrolltoTopButton";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact"; // Importa el componente Contact
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="statistics">
        <StatisticsSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <ScrollToTopButton />
    </>
  );
}
