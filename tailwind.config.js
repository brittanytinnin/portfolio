/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  exclude: ['dist', '.eslintrc.cjs', 'node_modules', '**/*.config.{js,ts}', 'tailwind.config.js'],
}
