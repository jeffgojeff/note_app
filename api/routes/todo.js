//todo endpoint

var express = require('express');
var router = express.Router();

let data = [
  {
    key: 4,
    notes: 'get groceries!',
    tags: ['grocery'],
    priority: 4,
    action: ''
  },
  {
    key: 1,
    notes: 'world',
    tags: ['medium'],
    priority: 1,
    action: ''
  },
  {
    key: 2,
    notes: '123',
    tags: ['low'],
    priority: 2,
    action: ''
  },
  {
    key: 3,
    notes: 'hello',
    tags: ['high'],
    priority: 0,
    action: ''
  },
  {
    key: 6,
    notes: 'do other stuff!',
    tags: ['reminder'],
    priority: 3,
    action: ''
  },
  {
    key: 0,
    notes: 'hello',
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

