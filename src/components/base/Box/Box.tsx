import { FC, HTMLProps } from 'react';

import { CSSObject, Interpolation, Theme, jsx } from '@emotion/react';

export interface BoxProps extends HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  as?: string;
  css?: Interpolation<Theme> | CSSObject;
  xs?: Interpolation<Theme> | CSSObject;
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
