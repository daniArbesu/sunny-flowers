import { Image } from '@/types';
import styles from './styles.module.css';
import { bai_jamjuree, bodoni_moda } from '@/app/utils/fonts';

interface Props extends Image {
  updateActiveImage: (index: number) => void;
  index: number;
}

const GalleryItem = ({
  src,
  title,
  subtitle,
  category,
  updateActiveImage,
  index,
}: Props) => {
  return (
    <article className={styles.wrapper} id="gallery-item-wrapper">
      <div />
      <div className={styles.item}>
        <div className={`${styles.info} ${bai_jamjuree.className}`}>
          <h3 className={styles.title}>{title}</h3>
          <p className={`${styles.subtitle} ${bodoni_moda.className}`}>
            {subtitle}
          </p>
          <span className={styles.category}>{category}</span>
        </div>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div />
    </article>
  );
};

export default GalleryItem;
