const mix = require("laravel-mix");
const path = require("path");

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

mix.js("resources/js/app.js", "public/js").vue({
    version: 2
});
mix.sass("resources/sass/app.scss", "public/css");

// .sourceMaps();
// mix.js('resources/js/app.js', 'public/js').extract(['jQuery', 'vue', 'axios']);
mix.version();
mix.override(config => {
    delete config.watchOptions;
});

mix.alias({
    "@": path.join(__dirname, "resources/js")
});

if (mix.inProduction()) {
    // mix.webpackConfig({});
} else {
    // mix.webpackConfig({});
}
