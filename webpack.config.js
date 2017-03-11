const path = require('path');


let
  entry = './src/index.js',
  output = {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
  };

if (process.env.NODE_ENV === 'dev') {
  entry = './example/index.js';
  output = {
    path: path.join(__dirname, 'example'),
    publicPath: '/example/',
  };
}

console.log(process.env.NODE_ENV, entry, output);

module.exports = {
  entry,
  output: {
    filename: 'bundle.js',
    library: 'react-sequence',
    libraryTarget: 'umd', // universal module definition
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
};
