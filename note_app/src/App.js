import React, {useState, useEffect} from 'react'
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Checkbox, Table, Row, Col, Button, Modal, Form, Card, message} from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import Cards from './Components/cards.js'
import NotesForm from './Components/notesForm.js'
import TodoForm from './Components/todoForm.js'



function App() {

  const api = "http://localhost:5000"
  const [notesData, setNotesData] = useState(null)
  const [todoData, setTodoData] = useState(null)
  const [columns, setColumns] = useState(null)
  const [toDoCount, setTodoCount] = useState(4)
  const [notesCount, setNotesCount] = useState(5)

  const [modal, setModal] = useState(false)
  const [notes, setNotes] = useState(false)
  const [form] = Form.useForm();



  async function getNotesData() {
    //console.log("getting data..")
    axios.get(`${api}/notes`).then( res => {
      console.log("notesData: ", res.data)
      setNotesData(res.data)
    })
  }
  async function getTodoData() {
    //console.log("getting data..")
    axios.get(`${api}/todo`).then( res => {
      console.log("todoData: ", res.data)
      setTodoData(res.data.data)
      setColumns(res.data.columns)
    })
  }

  useEffect(() =>{
    if(!notesData && !todoData) {
      console.log("getting data..")
      getNotesData()
      getTodoData()
    }
  }, [])

 



  const onTodoFinish = (values) => {
    //console.log("onTodoFinish: ", values)
    const add = {
      key: toDoCount,
      notes: values.notes,
      tags: values.tags,
      action: values.action
    }
    setTodoCount(toDoCount + 1)
    setTodoData([...todoData, add])
    message.success('Saved!')
    form.resetFields()
    console.log("todoData: ", todoData)

  }

  const onNotesFinish = (values) => {
    //console.log("onNotesFinish: ", values)
    const add = { note: values.notes, key: notesCount}
    setNotesCount(notesCount + 1)
    setNotesData([...notesData, add])
    message.success('Saved!')
    form.resetFields()
    console.log("notesData: ", notesData)
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
            <Table columns={columns ? columns : null} dataSource={todoData ? todoData : null}/>
          </Card>
        </Col>

        <Col span={14}>
          <Card title="Notes">
              <Cards data={notesData ? notesData : null}/>
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
          <NotesForm onFinish={onNotesFinish} handleOk={handleOk} handleCancel={handleCancel} form={form}/> 
          : <TodoForm onFinish={onTodoFinish} handleOk={handleOk} handleCancel={handleCancel} form={form}/> }
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