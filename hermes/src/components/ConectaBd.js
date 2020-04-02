const db = require('mysql');

class Db {
    connect(){
        return db.createConnection({
            host     : '',
            user     : '',
            password : '',
            database:  ''  
        }).them(conn => {
            this.conn = conn
        })
    }
}
console.log(Db.password);
module.exports = new Db();
