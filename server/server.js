const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');
var path = require('path');
const transform = require('camaro')
const ExchangeService = require('./services/exchange.service');

// Express config
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/index', async (req, res) => {    
  const xmlPath = path.join(__dirname, '..', 'server', 'soap', 'economicIndexEnvelope.xml');
  const xml = fs.readFileSync(xmlPath, 'utf-8');
  const exchangeService = new ExchangeService();
  const result =  exchangeService.setArguments(xml, req.body.startDate, req.body.endDate);
  const resp = await exchangeService.getSoap(result);

  const template = {
    data: ['//INGC011_CAT_INDICADORECONOMIC', {
        date: 'DES_FECHA',
        value: 'NUM_VALOR'
    }]
  }
  res.send(transform(resp, template));
});

app.listen(port, () => console.log(`Listening on port ${port}`));