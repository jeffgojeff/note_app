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
    key: 'action',
  }

]
const dataSource = [
  {
    key: '0',
    notes: 'hello',
    tags: ['high'],
    action: ''
  },
  {
    key: '1',
    notes: 'world',
    tags: ['medium'],
    action: 'woooooo'
  },
  {
    key: '2',
    notes: '123',
    tags: ['low'],
    action: ''
  },
  {
    key: '4',
    notes: 'do stuff!',
    tags: ['grocery'],
    action: ''
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

