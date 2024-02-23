module.exports = {
  content: [
    './index.html',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-b': 'fade-in-bottom  0.5s cubic-bezier(0.390,  0.575,  0.565,  1.000) both'
      },
      keyframes: {
        'fade-in-bottom': {
          '0%': {
            '-webkit-transform': 'translateY(50px)',
            'transform': 'translateY(50px)',
            'opacity': '0',
          },
          '100%': {
            '-webkit-transform': 'translateY(0)',
            'transform': 'translateY(0)',
            'opacity': '1',
          }
        }
      },
    }
  },
  plugins: []
}
