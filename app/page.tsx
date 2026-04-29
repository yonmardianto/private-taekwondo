import Hero from "./components/Hero";
import Description from "./components/Description";
import Benefits from "./components/Benefits";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Description />
      <Benefits />
      <Classes />
      <Contact />
      <Footer />
    </main>
  );
}
