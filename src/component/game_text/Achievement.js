import {Button, DatePicker, List, Modal, Pagination, Space, Table, Timeline} from 'antd';
import React from "react";
import {activityHistory} from "../../api/ActivityRequest";
import Icon, {CheckOutlined, DeleteOutlined} from "@ant-design/icons";

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
                                        onClick={this.refreshAchievement.bind(this, record.id)}>
                                    数据同步
                                </Button>
                                <Button
                                    type="primary"
                                    icon={<DeleteOutlined />}
                                    size="small"
                                    disabled={!record.isImport}
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

        this.changePage = this.changePage.bind(this);
        this.timestamp = new Date().getTime() / 1000;
    }

    componentDidMount() {
        let params = {
            "timestamp": this.state.timestamp,
        };
        // activityHistory(params).then(res => {
        //     console.log(res);
        //     this.setState({dataSource: res.data["data"], total: res.data["total"]})
        // })
    }

    changePage(page, pageSize) {
        // console.log(page, pageSize);
        // if (page === this.state.pageIndex) {
        //     page = page + 1;
        // }
        // let params = {
        //     "activity": "",
        //     "startTimeStamp": "0",
        //     "endTimeStamp": "0",
        //     "pageIndex": page,
        //     "pageSize": pageSize,
        // };
        // activityHistory(params).then(res => {
        //     console.log(res);
        //     this.setState({
        //         dataSource: res.data["data"],
        //         total: res.data["total"],
        //         pageSize: pageSize,
        //         pageIndex: page,
        //     })
        // })
    }

    refreshAchievement(id) {

    }

    importAchievement(id) {

    }

    render() {
        return (
            <div align="left">
                <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false}/>;
                <Button icon="right">下一页</Button>
            </div>
        );
    }
}
