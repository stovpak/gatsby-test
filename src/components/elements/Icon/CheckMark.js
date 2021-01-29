import React from 'react';
import { string, bool } from 'prop-types';

const CheckMark = (props) => (
  <div className={`ds-icon ds-icon-arrow-${props.direction} ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.845 28.3318C61.1114 29.5983 61.1114 31.6512 59.845 32.9171L38.0944 54.6682C36.828 55.9341 34.7756 55.9341 33.5091 54.6682L23.155 44.3135C21.8886 43.0476 21.8886 40.9947 23.155 39.7288C24.4209 38.4623 26.4739 38.4623 27.7397 39.7288L35.8015 47.7906L55.2597 28.3318C56.5261 27.0659 58.5791 27.0659 59.845 28.3318ZM83 41.5C83 64.4391 64.4359 83 41.5 83C18.5609 83 0 64.4359 0 41.5C0 18.5609 18.5641 0 41.5 0C64.4391 0 83 18.5641 83 41.5ZM76.5156 41.5C76.5156 22.145 60.8524 6.48438 41.5 6.48438C22.145 6.48438 6.48438 22.1476 6.48438 41.5C6.48438 60.855 22.1476 76.5156 41.5 76.5156C60.855 76.5156 76.5156 60.8524 76.5156 41.5Z" fill="currentColor" />
    </svg>
  </div>
);

CheckMark.propTypes = {
  className: string,
  disabled: bool,
  direction: string,
  width: string,
  height: string,
};

CheckMark.defaultProps = {
  className: 'default',
  disabled: false,
  direction: 'right',
  width: '83',
  height: '83',
};

export default CheckMark;
