import React from 'react';
import { shape, string } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Button from '../Button';
import Img from '../Image';

const { Title, Text } = Typography;

const FilterContentStory = ({ data }) => (
  <div
    className="stories-list-item default-shadow flex"
  >
    <div className="row">
      <div className="col-md-6">
        <Img
          src={data.hero.image.url}
          className="stories-img full-width"
          minWidth="800"
          minHeight="865"
        />
      </div>
      <div className="col-md-6">
        {!isEmpty(data.hero.title)
          && <Title level={2} className="ds-h2 hero-title">{data.hero.title}</Title>}

        {data.hero.articleContent.map((content) => (
          <div key={content.id} className="content">
            {!isEmpty(content.title)
              && (
                <Title
                  level={2}
                  className="ds-h2 content-title text-uppercase text-primary"
                >
                  {content.title}
                </Title>
              )}

            {!isEmpty(content.description)
              && (
                <Text
                  className="content-description text-regular"
                >
                  {content.description}
                </Text>
              )}
          </div>
        ))}

        <Button
          data={{ text: 'Read more', pageSlug: { page: { slug: data.slug } }, type: 'redirect' }}
          buttonClassName="ds-button ant-btn ant-btn-primary"
        />
      </div>
    </div>
  </div>
);

FilterContentStory.propTypes = {
  data: shape({
    title: string,
    image: shape({
      url: string.isRequired,
    }),
    content: shape(),
  }),
};

FilterContentStory.defaultProps = {
  data: {},
};

export default FilterContentStory;
