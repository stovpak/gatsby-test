/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { arrayOf, string, shape } from 'prop-types';
import { Divider, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';
import FilterContentStory from '../../elements/FilterContentStory';

const Story = ({ stories, wrapperClassname }) => {
  const [showStories, setShowStories] = useState(false);
  const toggleStories = () => {
    setShowStories(true);
  };

  return (
    <div className={`stories-list full-width ${wrapperClassname}`}>
      {!isEmpty(stories) && stories.map((story) => (
        <FilterContentStory key={story.id} data={story} />
      ))}

      {isEmpty(stories) && (
        <h2 className="text-center">No results</h2>
      )}

      {(stories.length > 3) && (
        <Divider className="ds-divider ds-divider-primary flex flex-center">
          <Button
            className={`ds-button ds-button-icon-reverse  ${showStories ? 'ds-button-icon-rotated' : null}`}
            icon={
              <DownOutlined />
            }
            type="white"
            onClick={toggleStories}
          >
            {!showStories ? 'View more' : 'Hide'}
          </Button>
        </Divider>
      )}
    </div>
  );
};

Story.propTypes = {
  stories: arrayOf(shape()),
  wrapperClassname: string,
};

Story.defaultProps = {
  stories: [],
  wrapperClassname: '',
};

export default Story;
