import "../styles/css/Login/login.css";
import "../styles/css/button/button.css";
import "../styles/css/common/common.css";
import "../utils/XoUtil.tsx";
import HEAD from "next/head";

function Panorama({ Component, pageProps }) {
  return (
    <>
      <HEAD>
        <link rel="icon" href="/resource/images/favicon.png" />
        <title>Panorama</title>
      </HEAD>
      <Component {...pageProps} />
    </>
  );
}

export default Panorama;
