import Footer from "./footer";
import Meta from "./meta";
import BaseLayout from "./_base-layout";
import Image from "next/image";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const HomeLayout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <BaseLayout
        supHeader="Hello, I'm"
        mainHeader="Matt Sigouin"
        preview={preview}
        img={{
          src: "/images/pic2.png",
          alt: "WHY AM I SO ANGRY ALL THE TIME",
        }}
        details={
          <>
            <p>
              Hello world! After spending the last 14 years going from a medical
              biller to an Executive manager I decided it was time to change
              course. I decided to pursue my passion for programming. I&apos;ve
              spent the past year learning the ins and outs of JavaScript with
              the help of The Odin Project. I&apos;ve also had the privilege to
              have a 1 on 1 mentorship with a senior developer going over coding
              principles and best practices as well as Agile methodologies,
              issue tracking and sprint life cycle with Jira. I&apos;m currently
              looking for a full time position as a software developer to grow
              and hone my skills.
            </p>
            <p>
              When I&apos;m not coding, I enjoy spending time with the family,
              playing video games, or learning something new.
            </p>
          </>
        }
      >
        <main>{children}</main>
      </BaseLayout>
    </>
  );
};

export default HomeLayout;
