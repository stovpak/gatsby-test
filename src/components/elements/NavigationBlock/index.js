import React from 'react';
import { shape } from 'prop-types';
import Button from '../Button';
import SocialLinksBlock from '../SocialLinksBlock';

const NavigationBlock = ({ data }) => (
  <div className="nav-block text-right">
    {data.links && data.links.map((link) => (
      <div className="nav-item mb-13" key={link.id}>
        {link && <Button buttonClassName="ds-link ds-link-md ds-link-white text-bold" data={link} />}
      </div>
    ))}
    {data.socialLinks && <SocialLinksBlock data={data.socialLinks} /> }
  </div>
);

NavigationBlock.propTypes = {
  data: shape(),
};

NavigationBlock.defaultProps = {
  data: {},
};

export default NavigationBlock;
