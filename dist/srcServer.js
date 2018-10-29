"use strict";

var _express = _interopRequireDefault(require("express"));

var _webpack = _interopRequireDefault(require("webpack"));

var _path = _interopRequireDefault(require("path"));

var _webpack2 = _interopRequireDefault(require("../webpack.config"));

var _open = _interopRequireDefault(require("open"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var port = process.env.PORT || 5000;
var app = (0, _express.default)();
var compiler = (0, _webpack.default)(_webpack2.default); // app.use(require('webpack-dev-middleware')(compiler, {
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

app.use('/', _express.default.static('dist'));
app.use('*', _express.default.static('dist'));
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    if (process.env.NODE_ENV === 'development') {
      (0, _open.default)("http://localhost:".concat(port));
    }
  }
});