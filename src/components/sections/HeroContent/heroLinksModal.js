import React, { useState, useRef, useEffect } from 'react';
import { arrayOf, shape, bool } from 'prop-types';
import { Modal, Button } from 'antd';
import { useMediaQuery } from 'react-responsive';
import Icon from '../../elements/Icon';
import Buttons from '../../elements/Button';
import Container from '../../DynamicComponents/Container';

const HeroLinksModal = ({ links, isScrolledOut }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const container = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const containerLeftPos = container.current
    ? container.current.getBoundingClientRect().left + 65 : 0;

  useEffect(() => {
    const header = document.querySelector('header');

    if (isModalVisible) {
      header.classList.remove('header-sticky');
      document.body.style.overflow = 'hidden';
    }

    if (!isModalVisible) {
      header.classList.add('header-sticky');
      document.body.style.overflow = 'auto';
    }
  }, [isModalVisible]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <div ref={container}>
        {!isModalVisible && !isMobile && isScrolledOut && (
          <div className="position-fixed bottom-20">
            <Button
              className="ds-button ds-button-lg"
              type="white"
              shape="circle"
              size="large"
              onClick={showModal}
              icon={<Icon name="list" />}
            />
          </div>
        )}

        <Modal
          wrapClassName="ds-modal"
          closeIcon={(
            <Button
              className="ds-button ds-button-lg ds-modal-close ds-modal-close-left"
              type="white"
              shape="circle"
              size="large"
              icon={<Icon name="cross" />}
            />
          )}
          getContainer={() => container.current}
          maskStyle={{
            backgroundColor: '#00058666',
          }}
          style={{
            position: 'absolute',
            top: 20,
            left: containerLeftPos,
          }}
          width={220}
          footer={false}
          visible={isModalVisible}
          onCancel={closeModal}
        >
          {links.map((link, index) => (
            <div key={link.id}>
              {link && (
                <Buttons
                  wrapperClassName={`fs-16 ${index === links.length - 1 ? 'mb-0' : 'mb-15'}`}
                  className="ds-button text-bold ds-button-icon-reverse"
                  data={link}
                  onClick={closeModal}
                  icon={(
                    <div className="anticon">
                      <Icon name="arrowRight" />
                    </div>
                  )}
                />
              )}
            </div>
          ))}
        </Modal>
      </div>
    </Container>
  );
};

HeroLinksModal.propTypes = {
  links: arrayOf(shape()).isRequired,
  isScrolledOut: bool.isRequired,
};

export default HeroLinksModal;
