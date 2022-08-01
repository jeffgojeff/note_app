import React, {useState, useEffect} from 'react'
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Checkbox, Table, Row, Col, Button, Modal, Form, Card, message, Popconfirm, Tag} from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import Cards from './Components/cards.js'
import NotesForm from './Components/notesForm.js'
import TodoForm from './Components/todoForm.js'
import columns from './Resources/columns.js'



function App() {

  const api = "http://localhost:5000"
  const [notesData, setNotesData] = useState(null)
  const [todoData, setTodoData] = useState(null)
  const [toDoCount, setTodoCount] = useState(6)
  const [notesCount, setNotesCount] = useState(5)
  const columns2 = {columns}

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
      setTodoData(res.data)
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
    console.log("values: ", values)
    let pri = -1
    if(values.tags === 'high')
      pri = 0
    else if(values.tags === 'medium')
      pri = 1
    else if(values.tags === 'low')
      pri = 2
    else if(values.tags === 'reminder')
      pri = 3
    else
      pri = 4
    const add = {
      key: toDoCount,
      notes: values.notes,
      tags: [values.tags],
      action: values.action,
      priority: pri
    }
    setTodoCount(toDoCount + 1)
    setTodoData([...todoData, add])
    message.success('Saved!')
    form.resetFields()
    console.log("todoData: ", todoData)
  }

  const onNotesFinish = (values) => {
    const add = { note: values.notes, key: notesCount}
    setNotesCount(notesCount + 1)
    setNotesData([...notesData, add])
    message.success('Saved!')
    form.resetFields()
    console.log("notesData: ", notesData)
  }
  
  // isNotes will be true for modal with notes fields
  //         will be false for modal for todo list
  const clickModal = (isNotes) => {
    form.resetFields()
    setNotes(isNotes)
    setModal(true)
  }

  const handleTodoDelete = (key) => {
    const newData = todoData.filter((item) => item.key !== key);
    setTodoData(newData);
    message.success("Item Removed!")
  };

  const handleNotesDelete = (key) => {
    console.log("key: ", key)
    const newData = notesData.filter((item) => item.key !== key);
    setNotesData(newData);
    message.success("Note Removed!")
  };


  return (
    <>
      <h1 style={{marginLeft: 10}}>Notes App</h1>
      <Row gutter={[16, 16]} style={{marginLeft: 10, marginRight: 10}}>

        <Col span={10}>
          <Card title="To Do List">
            <Button onClick={() => clickModal(false)} style={{marginBottom: 5, marginTop: -5}}> <PlusOutlined/> </Button>
            <Table columns={columns(handleTodoDelete)} dataSource={todoData ? todoData : null}/>
          </Card>
        </Col>

        <Col span={14}>
          <Card title="Notes">
              <Cards data={notesData ? notesData : null} onClick={handleNotesDelete}/>
              <Card.Grid hoverable={true}>
                <Button onClick={() => clickModal(true)}> <PlusOutlined/> </Button>
              </Card.Grid>
          </Card>
        </Col>
      </Row>

      <Modal 
        title={notes ? "Add Note" : "Add Todo" } 
        visible={modal} 
        onCancel={() => setModal(false)}
        footer= {[]}
        >
          {notes ? 
          <NotesForm onFinish={onNotesFinish} set={setModal} form={form}/> 
          : <TodoForm onFinish={onTodoFinish} set ={setModal} form={form}/> }
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