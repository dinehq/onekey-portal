import { FC, ReactNode, useState } from 'react';

import { useMediaQuery } from '../../../hooks';
import { Box } from '../Box';

export interface ResponsiveIndicatorProps {
  children?: ReactNode;
}

export const ResponsiveIndicator: FC<ResponsiveIndicatorProps> = (props) => {
  const { children } = props;
  const mediaQuery = useMediaQuery();
  const { small, medium, large, xLarge, xxLarge } = mediaQuery;
  let currentMediaQuery = 'xSmall';
  const [isHidden, setIsHidden] = useState(false);

  // click it and hide
  const handleClick = () => {
    setIsHidden(true);
  };

  if (isHidden) {
    return null;
  }

  if (xxLarge) {
    currentMediaQuery = 'xxLarge';
  } else if (xLarge) {
    currentMediaQuery = 'xLarge';
  } else if (large) {
    currentMediaQuery = 'large';
  } else if (medium) {
    currentMediaQuery = 'medium';
  } else if (small) {
    currentMediaQuery = 'small';
  }

  return (
    <Box
      onClick={handleClick}
      xs={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        background: 'white',
      }}
    >
      {currentMediaQuery}
      <br />
      {/* {JSON.stringify(mediaQuery, null, 2)} */}
      {children}
    </Box>
  );
};
