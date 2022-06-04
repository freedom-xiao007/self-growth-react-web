import React from "react";
import {Button, Modal, Space} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {AddTask} from "./AddTask";

export class TaskGroupListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'small',
            showAddTask: false,
        };
        console.log("TaskGroupListView props:", props);
    }

    showModal = () => {
        this.setState({showAddTask: true})
    };

    handleOk = () => {
        this.setState({showAddTask: false})
    };

    render() {
        return (
            <div align="left">
                <Space>
                    <Button type="primary" icon={<PlusOutlined />} size="small" onClick={this.showModal}>
                        增加任务
                    </Button>

                    <Modal title="Basic Modal" visible={this.state.showAddTask} footer={null}>
                        <AddTask groupName={this.props.value}
                                 closeDialog={() => this.handleOk()}
                                 refresh={() => this.props.refresh()}/>
                    </Modal>
                </Space>
            </div>
        );
    }
}
