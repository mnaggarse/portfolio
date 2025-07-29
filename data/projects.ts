import Project from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    imageLink: "/projects/reading-tracker/reading-tracker-1.png",
    name: "Reading Tracker",
    description:
      "A comprehensive reading tracker application that helps users manage their reading goals, track progress, and discover new books. Features include book search, reading statistics and progress tracking.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Shadcn",
    ],
    link: "https://reading-tracker-mnaggarse.vercel.app/",
    images: [
      "/projects/reading-tracker/reading-tracker-1.png",
      "/projects/reading-tracker/reading-tracker-2.png",
      "/projects/reading-tracker/reading-tracker-3.png",
      "/projects/reading-tracker/reading-tracker-4.png",
      "/projects/reading-tracker/reading-tracker-5.png",
    ],
  },
];
