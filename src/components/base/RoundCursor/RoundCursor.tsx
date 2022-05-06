import { FC, ReactNode } from 'react';

export interface RoundCursorProps {
  children?: ReactNode;
}

export const RoundCursor: FC<RoundCursorProps> = (props) => {
  const { children } = props;

  return <div>RoundCursor {children}</div>;
};
