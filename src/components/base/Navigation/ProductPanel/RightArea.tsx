import { FC, ReactNode } from 'react';

import { Box } from '../../Box';

export interface RightAreaProps {
  children?: ReactNode;
}

export const RightArea: FC<RightAreaProps> = (props) => {
  const { children } = props;

  return <Box>RightArea {children}</Box>;
};
