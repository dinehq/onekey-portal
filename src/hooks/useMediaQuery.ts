// 414 s
// 960 m
// 1200 l
// 1440 xl
// 1920 xxl

import { useMediaQuery as useReactResponsiveMediaQuery } from 'react-responsive';

export function useMediaQuery() {
  const small = useReactResponsiveMediaQuery({ minWidth: 414 });
  const medium = useReactResponsiveMediaQuery({ minWidth: 960 });
  const large = useReactResponsiveMediaQuery({ minWidth: 1200 });
  const xlarge = useReactResponsiveMediaQuery({ minWidth: 1440 });
  const xxlarge = useReactResponsiveMediaQuery({ minWidth: 1920 });

  return {
    small,
    medium,
    large,
    xlarge,
    xxlarge,
  };
}
