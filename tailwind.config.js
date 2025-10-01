module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Medical Forest Theme
        primary: {
          DEFAULT: "#239148", // green-600 - Trust-building medical green
          50: "#E8F5E8", // green-50 - Lightest tint
          100: "#C8E6C9", // green-100 - Light tint
          200: "#A5D6A7", // green-200 - Medium light
          300: "#81C784", // green-300 - Medium
          400: "#66BB6A", // green-400 - Medium dark
          500: "#4CAF50", // green-500 - Gentle success states
          600: "#239148", // green-600 - Primary brand color
          700: "#388E3C", // green-700 - Darker variant
          800: "#2E7D32", // green-800 - Very dark
          900: "#2B4D2A", // green-900 - Sophisticated depth
        },
        
        // Secondary Colors
        secondary: {
          DEFAULT: "#2B4D2A", // green-900 - Sophisticated depth
          light: "#4CAF50", // green-500 - Accent color
        },
        
        // Background Colors
        background: {
          DEFAULT: "#FAFAFA", // gray-50 - Clean canvas
          surface: "#FFFFFF", // white - Pure content areas
        },
        
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-700 - Readable authority
          secondary: "#546E7A", // blue-gray-600 - Supporting information
        },
        
        // State Colors
        success: "#4CAF50", // green-500 - Encouraging confirmation
        warning: "#FF9800", // orange-500 - Helpful attention
        error: "#E57373", // red-300 - Gentle correction
        
        // Border Colors
        border: {
          DEFAULT: "#E0E0E0", // gray-300 - Minimal separation
          light: "#F5F5F5", // gray-100 - Very light borders
        },
        
        // Gray Scale for Additional Flexibility
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        }
      },
      
      fontFamily: {
        // Typography Standards
        headline: ['Inter', 'sans-serif'], // Headlines - Modern clarity
        body: ['Source Sans Pro', 'sans-serif'], // Body - Exceptional readability
        accent: ['Playfair Display', 'serif'], // Accents - Elegant serif
        sans: ['Source Sans Pro', 'sans-serif'], // Default sans
        serif: ['Playfair Display', 'serif'], // Default serif
      },
      
      fontSize: {
        // Responsive Typography Scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      boxShadow: {
        // Custom Shadow System
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 6px 16px rgba(0, 0, 0, 0.12)',
        'focus': '0 0 0 3px rgba(35, 145, 72, 0.1)',
      },
      
      animation: {
        // Gentle Animations
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'gentle-bounce': 'gentleBounce 300ms ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      
      transitionDuration: {
        // Custom Transition Timing
        'gentle': '300ms',
      },
      
      transitionTimingFunction: {
        // Custom Easing
        'gentle': 'ease-out',
      },
      
      spacing: {
        // Additional Spacing Options
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        // Consistent Border Radius
        'card': '0.5rem',
        'button': '0.375rem',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-gentle': {
          transition: 'all 300ms ease-out',
        },
        '.focus-ring': {
          '&:focus': {
            outline: '2px solid #239148',
            outlineOffset: '2px',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}