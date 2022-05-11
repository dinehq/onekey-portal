import { FC } from 'react';

import { CSSObject, useTheme } from '@emotion/react';

import { Box, BoxProps } from '../Box';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps extends BoxProps {
  disabled?: boolean;
  variant?: ButtonVariant;
  themeColor?: 'blue' | 'orange';
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const { assign } = Object;

export const Button: FC<ButtonProps> = (props) => {
  const theme = useTheme();
  const {
    children,
    disabled = false,
    variant = 'primary',
    // isLoading = false,
    themeColor = 'brand',
    rightIcon,
    leftIcon,
    ...otherProps
  } = props;

  let color700 = '';
  let color800 = '';
  let color900 = '';

  if (themeColor === 'brand') {
    color700 = theme.colors.brand300;
    color800 = theme.colors.brand400;
    color900 = theme.colors.brand500;
  }

  const buttonStyle: CSSObject = {
    ...theme.text.medium300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 16px',
    fontStyle: 'normal',
    cursor: 'pointer',
    borderRadius: 100,
  };

  if (disabled) {
    const disabledStyle: CSSObject = {
      opacity: 0.5,
      cursor: 'not-allowed',
    };
    assign(buttonStyle, disabledStyle);
  }

  if (variant === 'primary') {
    const primaryButtonStyle = {
      color: 'black',
      background: theme.colors.brand400,
      borderWidth: 0,
      ':hover': {
        background: color700,
      },
      ':active': {
        background: color900,
      },
    };

    assign(buttonStyle, primaryButtonStyle);
  } else if (variant === 'secondary') {
    const secondaryButtonStyle = {
      color: color800,
      background: 'white',
      borderWidth: 0,
      ':hover': {
        color: color700,
      },
      ':active': {
        color: color900,
      },
    };

    assign(buttonStyle, secondaryButtonStyle);
  } else if (variant === 'outline') {
    const outlineButtonStyle = {
      color: theme.colors.gray900,
      background: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.gray900,
      ':hover': {
        color: color700,
        borderColor: color700,
      },
      ':active': {
        color: color900,
        borderColor: color900,
      },
    };

    assign(buttonStyle, outlineButtonStyle);
  } else if (variant === 'ghost') {
    const ghostButtonStyle = {
      color: color800,
      background: 'white',
      borderWidth: 0,
      ':hover': {
        color: color700,
      },
      ':active': {
        color: color900,
        background: theme.colors.gray400,
      },
    };

    assign(buttonStyle, ghostButtonStyle);
  }

  return (
    <Box as="button" xs={buttonStyle} {...otherProps}>
      {leftIcon && <Box css={{ marginRight: 8 }}>{leftIcon}</Box>}
      {children}
      {rightIcon && <Box css={{ marginLeft: 8 }}>{rightIcon}</Box>}
    </Box>
  );
};
