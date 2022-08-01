import { Popconfirm, Tag, Button } from "antd"
import 'antd/dist/antd.css';
import { DeleteOutlined } from '@ant-design/icons'

function columns(handleTodoDelete)
{
    return (
    [
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes'
    },
    {
      title: 'Priority',
      dataIndex: 'tags',
      key: 'tags',
      align: 'right',
      sorter: (a, b) => a.priority - b.priority, 
      //a is selected filter b is the item item
      onFilter: (a, b) => a === b.tags[0],
      defaultSortOrder: 'ascend',
      filters: [
        {
          text: 'High',
          value: 'high'
        },
        {
          text: 'Medium',
          value: 'medium'
        },
        {
          text: 'Low',
          value: 'low'
        },
        {
          text: 'Reminder',
          value: 'reminder'
        },
        {
          text: 'Grocery',
          value: 'grocery'
        },
      ],
      render: (_, {tags}) => (
        <>
          {tags ? tags.map((tag) => {
            let color = 'blue'
            if(isNaN(tag)){
              if(tag === 'medium')
                color = 'yellow'
              else if(tag === 'high')
                color = 'volcano'
              else if(tag === 'grocery')
                color = 'green'
              else if(tag === 'reminder')
                color = 'purple'
              return(
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
            )}
          }) : []}
      </>
      )
    },    
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      align: 'right', 
      render: (_, record) => 
        <Popconfirm title="Sure to delete?" onConfirm={() => handleTodoDelete(record.key)}>
          <Button icon={<DeleteOutlined/>} shape="circle" ></Button>
        </Popconfirm>
    },
  ]
 )
}


  export default columns