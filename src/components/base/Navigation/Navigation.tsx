import { FC, ReactNode } from 'react';

import { useMediaQuery } from '../../../hooks';
import { Nav } from '../Box';

import { MobileNavigation } from './MobileNavigation';
import { NormalNavigation } from './NormalNavigation';

export interface NavigationProps {
  children?: ReactNode;
}

export const Navigation: FC<NavigationProps> = (props) => {
  const { children } = props;
  const mediaQuery = useMediaQuery();

  return (
    <Nav
      xs={{
        position: 'fixed',
        width: '100%',
        zIndex: 2000,
        top: 0,
        left: 0,
        right: 0,
        transition: 'all 0.3s ease-in-out',
        ':hover': {
          backgroundColor: 'white',
        },
      }}
    >
      {mediaQuery.large ? <NormalNavigation /> : <MobileNavigation />}

      {children}
    </Nav>
  );
};
