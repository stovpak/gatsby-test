import React from 'react';
import { string, bool } from 'prop-types';

const AngleRight = (props) => (
  <div className={`ds-icon ds-icon-angle-${props.direction} ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.814291 1.18207C1.41251 0.583612 2.3824 0.583612 2.98062 1.18207L10.7117 8.91639C11.31 9.51485 11.31 10.4851 10.7117 11.0836L2.98062 18.8179C2.3824 19.4164 1.41251 19.4164 0.814291 18.8179C0.216076 18.2195 0.216076 17.2492 0.814291 16.6507L7.46226 10L0.814291 3.34929C0.216076 2.75083 0.216076 1.78054 0.814291 1.18207Z" fill="currentColor" />
    </svg>
  </div>
);

AngleRight.propTypes = {
  className: string,
  disabled: bool,
  direction: string,
  width: string,
  height: string,
};

AngleRight.defaultProps = {
  className: 'default',
  disabled: false,
  direction: 'right',
  width: '12',
  height: '20',
};

export default AngleRight;
