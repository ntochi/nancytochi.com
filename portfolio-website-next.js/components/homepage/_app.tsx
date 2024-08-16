import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css'; // Import your global CSS

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // AOS.init({
    //   duration: 1000, // Customize your AOS animation duration
    //   once: true, // Whether animation should happen only once
    // });

    AOS.init({
      duration: 1000,
      delay: 2650,
  });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
