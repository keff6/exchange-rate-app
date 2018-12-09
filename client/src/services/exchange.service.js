export default class ExchangeService { 
    async getDolarIndex(start, end) {
        const result = await fetch('/api/index', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                startDate: start,
                endDate: end
            }),
        });

        return result.json();
    }
}