var express = require('express');
var router = express.Router();

const data = [
    {
        key: '1',
        note: 'hello'
    },    
    {
        key: '2',
        note: 'world'
    },
    {
        key: '3',
        note: '123'
    },
    {
        key: '4',
        note: '456'
    }
]


router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;

