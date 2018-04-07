import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import data from './data.json';

const port = 3000;

const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/dist') });
});

app.get('/cars', (req, res) => {
  res.json(data);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http:localhost:${port}`);
  }
});
