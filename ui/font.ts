import localFont from "@next/font/local";

export const dank = localFont({
    src: [
      {
        path: "../public/assets/fonts/DankMono-Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../public/assets/fonts/DankMono-Bold.ttf",
        weight: "700",
        style: "bold",
      },
      {
        path: "../public/assets/fonts/DankMono-Bold.ttf",
        style: "italic",
      },
    ],
    variable: "--font-dank",
  });