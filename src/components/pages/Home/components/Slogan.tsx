import { FC } from 'react';

import { Box, Logo } from '../../../base';

export const Slogan: FC = () => (
  <Box padding={51}>
    <p
      css={{
        margin: '0 auto',
        fontSize: `${(60 / 1400) * 100}vw`,
        fontWeight: 600,
        lineHeight: 1,
        textAlign: 'center',
      }}
    >
      <Logo
        css={{
          width: 64,
          height: 64,
          display: 'inline',
          verticalAlign: 'bottom',
          color: '#2EDB43',
          marginRight: 6,
        }}
      />

      <span>
        <span
          css={{
            color: '#2EDB43',
          }}
        >
          OneKey
        </span>{' '}
        is the smartest way <br /> to secure, buy, exchange and <br /> grow your
        crypto assets.
      </span>
    </p>
  </Box>
);
