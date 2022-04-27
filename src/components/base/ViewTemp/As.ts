import { AnchorHTMLAttributes, FC, HTMLProps } from 'react';

import { ViewProps } from '.';

import { jsx } from '@emotion/react';

import { View } from './View';

function createAlias(as: string, props: ViewProps) {
  return jsx<ViewProps>(View, { as, ...props });
}

type FCView<T = HTMLElement> = FC<ViewProps<T>>;

export const A: FC<ViewProps & AnchorHTMLAttributes<HTMLElement>> = (props) =>
  createAlias('a', props);
export const Span: FCView = (props) => createAlias('span', props);
export const Ul: FCView = (props) => createAlias('ul', props);
export const Li: FCView = (props) => createAlias('li', props);
export const Section: FCView = (props) => createAlias('section', props);
export const H1: FCView = (props) => createAlias('h1', props);
export const H2: FCView = (props) => createAlias('h2', props);
export const H3: FCView = (props) => createAlias('h3', props);
export const H4: FCView = (props) => createAlias('h4', props);
export const P: FCView = (props) => createAlias('p', props);
export const Img: FC<
  ViewProps<HTMLImageElement> & HTMLProps<HTMLImageElement>
> = (props) => createAlias('img', props);
