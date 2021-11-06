import {Button, Card, Col, DatePicker, List, message, Modal, Pagination, Row, Space, Table, Tag, Timeline} from 'antd';
import React from "react";
import {gameHeroRound, gameOwnHeroes, gameUserInfo, heroes} from "../../api/HeroRequest";
import {MinusOutlined, PlusOutlined, UngroupOutlined} from "@ant-design/icons";

export class HeroStrengthen extends React.Component {
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
                    }
                ],
            ],

            spirit: 0,
            strength: 0,
        };
    }

    componentDidMount() {
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
                                    <Card title={item.name_zw} bordered={false}>
                                        <Space>
                                            <Tag color="magenta">灵魂力：</Tag>
                                            <label>{item.spirit}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">神识：</Tag>
                                            <label>{item.spiritAttack}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">神防：</Tag>
                                            <label>{item.spiritDefence}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">血气：</Tag>
                                            <label>{item.bleed}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">力量：</Tag>
                                            <label>{item.strong}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">命中率：</Tag>
                                            <label>{item.shooting}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">攻速：</Tag>
                                            <label>{item.attackSpeed}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">闪避：</Tag>
                                            <label>{item.dodge}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">防御：</Tag>
                                            <label>{item.defence}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>

                                            <Tag color="magenta">移动力：</Tag>
                                            <label>{item.moveSpeed}</label>
                                            <Button type="primary"
                                                    icon={<MinusOutlined />}
                                                    size="small">
                                            </Button>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
                                                    size="small">
                                            </Button>
                                        </Space>

                                        <Space>
                                            <Tag color="magenta">碎片：</Tag>
                                            <label>{item.chip}</label>

                                            <Tag color="magenta">星级：</Tag>
                                            <label>{item.defence}</label>
                                            <Button type="primary"
                                                    icon={<PlusOutlined />}
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
