import React from 'react';
import { shape, string } from 'prop-types';
import { isEmpty } from 'lodash';

const Gradient = ({ options }) => !isEmpty(options) && (
  <div
    className={`
      ${options.color ? 'gradient-bg ' : ''} gradient-bg-${options.side} gradient-bg-${options.position}
    `}
  />
);

Gradient.propTypes = {
  options: shape({
    position: string,
    side: string,
  }),
};

Gradient.defaultProps = {
  options: {
    position: '',
    side: '',
  },
};

export default Gradient;
