import React from "react";
import {Space} from "antd";

export class GameUserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Space>
                <label>游戏资源</label>
                <label>元气：</label><strong>{this.props.value.spirit}</strong>
                <label>精元：</label><strong>{this.props.value.strength}</strong>
                <label>灵气：</label><strong>{this.props.value.reiki}</strong>
            </Space>
        );
    }
}
