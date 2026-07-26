export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brgreen: '#009739',
        bryellow: '#ffcc00',
        brblue: '#002776',
        brgray: '#07111f',
        brsurface: '#08131f'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(0, 151, 57, 0.24)'
      }
    }
  },
  plugins: []
};
