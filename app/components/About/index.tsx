import { useEffect, useRef, useState } from 'react';
import SectionHeader from '../UI/SectionHeader';
import SplitText from '../../utils/SplitText';
import { gsap } from 'gsap';
import { styled } from 'styled-components';
import useOnScreen from '@/app/hooks/useOnScreen';

interface Props {
  reveal: boolean;
}

const AboutSection = styled.section<Props>`
  p {
    font-size: 70px;
    line-height: 1.12;
    opacity: ${({ reveal }) => (reveal ? 1 : 0)};

    div {
      opacity: 0;
      transform: translate(0);
    }
  }
`;

const About = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText('#blog-description', {
        type: 'lines',
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2',
      });
    }
  }, [reveal]);

  return (
    <AboutSection reveal={reveal} data-scroll-section>
      <SectionHeader title="about" />
      <p ref={ref} id="blog-description">
        Sunny Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Sunny Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </AboutSection>
  );
};

export default About;
