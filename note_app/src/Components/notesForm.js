import 'antd/dist/antd.css';
import {  Form, Input, Button } from 'antd';


function NotesForm(props) {

    console.log(props)

    return (
    <Form onFinish={props.onFinish} labelCol={{span: 4}} wrapperCol={{span: 16}}>
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
            <Button type="primary" htmlType="submit" onClick={props.handleOk} style={{marginRight: 10}}> Submit </Button>
            <Button key="back" onClick={props.handleCancel}>Cancel</Button>
        </Form.Item>
    </Form>
    )
}

export default NotesForm