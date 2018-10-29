import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';

/* eslint-disable no-console */

const port = process.env.PORT || 5000;
const app = express();
const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../dist/index.html'));
// });

// app.get('/', function(req, res) {

//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

app.use('/', express.static('dist'));
app.use('*', express.static('dist'));

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    if (process.env.NODE_ENV === 'development') {
      open(`http://localhost:${port}`);
    }
  }
});