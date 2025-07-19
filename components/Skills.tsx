import { technologies } from "@/data/technologies";
import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center w-full gap-16 border-b py-18"
    >
      <h2 className="text-center text-4xl font-bold">Skills & Technologies</h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {technologies.map((technology) => (
          <Image
            key={technology.name}
            width="50"
            height="50"
            src={technology.link}
            alt={technology.name}
            className="hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
