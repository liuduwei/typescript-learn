const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    // filename: "boundle.[contenthash].js",
    filename: "boundle.js",
    path: __dirname + "dist",
    // path: "public",
    // publicPath: "./dist",
    publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname),
    },
    // contentBase: path.resolve(__dirname, "dist"),
    // publicPath: "/",
    // port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: { extensions: [".ts", ".js"] },
};
