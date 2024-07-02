import { About } from "@/components/About"
import Hero from "@/components/Hero"
import ProductsSection from "@/components/ProductsSection"
import { Services } from "@/components/Services"
import { StatisticsSection } from "@/components/StatisticsSection"


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
    </>
  );
}
