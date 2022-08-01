//Function returns the form on the modal for new todo items 

import 'antd/dist/antd.css';
import {  Form, Input, Button, Select } from 'antd';
const {Option} = Select

function TodoForm(props) {

    const tagOptions = (
        <Select>
            <Option value='high'>High Priority</Option>
            <Option value='medium'>Medium Priority</Option>
            <Option value='low'>Low Priority</Option>
            <Option value='reminder'>Reminder</Option>
            <Option value='grocery'>Grocery Item</Option>
      </Select>
    )

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
            <Input/>
        </Form.Item>
        <Form.Item 
            label="Tags" 
            name="tags"
            rules={[
                {
                    required: true,
                    message: "Please select a tag"
                }
            ]}
        >
            {tagOptions}
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8,  span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={() => props.set(false)} style={{marginRight: 10}}> Submit </Button>
            <Button key="back" onClick={() => props.set(false)}>Cancel</Button>
        </Form.Item>
    </Form>
    )
}

export default TodoForm