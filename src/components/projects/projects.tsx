import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GrProjects } from "react-icons/gr";

import React from "react";
import { projects } from "@/lib/constants";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-black text-xl">
            <GrProjects size={20} className="text-tertiary" /> Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          {projects.map((project, i) => (
            <div key={i} className="ml-3 mt-3">
              <Link
                href={project.href}
                target="_blank"
                className="font-black underline hover:decoration-tertiary transition-all duration-200 ease-linear"
              >
                {project.title}
              </Link>
              <h2 className="text-slate-300 text-xs">{project.description}</h2>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
