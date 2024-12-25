/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                heartbeat: 'ping 1.4s cubic-bezier(.8 , 2, .6, .1) infinite',
                fall: 'fall 10s linear',
                sway: 'sway 5s ease-in-out infinite',
            },
            keyframes: {
                heartbeat: {
                    '25%, 50%': {
                        transform: 'scale(2)',
                        opacity: '1',
                    },
                    '75%, 100%': {
                        transform: 'scale(2)',
                        opacity: '1',
                    },
                },
                fall: {
                    '0%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(100vh)' },
                  },
                  sway: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(20px)' },
                  },
            },
            fontSize: {
                xs: [
                    '.75rem',
                    {
                        lineHeight: '1rem',
                    },
                ],
            },
        },
    },
    plugins: [],
}
