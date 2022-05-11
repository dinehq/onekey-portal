import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box, BoxProps } from '../../../../base';

export interface ArrowProps extends BoxProps {
  children?: ReactNode;
}

export const Arrow: FC<ArrowProps> = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Box
      {...otherProps}
      css={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#101111',
        borderBottomLeftRadius: 999,
        borderBottomRightRadius: 999,
        borderTopLeftRadius: 999,
        borderTopRightRadius: 999,
        display: 'block',
        label: 'Arrow',
        transition: theme.transitions.allEase,
        ':hover': {
          color: 'white',
          backgroundColor: '#101111',
        },
      }}
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.4944 21L21 32.5M21 32.5L32.4944 44M21 32.5H44"
          stroke="#101111"
          strokeWidth="2"
        />
      </svg>

      {children}
    </Box>
  );
};
