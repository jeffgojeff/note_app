//todo endpoint

var express = require('express');
var router = express.Router();

//priority 0-high 1-med 2-low 3-reminder 4-grocery

let data = [
  {
    key: 4,
    notes: 'Get groceries!',
    tags: ['grocery'],
    priority: 4,
    action: ''
  },
  {
    key: 1,
    notes: 'Water plants',
    tags: ['medium'],
    priority: 1,
    action: ''
  },
  {
    key: 2,
    notes: 'Call that person back',
    tags: ['low'],
    priority: 2,
    action: ''
  },
  {
    key: 3,
    notes: 'Hello world',
    tags: ['low'],
    priority: 2,
    action: ''
  },
  {
    key: 6,
    notes: 'Do other stuff!',
    tags: ['reminder'],
    priority: 3,
    action: ''
  },
  {
    key: 0,
    notes: 'Crush this interview!',
    tags: ['high'],
    priority: 0,
    action: '',
  },
]



router.get('/', function(req, res, next) {
  res.send(data);
});

router.post('/', function(req, res, next){
  try{
      data = req.body
      res.status(201).json(data)
  } catch(err) {
      console.log(err)
  }
})

module.exports = router;

