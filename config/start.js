require('source-map-support').install()
const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const configs = require('./webpack.dev.js');

const compilers = webpack(configs);

const webpackDevMiddlewareOptions = {
	serverSideRender: true,
	stats: {
		colors: true,
  },
  publicPath:'/',
	watchOptions: {
		aggregateTimeout: 300,
		poll: true,
	},
};

const app = express();

app.use(function(req, res, next) {
	console.log('Time:', new Date().toString());
	next();
});

app.use(webpackDevMiddleware(compilers, webpackDevMiddlewareOptions));

// NOTE: Only the client bundle needs to be passed to `webpack-hot-middleware`.
app.use(webpackHotMiddleware(compilers.compilers.find(compiler => compiler.name === 'client')));

app.use(webpackHotServerMiddleware(compilers));

app.listen(4000, function() {
	console.log('==> Server Started');
});



process.on('unhandledRejection', r => console.error(r.stack));