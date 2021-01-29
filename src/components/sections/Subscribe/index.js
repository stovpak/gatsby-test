import React from 'react';
import { shape, string } from 'prop-types';
import Buttons from '../../elements/Button';

const Subscribe = ({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <Buttons data={{ type: 'action', text: 'Subscribe' }} />
  </div>
);

Subscribe.propTypes = {
  data: shape({
    title: string.isRequired,
  }),
};

Subscribe.defaultProps = {
  data: {},
};

export default Subscribe;
