export { useTheme } from '@emotion/react';

export const theme = {
  colors: {
    transparent: 'transparent',
  },
  gradients: {},
  fonts: {
    PingFangSC: 'PingFang SC, sans-serif',
    StyreneA: 'Styrene A Web, sans-serif',
    Inter: 'Inter, sans-serif',
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
  export interface Theme {
    colors: typeof theme.colors;
    fonts: typeof theme.fonts;
    transitions: typeof theme.transitions;
    zIndex: typeof theme.zIndex;
    gradients: typeof theme.gradients;
    transforms: typeof theme.transforms;
  }
}
