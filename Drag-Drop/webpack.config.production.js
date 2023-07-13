const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    // filename: "boundle.[contenthash].js",
    filename: "boundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "",
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
