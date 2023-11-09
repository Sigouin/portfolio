import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import HomeLayout from "../components/home-layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import pic from "public/assets/Images/pic.png";
import Image from "next/image";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import NavLinks from "../components/nav-links";

import projects from "../data/projects";
import Link from "next/link";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <HomeLayout>
        <Head>
          <title>Sigouin.Codes</title>
        </Head>
        <Container>
          <section className="bg-stella-purple page-wrap p-16">
            <header>
              <span>Hello, I&apos;m</span>
              <h1>Matt Sigouin</h1>
            </header>

            <main className="flex items-center flex-grow py-8">
              <aside>
                <Image
                  src={pic}
                  alt="Matt and Stella. For real."
                  height={600}
                  width={438}
                />
              </aside>
              <div className="text-right text-sm">
                <p>
                  Hello world! After spending the last 14 years going from a
                  medical biller to an Executive manager I decided it was time
                  to change course. I decided to pursue my passion for
                  programming. I&apos;ve spent the past year learning the ins
                  and outs of JavaScript with the help of The Odin Project.
                  I&apos;ve also had the privilege to have a 1 on 1 mentorship
                  with a senior developer going over coding principles and best
                  practices as well as Agile methodologies, issue tracking and
                  sprint life cycle with Jira. I&apos;m currently looking for a
                  full time position as a software developer to grow and hone my
                  skills.
                </p>
                <p>
                  When I&apos;m not coding, I enjoy spending time with the
                  family, playing video games, or learning something new.
                </p>
              </div>
            </main>
            <NavLinks />
          </section>
        </Container>
      </HomeLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
