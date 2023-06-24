let mysql = require('mysql')

    let connection = mysql.createConnection({
        host:'bnzgrholboipuswzecot-mysql.services.clever-cloud.com',
        database:'bnzgrholboipuswzecot',
        user:'uk12ipu2umhchfj8',
        port:3306,
        password:'45WE6gQ4ioxrJStFyhny'
    })
    
  

    connection.connect((err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(`DB ${connection.state}`)
        }
    
        })

    
module.exports = connection