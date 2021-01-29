import React from 'react';
import { shape, string } from 'prop-types';
import { isEmpty } from 'lodash';
import Img from '../Image';

const ImageVariations = ({ data }) => (
  <>
    {!isEmpty(data) && (
      <a
        rel="noreferrer"
        target="_blank"
        href={data.url || ''}
      >
        {!isEmpty(data.primaryImage) && !isEmpty(data.primaryImage.url) && (
        <Img
          className="image-main full-width"
          src={data.primaryImage.url}
          minWidth="300"
          minHeight="150"
        />
        )}

        {!isEmpty(data.secondaryImage) && !isEmpty(data.secondaryImage.url) && (
        <Img
          className="image-secondary full-width"
          src={data.secondaryImage.url}
          minWidth="300"
          minHeight="150"
        />
        )}
      </a>
    )}
  </>
);

ImageVariations.propTypes = {
  data: shape({
    primaryImage: shape({
      url: string.isRequired,
    }).isRequired,
    secondaryImage: shape({
      url: string.isRequired,
    }).isRequired,
  }),
};

ImageVariations.defaultProps = {
  data: {},
};

export default ImageVariations;
