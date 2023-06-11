import { bodoni_moda } from '@/app/utils/fonts';
import SectionHeader from '../UI/SectionHeader';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <section className={styles.footer} data-scroll-section>
      <SectionHeader title="Made In" />
      <h2
        className={`${styles.location} ${bodoni_moda.className}`}
        id="location-text"
      >
        Valencia, Spain
      </h2>
    </section>
  );
};

export default Footer;
