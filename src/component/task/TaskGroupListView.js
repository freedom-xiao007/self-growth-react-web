import React from "react";
import {Button, message, Modal, Space} from "antd";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import {deleteTaskGroupByName, modifyGroupById} from "../../api/taskRequest";
import {AddTask} from "./AddTask";

export class TaskGroupListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'small',
            showAddTask: false,
        };
    }

    showModal = () => {
        this.setState({showAddTask: true})
    };

    handleOk = () => {
        this.setState({showAddTask: false})
    };

    handleCancel = () => {
        this.setState({showAddTask: false})
    };

    render() {
        const { size } = this.state;
        let cycleMap = {
            0 : "日",
            1 : "周",
            2 : "月",
            3 : "年",
            4 : "无",
        };
        let labelMap = {
            "learn" : "学习",
            "running" : "运动",
            "work" : "工作",
            "sleep" : "睡觉",
            "daily" : "日常",
            "other" : "其他",
        };

        let id = this.props.value["id"];
        let name = this.props.value["name"];
        let cycle = cycleMap[this.props.value["cycleType"]];
        let description = this.props.value["description"];
        let label = labelMap[this.props.value["label"]]

        function deleteGroup() {
            deleteTaskGroupByName(name).then(res => {
                console.log(res);
                message.info('任务组删除成功').then(r => "任务组删除失败");
            })
        }

        function modifyGroup(e) {
            console.log(e.target.value)
            let modifyGroup = {"modifyId": id, "name": e.target.value}
            modifyGroupById(modifyGroup).then(res => {
                message.info('任务组修改成功').then(r => "任务组修改失败");
                name = e.target.value;
            })
        }

        return (
            <div align="left">
                <Space>
                    <label>详情：{description}</label>
                    <label>周期：{cycle}</label>
                    <label>标签：{label}</label>

                    <Button type="primary" icon={<PlusOutlined />} size="small" onClick={this.showModal}>
                        增加任务
                    </Button>

                    <Modal title="Basic Modal" visible={this.state.showAddTask} footer={null}>
                        <AddTask groupName={this.props.value["name"]}
                                 closeDialog={() => this.handleOk()}
                                 refresh={() => this.props.refresh()}/>
                    </Modal>

                    <Button type="primary" icon={<DeleteOutlined />} size={size} onClick={deleteGroup}>
                        删除分组
                    </Button>
                </Space>
            </div>
        );
    }
}
