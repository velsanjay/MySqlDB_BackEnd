const DeleteUserRouter = require('express').Router()
const connection = require('../config/database')

DeleteUserRouter.delete('/delete/:id', (req, res)=>{
    const {id} = req.params;
    connection.query(`DELETE FROM user WHERE id= ?`,[id], (err, result)=>{
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

module.exports = DeleteUserRouter