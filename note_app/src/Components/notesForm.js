import 'antd/dist/antd.css';
import {  Form, Input, Button } from 'antd';
const { TextArea } = Input


function NotesForm(props) {    

    return (
    <Form onFinish={props.onFinish} labelCol={{span: 4}} wrapperCol={{span: 16}} form={props.form}>
        <Form.Item 
            label="Notes" 
            name="notes"
            rules={[
                {
                    required: true,
                    message: "Please input a note"
                }
            ]}
        >
            <TextArea rows={4}/>
        </Form.Item>
        <Form.Item wrapperCol={{offset: 8,  span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={props.handleOk} style={{marginRight: 10}}> Save </Button>
            <Button key="back" onClick={props.handleCancel}>Cancel</Button>
        </Form.Item>
    </Form>
    )
}

export default NotesForm