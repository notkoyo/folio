"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FadedCornerInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.2,
          type: "tween",
          ease: "easeInOut",
        },
      }}
      className="text-black/25 cursor-default">
      <span className="absolute bottom-3 left-6">2024</span>
      <span className="absolute bottom-3 right-6">manchester, england</span>
    </motion.div>
  );
}
