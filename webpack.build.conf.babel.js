import merge from 'webpack-merge'
import {CleanWebpackPlugin} from 'clean-webpack-plugin'
import baseWebpackConfig from './webpack.base.conf.babel'

const buildWebpackConfig = merge(baseWebpackConfig, {
	mode: 'production',
	output: {
		publicPath: './',
		filename: `${baseWebpackConfig.externals.paths.assets}js/[name].[hash].js`,
		path: baseWebpackConfig.externals.paths.dist
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin()
	]
})

export default new Promise((resolve, reject) => {
	resolve(buildWebpackConfig)
})