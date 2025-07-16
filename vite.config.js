import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    assetsDir: "assets",
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
