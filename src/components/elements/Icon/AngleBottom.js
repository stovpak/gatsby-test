import React from 'react';
import { string, bool } from 'prop-types';

const AngleBottom = (props) => (
  <div className={`ds-icon ds-icon-angle-${props.direction} ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path fill="currentColor" stroke="currentColor" strokeWidth="0.2" strokeLinejoin="round" d="M7.05829 1.08338C7.26311 0.87856 7.26311 0.546489 7.05829 0.341673C6.85347 0.136857 6.5214 0.136858 6.31659 0.341673L3.89648 2.76178L1.47638 0.341673C1.27157 0.136858 0.939495 0.136857 0.734679 0.341673C0.529863 0.546489 0.529863 0.87856 0.734679 1.08338L3.52563 3.87433C3.73045 4.07915 4.06252 4.07915 4.26734 3.87433L7.05829 1.08338Z" />
    </svg>
  </div>
);

AngleBottom.propTypes = {
  className: string,
  disabled: bool,
  direction: string,
  width: string,
  height: string,
};

AngleBottom.defaultProps = {
  className: 'default',
  disabled: false,
  direction: 'right',
  width: '12',
  height: '20',
};

export default AngleBottom;
