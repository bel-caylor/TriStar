module.exports = {
  plugins: [
    require("postcss-easy-import")(),
    require("postcss-nesting"),
    require('tailwindcss'),
    require('autoprefixer')
  ]
};
