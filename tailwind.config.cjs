// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./index.html"
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    darkMode: 'media',
    theme: {
        fontFamily: {
            sans: ['IBM Plex Sans', 'sans-serif'],
            serif: ['IBM Plex Serif', 'serif'],
            mono: ['IBM Plex Mono', 'monospace'],
        },
        extend: {
            colors: {
                primary: '#134074',
                secondary: '#90E0EF',
            }
        },
    },
    plugins: [],
};