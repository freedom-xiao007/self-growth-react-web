import React from "react";
import {Button, Space, Tag} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";
import {modifyOwnHeroProperty} from "../../api/HeroRequest";

export class EnemyInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div align="left">
               <Space>
                   <Tag color="magenta">神识：</Tag>
                   <label>{this.props.value.spiritAttack}</label>
               </Space>

               <Space>
                   <Tag color="magenta">神防：</Tag>
                   <label>{this.props.value.spiritDefence}</label>

                   <Tag color="magenta">血气：</Tag>
                   <label>{this.props.value.bleed}</label>
               </Space>

               <Space>
                   <Tag color="magenta">力量：</Tag>
                   <label>{this.props.value.strong}</label>

                   <Tag color="magenta">命中率：</Tag>
                   <label>{this.props.value.shooting}</label>
               </Space>

               <Space>
                   <Tag color="magenta">攻速：</Tag>
                   <label>{this.props.value.attackSpeed}</label>

                   <Tag color="magenta">闪避：</Tag>
                   <label>{this.props.value.dodge}</label>
               </Space>

               <Space>
                   <Tag color="magenta">防御：</Tag>
                   <label>{this.props.value.defence}</label>

                   <Tag color="magenta">移动力：</Tag>
                   <label>{this.props.value.moveSpeed}</label>
               </Space>

               <Space>
                   <Tag color="magenta">星级：</Tag>
                   <label>{this.props.value.level}</label>
               </Space>
           </div>
        );
    }
}
