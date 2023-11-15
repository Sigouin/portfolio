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
      <h2 className="text-4xl border-b-4 border-pip-purple">Projects</h2>
      <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 w-full">
        <ul className="flex flex-col md:flex-row gap-4 text-2xl">
          {projects.map(({ id, name }, i) => {
            const asPath = paths.projects(id).toString();
            return (
              <li
                key={id}
                className={
                  i !== 0 ? "md:before:content-['|'] md:before:pr-4" : ""
                }
              >
                <SeñorLinkenStein aDonde={asPath}>
                  <button
                    className={
                      router.asPath === asPath
                        ? `bg-pip-purple text-stella-purple`
                        : ""
                    }
                  >
                    {name}
                  </button>
                </SeñorLinkenStein>
              </li>
            );
          })}
        </ul>
        <ul className="flex mt-12 md:mt-0 gap-2">
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
