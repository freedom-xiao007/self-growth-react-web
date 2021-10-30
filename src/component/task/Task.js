import {List} from 'antd';
import React from "react";
import TaskGroupListView from "./TaskGroupListView";
import TaskDetail from "./TaskDetail";
import "../../api/taskRequest"
import {getTaskListByGroup} from "../../api/taskRequest";
import AddGroupDialog from "./AddGroupDialog";
import { withRouter } from 'react-router-dom'

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.data = [
            {
                "group": "taskGroup",
                "taskList": [
                    "task detail"
                ]
            }
        ];
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
            this.data = copyData;
            console.log("this.data", this.data);
            this.forceUpdate();
        });
    }

    render() {
        return (
            <div align="left">
                <AddGroupDialog/>

                <List
                    size="large"
                    bordered
                    dataSource={this.data}
                    renderItem={item => <List.Item>
                        <List
                            size="large"
                            header={<TaskGroupListView value={item.group}/>}
                            bordered
                            dataSource={item.taskList}
                            renderItem={item => <List.Item>
                                <TaskDetail value={item}/>
                            </List.Item>}
                        />
                    </List.Item>}
                />
            </div>

        );
    }
}

export default withRouter(Task);
