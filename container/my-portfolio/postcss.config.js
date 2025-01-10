// postcss.config.js (for ES Modules)
import tailwindcss from 'tailwindcss';  // Import Tailwind CSS using ES module syntax
import autoprefixer from 'autoprefixer';  // Import Autoprefixer using ES module syntax

export default {
  plugins: [
    tailwindcss,  // Use the imported Tailwind CSS
    autoprefixer,  // Use the imported Autoprefixer
  ],
};