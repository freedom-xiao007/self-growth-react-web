import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import {login} from "../api/UserRequest";
import { updateUserToken, getLoginUserToken } from "../redux/UserInfo";
import {withRouter} from "react-router-dom";

class Login extends React.Component {
    render() {
        const onFinish = (values: any) => {
            console.log('Success:', values);
            login(values).then(res => {
                console.log(res);
                updateUserToken(res.data)
                console.log(getLoginUserToken())
                this.props.history.push("/home")
            })
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };

        return (
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default withRouter(Login);
