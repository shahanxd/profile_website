/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      animation: {
        'custom-bounce': 'customBounce 0.5s ease-in-out',
      },
      keyframes: {
        customBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }, // Reduced the bounce height
        },
      },

      scale: {
        103: '1.03', // Add scale-103 as 103% scaling
      },

      fontFamily: {
        'code' : ['"Source Code Pro"' , 'monospace'] ,
      }
    },
    
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0d6efd",
          "secondary": "#6c757d",
          "accent": "#0dcaf0",
          "neutral": "#212529",
          "base-100": "#000000",
          "info": "#0dcaf0",
          "success": "#198754",
          "warning": "#ffc107",
          "error": "#dc3545",
        },
      },
    ],
  },
}
