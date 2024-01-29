import type { Metadata } from "next";
import { Inter, Silkscreen } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Milou's",
  description: "Made with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-YQFNL613KH`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YQFNL613KH');
          `,
          }}
        />

        <link rel="icon" href="/public/watermelon.svg" />
      </Head>
      <body className={silkscreen.className}>{children}</body>
    </html>
  );
}
