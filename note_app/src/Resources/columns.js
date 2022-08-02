import { Popconfirm, Tag, Button, Popover } from "antd"
import 'antd/dist/antd.css';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons'
import {setColor, priorityFilters} from './helper.js'

function columns(handleTodoDelete, handleTodoDone)
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
      filters: priorityFilters,
      render: (_, {tags}) => (
        <>
          {tags ? tags.map((tag) => {
            let color = setColor(tag)
              return(
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
            )
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
        <>
            <Popover content={<>Mark As Done</>} placement="bottom">
              <Button icon={<CheckOutlined/>} shape="circle"onClick={() => handleTodoDone(record.key) } />
            </Popover>

            <Popconfirm title="Sure to delete?" onConfirm={() => handleTodoDelete(record.key)}>
              <Button icon={<DeleteOutlined/>} style={{marginLeft: 8}} shape="circle" danger/>
            </Popconfirm>
            
        </>
    },
  ])
}


  export default columns