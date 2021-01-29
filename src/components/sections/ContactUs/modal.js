import React from 'react';
import { func, string, bool } from 'prop-types';
import {
  Modal, Button, Typography,
} from 'antd';
import Icon from '../../elements/Icon';

const { Text, Title } = Typography;

const ContactUsFeedbackModal = ({
  text, visible, handleCancel, userName, isError,
}) => (
  <Modal
    wrapClassName="ds-contact-modal ds-modal ds-modal-sm"
    width="100%"
    visible={visible}
    closable={false}
    footer={false}
    onCancel={handleCancel}
  >
    {!isError ? (
      <Icon name="checkMark" />
    ) : (
      <Icon
        className="error"
        name="attention"
      />
    )}

    <Title
      level={2}
      className="ds-h2 modal-title"
    >
      <span className="text-capitalize">{`Hi, ${userName}!`}</span>
    </Title>

    <Text className="modal-text ds-regular">
      <span className="text-capitalize">{`${userName}, `}</span>
      {text}
    </Text>

    <Button
      className="ds-button"
      type="primary"
      onClick={handleCancel}
    >
      Got it!
    </Button>
  </Modal>
);

ContactUsFeedbackModal.propTypes = {
  visible: bool,
  isError: bool,
  handleCancel: func,
  userName: string,
  text: string,
};

ContactUsFeedbackModal.defaultProps = {
  visible: false,
  isError: false,
  handleCancel: null,
  userName: '',
  text: '',
};

export default ContactUsFeedbackModal;
