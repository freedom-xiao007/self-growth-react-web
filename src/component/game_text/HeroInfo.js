import React from "react";
import {Button, Space, Tag} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {modifyOwnHeroProperty} from "../../api/HeroRequest";

export class HeroInfo extends React.Component {
    constructor(props) {
        super(props);

        this.reduceProperty = this.reduceProperty.bind(this);
        this.increaseProperty = this.increaseProperty.bind(this);
        this.modifyProperty = this.modifyProperty.bind(this);
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

    render() {
        return (
           <div align="left">
               <Space>
                   <Tag color="magenta">灵魂力：</Tag>
                   <label>{this.props.value.spirit}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "spirit")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "spirit")}
                           size="small">
                   </Button>

                   <Tag color="magenta">神识：</Tag>
                   <label>{this.props.value.spiritAttack}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "spiritAttack")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "spiritAttack")}
                           size="small">
                   </Button>
               </Space>

               <Space>
                   <Tag color="magenta">神防：</Tag>
                   <label>{this.props.value.spiritDefence}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "spiritDefence")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "spiritDefence")}
                           size="small">
                   </Button>

                   <Tag color="magenta">血气：</Tag>
                   <label>{this.props.value.bleed}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "bleed")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "bleed")}
                           size="small">
                   </Button>
               </Space>

               <Space>
                   <Tag color="magenta">力量：</Tag>
                   <label>{this.props.value.strong}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "strong")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "strong")}
                           size="small">
                   </Button>

                   <Tag color="magenta">命中率：</Tag>
                   <label>{this.props.value.shooting}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "shooting")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "shooting")}
                           size="small">
                   </Button>
               </Space>

               <Space>
                   <Tag color="magenta">攻速：</Tag>
                   <label>{this.props.value.attackSpeed}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "attackSpeed")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "attackSpeed")}
                           size="small">
                   </Button>

                   <Tag color="magenta">闪避：</Tag>
                   <label>{this.props.value.dodge}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "dodge")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "dodge")}
                           size="small">
                   </Button>
               </Space>

               <Space>
                   <Tag color="magenta">防御：</Tag>
                   <label>{this.props.value.defence}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "defence")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "defence")}
                           size="small">
                   </Button>

                   <Tag color="magenta">移动力：</Tag>
                   <label>{this.props.value.moveSpeed}</label>
                   <Button type="primary"
                           icon={<MinusOutlined />}
                           onClick={this.reduceProperty.bind(this, this.props.value.name_py, "moveSpeed")}
                           size="small">
                   </Button>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "moveSpeed")}
                           size="small">
                   </Button>
               </Space>

               <Space>
                   <Tag color="magenta">碎片：</Tag>
                   <label>{this.props.value.chip}</label>

                   <Tag color="magenta">星级：</Tag>
                   <label>{this.props.value.level}</label>
                   <Button type="primary"
                           icon={<PlusOutlined />}
                           onClick={this.increaseProperty.bind(this, this.props.value.name_py, "level")}
                           size="small">
                   </Button>
               </Space>
           </div>
        );
    }
}
