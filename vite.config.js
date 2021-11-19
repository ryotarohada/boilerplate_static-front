import reactPlugin from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactPlugin()],
  server: {
      open: true
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    sourcemap: true,
    outDir: "../dist"
  },
  root: "./src"
})