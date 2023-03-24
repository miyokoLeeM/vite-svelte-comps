import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path"

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true,
    },
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'custom-counter',
      fileName: (fmt) => `build.${fmt}.js`
    }
  },
})
