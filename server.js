const express = require('express');
const app = express();
const simpsons = require('./simpsons');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger)
app.use(express.static('public'));

app.get('/', (request, response) => {
  // response.send('hello world');
});

app.get('/json', (request, response) => {
  response.status(200).json(simpsons);
});

app.get('/sunsets', (request, response) => {
  app.use(express.static('public/sunsets'));
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
