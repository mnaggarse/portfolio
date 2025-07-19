import Project from "@/types/project";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full md:w-fit pt-0 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        width="300"
        height="300"
        src={project.imageLink}
        alt={project.name}
        className="object-cover w-full"
      />
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <CardFooter className="p-0 mt-4">
          <Link className="w-full" href={project.link}>
            <Button className="w-full">
              <ExternalLink />
              Preview
            </Button>
          </Link>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
