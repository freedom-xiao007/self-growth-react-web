import { List} from 'antd';
import React from "react";
import TaskLabel from "./TaskLable";
import TaskDetail from "./TaskDetail";

export class Task extends React.Component {
    render() {
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];

        return (
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={item => <List.Item>
                    <List
                        size="large"
                        header={<TaskLabel/>}
                        bordered
                        dataSource={data}
                        renderItem={item => <List.Item>
                            <TaskDetail/>
                        </List.Item>}
                    />
                </List.Item>}
            />
        );
    }
}

export default Task;
