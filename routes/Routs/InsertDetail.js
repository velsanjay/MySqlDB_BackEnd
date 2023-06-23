const InsertNewData = require('express').Router()
const connection = require('../config/database')

InsertNewData.post('/new', async(req, res)=>{
    const {name, email, phoneNo, role} = req.body

    connection.query(`INSERT INTO user (name, email, phoneNo, role) VALUES (?,?,?,?)`,[name, email , phoneNo , role], (err, result, fields)=>{
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

module.exports =InsertNewData