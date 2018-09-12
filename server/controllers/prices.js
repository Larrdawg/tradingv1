const Price = require('../models').Price;
const sequelize = require('../models').sequelize;
const stockController = require('./stocks');

module.exports = {
    list(req,res) {
        rb = req.body
        return Price.findAll({
            limit:rb.limit || 25,
            offset:rb.offset || 0,
            where:{
                symbol:rb.symbol || null,
                // date: rb.date1 && rb.date2 ? {
                //     [Op.between] : [rb.date1, rb.date2]
                // } : new Date('20180910'),
            },
            order: [['date','DESC']]
        }).then(stocks => res.status(200).send(stocks));
    },
    listPrices(req,res){
        stockController.listTop(25).then(result=> runquery(result))
        let runquery = (symbols) => {
            return sequelize.query(` SELECT p.symbol,p.close
            FROM "Prices" p
            INNER JOIN
                (SELECT symbol, MAX(date) AS MaxDateTime
                FROM "Prices"
                WHERE symbol IN(:symbols)
                GROUP BY symbol) groupedp
            ON p.symbol = groupedp.symbol
            AND p.date = groupedp.MaxDateTime
            ORDER BY groupedp.symbol ASC;`,
            {replacements:{symbols:symbols},model:Price,raw:true}).then(stocks=>{
                res.status(200).send(stocks.reduce((obj,item) =>{
                    obj[item.symbol] = item.close;
                    return obj;
              },stocks[0]));
            });
        }
    },
    chart(req,res) {
        rb = req.body
        return Price.findAll({
            limit:31,
            where:{
                'symbol':req.params.symbol.toUpperCase()
            },
            order:[['date','DESC']]
        }).then(prices =>res.status(200).send(prices));
    }
}