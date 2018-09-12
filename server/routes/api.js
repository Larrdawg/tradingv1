const stocksController = require('../controllers').stocks;
const pricesController = require('../controllers').prices;

module.exports = app =>{
    app.post('/api/stocks', stocksController.list)
    app.get('/api/stocks/all', stocksController.listAll)
    app.post('/api/prices', pricesController.list)
    app.get('/api/stocks/chart/:symbol',pricesController.chart)
}