module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
      height: {
        half: '50%',
        odds: '75%',
      },
      inset: {
        16: '4rem',
        '-16': '-4rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
