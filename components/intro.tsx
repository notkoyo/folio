import React from "react";
import TitleResumeSection from "./ui/intro/title-resume-section";
import FadedCornerInfo from "./ui/intro/faded-corner-info";
import SocialsBar from "./ui/intro/socials-bar";
import WorkAvailability from "./ui/intro/work-availability";
import IntroSection from "./ui/intro/intro-section";

export default function Intro() {
  return (
    <div className="h-screen p-[1rem]">
      <span className="sr-only">Introduction section with social links</span>
      <section className="relative flex flex-col gap-y-10 items-center justify-center bg-white shadow-md rounded-3xl h-full">
        <WorkAvailability />
        <SocialsBar />
        <IntroSection />
        <TitleResumeSection />
        <FadedCornerInfo />
      </section>
    </div>
  );
}