import { AppProps } from "next/app";
import clsx from "clsx";
import "../ui/index.css";
import { dank } from "../ui/font";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={clsx([
        dank.variable,
        "font-sans flex flex-col min-h-full justify-center items-center",
      ])}
    >
      <Component {...pageProps} />
    </main>
  );
}
