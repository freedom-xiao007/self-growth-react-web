import React from "react";

export class TaskLabel extends React.Component {
    render() {
        return (
            <div>{this.props.value}</div>
        );
    }
}

export default TaskLabel;
