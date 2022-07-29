var express = require('express');
var router = express.Router();


const dataSource = [
  {
    key: '1',
    notes: 'hello',
    tags: 'hi',
    action: 'les goo'
  },
  {
    key: '2',
    notes: 'world',
    tags: 'wo',
    action: 'woooooo'
  },
  {
    key: '3',
    notes: '123',
    tags: 'number',
    action: 'chomp chomp'
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {



  res.send(dataSource);



});

module.exports = router;



// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/', function(req, res, next) {
//   // Handle the get for this route
// });

// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });