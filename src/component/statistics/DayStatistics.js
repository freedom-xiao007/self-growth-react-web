import {DatePicker, Space, Table} from 'antd';
import React from "react";
import "../../api/taskRequest"
import {dayTaskStatistics} from "../../api/taskRequest";

export class DayStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        <Space size="middle">
                            <a>Delete</a>
                        </Space>
                    ),
                },
            ],

            dataSourceOfTask: [
                {
                    completeDate: "2021-10-30T12:00:30.035Z",
                    configId: "617d092b9831fbcb2fdc9223",
                    created_at: "2021-10-30T12:00:30.035Z",
                    cycleType: 4,
                    description: "无",
                    id: "617d33de4b0feffed8ec7e06",
                    label: "learn",
                    name: "后端修改任务接口",
                    type: 1,
                    updated_at: "2021-10-30T12:00:30.035Z",
                    userName: "1243925457@qq.com",
                },
            ],

            columnsOfActivity: [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '应用',
                    dataIndex: 'application',
                    key: 'application',
                },
                {
                    title: '标签',
                    dataIndex: 'label',
                    key: 'label',
                },
                {
                    title: '总时长（分）',
                    dataIndex: 'amount',
                    key: 'amount',
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <Space size="middle">
                            <a>历史记录</a>
                        </Space>
                    ),
                },
            ],

            dataSourceOfActivity: [
                {
                    amount: 254,
                    application: "Keep",
                    label: "运动",
                    name: "\"com.gotokeep.keep/com.gotokeep.keep.wt.business.training.core.activity.TrainingActivity\"",
                    dates: ["2021-10-24T22:16:00.434Z", "2021-10-24T22:16:00.434Z"],
                },
            ],
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(date, dateString) {
        let timestamp = new Date(dateString).getTime() / 1000;
        console.log(date, dateString, timestamp);
        dayTaskStatistics(timestamp).then(res => {
            console.log(res.data)
            this.setState({dataSourceOfTask: res.data["completeTaskLog"],
                dataSourceOfActivity: res.data["activityLog"],})
        })
    }

    render() {
        return (
            <div align="left">
                <DatePicker onChange={this.onChange} />

                <h1>已完成任务列表概览</h1>
                <Table dataSource={this.state.dataSourceOfTask} columns={this.state.columnsOfTask} />;

                <h1>活动历史记录概览</h1>
                <Table dataSource={this.state.dataSourceOfActivity} columns={this.state.columnsOfActivity} />;
            </div>
        );
    }
}
