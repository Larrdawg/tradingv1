const Stock = require('../models').Stock;

module.exports = {
    list(req,res){
        if(!req.body.offset){
            req.body.offset = 0;
        }
        if(!req.body.limit){
            req.body.limit = 25;
        }
        return Stock.findAll({
            limit:req.body.limit,
            offset:req.body.offset,
        }).then(stocks => res.status(200).send(stocks));
    },
    listAll(req,res){
        return Stock.findAll().then(stocks => res.status(200).send(stocks));
    }

}