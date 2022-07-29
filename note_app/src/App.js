import React, {useState} from 'react'
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios'
import { Checkbox, Table, Row, Col } from 'antd';

function App() {

  const api = "http://localhost:5000"
  const [data, setData] = useState(null)


  async function getDataSource() {
    console.log("getting data..")
    axios.get(`${api}/notes`).then( res => {
      //console.log(res)
      setData(res.data)
    })
  }

  data ? console.log("data: ", data) : getDataSource()

  return (
    <>
      <h1 style={{marginLeft: 10}}>Note App</h1>

      <Row style={{marginLeft: 50}}>
        <Col span={6}>
          <Table columns={data ? data.columns : null} dataSource={data ? data.data : null}/>
        </Col>
      </Row>

    </>



  );
}

export default App;
