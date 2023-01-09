import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i) {
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TWN4LML');`,
          }}
        ></Script>

        <title>אביגיל חזן - סטייליסטית אישית</title>

        <meta property="og:site_name" content="אביגיל חזן - סטייליסטית אישית" />
        <meta property="og:title" content="אביגיל חזן - סטייליסטית אישית" />
        <meta
          property="og:description"
          content="הי, ברוכה הבאה!
כאן תמצאי כל מה שאת צריכה כדי להתלבש נכון ולהרגיש במיטבך. מלתחה חכמה, סטיילינג אישי וסדנאות סטיילינג לכל גיל. בואו נכיר"
        />
        <meta property="og:image" itemprop="image" content="/img_hero.webp" />
        <meta property="og:type" content="website" />

        <meta
          name="description"
          content="הי, ברוכה הבאה!
כאן תמצאי כל מה שאת צריכה כדי להתלבש נכון ולהרגיש במיטבך. מלתחה חכמה, סטיילינג אישי וסדנאות סטיילינג לכל גיל. בואו נכיר"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TWN4LML"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
    </Html>
  );
}
