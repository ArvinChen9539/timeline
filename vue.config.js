const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = {
    css: {
        //css打包在js文件中
        extract: false
    },
    configureWebpack: {
        plugins: [
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