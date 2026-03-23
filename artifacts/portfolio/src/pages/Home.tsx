import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Works } from "@/components/sections/Works";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
