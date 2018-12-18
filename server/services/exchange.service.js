
const soapRequest = require('easy-soap-request');
const transform = require('camaro')
const moment = require('moment');
const fs = require('fs');
var path = require('path');

const url = 'https://gee.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx';
const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://ws.sdde.bccr.fi.cr/ObtenerIndicadoresEconomicos',
};
const xmlPath = path.join(__dirname, '../..', 'server', 'soap', 'economicIndexEnvelope.xml');

const template = {
    data: ['//INGC011_CAT_INDICADORECONOMIC', {
        date: 'DES_FECHA',
        value: 'NUM_VALOR'
    }]
}

class ExchangeService {   
    async getDolarIndex(start, end) {
        try {
            const xml = await fs.readFileSync(xmlPath, 'utf-8');
            const envelope = this.setArguments(xml, start, end);
            const soapResult = await this.getSoap(envelope);
            const result = transform(soapResult, template)
            return this.parseResponse(result);
        }  catch (error) {
            console.log('ERR1: '+ error)
        }
    }  

    setArguments(xml, start, end) {
        const result = xml
            .replace('{tcIndicador}', 317)
            .replace('{tcFechaInicio}', start)
            .replace('{tcFechaFinal}', end)
            .replace('{tcNombre}', 'Kevin')
            .replace('{tnSubNiveles}', 'N');
        return result;
    }

    async getSoap(xml) {
        try {
            const { response } = await soapRequest(url, headers, xml);
            const { body, statusCode } = response;
            return body;
        } catch (error) {
            console.log('ERR2: '+error)
        }
    } 

    parseResponse(res) {
        const parsedResult = res.data.map(val => {
            val.date = moment(new Date(val.date)).format("DD/MM/YYYY")
            val.value = Number(val.value).toFixed(2)
            return val
        });
        return parsedResult
    }
}

module.exports = ExchangeService;