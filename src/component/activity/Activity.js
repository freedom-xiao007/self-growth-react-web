import {Button, DatePicker, List, Modal, Pagination, Space, Table, Timeline} from 'antd';
import React from "react";
import {activityHistory} from "../../api/ActivityRequest";

export class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '活动',
                    dataIndex: 'activity',
                    key: 'activity',
                },
                {
                    title: '应用',
                    dataIndex: 'application',
                    key: 'application',
                },
                {
                    title: '日期',
                    dataIndex: 'date',
                    key: 'date',
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

            dataSource: [
                {
                    activity: "\"com.miui.home/com.miui.home.launcher.Launcher\"",
                    application: "",
                    created_at: "2021-11-03T13:48:25.405Z",
                    date: "2021-11-03T21:48:25.405+08:00",
                    id: "6182932967970eecca5a0d61",
                    updated_at: "2021-11-03T13:48:25.405Z",
                    userName: "1243925457@qq.com",
                },
            ],

            pageIndex: 0,
            pageSize: 50,
            total: 100,
        };

        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        let params = {
            "activity": "",
            "startTimeStamp": "0",
            "endTimeStamp": "0",
            "pageIndex": 0,
            "pageSize": this.state.pageSize,
        };
        activityHistory(params).then(res => {
            console.log(res);
            this.setState({dataSource: res.data["data"], total: res.data["total"]})
        })
    }

    changePage(page, pageSize) {
        console.log(page, pageSize);
        if (page === this.state.pageIndex) {
            page = page + 1;
        }
        let params = {
            "activity": "",
            "startTimeStamp": "0",
            "endTimeStamp": "0",
            "pageIndex": page,
            "pageSize": pageSize,
        };
        activityHistory(params).then(res => {
            console.log(res);
            this.setState({
                dataSource: res.data["data"],
                total: res.data["total"],
                pageSize: pageSize,
                pageIndex: page,
            })
        })
    }

    render() {
        return (
            <div align="left">
                <DatePicker onChange={this.onChange} />

                <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false}/>;
                <Pagination showQuickJumper
                            current={this.state.pageIndex}
                            total={this.state.total}
                            pageSize={this.state.pageSize}
                            onChange={this.changePage} />
            </div>
        );
    }
}
