import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const { SubMenu } = Menu;

export class Nav extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Router>

                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                        自我生长
                    </Menu.Item>
                    <Menu.Item key="test" icon={<AppstoreOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <SubMenu key="taskManagement" icon={<SettingOutlined />} title="任务管理">
                        <Menu.ItemGroup title="列表">
                            <Menu.Item key="allTask">所有任务</Menu.Item>
                            <Menu.Item key="notCompleteTask">未完成任务</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="数据观星">
                            <Menu.Item key="day">日</Menu.Item>
                            <Menu.Item key="week">周</Menu.Item>
                            <Menu.Item key="month">月</Menu.Item>
                            <Menu.Item key="year">年</Menu.Item>
                            <Menu.Item key="users"><Link to="/users">Users</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            ant.design - Link
                        </a>
                    </Menu.Item>
                </Menu>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </Router>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default Nav;
