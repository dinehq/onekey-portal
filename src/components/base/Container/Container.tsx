import { FC, ReactNode } from 'react';

import { Interpolation, Theme } from '@emotion/react';

import { Box } from '../Box';

export interface ContainerProps {
  children?: ReactNode;
  xs?: Interpolation<Theme>;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children, xs } = props;

  return (
    <Box
      css={{
        maxWidth: 1608,
        margin: '0 auto',
        // @ts-ignore
        ...xs,
      }}
    >
      {children}
    </Box>
  );
};
