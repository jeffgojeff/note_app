import React, {useState} from 'react'
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Checkbox, Table, Row, Col } from 'antd';

function App() {

  const api = "http://localhost:5000"
  const [dataSource, setDataSource] = useState(null)


  async function getDataSource() {
    console.log("getting data..")
    axios.get(`${api}/notes`).then( res => {
      setDataSource(res.data)
    })
  }

  dataSource ? console.log("data: ", dataSource) : getDataSource()
  //getDataSource()

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



  return (
    <>
      <h1 style={{marginLeft: 10}}>Note App</h1>

      <Row style={{marginLeft: 50}}>
        <Col span={6}>
          <Table columns={columns} dataSource={dataSource ? dataSource : null}/>
        </Col>
      </Row>


    </>



  );
}

export default App;
