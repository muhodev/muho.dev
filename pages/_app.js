import { Head } from "components";

import "styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
