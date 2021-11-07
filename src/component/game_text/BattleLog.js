import {Button, Card, Col, message, Row, Space, Tag} from 'antd';
import React from "react";
import {battleHero, gameOwnHeroes, gameUserInfo, modifyOwnHeroProperty} from "../../api/HeroRequest";
import {MinusOutlined, PlusOutlined, SlidersOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

export class BattleLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                [
                    {
                        attackSpeed: 1,
                        bleed: 1000,
                        chip: 20,
                        created_at: "0001-01-01T00:00:00Z",
                        defence: 1,
                        description: "太昊",
                        dodge: 1,
                        id: "000000000000000000000000",
                        level: 1,
                        moveSpeed: 1,
                        name_py: "taihao",
                        name_zw: "太昊",
                        shooting: 1,
                        spirit: 86840,
                        spiritAttack: 1,
                        spiritDefence: 1,
                        strong: 1,
                        updated_at: "0001-01-01T00:00:00Z",
                        isBattle: false,
                    }
                ],
            ],

            spirit: 0,
            strength: 0,
        };

        this.reduceProperty = this.reduceProperty.bind(this);
        this.increaseProperty = this.increaseProperty.bind(this);
        this.modifyProperty = this.modifyProperty.bind(this);
        this.refreshHeroes = this.refreshHeroes.bind(this);
        this.battleHero = this.battleHero.bind(this);
    }

    componentDidMount() {
        this.refreshHeroes();
    }

    battleHero(hero) {
        battleHero({"hero": hero}).then(res => {
            console.log(res.data);
            message.info('上阵成功').then(r => "上阵失败");
            this.refreshHeroes();
        })
    }


    reduceProperty(hero, property) {
        this.modifyProperty(hero, property, -1);
    }

    increaseProperty(hero, property) {
        this.modifyProperty(hero, property, 1);
    }

    modifyProperty(hero, property, type) {
        modifyOwnHeroProperty({"hero": hero, "property": property, "type": type}).then(res => {
            console.log(res.data);
            this.refreshHeroes();
        })
    }

    refreshHeroes() {
        gameUserInfo().then(res => {
            console.log(res.data);
            this.setState({spirit: res.data.spirit, strength: res.data.strength})
        })

        gameOwnHeroes().then(res => {
            console.log(res.data);
            let groupData = []
            let groupIndex = -1
            for (let i=0; i<res.data.length; i++) {
                let cycle = i % 3;
                if (cycle === 0) {
                    groupIndex += 1
                    groupData.push([])
                    groupData[groupIndex].push(res.data[i])
                } else {
                    groupData[groupIndex].push(res.data[i])
                }
            }
            this.setState({data: groupData})
        })
    }

    render() {
        return (
            <div className="site-card-wrapper" align="left">
                <Space>
                    <label>元气：</label><strong>{this.state.spirit}</strong>
                    <label>精元：</label><strong>{this.state.strength}</strong>
                </Space>

                {
                    this.state.data.map(group => (
                        <Row gutter={16}>
                            {group.map(item => (
                                <Col span={8}>
                                    <Card bordered={true}>
                                        <Meta
                                            avatar={<Button type="primary"
                                                            icon={<SlidersOutlined />}
                                                            onClick={this.battleHero.bind(this, item.name_py)}
                                                            size="small">
                                                {item.isBattle ? "下阵" : "上阵"}
                                            </Button>
                                            }
                                            title={item.name_zw}
                                        />

                                        <Space>
                                            <Tag color="magenta">灵魂力：</Tag>
                                            <label>{item.spirit}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "spirit")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "spirit")}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">神识：</Tag>
                                            <label>{item.spiritAttack}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "spiritAttack")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "spiritAttack")}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">神防：</Tag>
                                            <label>{item.spiritDefence}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "spiritDefence")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "spiritDefence")}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">血气：</Tag>
                                            <label>{item.bleed}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "bleed")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "bleed")}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">力量：</Tag>
                                            <label>{item.strong}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "strong")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "strong")}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">命中率：</Tag>
                                            <label>{item.shooting}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "shooting")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "shooting")}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">攻速：</Tag>
                                            <label>{item.attackSpeed}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "attackSpeed")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "attackSpeed")}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">闪避：</Tag>
                                            <label>{item.dodge}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "dodge")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "dodge")}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">防御：</Tag>
                                            <label>{item.defence}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "defence")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "defence")}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">移动力：</Tag>
                                            <label>{item.moveSpeed}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    onClick={this.reduceProperty.bind(this, item.name_py, "moveSpeed")}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "moveSpeed")}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">碎片：</Tag>
                                            <label>{item.chip}</label>

                                            <Tag color="magenta">星级：</Tag>
                                            <label>{item.level}</label>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    onClick={this.increaseProperty.bind(this, item.name_py, "level")}
                                                    size="small">
                                            </Button>
                                        </Space>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ))
                }
            </div>
        );
    }
}
