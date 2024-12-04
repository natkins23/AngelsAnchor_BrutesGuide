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
