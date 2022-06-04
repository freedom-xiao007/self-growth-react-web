import {Form, Input, Button, message, Select} from 'antd';
import {addNewTask} from "../../api/taskRequest";
import {Option} from "antd/es/mentions";
import React from "react";

export class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.onFinish = this.onFinish.bind(this);
        console.log('group name:', props.groupName);
    }

    onFinish(values) {
        console.log('Success:', values);
        addNewTask(values).then(res => {
            console.log(res);
            message.info('任务添加成功').then("任务添加失败");
            this.props.refresh();
            this.props.closeDialog();
        })
    };

    onFinishFailed (errorInfo) {
        console.log('Failed:', errorInfo);
    };

    render() {
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
                    group: this.props.groupName,
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="任务分组："
                    name="group"
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
                        <Option value="LEARN">学习</Option>
                        <Option value="RUNNING">运动</Option>
                        <Option value="SLEEP">睡觉</Option>
                        <Option value="OTHER">其他</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="cycleType" label="周期：" rules={[{ required: true}]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                    >
                        <Option value="DAILY">日</Option>
                        <Option value="WEEK">周</Option>
                        <Option value="MONTH">月</Option>
                        <Option value="YEAR">年</Option>
                        <Option value="DEFAULT">无</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="learnType" label="学习类型：" rules={[{ required: true}]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                    >
                        <Option value="INPUT">输入</Option>
                        <Option value="OUTPUT">输出</Option>
                        <Option value="DEFAULT">无</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="outputType" label="输出类型类型：" rules={[{ required: false}]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        allowClear
                    >
                        <Option value="DEFAULT">无</Option>
                        <Option value="CODE">代码</Option>
                        <Option value="NOTE">博客/笔记</Option>
                        <Option value="BOOK">书籍</Option>
                        <Option value="DAILY">日常</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        新增
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
