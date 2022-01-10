import { defineConfig } from 'vite';
import legacyPlugin from '@vitejs/plugin-legacy';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    outDir: './build',

    rollupOptions: {
      output: {
        // https://github.com/facebook/regenerator/issues/378
        intro: 'window.regeneratorRuntime = undefined;',

        // use a single chunk for inlining
        // https://github.com/rollup/rollup/issues/2756#issuecomment-821838231
        // manualChunks: {},
      },
    },
  },
  plugins: [reactRefresh(), tsconfigPaths(), legacyPlugin()],
  // resolve: {
  //   alias: [{ find: '@src', replacement: path.resolve(__dirname, './src') }],
  // },
});
