import React from "react";
import ProjectGrid from "./ui/projects/project-grid";

export default function Projects() {
  return (
    <div id="projects" className="h-min p-[1rem]">
      <span className="sr-only">Project section</span>
      <section className="flex flex-col bg-white shadow-md rounded-3xl h-full">
        <div className="flex w-full justify-start py-8 px-8">
          <h2 className="text-4xl font-medium">projects</h2>
        </div>
        <div className="p-[1.5rem]">
          <ProjectGrid />
        </div>
      </section>
    </div>
  );
}
