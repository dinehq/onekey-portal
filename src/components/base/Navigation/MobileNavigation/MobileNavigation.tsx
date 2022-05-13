import { FC, ReactNode } from 'react';

import { Box } from '../../Box';

export interface MobileNavigationProps {
  children?: ReactNode;
}

export const MobileNavigation: FC<MobileNavigationProps> = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};
