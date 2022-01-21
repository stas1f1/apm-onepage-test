import '../styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";



function MyApp({ Component, pageProps }) {
  // AOS animation library initialization
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
