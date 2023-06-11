'use client';
import { useEffect, useRef, useState } from 'react';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import styles from './page.module.css';
import Loader from './components/UI/Loader';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export default function Home() {
  const [loader, setLoader] = useState(true);

  const [timer, setTimer] = useState(3);
  const id = useRef(0);
  const containerRef = useRef<HTMLElement>(null);

  const clearInterval = () => {
    window.clearInterval(id.current);
    setLoader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clearInterval();
    }
  }, [timer]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            multiplier: 1,
            class: 'is-reveal',
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main
            ref={containerRef}
            className={styles.main}
            data-scroll-container
          >
            <Navbar />
            <Header />
            <Featured />
            <About />
            <Gallery />
            <Footer />
          </main>
        </LocomotiveScrollProvider>
      )}
    </>
  );
}
