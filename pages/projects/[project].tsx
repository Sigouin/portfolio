import { useRouter } from "next/router";
import ErrorPage from "next/error";
import projects, { IProject } from "../../data/projects";
import ProjectLayout from "../../components/project-layout";
import Container from "../../components/container";

type Props = {
  project: IProject;
};
type Params = {
  params: {
    project: string;
  };
};

export default function Project({ project }: Props) {
  const router = useRouter();
  const title = `${project.name} | A Project by Matt Sigouin`;
  if (!router.isFallback && !project?.id) {
    return <ErrorPage statusCode={404} />;
  }
  return <ProjectLayout project={project} />;
}

// GIVES THE DATA TO A SPECIFIC PAGE BASED ON THE `PATH`
export async function getStaticProps({ params }: Params) {
  return {
    props: {
      project: projects.find((project) => project.id === params.project),
    },
  };
}

// MAKES THE LIST OF PROJECT URLS THAT YOU CAN VISIT ON THE FLY
export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({
      params: {
        project: project.id,
      },
    })),
    fallback: false,
  };
}
