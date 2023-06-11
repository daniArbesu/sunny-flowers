import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface Props {
  start: boolean;
  containerEl: HTMLElement;
}

const useLocomotive = (start: boolean, containerEl: HTMLElement) => {
  useEffect(() => {
    if (!start) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: containerEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
    });
  }, [start, containerEl]);
};

export default useLocomotive;
