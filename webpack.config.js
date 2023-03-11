const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name]-[id].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};
