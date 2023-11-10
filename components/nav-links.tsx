"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import projects from "../data/projects";
import { paths } from "../data/paths";
import SeñorLinkenStein from "../utilities/SeñorLinkenStein";

export default function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="mt-12">
      <h2 className="text-4xl h2-accent-left">Projects</h2>
      <div className="flex items-center justify-between mt-4 w-full">
        <ul className="flex gap-4 ml-12 text-2xl">
          {projects.map(({ id, name }, i) => {
            const asPath = paths.projects(id).toString();
            return (
              <li
                key={id}
                className={i !== 0 ? "before:content-['|'] before:pr-4" : ""}
              >
                <SeñorLinkenStein aDonde={asPath}>
                  <button
                    className={router.asPath === asPath ? `bg-[#ff00ff]` : ""}
                  >
                    {name}
                  </button>
                </SeñorLinkenStein>
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-2">
          <li>
            <a href="https://github.com/Sigouin" target="_blank">
              <BiLogoGithub className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/matt-sigouin" target="_blank">
              <BiLogoLinkedin className="text-2xl" />
            </a>
          </li>
          <li>
            <a href="mailto:matt@sigouin.codes">
              <MdOutlineAlternateEmail className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
