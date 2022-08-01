var express = require('express');
var router = express.Router();

const columns = [
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes'
  },    
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags'
  },    
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  },
]
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

const data = {
  columns: columns,
  data: dataSource
}



router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;

