import { FC, ReactNode } from 'react';

import { useMediaQuery } from '../../../hooks';
import { Box } from '../Box';

import { MobileNavigation } from './MobileNavigation';
import { NormalNavigation } from './NormalNavigation';

export interface NavigationProps {
  children?: ReactNode;
}

export const Navigation: FC<NavigationProps> = (props) => {
  const { children } = props;
  const mediaQuery = useMediaQuery();

  return (
    <Box>
      {mediaQuery.large ? <NormalNavigation /> : <MobileNavigation />}

      {children}
    </Box>
  );
};
