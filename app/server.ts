import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import {initialiseDB} from './datasource';
import * as contactRoutes from './routes/contact.route';
const app = express();

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
initialiseRoutes();
app.use(morgan(function (tokens, req, res) {
  return [
    req.hostname,
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');
}));

// Start Server: Main point of entry
app.listen(8080, async () => {
  try {
    await initialiseDB('test');
    console.log( `Service listening on port 8080`, {
      timestamp: Date.now()
    });
  } catch (e) {
      process.exit(1);
  }
});

process.on('SIGINT', async () => {
  console.log('exit process');
    process.exit();
});

process.on('SIGTERM', async () => {
  console.log('terminate process');
    process.exit(0);
});

function initialiseRoutes() {
  app.use('/api/contact', contactRoutes);
}
