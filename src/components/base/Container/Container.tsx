import { FC, ReactNode } from 'react';

import { Box } from '../Box';

export interface ContainerProps {
  children?: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props;

  return <Box>Container {children}</Box>;
};
