import webpack from 'webpack'
import merge from 'webpack-merge'
import baseWebpackConfig from './webpack.base.conf.babel'

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        publicPath: '/',
        filename: `${baseWebpackConfig.externals.paths.assets}js/[name].[hash].js`,
        path: baseWebpackConfig.externals.paths.dist
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

export default new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})