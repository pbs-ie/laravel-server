const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/ts/**/*.{jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", "Nunito", ...defaultTheme.fontFamily.sans],
                serif: ["Cardo", ...defaultTheme.fontFamily.serif],
                subtitle: ["Lato", ...defaultTheme.fontFamily.sans],
                title: ["Roboto Slab", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                "bibletime-pink": "#c551b4",
                "bibletime-orange": "#f78d22",
                "bibletime-red": "#d72424",
                "bibletime-green": "#008c44",
                "bibletime-blue": "#1e3877",
                kidspace: "#f0c864",
                teenspace: "#f07878",
                lifespace: "#6edcc8",
                pbsblue: "#2A62E7",
            },
        },
    },

    safelist: [
        "kidspace",
        "teenspace",
        "lifespace",
        "pbsblue",
        "hover:bg-blue-500",
        {
            pattern: /bg-bibletime-(pink|orange|red|green|blue)/,
            variants: ["hover"],
        },
    ],

    plugins: [require("@tailwindcss/forms")],
};
