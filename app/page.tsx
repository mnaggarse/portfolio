import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full px-6 max-w-5xl mx-auto">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
