const mix = require("laravel-mix");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
require("vuetifyjs-mix-extension");

// require("laravel-mix-clean");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "js")
    .vuetify()
    .vue({
        version: 2
    })
    .setPublicPath(path.normalize("public/dist"));
mix.sourceMaps();
mix.version();
mix.override(config => {
    delete config.watchOptions;
});
mix.extract();
mix.alias({
    "@": path.join(__dirname, "resources/js"),
    "@node_modules": path.join(__dirname, "node_modules")
});

let base = {
    output: {
        chunkFilename: "js/[name].js",
        publicPath: "/dist/"
    }
};
if (mix.inProduction()) {
    mix.webpackConfig({ ...base });
} else {
    mix.webpackConfig({
        ...base,
        plugins: [new BundleAnalyzerPlugin()]
    });
}
