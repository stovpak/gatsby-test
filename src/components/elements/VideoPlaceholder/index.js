import React from 'react';
import { string } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { camelizeKeys } from 'humps';

const VideoPlaceholder = ({ className }) => {
  const videoPlaceholderData = useStaticQuery(graphql`
    query VideoPlaceholderQuery {
      strapi {
        placeholder {
          videoPlaceholder {
            url
          }
        }
      }
    }
  `);

  const defaultVideoContent = camelizeKeys(videoPlaceholderData.strapi.placeholder);
  const { videoPlaceholder } = defaultVideoContent;
  const posterUrl = videoPlaceholder.url;

  return (
    <video
      className={`placeholder-video ${className}`}
      poster={posterUrl}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="" type="video/mp4" />
    </video>
  );
};

VideoPlaceholder.propTypes = {
  className: string,
};

VideoPlaceholder.defaultProps = {
  className: '',
};

export default VideoPlaceholder;
