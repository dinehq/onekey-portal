import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { useHover } from '../../../../hooks';
import { Box, Li, Nav, Ul } from '../../Box';
import { Container } from '../../Container';
import { LaunchAppButton } from '../../LaunchAppButton';
import { Logo } from '../../Logo';
import { useData } from '../useData';

import languageIcon from './images/language.svg';
import { NavigationAnimationWrap } from './NavigationAnimationWrap';
import { NavigationItem } from './NavigationItem';
import { ProductPanel } from './ProductPanel';

export interface NormalNavigationProps {
  children?: ReactNode;
}

export const NormalNavigation: FC<NormalNavigationProps> = () => {
  const theme = useTheme();
  const data = useData();
  const { hoverProps, isHovered } = useHover();

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
      <NavigationAnimationWrap>
        <Container
          xs={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo
            css={{
              width: 45,
              height: 45,
              color: 'black',
              ':hover': {
                cursor: 'pointer',
                color: theme.colors.brand400,
              },
            }}
          />

          <Ul xs={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {data.map((item) => (
              <Li
                key={item.name}
                xs={{
                  listStyle: 'none',
                }}
              >
                {item.link === '/products' ? (
                  <NavigationItem {...hoverProps}>
                    {item.name}
                    {isHovered}
                  </NavigationItem>
                ) : (
                  <NavigationItem>{item.name}</NavigationItem>
                )}
              </Li>
            ))}

            <Box css={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <img
                alt="languageIcon.png"
                src={languageIcon}
                css={{ width: 24, height: 24 }}
              />
              <NavigationItem>EN</NavigationItem>
            </Box>

            <LaunchAppButton variant="outline" />
          </Ul>
        </Container>
      </NavigationAnimationWrap>

      <ProductPanel isActive={isHovered} />
    </Nav>
  );
};
