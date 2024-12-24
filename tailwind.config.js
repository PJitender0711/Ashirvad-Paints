/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F8F7F0', // You can name it anything you like
        'contactus': '#24231D', //contact page color
        'customgray' : '#A5A49A', 
        'footer' : '#1F1E17',
      },
    },
  },
  plugins: [],
}

