var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var config = {
	entry: path.resolve(__dirname,'app/index.js'),
	output: {
		path: path.resolve(__dirname,'build'),
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		hot: true,
		progress: true
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style','css'],
				include: path.resolve(__dirname,'app')
			},
			{
				test: /\.jade$/,
				loader: 'jade'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '中午吃什么',
			template: path.resolve(__dirname,'app/jade/index.jade')

		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
	
}

module.exports = config