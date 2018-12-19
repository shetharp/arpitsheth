import { css } from 'styled-components'

const theme = "Theme Name: Marble Haveli"

// Media Templates: https://www.styled-components.com/docs/advanced/#media-templates
const breakpoints = {
    xxs_m: 360,
    xxs: 400,
    xs: 480,
    xs_p: 560,
    sm: 640,
    sm_p: 720,
    md: 800,
    lg: 1000,
    xl: 1200,
    xl: 1600
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