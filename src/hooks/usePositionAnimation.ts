import { useEffect } from 'react';

import { useMotionValue, useTransform } from 'framer-motion';

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
  const innerMotionValue = useMotionValue(from);
  const elementInViewportProgress = useMotionValue(0);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0, 1, 2],
    [from, to, from],
  );

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
  }, [from, to, innerMotionValue, rect, elementInViewportProgress]);

  return {
    ref,
    motionValue,
  };
}
