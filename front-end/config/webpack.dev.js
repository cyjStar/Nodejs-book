const path = require('path')
// 静态资源打包
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'none', // 模式
    entry: { // 入口
        index: './src/javascripts/index'
    },
    output: { // 输出
        filename: '[name].js',
        path: path.join(__dirname, '../dev')
    },
    devServer: {
        port: 9999,
        host: '',
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new CopyWebpackPlugin([ // 放置静态资源
            { from: 'static', to: 'static' }
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        })
    ],
    module: {
        rules: [
            {
                test: /.(jpg|jpeg|png|gif)$/,
                use: [
                    { loader: 'url-loader', options: { limit: 8100 } }
                ]
              },
              {
                  test: /.html$/,
                  use: ['string-loader']
              },
              // loader的使用是从后向前的
              {
                  test: /.(css|scss)$/,
                  use: [
                      'style-loader',// 把它拿出去
                      'css-loader', // 找到引入的这些css代码
                      'sass-loader' // 将引入的scss代码编译成css代码
                  ]
              },
              {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader?optional=runtime',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/plugin-transform-runtime']
                    }
                  }
              }
        ]
    },
    resolve: { // 分解
        alias: { // 别名
            "@": path.resolve(__dirname, '../src'),
            "@controllers": path.resolve(__dirname, '../src/javascripts/controllers'),
            "@modules": path.resolve(__dirname, '../src/javascripts/modules'),
            "@api": path.resolve(__dirname, '../src/javascripts/api'),
            "@models": path.resolve(__dirname, '../src/javascripts/models'),
            "@utils": path.resolve(__dirname, '../src/javascripts/utils'),
            "@views": path.resolve(__dirname, '../src/javascripts/views'),
            "@assets": path.resolve(__dirname, '../src/assets'),
            "@styles": path.resolve(__dirname, '../src/stylesheets'),
            "@router": path.resolve(__dirname, '../src/javascripts/router'),
        }
    }
}
