import React, {useState} from 'react'
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Checkbox, Table, Row, Col, Button, Modal, Form, Input, } from 'antd';
import { PlusOutlined } from '@ant-design/icons'

function App() {

  const api = "http://localhost:5000"
  const [data, setData] = useState(null)
  const [columns, setColumns] = useState(null)
  const [count, setCount] = useState(4)
  const [modal, setModal] = useState(false)


  async function getDataSource() {
    console.log("getting data..")
    axios.get(`${api}/notes`).then( res => {
      //console.log(res)
      setData(res.data.data)
      setColumns(res.data.columns)
    })
  }


  const clickModal = () => {
    setModal(true)
  }

  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const onFinish = (values) => {
    console.log("onFinish: ", values)
    const add = {
      key: count,
      notes: values.notes,
      tags: values.tags,
      action: values.action
    }
    setCount(count + 1)
    setData([...data, add])
  }



  data ? console.log("data: ", data) : getDataSource()

  return (
    <>
      <h1 style={{marginLeft: 10}}>Notes App</h1>

      <Row style={{marginLeft: 50, marginBottom: 10}}>
        <Col span={6}>
          <Button type="primary" onClick={clickModal}><PlusOutlined/></Button>
        </Col>
      </Row>
      <Row style={{marginLeft: 50}}>
        <Col span={8}>
          <Table columns={columns ? columns : null} dataSource={data ? data : null}/>
        </Col>
      </Row>

      
      <Modal 
        title="Add Note" 
        visible={modal} 
        // onOk={handleOk} 
        onCancel={handleCancel}
        footer= {[]}
        >
        <Form onFinish={onFinish} labelCol={{span: 4}} wrapperCol={{span: 16}}>
          <Form.Item label="Notes" name="notes">
            <Input />
          </Form.Item>
          <Form.Item label="Tags" name="tags">
            <Input />
          </Form.Item>
          <Form.Item label="Action" name="action">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 8,  span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={handleOk} style={{marginRight: 10}}> Submit </Button>
            <Button key="back" onClick={handleCancel}>Cancel</Button>
          </Form.Item>

        </Form>
      </Modal>

    </>



  );
}

export default App;











/* trash can

  const onClick = () => {
    const add = {
        key: count,
        notes: 'add',
        tags: 'tag',
        action: 'act'
    }
    setCount(count + 1)
    setData([...data, add])

  }


*/