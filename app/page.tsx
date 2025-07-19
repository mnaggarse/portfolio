import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full px-6 max-w-5xl mx-auto">
      <Hero />
      <About />
    </main>
  );
}
