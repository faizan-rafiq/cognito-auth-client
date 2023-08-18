export default {
  resolve: {
    extensions: ['', '.js', 'jsx', 'css', 'svg'],
  },
  devtool: "cheap-eval-source-map",
  entry: ['./src/index.js'],
  output: {
    path: 'dist',
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
        }
      }, 
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.css?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
