import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Nav } from '../Box';
import { Button } from '../Button';
import { Container } from '../Container';
import { Logo } from '../Logo';

import languageIcon from './images/language.svg';
import { NavigationAnimationWrap } from './NavigationAnimationWrap';
import { NavigationItem } from './NavigationItem';
import { useData } from './useData';

export interface NavigationProps {
  children?: ReactNode;
}

export const Navigation: FC<NavigationProps> = () => {
  const theme = useTheme();
  const data = useData();

  return (
    <Nav
      xs={{
        position: 'fixed',
        width: '100%',
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

          <Box xs={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            {data.map((item) => (
              <NavigationItem key={item.name}>{item.name}</NavigationItem>
            ))}

            <div css={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <img
                alt="languageIcon.png"
                src={languageIcon}
                css={{ width: 24, height: 24 }}
              />
              <NavigationItem>English</NavigationItem>
            </div>

            <Button
              variant="outline"
              rightIcon={
                <Logo
                  css={{
                    width: 26,
                    height: 26,
                  }}
                />
              }
            >
              Launch App
            </Button>
          </Box>
        </Container>
      </NavigationAnimationWrap>
    </Nav>
  );
};
