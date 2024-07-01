import { About } from "@/components/About"
import Hero from "@/components/Hero"
import ProductsSection from "@/components/ProductsSection"
import { Services } from "@/components/Services"
import { StatisticsSection } from "@/components/StatisticsSection"


export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <StatisticsSection/>
      <ProductsSection/>
      <About/>
    </>
  )
}
