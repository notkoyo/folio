"use client";

import { Sparkle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function TitleSection() {
  return (
    <div className="flex items-center w-fit gap-x-2 cursor-default">
      <Sparkle size={32} />
      <motion.h2 whileHover={{skewX: -12 } } className="text-2xl md:text-3xl">full-stack developer</motion.h2>
      <Sparkle size={32} />
    </div>
  );
}
