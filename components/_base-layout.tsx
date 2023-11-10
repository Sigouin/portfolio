import Alert from "./alert";
import NavLinks from "../components/nav-links";
import Container from "../components/container";
import Image, { StaticImageData } from "next/image";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  supHeader?: string;
  mainHeader: string;
  details: React.ReactNode;
  img: {
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
    <section className="p-16 bg-stella-purple page-wrap">
      <Alert preview={preview} />
      <header>
        {supHeader && <span className="text-2xl">{supHeader}</span>}
        <h1 className="leading-none text-7xl">{mainHeader}</h1>
      </header>
      <Container>
        <main className="flex flex-col items-center justify-between flex-grow py-8 lg:flex-row">
          <aside className="max-w-sm">
            {img?.src && (
              <figure className="overflow-hidden rounded-md shadow-2xl">
                <Image
                  className="scale-105"
                  src={img?.src}
                  alt={img?.alt}
                  height={600}
                  width={438}
                />
              </figure>
            )}
          </aside>
          <div className="flex flex-col max-w-xl gap-6 text-lg leading-tight text-right p-accent-right">
            {details}
          </div>
        </main>
      </Container>
      <main>{children}</main>
      <NavLinks />
    </section>
  );
};

export default BaseLayout;
