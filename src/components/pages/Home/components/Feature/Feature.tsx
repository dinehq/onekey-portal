import { FC, ReactNode } from 'react';

import { Section } from '../../../../base';

export interface FeatureProps {
  children?: ReactNode;
}

export const Feature: FC<FeatureProps> = (props) => {
  const { children } = props;

  return <Section>Feature {children}</Section>;
};
