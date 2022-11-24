import "../styles/style.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>אביגיל חזן - סטייליסטית אישית</title>

        <meta property="og:site_name" content="אביגיל חזן - סטייליסטית אישית" />
        <meta property="og:title" content="אביגיל חזן - סטייליסטית אישית" />
        <meta
          property="og:description"
          content="הי, ברוכה הבאה!
כאן תמצאי כל מה שאת צריכה כדי להתלבש נכון ולהרגיש במיטבך. מלתחה חכמה, סטיילינג אישי וסדנאות סטיילינג לכל גיל. בואו נכיר"
        />
        <meta property="og:image" itemprop="image" content="/img_hero.jpeg" />
        <meta property="og:type" content="website" />

        <meta
          name="description"
          content="הי, ברוכה הבאה!
כאן תמצאי כל מה שאת צריכה כדי להתלבש נכון ולהרגיש במיטבך. מלתחה חכמה, סטיילינג אישי וסדנאות סטיילינג לכל גיל. בואו נכיר"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
