import "../styles/css/Login/login.css";
import "../styles/css/button/button.css";
import "../styles/css/common/common.css";
import "../utils/XoUtil.tsx";
import HEAD from "next/head";

function Panorama({ Component, pageProps }) {
  return (
    <>
      <HEAD>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/resource/images/favicon.png" />
        <title>Panorama</title>
      </HEAD>
      <Component {...pageProps} />
    </>
  );
}

export default Panorama;
