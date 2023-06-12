'use client';
import { bai_jamjuree, syncopate } from '@/app/utils/fonts';
import styles from './styles.module.css';
import { useEffect } from 'react';
import SplitText from '../../utils/Split3.min.js';
import { gsap } from 'gsap';

gsap.registerPlugin(SplitText);

const Header = () => {
  useEffect(() => {
    const split = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    // To make a reveal effect we need a parent with overflow hidden
    const splitParent = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineParent',
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
  }, []);
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
