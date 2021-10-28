import { List} from 'antd';
import React from "react";
import TaskLabel from "./TaskLable";
import TaskDetail from "./TaskDetail";
import axios from 'axios';

export class Task extends React.Component {
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
        const apiUrl = 'http://localhost:8080/v1/task/listByGroup';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data));
    }

    render() {
        return (
            <List
                size="large"
                bordered
                dataSource={this.data}
                renderItem={item => <List.Item>
                    <List
                        size="large"
                        header={<TaskLabel value={item.group}/>}
                        bordered
                        dataSource={item.taskList}
                        renderItem={item => <List.Item>
                            <TaskDetail value={item}/>
                        </List.Item>}
                    />
                </List.Item>}
            />
        );
    }
}

export default Task;
