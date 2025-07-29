"use client";

import Project from "@/types/project";
import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Modal from "./Modal";

export default function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          <CardFooter className="p-0 mt-4 flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setIsModalOpen(true)}
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Link className="flex-1" href={project.link} target="_blank">
              <Button className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open
              </Button>
            </Link>
          </CardFooter>
        </CardHeader>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={project.name}
        description={project.description}
        images={project.images}
        technologies={project.technologies}
      />
    </>
  );
}
