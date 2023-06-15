import { images } from '@/app/utils/images';
import GalleryItem from '../UI/GalleryItem';
import { useEffect, useRef, useState } from 'react';
import { bai_jamjuree } from '@/app/utils/fonts';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styled } from 'styled-components';

const GallerySection = styled.section`
  position: relative;
  background-color: #d53f41;
  margin-left: -5vw;
  margin-right: -5vw;
`;

const GalleryWrapper = styled.div`
  height: 80vh;
  padding: 10vh 0;
  width: 400%;
  display: flex;
  flex-wrap: nowrap;
`;

const GalleryCounter = styled.div`
  position: absolute;
  top: 10%;
  left: 100px;
  z-index: 1;
  mix-blend-mode: difference;
  line-height: 16px;
  color: #dbd8d6;
  font-weight: 600;
  font-size: 1rem;
  display: inline-block;
`;

const CounterDivider = styled.span`
  content: '';
  background-color: white;
  width: 6.26vw;
  margin: 7px 10px;
  height: 1px;
  display: inline-block;
`;

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('#gallery-item-wrapper');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        start: 'top top',
        trigger: ref.current,
        scroller: '#main-container',
        pin: true,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
        end: () => `+-${ref.current?.offsetWidth}`,
      },
    });
    // ScrollTrigger.refresh();
  }, []);

  return (
    <GallerySection data-scroll-section>
      <GalleryWrapper ref={ref}>
        <GalleryCounter className={bai_jamjuree.className}>
          <span>{activeImage}</span>
          <CounterDivider />
          <span>{images.length}</span>
        </GalleryCounter>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </GalleryWrapper>
    </GallerySection>
  );
};

export default Gallery;
