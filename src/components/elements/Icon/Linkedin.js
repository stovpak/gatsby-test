import React from 'react';
import { string, bool } from 'prop-types';

const Linkedin = (props) => (
  <div className={`ds-icon ds-icon-linkedin ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 2.6077e-06L18 0C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H5.99997C2.68627 24 0 21.3137 0 18V6C0 2.68629 2.68629 4.0479e-06 6 2.6077e-06ZM19.1963 19.1995H16.2173V14.5189C16.2173 13.4035 16.1945 11.9731 14.6651 11.9731C13.1129 11.9731 12.8753 13.1851 12.8753 14.4385V19.1989H9.89336V9.5851H12.7571V10.8961H12.7991C13.1969 10.1407 14.1713 9.34391 15.6233 9.34391C18.6437 9.34391 19.1999 11.3341 19.1999 13.9177V19.1989L19.1963 19.1995ZM5.03758 9.58575H8.02317V19.1995H5.03758V9.58575ZM4.79998 6.52873C4.79998 5.57414 5.57458 4.79954 6.52917 4.79954C7.48317 4.79954 8.25776 5.57414 8.25836 6.52873C8.25836 7.48333 7.48377 8.27412 6.52917 8.27412C5.57458 8.27412 4.79998 7.48333 4.79998 6.52873Z" fill="currentColor" />
    </svg>
  </div>
);

Linkedin.propTypes = {
  className: string,
  disabled: bool,
  width: string,
  height: string,
};

Linkedin.defaultProps = {
  className: 'default',
  disabled: false,
  width: '24',
  height: '24',
};

export default Linkedin;
