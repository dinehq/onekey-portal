import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { dynamicTextStyle } from '../../../../../../utils';
import { Box, Button, Container, H1, Logo, Span } from '../../../../../base';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = () => {
  const theme = useTheme();

  return (
    <Container
      xs={{
        zIndex: 2,
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Box
        xs={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <H1
          xs={{
            ...theme.text.medium800,
          }}
          xl={{
            ...dynamicTextStyle(theme.text.medium800, 'xlarge'),
          }}
          xxl={{
            ...theme.text.medium1000,
          }}
        >
          All-in-One Crypto Wallet.
          <br />
          Trusted by Millions.
        </H1>
        <Box
          xs={{
            display: 'flex',
            gap: 20,
            flexDirection: 'column',
          }}
          s={{
            flexDirection: 'row',
          }}
        >
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
          <Button variant="outline">Go to shop</Button>
        </Box>

        <Span xs={{ ...theme.text.normal100 }}>Trustpilot score & review</Span>
      </Box>
    </Container>
  );
};
