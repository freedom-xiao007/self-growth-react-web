import React from "react";
import {Button, Divider, List, Modal, Pagination, Space, Table} from "antd";
import {battleLog, gameUserInfo} from "../../api/HeroRequest";
import Icon from "@ant-design/icons";
import {HeroInfo} from "./HeroInfo";
import {GameUserInfo} from "./GameUserInfo";
import {EnemyInfo} from "./EnemyInfo";

export class BattleLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '时间点',
                    dataIndex: 'date',
                    key: 'date',
                },
                {
                    title: '记录',
                    dataIndex: 'message',
                    key: 'message',
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <Space size="middle">
                            <Button type="primary"
                                    icon={<Icon type="sync" />}
                                    onClick={this.showHero.bind(this)}
                                    size="small">
                                查看英雄信息
                            </Button>
                            <Modal title={record.hero.name_zw} visible={this.state.heroShow} onOk={this.heroOk} onCancel={this.heroCancel}>
                                <GameUserInfo value={this.state.userInfo} />
                                <Divider />
                                <HeroInfo value={record.hero}/>
                            </Modal>

                            <Button type="primary"
                                    icon={<Icon type="sync" />}
                                    onClick={this.showEnemy.bind(this)}
                                    size="small">
                                查看敌人信息
                            </Button>
                            <Modal title={record.enemy.name_zw} visible={this.state.enemyShow} onOk={this.enemyOk} onCancel={this.enemyCancel}>
                                <EnemyInfo value={record.enemy}/>
                            </Modal>
                        </Space>
                    ),
                },
            ],

            dataSource: [
                {
                    "id": "61873b183c270164a84678b1",
                    "created_at": "2021-11-07T02:34:00.334Z",
                    "updated_at": "2021-11-07T02:34:00.334Z",
                    "date": "2021-11-07T02:34:00.333Z",
                    "message": "英雄神武，击杀怪物: hero attck = 10, defence = 1, enemy attack = 4, defence = 4, heroDamage=6, enenmyDamage=3",
                    "isWin": true,
                    "hero": {
                        "id": "000000000000000000000000",
                        "created_at": "0001-01-01T00:00:00Z",
                        "updated_at": "0001-01-01T00:00:00Z",
                        "name_zw": "昊天上帝",
                        "name_py": "haotianshangdi",
                        "description": "昊天上帝",
                        "spirit": 86840,
                        "spiritAttack": 1,
                        "spiritDefence": 1,
                        "bleed": 1000,
                        "strong": 10,
                        "shooting": 1,
                        "attackSpeed": 1,
                        "dodge": 1,
                        "defence": 1,
                        "moveSpeed": 1,
                        "level": 1,
                        "chip": 0,
                        "isBattle": true
                    },
                    "enemy": {
                        "id": "000000000000000000000000",
                        "created_at": "0001-01-01T00:00:00Z",
                        "updated_at": "0001-01-01T00:00:00Z",
                        "name_zw": "老苦",
                        "name_py": "laoku",
                        "description": "老苦",
                        "spiritAttack": 4,
                        "spiritDefence": 4,
                        "bleed": 4,
                        "strong": 4,
                        "shooting": 4,
                        "attackSpeed": 4,
                        "dodge": 4,
                        "defence": 4,
                        "moveSpeed": 4,
                        "level": 4
                    }
                }
            ],

            pageIndex: 0,
            pageSize: 15,
            total: 100,

            heroShow: false,
            userInfo: {},
        };

        this.changePage = this.changePage.bind(this);
        this.showHero = this.showHero.bind(this);
        this.heroOk = this.heroOk.bind(this);
        this.heroCancel = this.heroCancel.bind(this);

        this.showEnemy = this.showEnemy.bind(this);
        this.enemyOk = this.enemyOk.bind(this);
        this.enemyCancel = this.enemyCancel.bind(this);
    }

    componentDidMount() {
        gameUserInfo().then(res => {
            console.log(res.data);
            this.setState({userInfo: res.data})
        })

        let params = {
            "pageSize": this.state.pageSize,
            "pageIndex": this.state.pageIndex,
        }
        battleLog(params).then(res => {
            console.log(res);
            this.setState({
                dataSource: res.data,
                total: parseInt(res.total),
                pageSize: parseInt(res.pageSize),
                pageIndex: parseInt(res.pageIndex),
            })
        })
    }

    changePage(page, pageSize) {
        console.log(page, pageSize);
        let params = {
            "pageSize": pageSize,
            "pageIndex": page - 1,
        }
        battleLog(params).then(res => {
            console.log(res);
            this.setState({
                dataSource: res.data,
                total: parseInt(res.total),
                pageSize: parseInt(res.pageSize),
                pageIndex: parseInt(res.pageIndex) + 1,
            })
        })
    }

    showHero() {
        this.setState({heroShow: true});
    };

    heroOk = () => {
        this.setState({heroShow: false})
    };

    heroCancel = () => {
        this.setState({heroShow: false})
    };

    showEnemy() {
        this.setState({enemyShow: true});
    };

    enemyOk = () => {
        this.setState({enemyShow: false})
    };

    enemyCancel = () => {
        this.setState({enemyShow: false})
    };

    render() {
        return (
            <div align="left">
                <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false}/>
                <Pagination showQuickJumper
                            current={this.state.pageIndex}
                            total={this.state.total}
                            pageSize={this.state.pageSize}
                            onChange={this.changePage} />
            </div>
        );
    }
}
