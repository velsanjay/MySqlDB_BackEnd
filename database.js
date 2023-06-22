let mysql = require('mysql')
const GetDetail = require('express').Router()

GetDetail.get('/',async(req,res)=>{

    let connection = mysql.createConnection({
        host:'localhost',
        database:'user',
        user:'web_app',
        port:4306,
        password:null
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