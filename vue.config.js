// vue.config.js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 5072,
        maxSize: 204800,
      },
    },
    plugins: [
      // https://www.npmjs.com/package/webpack-bundle-analyzer
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
      }),
    ],
  },
};
