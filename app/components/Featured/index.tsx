import styles from './styles.module.css';
import { photos } from '../../utils/images';
import Image from 'next/image';

const Featured = () => {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className={styles.section} data-scroll-section>
      <div className={styles.rowLayout}>
        <h3>green</h3>
        <img src={firstUrl} alt="" />
      </div>
      <div className={styles.columnLayout}>
        <h3>lilly</h3>
        <img src={secondUrl} alt="" />
      </div>
    </section>
  );
};

export default Featured;
