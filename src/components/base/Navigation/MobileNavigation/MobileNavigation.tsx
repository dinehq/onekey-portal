import React, { ReactNode } from 'react';

import { Box } from '../../Box';
import { Container } from '../../Container';
import { Logo } from '../../Logo';
import { NavigationAnimationWrap } from '../NavigationAnimationWrap';

export interface MobileNavigationProps {
  children?: ReactNode;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  const { children } = props;

  return (
    <NavigationAnimationWrap>
      <Container>
        <Box
          xs={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo
            css={{
              width: 48,
              height: 48,
              color: 'black',
            }}
          />
          {children}

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="8"
              y1="12"
              x2="32"
              y2="12"
              stroke="#101111"
              strokeWidth="2"
            />
            <line
              x1="8"
              y1="20"
              x2="32"
              y2="20"
              stroke="#101111"
              strokeWidth="2"
            />
            <line
              x1="8"
              y1="28"
              x2="32"
              y2="28"
              stroke="#101111"
              strokeWidth="2"
            />
          </svg>
        </Box>
      </Container>
    </NavigationAnimationWrap>
  );
};
