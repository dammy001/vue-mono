import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

export default defineConfig({
 plugins: [vue()],
 build: {
  lib: {
   entry: path.resolve(__dirname, 'index.ts'),
   name: 'VueMono',
   fileName: (format) => `index.${format}.js`,
  },
  rollupOptions: {
   external: ['vue'],
   output: {
    globals: {
     vue: 'Vue',
    },
   },
  },
 },
});
