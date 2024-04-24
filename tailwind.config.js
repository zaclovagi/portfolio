/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'codebro': "url('assets/code-bro.svg')",
      }
    },
  },
  plugins: [],
}

