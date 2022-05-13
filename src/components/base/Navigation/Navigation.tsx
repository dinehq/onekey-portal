import { FC, ReactNode } from 'react';

import { Box } from '../Box';

import { MobileNavigation } from './MobileNavigation';
import { NormalNavigation } from './NormalNavigation';

export interface NavigationProps {
  children?: ReactNode;
}

export const Navigation: FC<NavigationProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Box
        xs={{
          display: 'none',
        }}
        l={{
          display: 'block',
        }}
      >
        <NormalNavigation />
      </Box>
      <Box
        l={{
          display: 'hidden',
        }}
      >
        <MobileNavigation />
      </Box>

      {children}
    </Box>
  );
};
