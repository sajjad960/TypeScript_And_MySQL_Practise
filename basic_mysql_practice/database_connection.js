console.log('hello');
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "sajjad960"
});
// connect database
con.connect(function(err) {
    if(err) {
        console.log(err);
        throw err
    }

    console.log('connected');
    // create a databse
    con.query("CREATE DATABASE mydb", function (err, result) {
        console.log("Database created");
        if(err) throw err;
    })
})