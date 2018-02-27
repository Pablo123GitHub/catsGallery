var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function showUsers(){
   return knex.select().from('users')
       .then(function(row){
           return row;
       });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  showUsers().then((response)=>{
          res.json(response);
     });
});

module.exports = router;
