const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
    entry: './src/index.tsx',
    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
          },
          {
            test: /\.css$/,
            use: ['style-loader',{
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true
                }
              }]
          }
    
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            // Load a custom template (lodash by default)
            template: 'src/index-react.html'
        }),
        new CheckerPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
  };

