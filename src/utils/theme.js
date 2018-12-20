import { css } from 'styled-components'

const theme = {
  fonts: {
    heading: `'Space Mono', 'Consolas', 'Roboto Mono', 'SFMono-Regular', 'Liberation Mono', 'Courier New', monospace`,
    body: `'URW DIN', 'Bahnschrift', 'Roboto', 'Segoe UI', 'San Francisco', 'Helvetica Neue', sans-serif`,
  },

  colors: {
    primary: '#333333',
    primaryLight: '#777777',
    primaryDark: '#000000',
  },
}

/**
 * Typography.js should set the baseFontSize: '8px'.
 * Thus, 1rem = 8px which is consistent with our 8px grid.
 */

// Media Templates: https://www.styled-components.com/docs/advanced/#media-templates
const breakpoints = {
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
}

// Iterate through the breakpoints and create a media template
const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default theme
export const breakp = breakpoints
export const mediaq = media
