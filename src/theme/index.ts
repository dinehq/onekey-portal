export { useTheme } from '@emotion/react';

export const theme = {
  colors: {
    transparent: 'transparent',
  },
  gradients: {},
  text: {},
  font: {
    size50: '12px',
    size75: '14px',
    size100: '16px',
    size200: '18px',
    size300: '20px',
    size400: '24px',
    size500: '30px',
    size600: '36px',
    size700: '48px',
    size800: '60px',
    size900: '72px',
    size1000: '84px',
    size1100: '96px',

    weight: {
      thin: 100,
      ultraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
  transitions: {
    allCubicBezier: 'all .3s cubic-bezier(.4,0,.2,1)',
    allEaseOut: 'all .3s ease-out',
    allEaseIn: 'all .3s ease-in',
    allEase: 'all .3s ease',
    allLinear: 'all .3s linear',
  },
  transforms: {
    rotate180: 'rotate(180deg)',
    rotate90: 'rotate(90deg)',
    rotate0: 'rotate(0deg)',
  },
  zIndex: {
    top: 10000,
    modal: 9000,
    overlay: 8000,
  },
};

export type MediaBreakpointsKey = keyof typeof mediaBreakpoints;

export const mediaBreakpoints = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1400,
  xxl: 1600,
  xxxl: 1800,
};

export const mediaBreakpointsKeys = Object.keys(
  mediaBreakpoints,
) as MediaBreakpointsKey[];

export const containerMaxWidth = {
  sm: 540,
  md: 720,
  lg: 1200,
  xl: 1300,
  xxl: 1400,
  xxxl: 1500,
};

export const LanguageMap = {
  zh: '中文',
  en: 'English',
};

export type LanguageMapKeys = keyof typeof LanguageMap;

declare module '@emotion/react' {
  type CustomTheme = typeof theme;

  export interface Theme extends CustomTheme {
    mediaBreakpoints: typeof mediaBreakpoints;
  }
}
