const { defineConfig } = require("@vue/cli-service");
// const StandaloneSingleSpaPlugin = require("standalone-single-spa-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
    externals: ["vue", "vue-router", /^@vue-mf\/.+/]
  },
});
