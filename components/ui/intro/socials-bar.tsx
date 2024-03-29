"use client";

import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { socialsMotion } from "@/lib/animation";
import { motion } from "framer-motion";

export default function SocialsBar() {
  return (
    <div className="absolute top-5 right-8">
      <ul className="flex items-center gap-x-6">
        <li>
          <a href="https://github.com/notkoyo" target="_blank" title="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/motion.svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
              <motion.path
                variants={socialsMotion}
                initial="rest"
                animate="animated"
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <motion.path
                variants={socialsMotion}
                initial="rest"
                animate="animated"
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/kaiden-riley"
            target="_blank"
            title="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
              <motion.path
                variants={socialsMotion}
                initial="rest"
                animate="animated"
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <motion.path
                variants={socialsMotion}
                initial="rest"
                animate="animated"
                d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
              />
              <motion.path
                variants={socialsMotion}
                initial="rest"
                animate="animated"
                d="M8 11l0 5"
              />
              <motion.path
                variants={socialsMotion}
                initial="rest"
                animate="animated"
                d="M8 8l0 .01"
              />
              <motion.path
                variants={socialsMotion}
                initial="rest"
                animate="animated"
                d="M12 16l0 -5"
              />
              <motion.path
                variants={socialsMotion}
                initial="rest"
                animate="animated"
                d="M16 16v-3a2 2 0 0 0 -4 0"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:kaidenjr01@outlook.com" title="Contact Me">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
              <motion.path variants={socialsMotion} initial="rest" animate="animated" stroke="none" d="M0 0h24v24H0z" fill="none" />
              <motion.path variants={socialsMotion} initial="rest" animate="animated" d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <motion.path variants={socialsMotion} initial="rest" animate="animated" d="M3 7l9 6l9 -6" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
