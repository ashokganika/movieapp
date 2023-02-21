const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: "3002",
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshWebpackPlugin()],
};
