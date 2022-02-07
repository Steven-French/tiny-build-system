const mix = require('laravel-mix');

mix
    .options({
        processCssUrls: false,
        publicPath: 'public',
    })
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css', [
        //
    ]);
