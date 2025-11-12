import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 100,
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 100,
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 50,
        }
      }),
      Inspect(),
      tailwindcss(),
    ],
    // base: '/RunSmart/'
  };
});