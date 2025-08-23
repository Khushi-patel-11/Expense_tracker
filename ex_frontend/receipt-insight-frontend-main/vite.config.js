// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   // server: {
//   //   host: "::",
//   //   port: 8080,
//   // },
//   plugins: [
//     react()],
//     // mode === 'development' &&
//     // componentTagger(),
//   // ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

// // vite.config.ts or vite.config.js
// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';
// // import path from 'path';

// // export default defineConfig({
// //   plugins: [react()],
// //   resolve: {
// //     alias: {
// //       '@': path.resolve(__dirname, './src')
// //     }
// //   }
// // });

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
