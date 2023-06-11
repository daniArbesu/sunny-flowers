import { bai_jamjuree, syncopate } from '@/app/utils/fonts';
import styles from './styles.module.css';

const Header = () => {
  return (
    <section className={styles.container} data-scroll-section>
      <ul className={`${styles.menu} ${syncopate.className}`}>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 className={bai_jamjuree.className} id="header-text">
        Art Object
      </h1>
    </section>
  );
};

export default Header;
