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
router.get('/pictures', function(req, res, next) {
  showPictures().then((response)=>{
          res.json(response);
     });
});
