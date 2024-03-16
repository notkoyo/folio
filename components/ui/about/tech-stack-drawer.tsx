import React from "react";
import {
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandFramerMotion,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandTailwind,
  IconBrandTypescript,
  IconClick,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import IconExpress from "@/components/icons/express";
import IconPostgresql from "@/components/icons/psql";
import IconJest from "@/components/icons/jest";

export default function TechStackDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="text-xl font-light hover:scale-110 transition duration-300">
          view more
          <IconClick className="ml-2 h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto py-6 w-full max-w-4xl flex flex-col justify-center">
          <span className="sr-only">Complete tech stack inside a drawer</span>
          <DrawerHeader>
            <DrawerTitle className="text-center text-4xl py-5">
              My Complete Tech Stack
            </DrawerTitle>
            <DrawerDescription className="text-center text-lg">
              Currently I enjoy working with these technologies, however, I
              enjoy learning and am always open to learning new technologies.
            </DrawerDescription>
          </DrawerHeader>
          <div className="mx-auto py-5 px-10 flex max-w-2xl justify-center items-center">
            <ul className="flex gap-x-6 gap-y-5 justify-center flex-wrap items-center">
              <li>
                <IconBrandHtml5 size={40} />
              </li>
              <li>
                <IconBrandCss3 size={40} />
              </li>
              <li>
                <IconBrandJavascript size={40} />
              </li>
              <li>
                <IconBrandTypescript size={40} />
              </li>
              <li>
                <IconBrandReact size={40} />
              </li>
              <li>
                <IconBrandNextjs size={40} />
              </li>
              <li>
                <IconBrandFramerMotion size={40} />
              </li>
              <li>
                <IconBrandTailwind size={40} />
              </li>
              <li>
                <IconBrandBootstrap size={40} />
              </li>
              <li>
                <IconBrandNodejs size={40} />
              </li>
              <li>
                <IconBrandSupabase size={40} />
              </li>
              <li>
                <IconPostgresql />
              </li>
              <li>
                <IconExpress />
              </li>
              <li>
                <IconJest />
              </li>
              <li>
                <IconBrandGit size={40} />
              </li>
              <li>
                <IconBrandGithub size={40} />
              </li>
            </ul>
          </div>
          <DrawerFooter></DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
