const webpack = require('webpack');
const pkg = require('./package.json');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
module.exports = {
    publicPath: './',
    css: {
        //css打包在js文件中
        extract: false
    },
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                extract:true
            })
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit: 20000}))
    },
    configureWebpack: {
        plugins: [
            new SpriteLoaderPlugin(),
            new webpack.BannerPlugin({
                banner: pkg.name + ' - ' + pkg.description + '\n' +
                    '@version ' + pkg.version + '\n' +
                    '@link ' + pkg.homepage + '\n' +
                    '@author ' + pkg.author + '\n' +
                    '杭州物点网络科技有限公司',
                //raw: true
            })
        ]
    }
};
