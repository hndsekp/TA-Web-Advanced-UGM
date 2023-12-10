import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FlavorList } from "@/components/grid";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export default function Home() {
  return (
      <>
      <Navbar/>
      <Hero/>
      <FlavorList/>
      <About/>
      <Footer/>
      </>
  )
}
