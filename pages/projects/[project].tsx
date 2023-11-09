import { useRouter } from "next/router";
import ErrorPage from "next/error";
import projects, { IProject } from "../../data/projects";
import ProjectLayout from "../../components/project-layout";
import Container from "../../components/container";
import Header from "../../components/header";
import Head from "next/head";

type Props = {
  project: IProject;
};
type Params = {
  params: {
    project: string;
  };
};

export default function Project({ project }: Props) {
  // {
  //   id: "dashdoor",
  //   name: "DashDoor",
  //   img: "dashdoor.jpg",
  //   description: 'Cool info about dashdoor',
  //   demoURL: 'dashdoor.sigouin.com',
  //   gitURL: 'https://github.com/sigouin/dashdoor'
  // }
  const router = useRouter();
  const title = `${project.name} | A Project by Matt Sigouin`;
  if (!router.isFallback && !project?.id) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <ProjectLayout>
      <Container>
        <Header />
        <Head>
          <title>{title}</title>
          <meta property="og:image" content={project.img} />
        </Head>
        {router.isFallback ? (
          <p>...loading project...</p>
        ) : (
          <div>OH YES HI THIS IS THE {project.name} page!</div>
        )}
      </Container>
    </ProjectLayout>
  );
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
