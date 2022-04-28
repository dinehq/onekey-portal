import { CSSProperties, FC } from 'react';

import { jsx } from '@emotion/react';

export interface BoxProps extends CSSProperties {
  children: React.ReactNode;
  as?: string;
}

export const Box: FC<BoxProps> = (props) => {
  const { children, as = 'div', ...otherProps } = props;

  return jsx(as, { css: { ...otherProps } }, children);
};
