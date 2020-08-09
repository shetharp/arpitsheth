/* eslint-disable @typescript-eslint/ban-ts-comment */
import { merge } from "theme-ui";
import { themePolaroid, ThemePolaroid } from "@shetharp/gatsby-theme-polaroid";
import "typeface-space-mono";

/**
 * The colors for this site.
 */
// @ts-ignore
const colors: ThemePolaroid["colors"] = {
  // @ts-ignore
  primary: themePolaroid.colors.azure.base,
  // @ts-ignore
  secondary: themePolaroid.colors.blush.base,
};

/**
 * The fonts for this site.
 *
 * "DM Mono" is self hosted and automatically imported from npm package `@shetharp/gatsby-theme-polaroid`.
 * "Space Mono" is self hosted and imported from npm package `typeface-space-mono`. *
 * "urw-din" is imported with `gatsby-plugin-web-font-loader` from Adobe Fonts (Typekit).
 */
const fonts: ThemePolaroid["fonts"] = {
  body:
    '"urw-din", Bahnschrift, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  heading:
    '"Space Mono", "Roboto Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  monospace:
    '"Space Mono", "Roboto Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

/**
 * The theme overrides for this site.
 *
 * https://theme-ui.com/packages/gatsby-theme-ui-blog/#theming
 * https://theme-ui.com/guides/merging-themes/
 */
export const themeSite = merge(themePolaroid, {
  colors,
  fonts,
  fontWeights: {
    body: 300,
    bold: 500,
    heading: 700,
  },
});
export default themeSite;
