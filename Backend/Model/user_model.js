var db = require('../server/database');

var User = {
    addUser:function(userData, callback){
        return db.query("insert into users(email, password) values (?, ?)", [userData.email, userData.password], callback);
    },
    getUserbyEmail:function(email, callback){
        return db.query("select * from users where email=?",[email], callback);
    },
    getAllUser: function(callback){
        return db.query('select * from users', callback);
    },
    updateUser:(id,userData, callback)=>{
        return db.query("update users set ? where email=?", [userData, id], callback);
    }
};

module.exports=User;