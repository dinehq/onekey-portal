import { FC, ReactNode } from 'react';

export interface ProductPanelProps {
  children?: ReactNode;
}

export const ProductPanel: FC<ProductPanelProps> = (props) => {
  const { children } = props;

  return <div>ProductPanel {children}</div>;
};
