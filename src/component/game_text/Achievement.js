import {Button, DatePicker, List, message, Modal, Pagination, Space, Table, Timeline} from 'antd';
import React from "react";
import {activityHistory} from "../../api/ActivityRequest";
import Icon, {CheckOutlined, DeleteOutlined} from "@ant-design/icons";
import {achievementGet, achievementSync} from "../../api/AchievementRequest";

export class Achievement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '日期',
                    dataIndex: 'date',
                    key: 'date',
                },
                {
                    title: '元气',
                    dataIndex: 'spirit',
                    key: 'spirit',
                },
                {
                    title: '精元',
                    dataIndex: 'strength',
                    key: 'strength',
                },
                {
                    title: '灵气',
                    dataIndex: 'reiki',
                    key: 'reiki',
                },
                {
                    title: '是否已导入',
                    dataIndex: 'isImport',
                    key: 'isImport',
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <div>
                            <Space>
                                <Button type="primary"
                                        icon={<Icon type="sync" />}
                                        size="small"
                                        onClick={this.refreshAchievement.bind(this, record.date)}>
                                    数据同步
                                </Button>
                                <Button
                                    type="primary"
                                    icon={<DeleteOutlined />}
                                    size="small"
                                    disabled={record.isImport === "true"}
                                    onClick={this.importAchievement.bind(this, record.id)}>
                                    导入
                                </Button>
                            </Space>
                        </div>
                    ),
                },
            ],

            dataSource: [
                {
                    "id": "000000000000000000000000",
                    "created_at": "0001-01-01T00:00:00Z",
                    "updated_at": "0001-01-01T00:00:00Z",
                    "date": "2021-11-06",
                    "spirit": 0,
                    "strength": 0,
                    "reiki": 0,
                    "isImport": false
                },
            ],
        };

        this.beforePage = this.beforePage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.refreshAchievement = this.refreshAchievement.bind(this);
        this.importAchievement = this.importAchievement.bind(this);
        this.getAchievementList = this.getAchievementList.bind(this);
        this.timestamp = parseInt(new Date().getTime() / 1000);
    }

    componentDidMount() {
        this.getAchievementList(new Date());
        this.setState({timestamp: parseInt( new Date().getTime() / 1000)})
    }

    beforePage() {
        let current = new Date(this.state.timestamp * 1000);
        current.setDate(current.getDate() + 10);
        this.getAchievementList(current);
        this.setState({timestamp: parseInt(current.getTime() / 1000)})
    }

    nextPage() {
        let current = new Date(this.state.timestamp * 1000);
        current.setDate(current.getDate() - 10);
        this.getAchievementList(current);
        this.setState({timestamp: parseInt(current.getTime() / 1000)})
    }

    refreshAchievement(dateStr) {
        let date = new Date(dateStr);
        let params = {
            "timestamp": parseInt(date.getTime() / 1000),
        };
        achievementSync(params).then(res => {
            console.log(res);
            this.getAchievementList(new Date(this.state.timestamp * 1000));
            message.info("同步成功").then(r => "同步失败");
        })
    }

    getAchievementList(date) {
        let timestamp = parseInt(date.getTime() / 1000);
        let params = {
            "timestamp": timestamp,
        };
        achievementGet(params).then(res => {
            console.log(res.data);
            this.setState({dataSource: res.data})
        })
    }

    importAchievement(id) {

    }

    render() {
        return (
            <div align="left">
                <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false}/>;
                <Button icon="left" onClick={this.beforePage}>上一页</Button>
                <Button icon="right" onClick={this.nextPage}>下一页</Button>
            </div>
        );
    }
}
