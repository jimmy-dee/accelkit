/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        't-primary': 'var(--primary)',
        't-primary-shade': 'var(--primaryShade)',
        't-primary-tint': 'var(--primaryTint)',
        't-nuetral-100': 'var(--nuetral100)',
        't-nuetral-300': 'var(--nuetral300)',
        't-nuetral-500': 'var(--nuetral500)',
        't-nuetral-600': 'var(--nuetral600)',
        't-nuetral-700': 'var(--nuetral700)',
        't-nuetral-900': 'var(--nuetral900)',
        't-danger': 'var(--danger)',
        't-success': 'var(--success)',
        't-warning': 'var(--warning)',
      }
    },
  },
  plugins: [],
}

