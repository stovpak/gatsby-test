import React from 'react';
import { string, bool } from 'prop-types';

const Facebook = (props) => (
  <div className={`ds-icon ds-icon-facebook ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 6V17.9999C0 21.3136 2.68629 23.9999 6 23.9999H18C21.3137 23.9999 24 21.3136 24 17.9999V6C24 2.6863 21.3137 0 18 0H6C2.68629 0 0 2.68629 0 6ZM15.5999 7.19079H14.2854C13.2547 7.19079 13.0555 7.69719 13.0549 8.43699V10.2004H15.3809L15.0623 12.76H13.0555V19.1997H10.4913V12.7594H8.3999V10.1998H10.4913V8.18319C10.4913 5.992 11.7896 4.7998 13.6848 4.7998C14.5932 4.7998 15.3731 4.87 15.5999 4.9012V7.19079Z" fill="currentColor" />
    </svg>
  </div>
);

Facebook.propTypes = {
  className: string,
  disabled: bool,
  width: string,
  height: string,
};

Facebook.defaultProps = {
  className: 'default',
  disabled: false,
  width: '24',
  height: '24',
};

export default Facebook;
