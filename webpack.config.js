// webpack.config.js
module.exports = {
    resolve: {
      fallback: {
        "buffer": require.resolve("buffer/")
      }
    },
    // other webpack configurations...
  };
  