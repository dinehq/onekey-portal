import { useEffect } from 'react';

import { useMotionValue, useSpring } from 'framer-motion';

import { useBoundingClientRect } from './useBoundingClientRect';

type Config = {
  from: number;
  to: number;
  top: number;
};

export function usePositionAnimation(config: Config) {
  const { ref, rect } = useBoundingClientRect();
  const innerMotionValue = useMotionValue(config.from);
  const motionValue = useSpring(innerMotionValue);

  useEffect(() => {
    if (rect && rect.top < -config.top) {
      innerMotionValue.set(config.to);
    } else {
      innerMotionValue.set(config.from);
    }
  }, [config.from, config.to, config.top, innerMotionValue, rect]);

  return {
    ref,
    motionValue,
  };
}
