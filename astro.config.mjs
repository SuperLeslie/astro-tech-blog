// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://superleslie.github.io",
  base: "/astro-tech-blog",
  output: "static", // 确保静态生成
  build: {
    inlineStylesheets: "auto", // 内联关键 CSS
  },
  compressHTML: true, // 压缩 HTML
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true, // CSS 代码分割
      rollupOptions: {
        output: {
          manualChunks: {
            // 手动分块优化
            vendor: ["astro"],
          },
        },
      },
    },
  },
});
