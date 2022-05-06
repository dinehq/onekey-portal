import { FC } from 'react';

import { jsx } from '@emotion/react';

import { Box, BoxProps } from './Box';

export * from './Box';

export const Section: FC<BoxProps> = (props) =>
  jsx(Box, {
    as: 'section',
    ...props,
  });
