import { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function DevFolio({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Links - Dev Khandelwal"
        defaultTitle="Links - Dev Khandelwal"
        description="DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL."
        canonical="https://slyro.vercel.app/"
        openGraph={{
          url: "https://slyro.vercel.app",
          title: "Links - Dev Khandelwal",
          description: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
          images: [
            {
              url: "https://www.simpleimageresizer.com/_uploads/photos/727d9904/image_2023-12-11_141515879_529x768.png",
              width: 529,
              height: 768,
              alt: "Links",
            },
          ],
        }}
        twitter={{
          handle: "@i_slyro",
          site: "@i_slyro",
          cardType: "summary_large_image",
        }}
      />
      <Head>
      <link rel="icon" type="image/x-icon" href="https://github.com/khandelwaldev.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
