var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/app.js",
    vendor: ["react","react-dom"]
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js")
  ],
  devServer: {
    hot: true,
    inline: true,
    contentBase: './dist'
  }
};
