const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  target: ['web'],
  module: {
    rules: [
      // Loader for ts, tsx, js and jsx files

      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },

      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // Loader for css files
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },

      // Lodaer for sass files
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },

      // Loader for image files
      {
        test: /\.(ico|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      // Loader for font & svg files
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: __dirname + '/src/assets/images',
          to: 'build/assets/images',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
}
