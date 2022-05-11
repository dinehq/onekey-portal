import { FC, ReactNode } from 'react';

import { Box } from '../../../../base';

export interface ItemProps {
  children?: ReactNode;
}

export const Item: FC<ItemProps> = (props) => {
  const { children } = props;

  return (
    <Box
      css={{
        width: 421,
        listStyle: 'none',
      }}
    >
      {children}
    </Box>
  );
};
