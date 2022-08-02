//notes enpoint

var express = require('express');
var router = express.Router();

let data = [
    {
        key: 0,
        note: 'hello'
    },    
    {
        key: 1,
        note: 'world'
    },
    {
        key: 2,
        note: '123'
    },
    {
        key: 3,
        note: '456'
    }
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

