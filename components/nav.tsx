"use client";

import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "mailto:kaidenjr01@outlook.com" },
] as const;

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 100, x: "-50%", }}
      animate={{
        opacity: 1,
        y: 0,
        x: "-50%",
        transition: {
          delay: 1,
          duration: 0.6,
          type: "tween",
          ease: "easeInOut",
        },
      }}
      className="fixed z-[50] bottom-10 left-[50%] -translate-x-[50%]">
      <div className="">
        <ul className="flex gap-x-5 bg-black/70 shadow-md rounded-full py-5 px-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:scale-[1.15] hover:text-opacity-95 transition duration-300 text-white text-opacity-50">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
