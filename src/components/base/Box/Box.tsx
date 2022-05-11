import { CSSProperties, FC } from 'react';

import { Interpolation, Theme, jsx } from '@emotion/react';

export interface BoxProps {
  children?: React.ReactNode;
  as?: string;
  css?: Interpolation<Theme> | CSSProperties;
  xs?: Interpolation<Theme> | CSSProperties;
}

export const Box: FC<BoxProps> = (props) => {
  const { children, as = 'div', css = {}, xs = {}, ...otherProps } = props;

  return jsx(
    as,
    {
      css: {
        // @ts-ignore
        ...css,
        // @ts-ignore
        ...xs,
      },
      ...otherProps,
    },
    children,
  );
};
