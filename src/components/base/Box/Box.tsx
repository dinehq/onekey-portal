import { CSSProperties, FC } from 'react';

import { Interpolation, Theme, jsx } from '@emotion/react';

import { clearStyleProps, filterStyleProps } from './utils';

export interface BoxProps extends CSSProperties {
  children?: React.ReactNode;
  as?: string;
  css?: Interpolation<Theme> | CSSProperties;
}

export const Box: FC<BoxProps> = (props) => {
  const { children, as = 'div', css = {}, ...otherProps } = props;

  const innerCSSProps = filterStyleProps(otherProps);
  const normalProps = clearStyleProps(otherProps);

  return jsx(
    as,
    {
      css: {
        ...innerCSSProps,
        // @ts-ignore
        ...css,
      },
      ...normalProps,
    },
    children,
  );
};
