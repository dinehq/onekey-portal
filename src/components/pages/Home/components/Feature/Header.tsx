import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Button, Logo } from '../../../../base';

export interface HeaderProps {
  children?: ReactNode;
}

export const Header: FC<HeaderProps> = () => {
  const theme = useTheme();

  return (
    <Box
      xs={{
        position: 'relative',
        margin: '0 auto',
        maxWidth: 760,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        textAlign: 'center',
        padding: 120,
      }}
    >
      <span
        css={{
          ...theme.text.medium1000,
          color: '#101111',
        }}
      >
        Supercharge great Web3 products
      </span>
      <span
        css={{
          ...theme.text.normal500,
          color: '#101111',
        }}
      >
        Compatible with MetaMask and other wallets. DeFi and Mining also
        integrated.
      </span>

      <Box>
        <Button
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
    </Box>
  );
};
