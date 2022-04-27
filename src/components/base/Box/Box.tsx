import { CSSProperties, FC } from 'react';

export interface BoxProps extends CSSProperties {
  children: React.ReactNode;
}

export const Box: FC<BoxProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <div
      css={{
        ...otherProps,
      }}
    >
      {children}
    </div>
  );
};
