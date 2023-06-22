let mysql = require('mysql')
const GetDetail = require('express').Router()

GetDetail.get('/',async(req,res)=>{

    let connection = mysql.createConnection({
        host:'sql12.freesqldatabase.com',
        database:'sql12627993',
        user:'sql12627993',
        port:3306,
        password:'8ZTcWDluCR'
    })
    
    connection.connect((err)=>{
        if(err){
            console.log(err)
            res.status(401).send({
                successs:false,
                err
            })
        }else{
            res.status(200).send({
                successs:true,
                message:"DB "+connection.state
            })
        }
    
        })
})

    
module.exports = GetDetail