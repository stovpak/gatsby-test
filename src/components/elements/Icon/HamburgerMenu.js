import React from 'react';
import { string, bool } from 'prop-types';

const HamburgerMenu = (props) => (
  <div className={`ds-icon ds-icon-angle-${props.direction} ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H23V2H0V0ZM0 7H23V9H0V7ZM23 14H0V16H23V14Z" fill="currentColor" />
    </svg>
  </div>
);

HamburgerMenu.propTypes = {
  className: string,
  disabled: bool,
  direction: string,
  width: string,
  height: string,
};

HamburgerMenu.defaultProps = {
  className: 'default',
  disabled: false,
  direction: 'right',
  width: '23',
  height: '16',
};

export default HamburgerMenu;
