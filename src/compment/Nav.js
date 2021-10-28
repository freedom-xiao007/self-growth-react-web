import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';

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
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                    自我生长
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
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        ant.design - Link
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Nav;
