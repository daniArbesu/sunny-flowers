import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navbar from './components/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
