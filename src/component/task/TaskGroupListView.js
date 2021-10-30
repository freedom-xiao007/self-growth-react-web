import React from "react";
import {Button} from "antd";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";

export class TaskGroupListView extends React.Component {
    state = {
        size: 'small',
    };

    render() {
        const { size } = this.state;

        return (
            <div>
                <label>分组名称：{this.props.value}</label>
                <Button type="primary" icon={<PlusOutlined />} size={size}>
                    增加任务
                </Button>
                <Button type="primary" icon={<DeleteOutlined />} size={size}>
                    删除分组
                </Button>
            </div>
        );
    }
}

export default TaskGroupListView;
