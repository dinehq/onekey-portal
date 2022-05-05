import { useEffect } from 'react';

import { useMotionValue, useSpring, useTransform } from 'framer-motion';

import { useBoundingClientRect } from './useBoundingClientRect';

type Config = {
  from: number;
  to: number;
  top?: number;
  bottom?: number;
};

export function usePositionAnimation(config: Config) {
  const { from, to } = config;
  const { ref, rect } = useBoundingClientRect();
  const elementInViewportProgress = useMotionValue(0);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0, 0.5, 1.2, 2],
    [from, to, to, from],
  );

  const springValue = useSpring(motionValue);

  useEffect(() => {
    const viewportHeight = window.innerHeight;

    if (!rect) {
      return;
    }

    const { top: rectTop } = rect;

    if (rectTop > viewportHeight) {
      // not in viewport
      return;
    }

    const progress = 1 - rectTop / viewportHeight;

    elementInViewportProgress.set(progress);
  }, [from, to, rect, elementInViewportProgress]);

  return {
    ref,
    motionValue,
    springValue,
  };
}
