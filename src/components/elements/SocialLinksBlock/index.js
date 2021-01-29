import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Icon from '../Icon';

const SocialLinksBlock = ({ data }) => (
  <div className="social-links flex justify-end">
    {data.links && data.links.map((link) => (
      <div className="social-link ml-20" key={link.id}>
        <a className="ds-link-white" href={link.socialLink.url}>
          <Icon name={link.socialLink.name} />
        </a>
      </div>
    ))}
  </div>
);

SocialLinksBlock.propTypes = {
  data: shape({
    links: arrayOf(shape({
      socialLink: shape({
        name: string.isRequired,
        url: string,
      }),
    })).isRequired,
  }),
};

SocialLinksBlock.defaultProps = {
  data: {},
};

export default SocialLinksBlock;
