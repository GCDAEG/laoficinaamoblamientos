import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Ir al contenido</a>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Introduction />
      </main>
      <Footer />
    </>
  );
}
