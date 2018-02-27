var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function showPictures(){
   return knex.select().from('pictures')
       .then(function(row){
           return row;
       });
}

/* GET pictures listing. */
router.get('/pics', function(req, res, next) {
  showPictures().then((response)=>{
    console.log("CANNOT BE EMPTY")
          res.json(response);
     });
});
