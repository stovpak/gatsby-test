import React from 'react';
import { arrayOf, string } from 'prop-types';
import { Breadcrumb } from 'antd';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { RightOutlined } from '@ant-design/icons';
import Container from '../../DynamicComponents/Container';
import { useBreadcrumbsQuery } from './query';

const Breadcrumbs = ({ pages }) => {
  const pagesData = useBreadcrumbsQuery();
  const pagesItems = pagesData.allSitePage.edges;
  const excludedPages = ['contact-us'];

  const isLink = (page) => {
    const pageUrl = `/${page}/`;

    return pagesItems.some((item) => item.path === pageUrl);
  };

  const hideBreadcrumbs = pages.some((page) => excludedPages.includes(page));

  return (
    <Container>
      {!hideBreadcrumbs && (
        <Breadcrumb
          className="ds-breadcrumb"
          separator={
            <RightOutlined />
          }
        >
          <Breadcrumb.Item>
            <AniLink
              fade
              duration={0.5}
              className="breadcrumb-link text-bold"
              to="/"
            >
              Home
            </AniLink>
          </Breadcrumb.Item>

          {pages.map((page, index) => {
            const isLast = index === pages.length - 1;
            const lastLinkClassName = isLast ? 'text-black' : 'text-primary';

            if (isLast || !isLink(page)) {
              return (
                <Breadcrumb.Item key={page}>
                  <span className={`text-bold text-capitalize ${lastLinkClassName}`}>
                    {page}
                  </span>
                </Breadcrumb.Item>
              );
            }

            return (
              <Breadcrumb.Item key={page}>
                <AniLink
                  fade
                  duration={0.5}
                  className="breadcrumb-link text-bold ds-link"
                  to={`/${page}`}
                >
                  {page}
                </AniLink>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      )}
    </Container>
  );
};

Breadcrumbs.propTypes = {
  pages: arrayOf(string),
};

Breadcrumbs.defaultProps = {
  pages: [],
};

export default Breadcrumbs;
