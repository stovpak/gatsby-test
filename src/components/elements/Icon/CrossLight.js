import React from 'react';
import { string, bool } from 'prop-types';

const CrossLight = (props) => (
  <div className={`ds-icon ds-icon-cross-ight ds-icon-${props.className} ${props.disabled ? 'ds-icon-disabled' : ''}`}>
    <svg width={props.width} height={props.height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.70675 0.292954C1.31631 -0.0976511 0.683277 -0.0976514 0.292833 0.292954C-0.0976112 0.683559 -0.0976109 1.31685 0.292833 1.70746L7.15482 8.57228L0.292833 15.4371C-0.0976109 15.8277 -0.0976112 16.461 0.292833 16.8516C0.683277 17.2422 1.31631 17.2422 1.70675 16.8516L8.49982 10.0557L15.2929 16.8516C15.6833 17.2422 16.3164 17.2422 16.7068 16.8516C17.0972 16.461 17.0972 15.8277 16.7068 15.4371L9.84481 8.57228L16.7068 1.70746C17.0972 1.31685 17.0972 0.683559 16.7068 0.292954C16.3164 -0.0976514 15.6833 -0.0976511 15.2929 0.292954L8.49982 7.08882L1.70675 0.292954Z" fill="currentColor" />
    </svg>
  </div>
);

CrossLight.propTypes = {
  className: string,
  disabled: bool,
  width: string,
  height: string,
};

CrossLight.defaultProps = {
  className: 'default',
  disabled: false,
  width: '17',
  height: '17',
};

export default CrossLight;
