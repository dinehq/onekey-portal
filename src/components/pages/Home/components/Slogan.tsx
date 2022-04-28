import { FC } from 'react';

import { Logo } from '../../../base';

export const Slogan: FC = () => (
  <div
    css={{
      margin: '0 auto',
      fontSize: 60,
      fontWeight: 600,
      lineHeight: '64px',
      maxWidth: 897,
      textAlign: 'center',
    }}
  >
    <svg css={{ width: 64, height: 64, display: 'inline', color: '#2EDB43' }}>
      <Logo />
    </svg>

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
  </div>
);
