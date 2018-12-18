const express = require('express');
const bodyParser = require('body-parser');
const ExchangeService = require('./services/exchange.service');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/index', async (req, res) => {   
  const exchangeService = new ExchangeService();
  const { startDate, endDate } = req.body;
  const result = await exchangeService.getDolarIndex(startDate, endDate);
  res.send({ 
    start: startDate,
    end: endDate,
    data: result,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));