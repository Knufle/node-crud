// import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './database/connection';

const port = process.env.PORT || 3010;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(port);
