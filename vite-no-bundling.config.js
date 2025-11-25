//WIP - not correct yet, regarding index.no-bundling.html

//reading:
//configuring vite: https://vite.dev/config/
//build options: https://vite.dev/config/build-options
//building for production: https://vite.dev/guide/build
import { defineConfig } from "vite";
import { resolve } from "path"; // Need this to resolve the file path
export default defineConfig(({ mode }) => {
    // Vite automatically sets mode to 'development' for dev and 'production' for build.
    const isProduction = mode === "production";

    return {
        build: {
            //more readable code for upload on openprocessing etc
            minify: false,

            rollupOptions: {
                // input: {
                //     app: isProduction
                //         ? resolve(__dirname, "index.no-bundling.html")
                //         : resolve(__dirname, "index.html"),
                // },

                //externalize deps that shouldn't be bundled - e.g. p5
                external: ["p5"],
                //https://rollupjs.org/configuration-options/
                preserveEntrySignatures: "strict",
                output: {
                    format: "es",

                    //if you don't want a consolidated single file output, enable preserveModules
                    // preserveModules: true,

                    // chunkFileNames: `[name].js`, //simplified names
                    // entryFileNames: `[name].js`,
                },
            },
        },
    };
});
