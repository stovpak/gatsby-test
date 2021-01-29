import { camelizeKeys } from 'humps';

import React from 'react';
import { useHeaderQuery } from './query';
import DynamicZone from '../DynamicZone';

const HeaderContent = () => {
  const headerData = useHeaderQuery();
  const { header } = camelizeKeys(headerData.strapi);
  return (
    <DynamicZone components={header.data} />
  );
};

export default HeaderContent;
