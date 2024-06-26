import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#2e2deb',
        'color-secundary': '#00facd',
        'color-logo': '#c2eafb',
        'color-gray': '#25272D',
        'color-header-footer': 'rgba(0, 0, 0, .1)',
        'color-section1': '#303031'
      },
      fontFamily: {
        'font-heebo': ['Heebo', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '20vw': '20vw',
        '45vw': '45vw',
      },
      height: {
        'headerMobile-height-calc': 'calc(100% + 50px)',
        'error-height-calc': 'calc(100vh - 105px)'
      }
    },
  },
  plugins: [],
}
export default config
