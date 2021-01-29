import React from 'react';
import { string, bool } from 'prop-types';

const ArrowRight = (props) => (
  <div className={`ds-icon ds-icon-arrow-${props.direction} ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4307 1.19131C12.013 0.773468 11.3359 0.773468 10.9182 1.19131C10.5005 1.60916 10.5005 2.28662 10.9182 2.70446L14.3864 6.17409H1.06974C0.478939 6.17409 0 6.65303 0 7.24383C0 7.83463 0.478939 8.31357 1.06974 8.31357H14.3109L10.9182 11.7077C10.5005 12.1256 10.5005 12.803 10.9182 13.2209C11.3359 13.6387 12.013 13.6387 12.4307 13.2209L17.6867 7.96267C18.1044 7.54482 18.1044 6.86736 17.6867 6.44951L12.4307 1.19131Z" fill="currentColor" />
    </svg>
  </div>
);

ArrowRight.propTypes = {
  className: string,
  disabled: bool,
  direction: string,
  width: string,
  height: string,
};

ArrowRight.defaultProps = {
  className: 'default',
  disabled: false,
  direction: 'right',
  width: '18',
  height: '14',
};

export default ArrowRight;
