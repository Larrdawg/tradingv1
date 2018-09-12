const Stock = require('../models').Stock;
const sequelize = require('sequelize')
const Op = sequelize.Op;


module.exports = {
    list(req,res){
        return Stock.findAll({
            limit:req.body.limit || 50,
            offset:req.body.offset || 0,
            order:[['mcap','desc']],
            where:{
                mcap:{
                    [Op.ne]: null
                }
            }
        }).then(stocks => res.status(200).send(stocks));
    },
    listAll(req,res){
        return Stock.findAll({attributes:['symbol']}).then(stocks => res.status(200).send(stocks));
    },
    listTop(top){
        return new Promise((resolve,reject) => {
            Stock.findAll({
                attributes:['symbol'],
                order:[['mcap','desc']],
                where:{
                    mcap:{
                        [Op.ne]: null
                    }
                },
                limit:top, raw:true
            }).then(res => resolve(res.map(res => res.symbol)));
        });
    }
}