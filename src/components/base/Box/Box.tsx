import { FC, HTMLProps } from 'react';

import { CSSObject, Interpolation, Theme, jsx } from '@emotion/react';
import deepmerge from 'deepmerge';

export interface BoxProps extends HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  as?: string;
  css?: Interpolation<Theme> | CSSObject;
  xs?: Interpolation<Theme> | CSSObject;
  s?: Interpolation<Theme> | CSSObject;
  m?: Interpolation<Theme> | CSSObject;
  l?: Interpolation<Theme> | CSSObject;
  xl?: Interpolation<Theme> | CSSObject;
  xxl?: Interpolation<Theme> | CSSObject;
}

const mq = (bp: number) => `@media (min-width: ${bp}px)`;

export const Box: FC<BoxProps> = (props) => {
  const {
    children,
    as = 'div',
    css = {},
    xs = {},
    s = {},
    m = {},
    l = {},
    xl = {},
    xxl = {},
    ...otherProps
  } = props;

  const innerCSS = deepmerge.all([
    css,
    xs,
    {
      [mq(414)]: s,
      [mq(960)]: m,
      [mq(1200)]: l,
      [mq(1440)]: xl,
      [mq(1736)]: xxl,
    },
  ] as CSSObject[]);

  return jsx(
    as,
    {
      css: innerCSS,
      ...otherProps,
    },
    children,
  );
};
