/* eslint-disable */
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import data from './data.json';

const PORT = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    onInfo: true,
    publicPath: config.output.publicPath,
  }),
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/cars', (req, res) => {
  res.json(data);
});

app.listen(PORT, error => {
  if (error) {
    console.log(error);
  } else {
    open('http://localhost:' + PORT);
  }
});
