import {List, Space, Table} from 'antd';
import React from "react";
import "../../api/taskRequest"
import {getTaskListByGroup} from "../../api/taskRequest";
import AddGroupDialog from "./AddGroupDialog";
import { withRouter } from 'react-router-dom'
import {TaskGroupListView} from "./TaskGroupListView";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "group": "taskGroup",
                    "taskList": [
                        "task detail"
                    ]
                }
            ],
            columnsOfTask: [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '描述',
                    dataIndex: 'description',
                    key: 'description',
                },
                {
                    title: '标签',
                    dataIndex: 'label',
                    key: 'label',
                },
                {
                    title: '完成时间',
                    dataIndex: 'completeDate',
                    key: 'completeDate',
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <Space size="middle">
                            <a>Delete</a>
                        </Space>
                    ),
                },
            ],
        }
    }

    componentDidMount() {
        getTaskListByGroup().then(res => {
            console.log("getTaskListByGroup", res);
            let copyData = [];
            let resData = res.data;
            for (let index in resData) {
                console.log("item:", resData[index])
                copyData[index] = {
                    "group": resData[index]["group"],
                    "taskList": resData[index]["tasks"],
                }
            }
            console.log("this.data", copyData);
            this.setState({data: copyData})
        });
    }

    render() {
        return (
            <div align="left">
                <AddGroupDialog/>

                <List
                    size="large"
                    bordered
                    dataSource={this.state.data}
                    renderItem={item => <List.Item>
                        <TaskGroupListView value={item.group}/>
                        <Table dataSource={item.taskList} columns={this.state.columnsOfTask} />;
                    </List.Item>}
                />
            </div>

        );
    }
}

export default withRouter(Task);
