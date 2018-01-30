const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const WriteFilePlugin = require('write-file-webpack-plugin');

const clientEntry = path.join(__dirname, '../src/client/index.js');
const serverEntry = path.join(__dirname, '../src/server/index.js');

const externals = fs
	.readdirSync(path.resolve(__dirname, '../node_modules'))
	.filter(x => !/\.bin/.test(x))
	.reduce((externals, mod) => {
		externals[mod] = `commonjs ${mod}`;
		return externals;
	}, {});

const client = {
	name: 'client',
	target: 'web',
	devtool: 'source-map',
	entry: ['babel-polyfill',clientEntry],
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'client.js',
		publicPath: '/',
	},
	resolve:{
		alias:{
			/*'@accounts/server': path.resolve(__dirname, '../accounts/packages/Server/Core/AccountsServer/src'),
			'@accounts/mongo': path.resolve(__dirname, '../accounts/packages/Server/Database/MongoDBInterface/src'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server/Transport/Express/ExpressTransport/src'),
			'@accounts/express-token-headers': path.resolve(__dirname, '../accounts/packages/Server/Transport/Express/TokenTransport/Headers/src'),
			'@accounts/password': path.resolve(__dirname, '../accounts/packages/Server/Authentication/Password/PasswordService/src'),
			'@accounts/email-debug': path.resolve(__dirname, '../accounts/packages/Server/Notification/Email/EmailDebug/src'),
			'@accounts/email-plugin-password': path.resolve(__dirname, '../accounts/packages/Server/Notification/Email/Plugins/PasswordPlugin/src'),
			'@accounts/token': path.resolve(__dirname, '../accounts/packages/Server/Authorization/TokenManager/src'),
			/*'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server')*/
		}
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: ["source-map-loader",'babel-loader'],
            },
            {
				test: /.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
		],
	},
	plugins: [
		new WriteFilePlugin()
	]
};

const server = {
	name: 'server',
	target: 'node',
	devtool: 'source-map',
	entry: [serverEntry],
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'server.js',
		publicPath: '/',
		libraryTarget: 'commonjs2',
	},
	externals,
	resolve:{
		alias:{
			/*'@accounts/server': path.resolve(__dirname, '../accounts/packages/Server/Core/AccountsServer'),
			'@accounts/mongo': path.resolve(__dirname, '../accounts/packages/Server/Database/MongoDBInterface'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server/Transport/Express/ExpressTransport'),
			'@accounts/express-token-headers': path.resolve(__dirname, '../accounts/packages/Server/Transport/Express/TokenTransport/Headers'),
			'@accounts/password': path.resolve(__dirname, '../accounts/packages/Server/Authentication/Password/PasswordService'),
			'@accounts/email-debug': path.resolve(__dirname, '../accounts/packages/Server/Notification/Email/EmailDebug'),
			'@accounts/email-plugin-password': path.resolve(__dirname, '../accounts/packages/Server/Notification/Email/Plugins/PasswordPlugin'),
			'@accounts/token': path.resolve(__dirname, '../accounts/packages/Server/Authorization/TokenManager'),
			/*'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server'),
			'@accounts/express': path.resolve(__dirname, '../accounts/packages/Server')*/
		}
	},
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				loader: ["source-map-loader",'babel-loader'],
      },
      {
				test: /.tsx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
		],
	},
	plugins: [
		new WriteFilePlugin()
	]
};

module.exports = [client, server];