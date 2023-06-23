const UpdateUserRouter = require('express').Router()
const connection = require('../config/database')

UpdateUserRouter.patch('/update/:id', async(req, res)=>{
    const {name, email, phoneNo, role} = req.body
    const {id} = req.params;

    if(id){
   
         connection.query(`UPDATE user SET name= ?, email=?, phoneNo=?, role =? WHERE id = ?`,[name, email, phoneNo, role, id], (err, result)=>{
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
    
    
}

})

module.exports = UpdateUserRouter