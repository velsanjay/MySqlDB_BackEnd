const GetDetailRouter = require('express').Router()
const connection = require('../config/database')

GetDetailRouter.get('/', (req, res)=>{
    connection.query(`SELECT * FROM user`, (err, result)=>{
        if(err){
            res.status(401).send({
                success:false,
                err
            })
        }else{
            res.status(200).send({
                success:true,
                data:result
            })
        }
    })
})

module.exports = GetDetailRouter