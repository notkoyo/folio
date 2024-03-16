import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function SocialsBar() {
  return (
    <div className="absolute top-5 right-8">
      <ul className="flex items-center gap-x-6">
        <li>
          <a href="https://github.com/notkoyo" target="_blank" title="GitHub">
            <IconBrandGithub size={28} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/kaiden-riley" target="_blank" title="LinkedIn">
            <IconBrandLinkedin size={28} />
          </a>
        </li>
        <li>
          <a href="mailto:kaidenjr01@outlook.com" title="Contact Me">
            <IconMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}
