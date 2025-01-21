var path = require("path");

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var webpackConfig = {
  mode: "production",
  entry: {
    spider: "./src/spider.js",
  },
  devServer: {
    contentBase: __dirname,
  },
  output: {
    filename: "bundle.js",
    path: path.join(path.resolve(__dirname), "/dist"),
    library: "[name]",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "../src"), "node_modules"],
  },
  plugins: [new UglifyJSPlugin()],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { 
        test: /\.css$/i, 
        use: [
          {loader: "style-loader", options: {injectType: 'lazyStyleTag'}},
          "css-loader"
        ]
      },
    ],
  },
  stats: {},
};

module.exports = webpackConfig;
