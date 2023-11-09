"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import projects from "../data/projects";

// /dashdoor
// <a href="" target="_blank" rel="noreferrer">
// <a href="https://github.com/Sigouin" target="_blank" rel="noreferrer">

// const socialLinks = [];
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="">
      <h2>Projects</h2>
      <div className="flex items-center justify-between w-full">
        <ul className="flex gap-4">
          {projects.map((navItem) => (
            <li key={navItem.id}>
              {/* TODO: DO THIS 👇 THE RIGHT WAY */}
              <Link href={`projects/${navItem.id}`}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-2">
          <li>
            <a href="https://github.com/Sigouin" target="_blank">
              <BiLogoGithub />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/matt-sigouin" target="_blank">
              <BiLogoLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:matt@sigouin.codes">
              <MdOutlineAlternateEmail />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
