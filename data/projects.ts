import Project from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    imageLink: "https://placehold.co/300x300/png?text=Project+Image",
    name: "Project One",
    description: "This is a brief description of Project One.",
    technologies: ["React", "Next.js", "TypeScript"],
    link: "https://google.com",
  },
  {
    id: "2",
    imageLink: "https://placehold.co/300x300/png?text=Project+Image",
    name: "Project Two",
    description: "This is a brief description of Project Two.",
    technologies: ["Vue.js", "Nuxt.js", "JavaScript"],
    link: "https://example.com/project-two",
  },
  {
    id: "3",
    imageLink: "https://placehold.co/300x300/png?text=Project+Image",
    name: "Project Three",
    description: "This is a brief description of Project Three.",
    technologies: ["Angular", "TypeScript", "RxJS"],
    link: "https://example.com/project-three",
  },
];
