import React from 'react';
import { string, bool } from 'prop-types';

const List = (props) => (
  <div className={`ds-icon ds-icon-list ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="currentColor" />
      <path d="M3 15.5C3 16.3284 2.32843 17 1.5 17C0.671573 17 0 16.3284 0 15.5C0 14.6716 0.671573 14 1.5 14C2.32843 14 3 14.6716 3 15.5Z" fill="currentColor" />
      <path d="M3 8.5C3 9.32843 2.32843 10 1.5 10C0.671573 10 0 9.32843 0 8.5C0 7.67157 0.671573 7 1.5 7C2.32843 7 3 7.67157 3 8.5Z" fill="currentColor" />
      <path d="M6 1.5C6 0.671573 6.67157 0 7.5 0H22.5C23.3284 0 24 0.671573 24 1.5C24 2.32843 23.3284 3 22.5 3H7.5C6.67157 3 6 2.32843 6 1.5Z" fill="currentColor" />
      <path d="M6 15.5C6 14.6716 6.67157 14 7.5 14H22.5C23.3284 14 24 14.6716 24 15.5C24 16.3284 23.3284 17 22.5 17H7.5C6.67157 17 6 16.3284 6 15.5Z" fill="currentColor" />
      <path d="M6 8.5C6 7.67157 6.67157 7 7.5 7H22.5C23.3284 7 24 7.67157 24 8.5C24 9.32843 23.3284 10 22.5 10H7.5C6.67157 10 6 9.32843 6 8.5Z" fill="currentColor" />

    </svg>
  </div>
);

List.propTypes = {
  className: string,
  disabled: bool,
  width: string,
  height: string,
};

List.defaultProps = {
  className: 'default',
  disabled: false,
  width: '24',
  height: '17',
};

export default List;
