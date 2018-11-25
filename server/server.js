const express = require('express');
const bodyParser = require('body-parser');
const soapRequest = require('easy-soap-request');
const fs = require('fs');
var path = require('path');
const transform = require('camaro')

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function getSoap(url, headers, xml) {
    try {
      const { response } = await soapRequest(url, headers, xml);
      const { body, statusCode } = response;
      return body;
    } catch (error) {
      console.log(error)
    }
} 

function setArguments(xmlStr, start, end) {
  const result = xmlStr
    .replace('{tcIndicador}', 317)
    .replace('{tcFechaInicio}', start)
    .replace('{tcFechaFinal}', end)
    .replace('{tcNombre}', 'Kevin')
    .replace('{tnSubNiveles}', 'N');
  return result;
}

app.post('/api/index', async (req, res) => {
  const url = 'https://gee.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx';
  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://ws.sdde.bccr.fi.cr/ObtenerIndicadoresEconomicos',
  };
  const xmlPath = path.join(__dirname, '..', 'server', 'soap', 'economicIndexEnvelope.xml');
  const xml = fs.readFileSync(xmlPath, 'utf-8');
  const result =  setArguments(xml, req.body.startDate, req.body.endDate);
  const resp = await getSoap(url, headers, result);

  const template = {
    data: ['//INGC011_CAT_INDICADORECONOMIC', {
        date: 'DES_FECHA',
        value: 'NUM_VALOR'
    }]
}
// const result2 = transform(resp, template);
  res.send(transform(resp, template));
});

app.listen(port, () => console.log(`Listening on port ${port}`));