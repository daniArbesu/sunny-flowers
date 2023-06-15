import { bodoni_moda } from '@/app/utils/fonts';
import SectionHeader from '../UI/SectionHeader';
import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import SplitText from '../../utils/SplitText';
import { gsap } from 'gsap';
import useOnScreen from '@/app/hooks/useOnScreen';

interface Props {
  reveal: boolean;
}

const FooterSection = styled.section`
  text-align: center;
  padding-bottom: 200px;
`;

const LocationText = styled.h2<Props>`
  font-size: 15vw;
  text-transform: uppercase;
  opacity: ${({ reveal }) => (reveal ? 1 : 0)};
`;

const Footer = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText('#location-text', {
        type: 'lines',
        linesClass: 'lineChildren',
      });

      // To make a reveal effect we need a parent with overflow hidden
      const splitParent = new SplitText('#location-text', {
        type: 'lines',
        linesClass: 'lineParent',
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power2',
        }
      );
    }
  }, [reveal]);

  return (
    <FooterSection data-scroll-section>
      <SectionHeader title="Made In" />
      <LocationText
        ref={ref}
        className={bodoni_moda.className}
        id="location-text"
        reveal={reveal}
      >
        Valencia, Spain
      </LocationText>
    </FooterSection>
  );
};

export default Footer;
