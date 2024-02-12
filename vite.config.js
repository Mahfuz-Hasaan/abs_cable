import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    minify: true,
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@shared": "/src/shared",
      "@helper": "/src/helper",
      "@layout": "/src/layout",
      "@pageTransition": "/src/pageTransition",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
