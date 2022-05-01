import { Children, FC, ReactNode, useEffect, useState } from 'react';

import { keyframes } from '@emotion/react';

export interface MarqueeProps {
  children?: ReactNode;
}

export const Marquee: FC<MarqueeProps> = (props) => {
  const { children } = props;
  const [animation, setAnimation] = useState('');

  const innerChildren = Children.map(
    [children, children, children],
    (child) => {
      if (child) {
        return child;
      }
      return null;
    },
  );

  useEffect(() => {
    const bounce = keyframes`
    0% {
      transform: translate3d(-200%, 0, 0) rotate(0.001deg);
    }
    100% {
      transform: translate3d(-100%, 0, 0) rotate(0.001deg);
    }
  `;

    setAnimation(`${bounce} 50s linear infinite`);
  }, [children]);

  return (
    <div
      css={{
        display: 'flex',
        animation,
        animationPlayState: 'running',
      }}
    >
      {innerChildren}
    </div>
  );
};
