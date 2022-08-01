import 'antd/dist/antd.css';
import {  Form, Input, Button } from 'antd';


function TodoForm(props) {

    return (
    <Form onFinish={props.onFinish} labelCol={{span: 4}} wrapperCol={{span: 16}} form={props.form}>
        <Form.Item 
            label="Notes" 
            name="notes"
            rules={[
                {
                    required: true,
                    message: "Please Input A Task"
                }
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item label="Tags" name="tags">
            <Input />
        </Form.Item>
        <Form.Item label="Action" name="action">
            <Input />
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8,  span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={() => props.set(false)} style={{marginRight: 10}}> Submit </Button>
            <Button key="back" onClick={() => props.set(false)}>Cancel</Button>
        </Form.Item>
    </Form>
    )
}

export default TodoForm