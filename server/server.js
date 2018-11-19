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

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


async function getSoap(url, headers, xml) {
    try {
      const { response } = await soapRequest(url, headers, xml);
      const { body, statusCode } = response;
      return body;
      // console.log(statusCode);
    } catch (error) {
      console.log(error)
    }
} 

app.get('/api/ind', async (req, res) => {
  const url = 'https://gee.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx';
  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://ws.sdde.bccr.fi.cr/ObtenerIndicadoresEconomicos',
  };
  const xmlPath = path.join(__dirname, '..', 'server', 'soap', 'economicIndexEnvelope.xml');

  const xml = fs.readFileSync(xmlPath, 'utf-8');
 

  const resp = await getSoap(url, headers, xml);
  res.send({ data: JSON.stringify(resp) });
});

function setArguments(xmlStr) {
  const result = xmlStr
    .replace('{tcIndicador}', 317)
    .replace('{tcFechaInicio}', '01/01/2018')
    .replace('{tcFechaFinal}', '10/01/2018')
    .replace('{tcNombre}', 'Kevin')
    .replace('{tnSubNiveles}', 'N');
  return result;
}

app.get('/api/ind2', async (req, res) => {
  const url = 'https://gee.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx';
  const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://ws.sdde.bccr.fi.cr/ObtenerIndicadoresEconomicos',
  };
  const xmlPath = path.join(__dirname, '..', 'server', 'soap', 'economicIndexEnvelope.xml');
  const xml = fs.readFileSync(xmlPath, 'utf-8');
  const result =  setArguments(xml);
  const resp = await getSoap(url, headers, result);

  const template = {
    datos: ['//INGC011_CAT_INDICADORECONOMIC', {
        code: 'COD_INDICADORINTERNO',
    }]
}
const result2 = transform(resp, template);
  res.send({ data: result2 });
});

app.listen(port, () => console.log(`Listening on port ${port}`));