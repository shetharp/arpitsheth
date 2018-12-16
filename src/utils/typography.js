import Typography from 'typography'

const typography = new Typography({
  title: "Agra Marble",
  baseFontSize: '24px',
  baseLineHeight: 1.5,
  headerFontFamily: [
    'Space Mono',
    'Consolas',
    'Roboto Mono',
    'SFMono-Regular',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
  bodyFontFamily: [
    'URW DIN',
    'Bahnschrift',
    'Roboto',
    'Segoe UI',
    'San Francisco',
    'Helvetica Neue',
    'sans-serif',
  ],
  bodyWeight: 300,
//   headerColor: 'rgba(51,51,51,1)',
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
