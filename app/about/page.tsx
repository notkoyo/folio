import TechStackDrawer from "@/components/ui/about/tech-stack-drawer";
import { IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function AboutPage() {
  return (
    <div className="h-screen p-[1rem]">
      <span className="sr-only">About section</span>
      <section className="flex flex-col bg-white shadow-md rounded-3xl h-full">
        <a href="/" className="flex items-center gap-x-2 p-4 hover:translate-x-3 transition duration-300">
          <ArrowLeft />
          go back
        </a>
        <div className="flex w-full justify-start py-2 px-8">
          <h2 className="text-6xl -skew-x-12 font-medium">about</h2>
        </div>
        <div className="flex w-full justify-between items-center flex-col md:flex-row">
          <div className="flex flex-col max-w-2xl px-7 pb-3">
            <p className="text-lg mb-5 text-center">
              During my move to Berlin to study{" "}
              <span className="font-medium">German</span>, I decided to pursue
              programming in my spare time, which very quickly became a passion
              of mine.
            </p>{" "}
            <p className="text-lg mb-5 text-center">
              When I arrived back in England, I enrolled in a coding bootcamp
              with{" "}
              <a
                href="https://northcoders.com"
                className="font-medium underline hover:text-gray-600">
                Northcoders
              </a>{" "}
              and learned{" "}
              <span className="font-medium">full-stack web development</span>.{" "}
            </p>
            <p className="text-lg mb-5 text-center">
              <span className="italic">My favorite part of programming</span> is
              seeing the final product of the things I build. I{" "}
              <span className="font-medium">love</span> the feeling of being
              proud of the things I create and{" "}
              <span className="font-medium">figuring out solutions</span> to any
              problems I face along the way.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 w-full mb-10 md:mb-20 px-10 items-center justify-center ">
            <h2 className="text-2xl font-medium">tech stack 🚀</h2>
            <ul className="flex gap-x-10">
              <li>
                <IconBrandReact size={36} />
              </li>
              <li>
                <IconBrandTypescript size={36} />
              </li>
              <li>
                <IconBrandNextjs size={36} />
              </li>
              <li>
                <IconBrandTailwind size={36} />
              </li>
            </ul>
            <TechStackDrawer />
          </div>
        </div>
      </section>
    </div>
  );
}
