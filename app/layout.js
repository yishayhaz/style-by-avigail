import "@/styles/style.scss";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Style By Avigail</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
