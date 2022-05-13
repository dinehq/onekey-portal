import { FC, HTMLProps } from 'react';

import { CSSObject, Interpolation, Theme, jsx } from '@emotion/react';
import deepmerge from 'deepmerge';

export interface StyleProps {
  css?: Interpolation<Theme> | CSSObject;
  xs?: Interpolation<Theme> | CSSObject;
  s?: Interpolation<Theme> | CSSObject;
  m?: Interpolation<Theme> | CSSObject;
  l?: Interpolation<Theme> | CSSObject;
  xl?: Interpolation<Theme> | CSSObject;
  xxl?: Interpolation<Theme> | CSSObject;
}

export interface BoxProps extends HTMLProps<HTMLElement>, StyleProps {
  children?: React.ReactNode;
  as?: string;
  externalProps?: StyleProps;
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
    externalProps = {},
    ...otherProps
  } = props;

  const innerCSS = deepmerge.all([
    xs,
    {
      [mq(414)]: s,
      [mq(960)]: m,
      [mq(1200)]: l,
      [mq(1440)]: xl,
      [mq(1920)]: xxl,
    },
    css,
    externalProps.css || {},
    externalProps.xs || {},
    externalProps.s || {},
    externalProps.m || {},
    externalProps.l || {},
    externalProps.xl || {},
    externalProps.xxl || {},
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
