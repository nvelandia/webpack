const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ruleForJavaScript = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
  },
};

const ruleForCss = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const rules = [ruleForJavaScript, ruleForCss];

// module.exports es un obj pero puede ser una funcion que devuelva un obj
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  module: {
    rules,
  },
  devServer: {
    open: true,
    port: 3000,
    compress: true,
  },
};
