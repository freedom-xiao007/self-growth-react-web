import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import {AddGroup} from "./AddGroup";

const AddGroupDialog = () => {
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
            <Button type="primary" icon={<PlusOutlined />} size="large" onClick={showModal}>
                增加分组
            </Button>

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <AddGroup/>
            </Modal>
        </>
    );
};

export default AddGroupDialog;
