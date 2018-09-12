const Price = require('../models').Price;

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