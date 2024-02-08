/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '500': '#005293',
          '600': '#004880'
        },
        success: {
          '500': '#56A9B7',
          '600': '#519FAC'
        },
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
]
}

