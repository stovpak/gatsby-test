import React from 'react';
import { Link } from 'gatsby';
import { bool, func } from 'prop-types';
import { Button, Typography } from 'antd';
import Container from '../../DynamicComponents/Container';
import Icon from '../../elements/Icon';

const { Text } = Typography;

const Cookies = ({ show, toggleShowCookie }) => {
  const cookieClassName = !show ? 'hidden' : '';

  const handleAllowCookiesCLick = () => {
    toggleShowCookie(true);
  };

  const handleDisableCookiesCLick = () => {
    toggleShowCookie(false);
    if (sessionStorage) {
      sessionStorage.setItem('NoCookieModal', true);
    }
  };

  return (
    <div className={`cookies ${cookieClassName}`}>
      <Container>
        <div className="row flex-center">
          <div className="col-md-9">
            <Text className="ds-regular">
              Welcome to DigitalSuits.co!
              In order to provide a more relevant experience for you, we use cookies to enable
              some website functionality. Cookies help us see which articles most interest you;
              allow you to easily share articles on social media; permit us to deliver content,
              jobs, and ads tailored to your interests and locations; and provide many other site
              benefits. For more information, please review the
              <Link to="/privacy"> Privacy Notice.</Link>
            </Text>
          </div>

          <div className="col-md-2 col-xs-6 items-start direction-column flex">
            <Button
              className="ds-button full-width"
              type="primary"
              onClick={handleAllowCookiesCLick}
            >
              Allow cookies
            </Button>

            <div className="col-xs-6 visible-xs">
              <Link
                className="ant-btn ds-button visible-xs"
                to="/privacy"
              >
                Privacy Notice
              </Link>
            </div>
          </div>

          <div className="col-md text-right">
            <Button
              onClick={handleDisableCookiesCLick}
              className="ds-button text-default"
              ghost
              type="white"
              shape="circle"
              icon={<Icon name="crossLight" />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

Cookies.propTypes = {
  show: bool.isRequired,
  toggleShowCookie: func.isRequired,
};

export default Cookies;
