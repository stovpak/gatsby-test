import React from 'react';
import { shape } from 'prop-types';
import TextsBlock from '../TextsBlock';
import MediaBlock from '../../elements/MediaBlock';
import Container from '../../DynamicComponents/Container';
import Img from '../../elements/Image';

const UkrainianDevelopmentAdvantages = ({ data }) => (
  <div className="blog-article-content">
    <Container
      gap="md"
    >
      <TextsBlock
        wrapperClassName="mb-50 text-columns"
        titleWrapClassName="m-0-auto-70 text-center max-width-900"
        textClassName="columns-number"
        data={data.textBlock}
      />
    </Container>

    <MediaBlock
      wrapperClassName="flex direction-column-rev mb-65"
      imageClassName="full-width mb-50 hidden-md"
      descriptionClassName="text-center text-bold mb-sm fs-24 m-0-auto-80 max-width-900 pl-xs pr-xs"
      data={data.mediaBlock}
    />
    {data.mobileImage && <Img src={data.mobileImage.url} />}
  </div>
);

UkrainianDevelopmentAdvantages.propTypes = {
  data: shape(),
};

UkrainianDevelopmentAdvantages.defaultProps = {
  data: {},
};

export default UkrainianDevelopmentAdvantages;
