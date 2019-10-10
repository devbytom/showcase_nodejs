import express from 'express';
import morgan from 'morgan';

import mainRoute from './src/routes/main';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/', mainRoute.base);
app.get('/', (req, res, next) => {
  res.json('invalid http method');
});

app.listen(process.env.PORT);
