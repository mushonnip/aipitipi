import Unocss from 'unocss/vite'
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin(), Unocss()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
