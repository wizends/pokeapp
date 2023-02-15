/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fillGrid: 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    }
  },
  plugins: []
}
