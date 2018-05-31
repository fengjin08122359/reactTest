const path = require("path");
const webpack = require("webpack")
const webpackMerge = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const autoprefixer = require("autoprefixer");
const precss = require("precss");
const utils = require("./utils");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const baseConfig = require("./webpack.base.js");
const config = require("./config");
const port = config.port;

module.exports = function(env){
	console.log(`
#################################################
  Server is listening at: http://localhost:${config.port} 
#################################################
	`);
	return webpackMerge(baseConfig(env),{
		entry:[
		    "react-hot-loader/patch",
	        "webpack-dev-server/client?http://localhost:" + port,
		    "webpack/hot/only-dev-server",
			path.resolve(__dirname,"../src/main.js"),
		],
    module:{
      loaders: [{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
		  }]
    },
	  devtool: "cheap-module-source-map",
		plugins:[
			new webpack.HotModuleReplacementPlugin(),
			new OpenBrowserPlugin({ url: "http://localhost:" + port }),
			new webpack.LoaderOptionsPlugin({
				options:{
					postcss(){
						return[precss, autoprefixer];
					}
				}
			})
		],
		devServer:{
			hot:true,
			port:config.port,
			historyApiFallback:true,
		}
	})
}