import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import BaseLayout from "./_base-layout";
import { IProject } from "../data/projects";
import Head from "next/head";

type Props = {
  preview?: boolean;
  children?: React.ReactNode;
  project: IProject;
};

function ProjectLinkButton({ url, children }: any) {
  return (
    <a
      className="px-8 py-2 bg-pip-purple rounded-md text-stella-purple text-2xl"
      href={url}
      target="_blank"
    >
      {children}
    </a>
  );
}

const ProjectLayout = ({ preview, children, project }: Props) => {
  return (
    <>
      <Meta />
      <Head>
        <title>{project.name}</title>
        <meta property="og:image" content={project.img} />
      </Head>
      <BaseLayout
        supHeader="Project:"
        mainHeader={project.name}
        img={{
          src: `/images/${project.img}`,
          alt: project.name,
        }}
        details={
          <>
            <p>{project.description}</p>
          </>
        }
      >
        <Alert preview={preview} />
        <div className="flex justify-end gap-4">
          <ProjectLinkButton url={project.demoURL}>Demo</ProjectLinkButton>
          <ProjectLinkButton url={project.gitURL}>Repo</ProjectLinkButton>
        </div>
      </BaseLayout>
    </>
  );
};

export default ProjectLayout;
