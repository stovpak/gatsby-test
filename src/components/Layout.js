import React, { useEffect, useState } from 'react';
import {
  string, node, shape, bool,
} from 'prop-types';
import { Layout as AntdLayout } from 'antd';
import Cookies from 'universal-cookie';
import { Helmet } from 'react-helmet';
import { isEmpty } from 'lodash';

import { graphql, useStaticQuery } from 'gatsby';
import HeaderContent from './HeaderContent';
import FooterContent from './FooterContent';
import Container from './DynamicComponents/Container';
import CookiesModal from './sections/Cookies';

export const useSettingsQuery = () => {
  const settingQuery = useStaticQuery(graphql`
    query GET_SETTINGS {
      strapi {
        appSetting {
          favicon {
            image {
              url
            }
          }
          chatbotCode {
            code
          }
        }
      }
    }
  `);

  return settingQuery;
};

const Layout = ({
  children, containerClassName, headerClassName, wrapperClassName, subheader,
  location, hideFooter, headerActive,
}) => {
  const settingData = useSettingsQuery();
  const { appSetting } = settingData.strapi;
  const faviconUrl = !isEmpty(appSetting) && !isEmpty(appSetting.favicon) ? appSetting.favicon.image.url : '';
  const { Header, Footer, Content } = AntdLayout;
  let pathname;
  const cookies = new Cookies();
  const [headerSticky, setHeaderSticky] = useState(false);
  const [mainHeader, setMainHeader] = useState(true);
  const [showCookie, setShowCookie] = useState(false);
  let isHideCookieModal;
  const stickyClassName = headerSticky ? 'header-sticky' : '';
  const activeClassName = headerActive ? 'header-active' : '';
  const headerTypeClassName = mainHeader ? 'header-main' : 'header-secondary';

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  };

  const handleCookiesAccept = (value) => {
    setShowCookie(false);

    if (value) {
      cookies.set('ds', 'allowCookies', { path: window.location.pathname });
    }
  };

  useEffect(() => {
    if (sessionStorage) {
      isHideCookieModal = JSON.parse(sessionStorage.getItem('NoCookieModal')) || false;
    }

    if (!isHideCookieModal) {
      setShowCookie(true);
    } else {
      setShowCookie(false);
    }

    if (cookies.get('ds')) {
      setShowCookie(false);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    pathname = window.location.pathname;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setMainHeader(false);
    } else {
      setMainHeader(true);
    }
  }, [pathname]);

  return (
    <AntdLayout className={`ds-layout layout-${containerClassName} ${wrapperClassName}`}>
      <Helmet
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            href: appSetting.favicon.image.url,
          },
        ]}
      />

      {subheader}

      <Helmet
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            href: faviconUrl,
          },
        ]}
      />

      <Header
        theme="light"
        className={
          `header-wrap-${headerClassName} ${stickyClassName} ${activeClassName} ${headerTypeClassName}`
        }
      >
        <HeaderContent
          location={location}
        />
      </Header>

      <Content className={`ds-layout overflow-x-hidden ${containerClassName}`}>{children}</Content>

      <CookiesModal
        show={showCookie}
        toggleShowCookie={handleCookiesAccept}
      />

      {!hideFooter && (
        <Footer className="footer">
          <Container>
            <FooterContent />
          </Container>
        </Footer>
      )}
    </AntdLayout>
  );
};

Layout.propTypes = {
  subheader: node,
  children: node.isRequired,
  containerClassName: string,
  wrapperClassName: string,
  headerClassName: string,
  hideFooter: bool,
  location: shape(),
  headerActive: bool,
};

Layout.defaultProps = {
  subheader: null,
  containerClassName: '',
  wrapperClassName: '',
  headerClassName: '',
  hideFooter: false,
  location: {},
  headerActive: false,
};

export default Layout;
