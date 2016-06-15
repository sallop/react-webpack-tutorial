var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?/, loader: "babel" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
    contentBase: './dist'
  }
};
