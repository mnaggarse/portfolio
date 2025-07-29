import { projects } from "@/data/projects";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full gap-16 border-b py-18"
    >
      <h2 className="text-center text-4xl font-bold">My Projects</h2>
      {/* <div className="flex justify-center items-center gap-8 flex-wrap"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
