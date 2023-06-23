let mysql = require('mysql')

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
        }else{
            console.log(`DB ${connection.state}`)
        }
    
        })

    
module.exports = connection