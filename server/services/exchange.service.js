
const soapRequest = require('easy-soap-request');

const url = 'https://gee.bccr.fi.cr/indicadoreseconomicos/WebServices/wsIndicadoresEconomicos.asmx';
const headers = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://ws.sdde.bccr.fi.cr/ObtenerIndicadoresEconomicos',
};

class ExchangeService {     
    setArguments(xmlStr, start, end) {
        const result = xmlStr
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
            console.log(error)
        }
    } 
}

module.exports = ExchangeService;