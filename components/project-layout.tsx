import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import NavLinks from "../components/nav-links";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const ProjectLayout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
      <NavLinks />
    </>
  );
};

export default ProjectLayout;
