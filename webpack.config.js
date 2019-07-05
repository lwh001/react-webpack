const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports={
    //入口
    entry:{
        app:'./src/index.js'
    },
    //出口
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        //规则
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        //打包后需要到index.html模板
        new HtmlWebpackPlugin({
            title: 'webpack',
            template:'./public/index.html'
        }),
        //热启动配置
        new webpack.NamedModulesPlugin(),      
		new webpack.HotModuleReplacementPlugin()
    ],
    //热启动配置
    devServer: {
		contentBase: './build',
		hot: true
	},
}