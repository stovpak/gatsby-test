import React from 'react';
import { shape } from 'prop-types';
import TextContent from '../../elements/TextContent';
import Img from '../../elements/Image';
import Container from '../../DynamicComponents/Container';

const TextContentWithMedia = ({ data }) => (
  <div className="text-content-with-media" id={data.scrollId}>
    <Container
      gap="md"
    >
      <div className="row">
        <div className="col-md-4">
          <Img
            useWrapper
            wrapClassName="backdrop backdrop-reverse"
            className="ds-image-bordered-reverse"
            src={data.images.primaryImage.url}
            minWidth="405"
          />
        </div>
        <div className="col-md-7 pl-md">
          <TextContent useWrapper={false} data={data.content} />
        </div>
      </div>
    </Container>
  </div>
);

TextContentWithMedia.propTypes = {
  data: shape(),
};

TextContentWithMedia.defaultProps = {
  data: {
    scrollId: '',
  },
};

export default TextContentWithMedia;
