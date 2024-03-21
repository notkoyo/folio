import React from "react";

const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "mailto:kaidenjr01@outlook.com" },
] as const;

export default function Nav() {
  return (
    <nav className="fixed z-[50] bottom-10 left-[50%] -translate-x-[50%]">
      <div className="">
        <ul className="flex gap-x-5 bg-black/70 shadow-md rounded-full py-5 px-8">
          {navItems.map((item) => (
            <li key={item.name} className="hover:scale-[1.15] hover:text-opacity-95 transition duration-300 text-white text-opacity-50">
              <a href={item.name === "projects" ? "" : item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
