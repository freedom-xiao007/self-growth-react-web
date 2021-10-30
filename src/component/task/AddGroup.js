import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {PlusOutlined} from "@ant-design/icons";

const AddGroup = () => {
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
                增加分组
            </Button>

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default AddGroup;
