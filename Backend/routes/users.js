var express = require('express');
var router = express.Router();
var user = require('../Model/user_model');

// Signup
router.post('/register', function (req, res) {
  user.addUser(req.body, (err)=>{
    if(err){
      res.send("errr");
    } else{
      res.status(200).end();
    }
  })
});
// Login
router.post('/login', function(req, res){
  user.getUserbyEmail(req.body.email, (err, result)=>{
    if(err) {
      res.status(400).end();
    }
    else {
      if(result.length > 0){
        if(result[0].password==req.body.password){
          console.log("ok");
          res.status(200).end();
        } else{
          console.log("email & pw is not match");
        }

      }
      else{
        console.log("email does not exist");
      }
    }
  });

});

// demo update data by email
router.put('/edit', function(req, res){
  var userr={
    id : any=req.body.id,
    first_name : any=req.body.first_name,
    last_name : any=req.body.last_name,
    email : any=req.body.email,
    password : any=req.body.password
  }
  user.updateUser(req.body.email, userr, function(err, result){
    if(err){
      console.log("error");
    } else{
      res.status(200).send(result);
    }
  })
});


// demo get user data
router.get('/getUser', function(req, res, next){
  user.getAllUser(function(err, result){
    if(err){
      res.status(400).end();
    }else{
      res.status(200).send(result);
    }
  });
});
module.exports = router;

