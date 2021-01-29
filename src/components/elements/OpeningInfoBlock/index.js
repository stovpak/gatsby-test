import React from 'react';
import { shape, string } from 'prop-types';
import Button from '../Button';

const OpeningInfoBlock = ({ data }) => (
  <>
    <h3>{data.content.title}</h3>
    <p>{data.shortDescription}</p>
    <Button data={{ text: 'Read more', pageSlug: { page: { slug: data.slug } }, type: 'redirect' }} />
  </>
);

OpeningInfoBlock.propTypes = {
  data: shape({
    shortDescription: string.isRequired,
    hero: shape({
      title: string.isRequired,
    }),
    slug: string.isRequired,
  }),
};

OpeningInfoBlock.defaultProps = {
  data: {},
};

export default OpeningInfoBlock;
