module.exports = {
  entry: "./client/index.js",
  output: {
    path: __dirname,
    filename: "client/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
