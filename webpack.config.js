const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')


module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
  // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',
    entry: './src/index.tsx',
    mode: 'development',
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
    ]
  };

