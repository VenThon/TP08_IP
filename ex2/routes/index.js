const express = require('express');
const router = express.Router();

const {login} = require('../services/login');
const {register} = require('../services/register');

router.get('/', function(req,res,next){
  console.log("router up");
  res.send("Hello frome API");
});

router.post('/login', function(req,res,next) {
  // const param = JSON.parse(req.body);
  const {email, password} = req.body;
  const result = login(email, password);
  res.json(result);
});

router.post('/register', function(req,res,next) {
  // const param = JSON.parse(req.body);
  const result = register(req.body);
  res.json(result);
});




module.exports = router;

