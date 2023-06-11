'use client';
import { useState } from 'react';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import styles from './page.module.css';
import Loader from './components/UI/Loader';

export default function Home() {
  const [loader, setLoader] = useState(true);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <main className={styles.main}>
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </main>
      )}
    </>
  );
}
