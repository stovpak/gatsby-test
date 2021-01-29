import React from 'react';
import { string, bool } from 'prop-types';

const Cross = (props) => (
  <div className={`ds-icon ds-icon-cross ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.55993 8.99998L0 16.5599L1.43999 17.9999L8.99992 10.44L16.56 18.0001L18 16.5601L10.4399 8.99998L17.9999 1.43999L16.5599 0L8.99992 7.55999L1.44009 0.000153632L9.47246e-05 1.44015L7.55993 8.99998Z" fill="currentColor" />
    </svg>
  </div>
);

Cross.propTypes = {
  className: string,
  disabled: bool,
  width: string,
  height: string,
};

Cross.defaultProps = {
  className: 'default',
  disabled: false,
  width: '18',
  height: '18',
};

export default Cross;
