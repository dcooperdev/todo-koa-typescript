import * as Koa from 'koa';
import * as json from 'koa-json';
import * as logger from 'koa-logger';
import * as bodyParser from 'koa-bodyparser';

import rootRouter from './routes/routes-api';

const app = new Koa();

app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods({
    throw: true
}));

app.listen(10000, () => {
    console.log('Server running on http://localhost:10000');
});