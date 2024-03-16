"use client";

import React from "react";
import { stagger, useAnimate, motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumeBtn({ classNames = ""}: { classNames?: string }) {
  const [scope, animate] = useAnimate();
  const [isClicked, setIsClicked] = React.useState(false);
  
  type AnimationSequence = Parameters<typeof animate>[0];

  const randomNumberBetween = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const onButtonClick = () => {
    setIsClicked(true);
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation: AnimationSequence = sparkles.map((_, i) => [
      `.star-${i}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut: AnimationSequence = sparkles.map((_, i) => [
      `.star-${i}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset: AnimationSequence = sparkles.map((_, i) => [
      `.star-${i}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -48 }, { duration: 0.2, delay: stagger(0.04) }],
      ["button", { scale: 0.9 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.5 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <div ref={scope} className={classNames}>
      <motion.button
        onClick={onButtonClick}
        whileHover={{ scale: 1.06 }}
        className="relative rounded-full border-2 px-6 text-3xl py-2 border-black">
        <span className="sr-only">resume</span>
        <a
          className="flex items-center justify-center h-12 overflow-hidden"
          aria-hidden
          href="/kaiden-riley-cv.pdf"
          download
          target="_blank">
          {["r", "e", "s", "u", "m", "e"].map((letter, i) => (
            <span
              data-letter={letter}
              className="letter inline-block relative leading-[44px] h-12 after:h-12 after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]"
              key={`letter-${i}`}>
              {letter}
            </span>
          ))}
        </a>
        <span aria-hidden className={`${!isClicked ? "hidden" : ""} absolute inset-0 block pointer-events-none`}>
          {Array.from({ length: 20 }).map((_, i) => (
            <Download
              className={`star-${i} absolute left-1/2 top-1/2`}
              key={i}
              size={10}
            />
          ))}
        </span>
      </motion.button>
    </div>
  );
}
