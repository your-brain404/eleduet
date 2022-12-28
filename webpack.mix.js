const mix = require("laravel-mix");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
require("laravel-mix-svg-vue");

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
    .vue({
        version: 2
    })
    .svgVue({
        svgPath: "/storage/app/public/img/mdi-icons"
    })
    .setPublicPath(path.normalize("public/dist"));

mix.version();
mix.override(config => {
    delete config.watchOptions;
});

mix.extract(["vue", "axios"]);
mix.extract(["vue-cool-lightbox"], "vue-cool-lightbox");
mix.extract(["vue-select"], "vue-select");
mix.extract(["vue-carousel"], "vue-carousel");
mix.extract(["@tinymce"], "@tinymce");
mix.extract(["vue-recaptcha-v3"], "vue-recaptcha-v3");
mix.extract(["vue-functional-data-merge"], "vue-functional-data-merge");
mix.extract(["vue-summernote"], "vue-summernote");
mix.alias({
    "@": path.join(__dirname, "resources/js"),
    "@node_modules": path.join(__dirname, "node_modules"),
    "@scss": path.join(__dirname, "resources/scss")
});

let base = {
    output: {
        chunkFilename: "js/[name].js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: "sass-loader",
                options: {
                    additionalData: `
                 @import "~bootstrap/scss/_functions.scss";
                 @import "~bootstrap/scss/_variables.scss";
                 @import "~bootstrap/scss/_mixins.scss";
                 @import "~@/plugins/bootstrap-vue/src/_variables";
                 `
                }
            }
        ]
    }
};
if (mix.inProduction()) {
    base.output.chunkFilename = "js/[name].[contenthash].js";
    mix.webpackConfig({ ...base });
} else {
    mix.sourceMaps();
    mix.webpackConfig({
        ...base,
        plugins: [new BundleAnalyzerPlugin()]
    });
}
