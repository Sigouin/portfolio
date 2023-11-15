import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import BaseLayout from "./_base-layout";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  mainHeader: string;
};

const PostLayout = ({ preview, children, mainHeader }: Props) => {
  return (
    <>
      <Meta />
      <BaseLayout supHeader="Blog:" mainHeader={mainHeader} details="">
        <main>{children}</main>
      </BaseLayout>
      {/* <Footer /> */}
    </>
  );
};

export default PostLayout;
