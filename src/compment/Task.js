import { List} from 'antd';
import React from "react";
import TaskLabel from "./TaskLable";
import TaskDetail from "./TaskDetail";

export class Task extends React.Component {
    render() {
        const data = [
            {
                "group": "taskGroup",
                "taskList": [
                    "task detail"
                ]
            }
        ];

        return (
            <List
                size="large"
                bordered
                dataSource={data}
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
