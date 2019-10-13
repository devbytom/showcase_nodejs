import express from 'express';
import morgan from 'morgan';

import mainRoute from './src/routes/main';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/', mainRoute.base);
app.get('/', mainRoute.base);
app.listen(process.env.PORT);
