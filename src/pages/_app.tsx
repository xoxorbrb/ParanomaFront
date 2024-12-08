import "../styles/css/Login/login.css";
import "../styles/css/button/button.css";
import "../styles/css/common/common.css";
import "../utils/XoUtil";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
function Panorama({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/resource/images/favicon.png" />
        <title>Panorama</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Panorama;
