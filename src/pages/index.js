import { Auth } from "./components/authentication";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Signup, Singin } from "./components/signin";

export default function Home() {
  return (
      <>
      <Header/>
      <Hero/>
      <Footer/>
      </>
  )
}
