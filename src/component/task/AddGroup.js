import { Form, Input, Button, message } from 'antd';
import {addTaskGroup} from "../../api/taskRequest";

export const AddGroup = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        addTaskGroup(values).then(res => {
            console.log(res);
            message.info('任务组添加成功').then(r => "任务组添加失败");
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="groupName"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input new task group name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
