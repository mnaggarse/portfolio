import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects" className="scroll-m-24 mb-24">
      <h1 className="text-4xl md:text-6xl font-semibold mb-6">
        {t("projects-title")}
      </h1>

      <div className="pt-8 space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={t(`project-${project.id}-title`)}
            description={t(`project-${project.id}-description`)}
            image={project.image}
            link={project.link}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}
