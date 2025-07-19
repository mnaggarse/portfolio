import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-full gap-8 text-center border-b pt-35 pb-20"
    >
      <h1 className="text-5xl font-[900] leading-12 text-slate-800">
        Mahmoud Elnaggar
      </h1>

      <h3 className="text-xl text-slate-600">Full Stack Developer</h3>

      <p className="max-w-[270px] md:max-w-[500px] text-slate-500">
        Crafting beautiful, functional, and user-centered digital experiences
        with modern technologies
      </p>

      <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
        <Button size="lg">View My Work</Button>
        <Button size="lg" variant="outline">
          Download My CV
        </Button>
      </div>
    </section>
  );
}
