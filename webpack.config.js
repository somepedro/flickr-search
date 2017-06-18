const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/components/App.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        include: path.resolve(__dirname, 'img'),
        test: /\.(png|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]'
      },
      {
        include: path.resolve(__dirname),
        test: /\.html$/,
        loader: 'file-loader?name=index.html'
      }
    ]
  }
}
