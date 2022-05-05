import { FC, ReactNode } from 'react';

import { Box } from '../Box';

export interface ContainerProps {
  children?: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props;

  return (
    <Box
      css={{
        maxWidth: 1608,
        margin: '0 auto',
      }}
    >
      {children}
    </Box>
  );
};
