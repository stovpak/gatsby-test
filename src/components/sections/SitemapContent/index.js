import React from 'react';
import { shape } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import SitemapComponent from '../../elements/SitemapComponent';
import Container from '../../DynamicComponents/Container';

const { Title } = Typography;

const SitemapContent = ({ data }) => (
  <section className="ds-sitemap sitemap">
    <Container
      gap="md"
    >
      {!isEmpty(data.title) && (
        <div className="title-wrap">
          <Title
            level={1}
            className="ds-h1"
          >
            {data.title}
          </Title>
        </div>
      )}

      <div className="row">
        {data.sitemapComponents && data.sitemapComponents.map((component) => (
          <SitemapComponent key={component.id} data={component} />
        ))}
      </div>

    </Container>
  </section>
);

SitemapContent.propTypes = {
  data: shape(),
};

SitemapContent.defaultProps = {
  data: {},

};

export default SitemapContent;
