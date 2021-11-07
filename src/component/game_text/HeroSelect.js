import {Button, message, Space, Table} from 'antd';
import React from "react";
import {BookOutlined, UngroupOutlined} from "@ant-design/icons";
import {gameHeroRound, gameUserInfo, heroes} from "../../api/HeroRequest";

export class HeroSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '名称',
                    dataIndex: 'name_zw',
                    key: 'name_zw',
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
                    "name_zw": "test",
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

    componentDidMount() {
        gameUserInfo().then(res => {
            console.log(res.data);
            this.setState({reiki: res.data.reiki})
        })

        heroes().then(res => {
            console.log(res.data);
            this.setState({dataSource: res.data})
        })
    }

    heroRound() {
        gameHeroRound().then(res => {
            message.info(res.data).then(r => res.data);
        })
    }

    render() {
        return (
            <div align="left">
                <Space>
                    <label>灵气：</label><strong>{this.state.reiki}</strong>
                    <Button icon={<UngroupOutlined />} onClick={this.heroRound}>抽取,消耗100灵气</Button>
                </Space>

                <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false}/>
            </div>
        );
    }
}
