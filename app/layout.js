import "@/styles/style.scss";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Style By Avigail</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
