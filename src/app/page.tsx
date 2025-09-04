import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Stats from "@/components/Stats";
import Goals from "@/components/goals";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Stats />
      <Goals />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></div>
    </main>
  );
}
