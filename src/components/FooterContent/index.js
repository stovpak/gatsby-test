import { camelizeKeys } from 'humps';
import React from 'react';
import DynamicZone from '../DynamicZone';
import { useFooterQuery } from './query';

const FooterContent = () => {
  const footerData = useFooterQuery();
  const { footer } = camelizeKeys(footerData.strapi);

  return (
    <div className="footer-content flex">
      <DynamicZone components={footer.data} />
    </div>
  );
};

export default FooterContent;
