'use client';
import styles from './styles.module.css';
import { images } from '@/app/utils/images';
import GalleryItem from '../UI/GalleryItem';
import { useState } from 'react';
import { bai_jamjuree } from '@/app/utils/fonts';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <section className={styles.wrapper}>
      <div className={styles.gallery}>
        <div className={`${styles.counter} ${bai_jamjuree.className}`}>
          <span>{activeImage}</span>
          <span className={styles.divider} />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
