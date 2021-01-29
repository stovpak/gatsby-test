import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Buttons from '../Button';

const { Title } = Typography;

const SitemapComponent = ({ data }) => (
  <div className="col-md-4">
    <div className="sitemap-list mb-md">
      {!isEmpty(data.label) && (
        <Title
          level="4"
          className="ds-h4 sitemap-title mb-sm"
        >
          {data.label}
        </Title>
      )}

      {data.sitemapRelations && data.sitemapRelations.map((link) => (
        <div
          className="sitemap-link-wrap mb-xs"
          key={link.id}
        >
          {link.page && (
            <Buttons
              buttonClassName="text-capitalize text-black"
              data={{ text: link.page.label, pageSlug: { page: { slug: link.page.slug } }, type: 'redirect' }}
            />
          )}

          {link.article && (
            <Buttons
              buttonClassName="text-capitalize text-black"
              data={{ text: link.article.content.title, pageSlug: { page: { slug: link.article.slug } }, type: 'redirect' }}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

SitemapComponent.propTypes = {
  data: shape({
    sitemapRelations: arrayOf(shape({
      page: shape(),
      article: shape(),
    })).isRequired,
  }),
};

SitemapComponent.defaultProps = {
  data: {
    sitemapRelations: [
      {
        page: {},
        article: {},
      },
    ],
  },
};

export default SitemapComponent;
