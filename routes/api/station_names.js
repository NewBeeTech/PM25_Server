var express = require('express');
require('isomorphic-fetch');
var utf8 = require('utf8');

var router = express.Router();

router.get('/', function(req, res) {
   fetch('http://www.pm25.in/api/querys/station_names.json?token=5j1znBVAsnSf5xQyNQyq'+'&city='+utf8.encode(req.query.city))
   .then(function(response) {
      return response.json()
   })
   .then(function(result) {
      res.end(JSON.stringify(result));
   })
   .catch(function(err) {
      console.log('err: ',err);
      res.send('err');
   })
});

module.exports = router;