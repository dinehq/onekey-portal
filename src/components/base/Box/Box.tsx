import { CSSProperties, FC } from 'react';

import { jsx } from '@emotion/react';

import { clearStyleProps, filterStyleProps } from './utils';

export interface BoxProps extends CSSProperties {
  children?: React.ReactNode;
  as?: string;
}

export const Box: FC<BoxProps> = (props) => {
  const { children, as = 'div', ...otherProps } = props;

  const innerCSSProps = filterStyleProps(otherProps);
  const normalProps = clearStyleProps(otherProps);

  return jsx(as, { css: { ...innerCSSProps }, ...normalProps }, children);
};
