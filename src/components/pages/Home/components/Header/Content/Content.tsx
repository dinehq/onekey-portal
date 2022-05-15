import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { dynamicTextStyle } from '../../../../../../utils';
import { Button, Flex, H1, Logo, Span } from '../../../../../base';

export interface ContentProps {
  children?: ReactNode;
}

export const Content: FC<ContentProps> = () => {
  const theme = useTheme();

  return (
    <Flex
      {...{
        position: 'absolute',
        left: 0,
        bottom: 0,
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
      <Flex {...{ gap: 20 }}>
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
      </Flex>

      <Span xs={{ ...theme.text.normal100 }}>Trustpilot score & review</Span>
    </Flex>
  );
};
