const port = 9018; // dev port
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue_canvas_poster/" : "/",
  outputDir:'./docs',
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true
  },

  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "vue canvas poster"
    }
  },
  css: {
    extract: false
  }
};
