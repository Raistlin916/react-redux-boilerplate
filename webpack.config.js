var path = require('path');


module.exports = {
    entry: {
      main: './static/scripts/main.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, './static/out/'),
        publicPath: "/out/",
        filename: '[name].bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ["transform-decorators-legacy"]
          }
        }
      ]
    }
}
