const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  css: {
    sourceMap: true
  },
  outputDir: "docs",
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://mkoeppen.github.io/fe-mindmap/"
      : "/"
};
