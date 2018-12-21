import { css } from 'styled-components';

const theme = {
  // A type scale of 1.148698355 lets us scale from 1x to 2x in 5 steps
  // Meaning, it holds the property that (x * 1.148698355**5 == 2 * x)
  typeScale: 1.148698355,
  fonts: {
    heading: `'Space Mono', 'Consolas', 'Roboto Mono', 'SFMono-Regular', 'Liberation Mono', 'Courier New', monospace`,
    body: `'URW DIN', 'Bahnschrift', 'Roboto', 'Segoe UI', 'San Francisco', 'Helvetica Neue', sans-serif`,
  },

  colors: {
    primary: '#333333',
    primaryLite: '#777777',
    primaryDark: '#000000',
    primaryAlpha: 'rgba(0,0,0,0.8)',
    secondary: '#F8F8F8',
    secondaryLite: '#FFFFFF',
    secondaryDark: '#EEEEEE',
    secondaryAlpha: 'rgba(255,255,255,0.8)',
  },
};

// Media Templates: https://www.styled-components.com/docs/advanced/#media-templates
const sizes = {
  xxs_m: 360,
  xxs: 400,
  xs: 480,
  xs_sm: 560,
  sm: 640,
  sm_md: 720,
  md: 800,
  lg: 1000,
  xl: 1200,
  xxl: 1600,
};

// Iterate through the breakpoints and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default theme;
export const breakp = sizes;
export const mediaq = media;
