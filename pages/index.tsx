import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import HomeLayout from "../components/home-layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
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
