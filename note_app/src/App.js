import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Checkbox, Table, Row, Col } from 'antd';

function App() {


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

  const dataSource = [
    {
      key: '1',
      notes: 'hello',
      tags: 'hi',
      action: 'les goo'
    },
    {
      key: '2',
      notes: 'world',
      tags: 'wo',
      action: 'woooooo'
    },
    {
      key: '3',
      notes: '123',
      tags: 'number',
      action: 'chomp chomp'
    }
  ]



  return (
    <>
      <h1 style={{marginLeft: 10}}>Note App</h1>

      <Row style={{marginLeft: 50}}>
        <Col span={6}>
          <Table columns={columns} dataSource={dataSource}/>
        </Col>
      </Row>


    </>



  );
}

export default App;
