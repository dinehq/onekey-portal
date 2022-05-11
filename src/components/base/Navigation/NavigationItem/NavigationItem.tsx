import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../Box';

export interface NavigationItemProps {
  children?: ReactNode;
}

export const NavigationItem: FC<NavigationItemProps> = (props) => {
  const { children, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Box
      {...otherProps}
      xs={{
        ...theme.text.medium300,
        color: theme.background.test500,
        cursor: 'pointer',
        ':hover': {
          opacity: 0.5,
        },
      }}
    >
      {children}
    </Box>
  );
};
