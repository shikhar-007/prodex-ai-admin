import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>OLYMPUS AI</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
