import { FC, ReactNode } from 'react';

import { Interpolation, Theme } from '@emotion/react';

import { Box, BoxProps } from '../Box';

export interface ContainerProps extends BoxProps {
  children?: ReactNode;
  xs?: Interpolation<Theme>;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Box
      css={{
        maxWidth: 1608,
        margin: '0 auto',
      }}
      {...otherProps}
    >
      {children}
    </Box>
  );
};
