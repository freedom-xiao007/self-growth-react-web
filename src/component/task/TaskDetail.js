import React from "react";
import {DeleteOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {completeTaskById, deleteTaskById} from "../../api/taskRequest";

export class TaskLabel extends React.Component {
    render() {
        let cycleMap = {
            0 : "日",
            1 : "周",
            2 : "月",
            3 : "年",
        };
        let labelMap = {
            "learn" : "学习",
            "running" : "运动",
            "work" : "工作",
            "sleep" : "睡觉",
            "daily" : "日常",
            "other" : "其他",
        };
        let learnTypeMap = {
            0 : "输入",
            1 : "输出",
        };

        let id = this.props.value["id"];
        let name = this.props.value["name"];
        let cycle = cycleMap[this.props.value["cycleType"]];
        let description = cycleMap[this.props.value["description"]];
        let isComplete = this.props.value["description"] === "true" ? "完成" : "未完成";
        let label = labelMap[this.props.value["label"]]
        let learnType = learnTypeMap[labelMap[this.props.value["learnType"]]];

        function completeTask() {
            completeTaskById(id).then(res => {
                console.log(res);
            });
        }

        function deleteTask() {
            deleteTaskById(id).then(res => {
                console.log(res);
            })
        }

        return (
            <div>
                <label>名称：{name}</label>
                <label>详情：{description}</label>
                <label>周期：{cycle}</label>
                <label>标签：{label}</label>
                <label>学习类型：{learnType}</label>
                <label>是否完成：{isComplete}</label>
                <Button type="primary" icon={<DeleteOutlined />} size="small" onClick={completeTask}>
                    完成
                </Button>
                <Button type="primary" icon={<DeleteOutlined />} size="small" onClick={deleteTask}>
                    删除
                </Button>
            </div>
        );
    }
}

export default TaskLabel;
