import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Stats from "@/components/Stats";
import Goals from "@/components/goals";
import About from "@/components/about";
import OpenAcc from "@/components/OpenAcc";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Stats />
      <Goals />
      <About />
      <OpenAcc />
      <Footer />
    </main>
  );
}
