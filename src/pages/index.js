import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Slider } from "@/components/carousel";
import Rasa from "@/components/grid";
import { ProductPage } from "@/components/product";
import { BuyPage } from "@/components/buy";

export default function Home() {
  return (
      <>
      <Navbar/>
      <Hero/>
      <Slider/>
      <Rasa/>
      <ProductPage/>
      <BuyPage/>
      <Footer/>
      </>
  )
}
