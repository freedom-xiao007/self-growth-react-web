import {Button, List, message, Space, Table, Tabs} from 'antd';
import React from "react";
import "../../api/taskRequest"
import {completeTaskById, deleteTaskById, getTaskListByGroup} from "../../api/taskRequest";
import AddGroupDialog from "./AddGroupDialog";
import { withRouter } from 'react-router-dom'
import {TaskGroupListView} from "./TaskGroupListView";
import {CheckOutlined, DeleteOutlined} from "@ant-design/icons";

const { TabPane } = Tabs;

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
                        <div>
                            <Space>
                            <Button type="primary" icon={<CheckOutlined />} size="small" onClick={this.completeTask.bind(this, record.id)}>
                                完成
                            </Button>
                            <Button type="primary" icon={<DeleteOutlined />} size="small" onClick={this.deleteTask.bind(this, record.id)}>
                                删除
                            </Button>
                            </Space>
                        </div>
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

    completeTask(id) {
        completeTaskById(id).then(res => {
            console.log(res);
            message.info('任务完成').then(r => "任务完成接口失败");
        });
    }

    deleteTask(id) {
        deleteTaskById(id).then(res => {
            console.log(res);
            message.info('任务删除成功').then(r => "任务删除失败");
        })
    }

    render() {
        return (
            <div align="left">
                <AddGroupDialog/>

                <Tabs defaultActiveKey="1">
                    {
                        this.state.data.map((item, index) => (
                            <TabPane tab={item.group.name} key={index}>
                                <TaskGroupListView value={item.group}/>
                                <Table dataSource={item.taskList} columns={this.state.columnsOfTask} />
                            </TabPane>
                        ))
                    }
                </Tabs>
            </div>

        );
    }
}

export default withRouter(Task);
