import { AppProps } from "next/app";
import "../ui/index.css";
import { dank } from "../ui/font";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dank.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
