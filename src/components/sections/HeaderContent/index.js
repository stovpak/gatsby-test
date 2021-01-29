/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { shape } from 'prop-types';
import { Button, Collapse } from 'antd';
import { isEmpty } from 'lodash';
import { useMediaQuery } from 'react-responsive';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Img from '../../elements/Image';
import DSButton from '../../elements/Button';
import Container from '../../DynamicComponents/Container';
import Icon from '../../elements/Icon';
import HeaderNavItem from '../../elements/HeaderNavItem';

const { Panel } = Collapse;

const HeaderContent = ({ data }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCollapse, setActiveCollapse] = useState('');
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  const iconName = showMobileMenu ? 'cross' : 'hamburgerMenu';
  const pathArray = typeof window !== 'undefined' ? window.location.pathname.split('/') : [];
  const currPath = !isEmpty(pathArray) ? pathArray[1].replace(/-/g, ' ') : '';
  const filtered = data.content
    .find((content) => content.link.toLowerCase().trim() === currPath);

  const handleBurgerClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleCollapseClick = (key) => {
    setActiveCollapse(key);
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMobileMenu]);

  useEffect(() => {
    if (filtered) {
      setActiveCollapse(filtered.id);
    }
  }, [filtered]);

  return (
    <>
      <div
        className="header-content flex justify-between"
      >
        <Container>
          <div className="row">
            <div className="col-sm-4 flex flex-center justify-start">
              <div className="header-logo-wrap">
                <AniLink
                  fade
                  duration={0.5}
                  to="/"
                >
                  <Img
                    minWidth="140"
                    minHeight="30"
                    className="header-logo header-logo-primary"
                    src={data.primaryLogo.url}
                  />

                  <Img
                    minWidth="140"
                    minHeight="30"
                    className="header-logo header-logo-secondary"
                    src={data.secondaryLogo.url}
                  />
                </AniLink>
              </div>
            </div>

            <div className="col-sm-8">
              <div className="header-navigation flex flex-center justify-end">
                {data.content.map((link) => (
                  <div
                    className="header-column"
                    key={link.id}
                  >
                    <HeaderNavItem headerLabel={link} />
                  </div>
                ))}

                <div className="header-column">
                  <Button
                    className="ds-button header-toggle"
                    type="primary"
                  >
                    <AniLink
                      fade
                      duration={0.5}
                      to="/contact-us"
                    >
                      Contact us
                    </AniLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {isTabletOrMobileDevice && (
        <div className={`header-content-mobile ${showMobileMenu ? 'opened' : ''}`}>
          <div className={`pt-sm pb-sm ${showMobileMenu ? 'default-shadow' : ''}`}>
            <Container>
              <div className="row">
                <div className="col-xs-8">
                  <div className="header-logo-wrap">
                    <AniLink
                      fade
                      duration={0.5}
                      to="/"
                    >
                      <Img
                        minWidth="140"
                        minHeight="30"
                        className="header-logo header-logo-primary"
                        src={data.primaryLogo.url}
                      />

                      <Img
                        minWidth="140"
                        minHeight="30"
                        className="header-logo header-logo-secondary"
                        src={data.secondaryLogo.url}
                      />
                    </AniLink>
                  </div>
                </div>
                <div className="col-xs-4">
                  <div className="flex justify-end h-100">
                    <Button
                      onClick={handleBurgerClick}
                      className="ds-button burger-menu-btn"
                      ghost
                      type="white"
                      shape="circle"
                      icon={
                        <Icon name={iconName} />
                      }
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className={`header-mobile-menu mt-xs ${showMobileMenu ? 'fadeIn' : ''}`}>
            <Container>
              <div className="row">
                <div className="col-xs-12">
                  <Collapse
                    accordion
                    className="ds-collapse"
                    activeKey={activeCollapse}
                    defaultActiveKey={activeCollapse}
                    bordered={false}
                    onChange={handleCollapseClick}
                    expandIcon={() => (
                      <Icon
                        name="angleBottom"
                        width="14"
                        height="30"
                        className="ds-icon"
                      />
                    )}
                    expandIconPosition="right"
                  >
                    {data.content.map((link) => (
                      <Panel
                        header={link.link}
                        key={link.id}
                      >
                        {link.sublinksBlock.map((sub) => (
                          sub.sublinks.map((l) => (
                            <div className="link-wrap flex justify-between pt-xs pb-xs" key={l.text}>
                              <DSButton data={l} buttonClassName="item-link text-bold text-primary" />
                              <Icon name="angleRight" width="12" height="12" />
                            </div>
                          ))
                        ))}
                      </Panel>
                    ))}
                  </Collapse>
                </div>
              </div>
            </Container>
          </div>
          <div className="button-wrap text-center">
            <Button className="ant-btn ant-btn-primary ds-button menu-button">
              <AniLink
                fade
                duration={0.5}
                to="/contact-us"
              >
                Contact us
              </AniLink>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

HeaderContent.propTypes = {
  data: shape(),
};

HeaderContent.defaultProps = {
  data: {},
};

export default HeaderContent;
