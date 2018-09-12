const Stock = require('../models').Stock;
const Price = require('../models').Price;
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
        return Stock.findAll().then(stocks => res.status(200).send(stocks));
    },
    listPrice(req,res){
        return Price.find({

        })
    }
}