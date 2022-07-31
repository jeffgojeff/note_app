import React, {useState} from 'react'
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Checkbox, Table, Row, Col, Button, Modal, Form, Input, Card} from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import Cards from './Components/cards.js'
import NotesForm from './Components/notesForm.js'
import TodoForm from './Components/todoForm.js'

function App() {

  const api = "http://localhost:5000"
  const [data, setData] = useState(null)
  const [columns, setColumns] = useState(null)
  const [count, setCount] = useState(4)
  const [modal, setModal] = useState(false)
  const [notes, setNotes] = useState(false)

  // const [todoModal, toModal] = useState(false)


  async function getDataSource() {
    console.log("getting data..")
    axios.get(`${api}/notes`).then( res => {
      //console.log(res)
      setData(res.data.data)
      setColumns(res.data.columns)
    })
  }

  data ? console.log("data: ", data) : getDataSource()


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

  const handleOk = () => {
    setModal(false);
  };

  const handleCancel = () => {
    setModal(false);
  };


  const clickNotes = () => {
    setNotes(true)
    setModal(true)
  }
  
  const clickTodo = () => {
    setNotes(false)
    setModal(true)
  }


  return (
    <>
      <h1 style={{marginLeft: 10}}>Notes App</h1>
      <Row gutter={[16, 16]} style={{marginLeft: 10, marginRight: 10}}>

        <Col span={10}>
          <Card title="To Do List">
            <Button onClick={clickTodo} style={{marginBottom: 5, marginTop: -5}}> <PlusOutlined/> </Button>
            <Table columns={columns ? columns : null} dataSource={data ? data : null}/>
          </Card>
        </Col>

        <Col span={14}>
          <Card title="Notes">
              <Cards data={data ? data : null}/>
              <Card.Grid hoverable={true}>
                <Button onClick={clickNotes}> <PlusOutlined/> </Button>
              </Card.Grid>
          </Card>
        </Col>
      </Row>

      <Modal 
        title={notes ? "Add Note" : "Add Todo" } 
        visible={modal} 
        onCancel={handleCancel}
        footer= {[]}
        >
          {notes ? 
          <NotesForm onFinish={onFinish} handleOk={handleOk} handleCancel={handleCancel} /> 
          : <TodoForm onFinish={onFinish} handleOk={handleOk} handleCancel={handleCancel}/> }
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