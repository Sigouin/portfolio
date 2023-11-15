import Alert from "./alert";
import NavLinks from "../components/nav-links";
import Container from "../components/container";
import Image, { StaticImageData } from "next/image";
import Corner from "../ui/assets/corner.svg";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  supHeader?: string;
  mainHeader: string;
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
  preview,
  img,
}: Props) => {
  return (
    <>
      <Alert preview={preview} />
      <div className="flex p-5 relative page-wrap min-h-[887px]">
        <div className="corner-accent-tr" />
        <div className="corner-accent-bl" />
        <section className="flex flex-col w-full p-10">
          <header className="grow-0">
            {supHeader && <span className="text-2xl">{supHeader}</span>}
            <h1 className="leading-none text-7xl">{mainHeader}</h1>
          </header>
          <main className="flex flex-col grow items-center justify-between flex-grow py-8 lg:flex-row">
            <aside className="max-w-sm">
              {img?.src && (
                <figure className="block overflow-hidden rounded-md shadow-2xl h-[459px] w-[459px] relative">
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
            </aside>
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
