var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/x.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
};
