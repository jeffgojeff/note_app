var express = require('express');
var router = express.Router();

const data = [
  {
    key: '0',
    notes: 'hello',
    tags: ['high'],
    priority: 0,
    action: '',
  },
  {
    key: '1',
    notes: 'world',
    tags: ['medium'],
    priority: 1,
    action: 'woooooo'
  },
  {
    key: '2',
    notes: '123',
    tags: ['low'],
    priority: 2,
    action: ''
  },
  {
    key: '3',
    notes: 'hello',
    tags: ['high'],
    priority: 0,
    action: ''
  },
  {
    key: '4',
    notes: 'do stuff!',
    tags: ['grocery'],
    priority: 4,
    action: ''
  },
  {
    key: '5',
    notes: '123',
    tags: ['reminder'],
    priority: 3,
    action: ''
  },
]



router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;

