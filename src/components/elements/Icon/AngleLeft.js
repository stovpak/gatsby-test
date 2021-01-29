import React from 'react';
import { string, bool } from 'prop-types';

const AngleLeft = (props) => (
  <div className={`ds-icon ds-icon-angle-${props.direction} ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.1857 1.18207C10.5875 0.583612 9.6176 0.583612 9.01938 1.18207L1.28825 8.91639C0.690039 9.51485 0.690039 10.4851 1.28825 11.0836L9.01938 18.8179C9.6176 19.4164 10.5875 19.4164 11.1857 18.8179C11.7839 18.2195 11.7839 17.2492 11.1857 16.6507L4.53774 10L11.1857 3.34929C11.7839 2.75083 11.7839 1.78054 11.1857 1.18207Z" fill="#005EFF" />
    </svg>
  </div>
);

AngleLeft.propTypes = {
  className: string,
  disabled: bool,
  direction: string,
  width: string,
  height: string,
};

AngleLeft.defaultProps = {
  className: 'default',
  disabled: false,
  direction: 'right',
  width: '12',
  height: '20',
};

export default AngleLeft;
