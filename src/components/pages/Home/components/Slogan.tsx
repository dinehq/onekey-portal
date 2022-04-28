import { FC } from 'react';

import { Logo } from '../../../base';

export const Slogan: FC = () => (
  <p
    css={{
      margin: '0 auto',
      fontSize: 60,
      fontWeight: 600,
      lineHeight: '64px',
      maxWidth: 897,
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
      is the smartest way to secure, buy, exchange and grow your crypto assets.
    </span>
  </p>
);
