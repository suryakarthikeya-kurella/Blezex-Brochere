/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { accent: '#FF4D1C', ink: '#111111', paper: '#F7F6F2', line: '#E7E5DF', body: '#333333', muted: '#616161' },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: { hard: '6px 6px 0 #111111', hardAccent: '6px 6px 0 #FF4D1C', hardSm: '3px 3px 0 #111111' },
    },
  },
  plugins: [],
}
