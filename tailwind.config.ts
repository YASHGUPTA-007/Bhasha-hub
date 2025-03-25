export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#3B82F6',
              '&:hover': {
                color: '#60A5FA',
              },
            },
            code: {
              color: '#E5E7EB',
              backgroundColor: '#374151',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            pre: {
              backgroundColor: '#1F2937',
              color: '#E5E7EB',
              overflowX: 'auto',
              code: {
                backgroundColor: 'transparent',
                borderWidth: '0',
                borderRadius: '0',
                padding: '0',
                fontWeight: '400',
                color: 'inherit',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                lineHeight: 'inherit',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};