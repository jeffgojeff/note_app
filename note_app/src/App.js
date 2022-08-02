import React, {useState, useEffect} from 'react'
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Table, Row, Col, Button, Modal, Form, Card, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import Cards from './Components/cards.js'
import NotesForm from './Components/notesForm.js'
import TodoForm from './Components/todoForm.js'
import columns from './Resources/columns.js'
import {setPriority, freeKey} from './Resources/helper.js'



function App() {

  const api = "http://localhost:5000"
  const [notesData, setNotesData] = useState(null)
  const [todoData, setTodoData] = useState(null)

  const [modal, setModal] = useState(false)
  const [notes, setNotes] = useState(false)
  const [form] = Form.useForm();


  //get data from endpoint
  async function getNotesData() {
    //console.log("getting data..")
    axios.get(`${api}/notes`).then( res => {
      console.log("notesData: ", res.data)
      setNotesData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  async function getTodoData() {
    //console.log("getting data..")
    axios.get(`${api}/todo`).then( res => {
      console.log("todoData: ", res.data)
      setTodoData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  async function postNotesData(end, data){
    axios.post(`${api}/${end}`, data)
    .then( res => {
      //console.log("post: ", res)
    }).catch((err) => console.log(err) )
  }

  useEffect(() =>{
    if(!notesData && !todoData) {
      console.log("getting data..")
      getNotesData()
      getTodoData()
    }
  })


  //do this when todo form is successfully submitted
  const onTodoFinish = (values) => {
    //console.log("values: ", values)
    let pri = setPriority(values.tags)
    let add = {
      key: freeKey(todoData),
      notes: values.notes,
      tags: [values.tags],
      action: values.action,
      priority: pri
    }
    add = [...todoData, add]
    setTodoData(add)
    message.success('Saved!')
    form.resetFields()
    console.log("todoData: ", add)
    postNotesData("todo", add)
  }

  //do this when notes form is successfully sumbitted
  const onNotesFinish = (values) => {
    let add = { note: values.notes, key: freeKey(notesData)}
    add = [...notesData, add]
    setNotesData(add)
    message.success('Saved!')
    form.resetFields()
    console.log("notesData: ", add)
    postNotesData("notes", add)
  }
  
  // isNotes will be true for modal with notes fields
  //         will be false for modal for todo list
  const clickModal = (isNotes) => {
    form.resetFields()
    setNotes(isNotes)
    setModal(true)
  }

  //remove item from table, alert user of successful deletion
  const handleTodoDelete = (key) => {
    const newData = todoData.filter((item) => item.key !== key);
    setTodoData(newData);
    console.log("todoData: ", newData)
    postNotesData("todo", newData)
    message.success("Item Removed!")
  };

  //remove note, alert user of successful deletion
  const handleNotesDelete = (key) => {
    const newData = notesData.filter((item) => item.key !== key);
    setNotesData(newData);
    postNotesData("notes", newData)
    message.success("Note Removed!")
  };

  //change todo item tag to done
  // alert user of sucessful change
  const handleTodoDone = (key) => {
    let index = todoData.findIndex((x => x.key === key))
    let arr = todoData
    let mess = arr[index].tags[0] === 'grocery' ? "In The Cart!" : "Task Completed!"
    arr[index].tags[0] = 'done'
    arr[index].priority = 5
    setTodoData([...arr])
    postNotesData("todo", arr)
    message.success(mess)
  }


  return (
    <>
      <h1 style={{marginLeft: 10}}>Notes App</h1>
      <Row gutter={[16, 16]} style={{marginLeft: 10, marginRight: 10}}>

        <Col span={10}>
          <Card title="To Do List">
            <Button onClick={() => clickModal(false)} style={{marginBottom: 5, marginTop: -5}}> <PlusOutlined/> </Button>
            <Table columns={columns(handleTodoDelete, handleTodoDone)} dataSource={todoData ? todoData : null}/>
          </Card>
        </Col>

        <Col span={14}>
          <Card title="Notes">
              <Cards data={notesData ? notesData : null} onClick={handleNotesDelete}/>
              <Card.Grid hoverable={true} style={{textAlign: 'center'}}>
                <Button onClick={() => clickModal(true)} icon={<PlusOutlined/>} shape="circle" size="large" />
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