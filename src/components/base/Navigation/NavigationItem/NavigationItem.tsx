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
        color: theme.background.test500,
        ...theme.text.medium300,
        ':hover': {
          opacity: 0.5,
        },
      }}
    >
      {children}
    </Box>
  );
};
