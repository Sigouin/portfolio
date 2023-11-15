import Alert from "./alert";
import NavLinks from "../components/nav-links";
import Container from "../components/container";
import Image, { StaticImageData } from "next/image";
import Corner from "../ui/assets/corner.svg";
import { BiHomeAlt } from "react-icons/bi";
import Link from "next/link";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  supHeader?: string;
  mainHeader: string;
  homeButtonDisplayed?: boolean;
  details: React.ReactNode;
  img?: {
    src: string;
    alt: string;
  };
};

const BaseLayout = ({
  children,
  details,
  supHeader,
  mainHeader,
  homeButtonDisplayed = false,
  preview,
  img,
}: Props) => {
  return (
    <>
      <Alert preview={preview} />
      <div className="page-wrap">
        {homeButtonDisplayed && (
          <Link
            className="absolute flex justify-center items-center -top-6 -left-6 h-24 w-24 bg-stella-purple z-10 rounded-full"
            href="/"
          >
            <BiHomeAlt color="whitesmoke" size={32} />
          </Link>
        )}
        <div className="corner-accent-tl" />
        <div className="corner-accent-br" />
        <section className="flex flex-col w-full p-10">
          <header className="grow-0">
            {supHeader && <span className="text-2xl">{supHeader}</span>}
            <h1 className="leading-none text-6xl">{mainHeader}</h1>
          </header>
          <main
            className={`flex flex-col grow items-center ${
              img?.src ? "justify-between" : "justify-end"
            } flex-grow pt-16 pb-8 lg:flex-row`}
          >
            {img?.src && (
              <figure className="overflow-hidden rounded-md shadow-2xl h-96 w-96 mb-8 lg:mb-0 mr-8 relative hidden md:block">
                <Image
                  className="scale-105 absolute inset-none z-10"
                  src={"/images/pic2-hover.png"}
                  alt={img?.alt}
                  height={459}
                  width={459}
                />
                <Image
                  className="scale-105 absolute inset-none z-20 opacity-100 transition-opacity ease-in duration-0 hover:opacity-0 hover:duration-[2000ms]"
                  src={img?.src}
                  alt={img?.alt}
                  height={459}
                  width={459}
                />
              </figure>
            )}
            <div className="flex flex-col max-w-xl gap-6 text-lg leading-tight text-right p-accent-right">
              {details}
              {children}
            </div>
          </main>
          <NavLinks />
        </section>
      </div>
    </>
  );
};

export default BaseLayout;
