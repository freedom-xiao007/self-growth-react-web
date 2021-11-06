import {Button, DatePicker, List, message, Modal, Pagination, Space, Table, Timeline} from 'antd';
import React from "react";
import {activityHistory} from "../../api/ActivityRequest";
import Icon, {BookOutlined, CheckOutlined, DeleteOutlined, UngroupOutlined} from "@ant-design/icons";
import {achievementGet, achievementImport, achievementSync} from "../../api/AchievementRequest";

export class HeroSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <div>
                            <Space>
                                <Button type="primary"
                                        icon={<BookOutlined />}
                                        size="small">
                                    查看详情
                                </Button>
                            </Space>
                        </div>
                    ),
                },
            ],

            dataSource: [
                {
                    "id": "000000000000000000000000",
                    "name": "test",
                    "created_at": "0001-01-01T00:00:00Z",
                    "updated_at": "0001-01-01T00:00:00Z",
                    "date": "2021-11-06",
                    "spirit": 0,
                    "strength": 0,
                    "reiki": 0,
                    "isImport": false
                },
            ],

            reiki: 0,
        };

        this.heroRound = this.heroRound.bind(this);
    }

    heroRound() {

    }

    render() {
        return (
            <div align="left">
                <Space>
                    <label>灵气：</label><strong>{this.state.reiki}</strong>
                    <Button icon={<UngroupOutlined />} onClick={this.heroRound}>抽取</Button>
                </Space>

                <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false}/>;
            </div>
        );
    }
}
