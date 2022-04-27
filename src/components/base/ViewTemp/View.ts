import {
  CSSProperties,
  ComponentClass,
  FC,
  FunctionComponent,
  HTMLAttributes,
  ReactHTML,
  Ref,
  forwardRef,
} from 'react';

import { CSSObject, SerializedStyles, jsx } from '@emotion/react';

import {
  MediaBreakpointsKey,
  mediaBreakpoints,
  mediaBreakpointsKeys,
} from '../../theme';

import { cssProperties } from './cssProperties';

const clearObject = (obj: any) => {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
};

const filterProps = (props: any, keys: string[]) => {
  const filteredProps: any = {};
  for (const key in props) {
    if (keys.includes(key)) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
};

const clearProps = (props: any, keys: string[]) => {
  const filteredProps: any = {};
  for (const key in props) {
    if (!keys.includes(key)) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
};

const filterStyleProps = (props: any) =>
  clearObject(filterProps(props, cssProperties));

const clearStyleProps = (props: any) =>
  clearProps(props, [...cssProperties, ...mediaBreakpointsKeys]);

interface ExternalStyleProps extends CSSProperties {
  sm?: CSSObject;
  md?: CSSObject;
  lg?: CSSObject;
  xl?: CSSObject;
  xxl?: CSSObject;
  xxxl?: CSSObject;
}

export interface ViewProps<T = HTMLElement>
  extends Omit<HTMLAttributes<T>, 'color' | 'translate'>,
    ExternalStyleProps {
  as?: keyof ReactHTML | string | FunctionComponent | ComponentClass;
  css?: boolean | SerializedStyles | (SerializedStyles | boolean)[];
  ref?: Ref<T>;
  hover?: CSSProperties;
  activeStyle?: CSSProperties;
  focusStyle?: CSSProperties;
  groupHoverStyle?: CSSProperties;
  lastChildStyle?: CSSProperties;
  disabledStyle?: CSSProperties;
  externalProps?: ViewProps;
  isMounted?: boolean;
  label?: string;
  group?: boolean;
}

export const View: FC<ViewProps> = forwardRef<HTMLElement, ViewProps>(
  (props, ref) => {
    const {
      children,
      hidden,
      as = 'div',
      sm,
      md,
      lg,
      xl,
      xxl,
      xxxl,
      hover = {},
      activeStyle = {},
      disabledStyle = {},
      groupHoverStyle = {},
      lastChildStyle = {},
      externalProps = {},
      label = 'View',
      group = false,
      isMounted = true,
      ...omittedProps
    } = props;

    if (!isMounted) return null;

    const {
      sm: smMedia,
      md: mdMedia,
      lg: lgMedia,
      xl: xlMedia,
      xxl: xxlMedia,
      xxxl: xxxlMedia,
      children: externalChildren,
      hover: externalHoverCss,
      activeStyle: externalActiveStyle,
      disabledStyle: externalDisabledStyle,
      groupHoverStyle: externalGroupHoverStyle,
      lastChildStyle: externalLastChildStyle,
      group: externalGroup,
      ...othersExternalProps
    } = externalProps;

    const breaks = {
      sm: {
        ...sm,
        ...smMedia,
      },
      md: {
        ...md,
        ...mdMedia,
      },
      lg: {
        ...lg,
        ...lgMedia,
      },
      xl: {
        ...xl,
        ...xlMedia,
      },
      xxl: {
        ...xxl,
        ...xxlMedia,
      },
      xxxl: {
        ...xxxl,
        ...xxxlMedia,
      },
    };

    if (hidden) {
      return null;
    }

    const hoverCss: CSSObject = {
      ...filterStyleProps(hover),
      ...filterStyleProps(externalHoverCss),
    };
    const activeStyleCss: CSSObject = {
      ...filterStyleProps(activeStyle),
      ...filterStyleProps(externalActiveStyle),
    };
    const groupHoverStyleCss: CSSObject = {
      ...filterStyleProps(groupHoverStyle),
      ...filterStyleProps(externalGroupHoverStyle),
    };
    const disabledStyleCss: CSSObject = {
      ...filterStyleProps(disabledStyle),
      ...filterStyleProps(externalDisabledStyle),
    };
    const lastChildStyleCss: CSSObject = {
      ...filterStyleProps(lastChildStyle),
      ...filterStyleProps(externalLastChildStyle),
    };
    const innerCss: CSSObject = filterStyleProps(props);

    Object.keys(breaks).map((key) => {
      const mediaValue = breaks[key as MediaBreakpointsKey];
      const maxWidth = mediaBreakpoints[key as MediaBreakpointsKey];

      if (mediaValue) {
        innerCss[`@media (min-width: ${maxWidth}px)`] = mediaValue;
      }
    });

    return jsx(
      as,
      {
        ref,
        className: group || externalGroup ? 'group' : '',
        css: {
          ':hover': hoverCss,
          ':active': activeStyleCss,
          ':disabled': disabledStyleCss,
          '.group:hover &': groupHoverStyleCss,
          '&:last-child':
            Object.keys(lastChildStyleCss).length > 0
              ? lastChildStyleCss
              : undefined,
          ...innerCss,
          ...filterStyleProps(othersExternalProps),
        },
        ...clearStyleProps(omittedProps),
        ...clearStyleProps(othersExternalProps),
        component: label,
      },
      children ?? externalChildren,
    );
  },
);

View.displayName = 'View';
