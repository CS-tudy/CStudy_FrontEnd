const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.filename = "[name].bundle.js";
      webpackConfig.output.chunkFilename = "[name].chunk.bundle.js";
      webpackConfig.output.path = path.resolve(__dirname, "build");
      webpackConfig.output.clean = true;

      webpackConfig.optimization.splitChunks = {
        name: (module, chunks, cacheGroupKey) => {
          const allChunksNames = chunks.map((chunk) => chunk.name).join("-");
          return allChunksNames;
        },
        cacheGroups: {
          corejsVendor: {
            test: /[\\/]node_modules[\\/](core-js)[\\/]/,
            name: "corejs",
            chunks: "all",
            priority: 90,
          },
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            name: "react",
            chunks: "all",
            priority: 80,
          },
          axiosAndReactQuery: {
            test: /[\\/]node_modules[\\/](axios|@tanstack)[\\/]/,
            name: "axios-react-query",
            chunks: "all",
            priority: 70,
          },
          threeVendor: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: "three",
            chunks: "all",
            priority: 60,
          },
        },
      };
      webpackConfig.optimization.minimizer = [`...`, new CssMinimizerPlugin()];
      webpackConfig.optimization.minimize = true;

      return webpackConfig;
    },
  },
};
