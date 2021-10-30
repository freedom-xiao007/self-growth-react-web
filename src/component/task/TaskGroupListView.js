import React from "react";
import {Button} from "antd";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import {AddTaskDialog} from "./AddTaskDialog";
import {deleteTaskGroupByName} from "../../api/taskRequest";

export class TaskGroupListView extends React.Component {
    state = {
        size: 'small',
    };

    render() {
        const { size } = this.state;
        let groupName = this.props.value;

        function deleteGroup() {
            deleteTaskGroupByName(groupName).then(res => {
                console.log(res);
            })
        }

        return (
            <div>
                <label>分组名称：{groupName}</label>
                <AddTaskDialog value={groupName}/>
                <Button type="primary" icon={<DeleteOutlined />} size={size} onClick={deleteGroup}>
                    删除分组
                </Button>
            </div>
        );
    }
}

export default TaskGroupListView;
