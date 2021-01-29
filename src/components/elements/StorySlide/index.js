import React from 'react';
import { shape } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Button from '../Button';

const { Title, Text } = Typography;

const StorySlide = ({ data }) => (
  <div className="ds-card ds-card-shadow card card-bottom-link h-100 pt-30">
    <div className="story-title-wrap">
      {!isEmpty(data.storySlideLabel)
          && (
            <Title level={2} className="ds-h2 story-title display-inline mr-15">
              {data.storySlideLabel}
            </Title>
          )}

      {!isEmpty(data.types) && data.types.map((type) => {
        if (type.data.type === 'business') {
          return (
            <span
              key={type.data.label}
              className="story-label card-label label label-type"
              style={{
                backgroundColor: `${type.data.color}`,
              }}
            >
              {type.data.label}
            </span>
          );
        }
        return null;
      }) }
    </div>

    {!isEmpty(data.storySlideDescription)
        && (
          <Text
            className="text-thin ds-card-description story-description"
          >
            {data.storySlideDescription}
          </Text>
        )}

    <Button
      buttonClassName="ds-link ds-link-primary ds-link-bold ds-link-icon ds-link-bottom flex"
      icon
      data={{ text: 'Read more', pageSlug: { page: { slug: data.slug } }, type: 'redirect' }}
    />
  </div>
);

StorySlide.propTypes = {
  data: shape(),
};

StorySlide.defaultProps = {
  data: {},
};

export default StorySlide;
