const express = require('express');
const bodyParser = require('body-parser');
const ExchangeService = require('./services/exchange.service');

// Express config
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/index', async (req, res) => {   
  const exchangeService = new ExchangeService();
  const result = await exchangeService.getDolarIndex(req.body.startDate, req.body.endDate);
  res.send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));