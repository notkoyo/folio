"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import { projects } from "@/lib/data";
import { techMotion, textMotion } from "@/lib/animation";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[400px] gap-6">
      {projects.map((project, i) => (
        <div
          key={i}
          className={`rounded-3xl ${i === 0 || i === 3 ? "col-span-1 md:col-span-2" : ""}`}>
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative overflow-hidden flex h-full items-end rounded-3xl">
            <motion.div
              variants={techMotion}
              className="absolute top-0 left-0 z-[999]">
              <ul className="text-white flex flex-wrap gap-2 ">
                {project.tech.map((tech, i) => (
                  <li key={`techitem${i}`}>
                    <span className="text-xl text-black flex items-center justify-center bg-white rounded-full px-3 py-1">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="text-white absolute top-5 right-5 flex gap-x-4 z-[999]">
              <a href={project.github} target="_blank" title="Source Code">
                <IconBrandGithub size={28} />
              </a>
              <a href={project.livesite} target="_blank" title="Live Site">
                <IconLink size={28} />
              </a>
            </div>
            <span className="sr-only">{project.title} Card with Image</span>
            <Image
              src={`/${project.id}.png`}
              alt={project.title}
              fill
              quality={100}
              style={{ objectFit: "cover", color: "transparent" }}
              className="z-[0]"
            />
            <motion.h2
              variants={textMotion}
              className="opacity-0 text-white z-10 text-3xl">
              {project.title}
            </motion.h2>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
