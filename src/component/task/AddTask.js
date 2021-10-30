import {Form, Input, Button, message, Select} from 'antd';
import {addNewTask, addTaskGroup} from "../../api/taskRequest";
import {Option} from "antd/es/mentions";

export const AddTask = (groupName) => {
    const onFinish = (values) => {
        values["group"] = groupName["groupName"]["value"];
        values["cycleType"] = parseInt(values["cycleType"])
        values["learnType"] = parseInt(values["learnType"])
        values["outputType"] = parseInt(values["outputType"])

        console.log('Success:', values);
        addNewTask(values).then(res => {
            console.log(res);
            message.info('任务添加成功').then(r => "任务添加失败");
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
                label="任务名称："
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
                label="任务描述："
                name="description"
                rules={[
                    {
                        required: false,
                        message: 'Please input new task group name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="label" label="标签：" rules={[{ required: true}]}>
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option value="learn">学习</Option>
                    <Option value="running">运动</Option>
                    <Option value="work">工作</Option>
                    <Option value="sleep">睡觉</Option>
                    <Option value="daily">日常</Option>
                    <Option value="other">其他</Option>
                </Select>
            </Form.Item>

            <Form.Item name="cycleType" label="周期：" rules={[{ required: true}]}>
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option value="0">日</Option>
                    <Option value="1">周</Option>
                    <Option value="2">月</Option>
                    <Option value="3">年</Option>
                    <Option value="4">无</Option>
                </Select>
            </Form.Item>

            <Form.Item name="learnType" label="学习类型：" rules={[{ required: true}]}>
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option value="0">输入</Option>
                    <Option value="1">输出</Option>
                </Select>
            </Form.Item>

            <Form.Item name="outputType" label="输出类型类型：" rules={[{ required: false}]}>
                <Select
                    placeholder="Select a option and change input text above"
                    allowClear
                >
                    <Option value="0">代码</Option>
                    <Option value="1">博客/笔记</Option>
                </Select>
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
