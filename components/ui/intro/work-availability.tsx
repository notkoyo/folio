"use client";

import React from "react";
import { IconCircleFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function WorkAvailability() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.2,
          type: "tween",
          ease: "easeInOut",
        },
      }}
      className="hidden sm:flex items-center gap-x-2 absolute top-5 left-8 cursor-default">
      <span>
        <IconCircleFilled size={16} color="green" />
      </span>
      <p>looking for position</p>
    </motion.div>
  );
}
