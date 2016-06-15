module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?/, loader: "babel" }
    ]
  }
};
