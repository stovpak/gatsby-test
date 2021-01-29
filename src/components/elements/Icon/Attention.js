import React from 'react';
import { string, bool } from 'prop-types';

const Attention = (props) => (
  <div className={`ds-icon ds-icon-arrow-${props.direction} ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M83 41.5C83 64.4391 64.4359 83 41.5 83C18.5609 83 0 64.4359 0 41.5C0 18.5609 18.5641 0 41.5 0C64.4391 0 83 18.5641 83 41.5ZM76.5156 41.5C76.5156 22.145 60.8524 6.48438 41.5 6.48438C22.145 6.48438 6.48438 22.1476 6.48438 41.5C6.48438 60.855 22.1476 76.5156 41.5 76.5156C60.855 76.5156 76.5156 60.8524 76.5156 41.5Z" fill="currentColor" />
      <path d="M37.148 18.8H44.606L43.352 50.414H38.336L37.148 18.8ZM40.91 65.396C39.678 65.396 38.644 65 37.808 64.208C36.972 63.372 36.554 62.36 36.554 61.172C36.554 59.984 36.972 58.994 37.808 58.202C38.644 57.366 39.678 56.948 40.91 56.948C42.142 56.948 43.154 57.366 43.946 58.202C44.738 58.994 45.134 59.984 45.134 61.172C45.134 62.36 44.716 63.372 43.88 64.208C43.088 65 42.098 65.396 40.91 65.396Z" fill="currentColor" />
    </svg>
  </div>
);

Attention.propTypes = {
  className: string,
  disabled: bool,
  direction: string,
  width: string,
  height: string,
};

Attention.defaultProps = {
  className: 'default',
  disabled: false,
  direction: 'right',
  width: '83',
  height: '83',
};

export default Attention;
