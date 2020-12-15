/*eslint-disable */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    				rules: [
   				   {
        				test: /\.css$/i,
        				use: ['style-loader', 'css-loader'],
      				},
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
        ],
      },
    				],
  				},
  watch: true,
};
/* eslint-enable */
