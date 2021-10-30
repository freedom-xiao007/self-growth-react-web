import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import {AddTask} from "./AddTask";

export const AddTaskDialog = (groupName) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" icon={<PlusOutlined />} size="small" onClick={showModal}>
                增加任务
            </Button>

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <AddTask groupName={groupName}/>
            </Modal>
        </>
    );
};
