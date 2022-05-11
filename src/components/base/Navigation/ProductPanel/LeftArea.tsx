import { FC, ReactNode, useCallback, useState } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Img, Li, Ul } from '../../Box';

import image from './images/product.png';

export interface LeftAreaProps {
  children?: ReactNode;
}

const items = [
  'OneKey Mini',
  'OneKey Touch',
  'OneKey Pro',
  'OneKey Lite',
  'KeyTag',
];

export const LeftArea: FC<LeftAreaProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  const [backgroundColor, setBackgroundColor] = useState(
    theme.background.test100,
  );

  const onClick = useCallback(
    (item: string) => {
      if (item === 'OneKey Pro') {
        setBackgroundColor(theme.background.test300);
      } else {
        setBackgroundColor(theme.background.test100);
      }
    },
    [theme],
  );

  return (
    <Box
      xs={{
        display: 'flex',
        width: '100%',
        height: '100%',
        transition: theme.transitions.allEase,
        background: backgroundColor,
      }}
    >
      <Box
        xs={{
          width: '50%',
          paddingLeft: 64,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Ul>
          {items.map((item, index) => (
            <Li
              xs={{
                ...theme.text.medium400,
                listStyle: 'none',
                lineHeight: '44px',
                cursor: 'pointer',
                ':hover': {
                  color: theme.background.test300,
                },
              }}
              key={index}
              onClick={() => onClick(item)}
            >
              {item}
            </Li>
          ))}
        </Ul>
      </Box>

      <Box
        xs={{
          width: '50%',
        }}
      >
        <Img
          css={{
            width: '100%',
            height: 'auto',
            marginBottom: -180,
          }}
          src={image}
          alt="product preview"
        />
      </Box>
      {children}
    </Box>
  );
};
