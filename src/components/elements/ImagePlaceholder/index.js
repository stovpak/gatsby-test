import React from 'react';
import { string } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { camelizeKeys } from 'humps';

const ImagePlaceholder = ({ className }) => {
  const imagePlaceholderData = useStaticQuery(graphql`
    query ImagePlaceholderQuery {
      strapi {
        placeholder {
          imagePlaceholder {
            url
          }
        }
      }
    }
  `);

  const defaultImageContent = camelizeKeys(imagePlaceholderData.strapi.placeholder);
  const { imagePlaceholder } = defaultImageContent;

  return (
    <img className={className} src={imagePlaceholder.url} alt={imagePlaceholder.alt} />
  );
};

ImagePlaceholder.propTypes = {
  className: string,
};

ImagePlaceholder.defaultProps = {
  className: '',
};

export default ImagePlaceholder;
