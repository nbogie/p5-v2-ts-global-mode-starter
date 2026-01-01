//@ts-check

import { defineConfig } from "vite";
export default defineConfig((_opts) => {
  /** @type {import('vite').UserConfig} */

  const config = {
    //vite normally assumes the app is hosted out of /,
    //which messes with local testing from dist, for example.
    //We'll have it instead generate relative paths.
    base: "./",

    build: {
      minify: false,
      modulePreload: { polyfill: false },
      //https://rollupjs.org/configuration-options/
      rollupOptions: {
        external: ["p5", "p5/global"],
        preserveEntrySignatures: "strict",
        output: {
          format: "umd",
          globals: {
            p5: "p5",
          },
        },
      },
    },
    plugins: [
      // Removes any script tag containing the p5 URL during dev mode
      // So that p5 isn't loaded twice (script tag + imports).
      // (In production, imports of p5 will have been stripped from our js files.)
      {
        name: "strip-p5-from-html",
        transformIndexHtml(html) {
          const isDev = process.env.NODE_ENV === "development";
          if (isDev) {
            return html.replace(/<script.*p5@.*<\/script>/, "");
          }
          return html;
        },
      },
    ],
  };
  return config;
});
