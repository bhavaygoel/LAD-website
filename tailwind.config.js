/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
  
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',    // Blue color for primary elements
        secondary: '#6b7280',  // Gray color for secondary elements
        gray: '#718096',       // Lighter gray for text
      },
    },
  },
  plugins: [],
});