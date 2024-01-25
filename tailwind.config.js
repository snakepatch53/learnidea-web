/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                logo: ["logo", "sans-serif"],
                link: ["link", "sans-serif"],
                title: ["title", "sans-serif"],
                content: ["content", "sans-serif"],
                content2: ["content2", "sans-serif"],
            },
        },
    },
    plugins: [],
};
