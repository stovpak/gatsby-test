import React, { useEffect } from 'react';
import { bool, func } from 'prop-types';
import { Modal, Button, Typography } from 'antd';
import Icon from '../../elements/Icon';
import Container from '../../DynamicComponents/Container';
import ContactUsForm from '../ContactUs';

const { Title } = Typography;

const ContactUsModal = ({ isVisible, hideModal }) => {
  useEffect(() => {
    const header = document.querySelector('header');

    if (isVisible) {
      header.classList.remove('header-sticky');
      document.body.style.overflow = 'hidden';
    } else {
      header.classList.add('header-sticky');
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  const handleToggleModal = () => {
    hideModal(false);
  };

  return (
    <Container>
      <Modal
        wrapClassName="ds-modal ds-modal-sm"
        closeIcon={(
          <Button
            className="ds-button text-default"
            ghost
            type="white"
            shape="circle"
            icon={<Icon name="cross" />}
          />
        )}
        width={400}
        footer={false}
        visible={isVisible}
        onCancel={handleToggleModal}
      >
        <Title level={2} className="ds-h2 text-primary text-uppercase mb-xs">Contact US</Title>
        <ContactUsForm
          closeModal={handleToggleModal}
          data={{ messageLabel: 'Linkedn profile', type: 'recruiter' }}
        />
      </Modal>
    </Container>
  );
};

ContactUsModal.propTypes = {
  isVisible: bool.isRequired,
  hideModal: func.isRequired,
};

export default ContactUsModal;
