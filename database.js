let mysql = require('mysql')
const GetDetail = require('express').Router()

GetDetail.get('/',async(req,res)=>{

    let connection = mysql.createPool({
        host:'127.0.0.1',
        database:'employee_database',
        user:'root',
        password:'root123'
    })
    
    connection.query(`select * from employee_info`,(err, result, fields)=>{
        if(err){ 
            res.status(401).send({
                successs:false,
                err
            })
        }else{
            res.status(200).send({
                successs:true,
                data:result
            })
        }
    
        })
})

    
module.exports = GetDetail