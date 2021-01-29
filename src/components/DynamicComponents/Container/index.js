import React from 'react';
import {
  string, oneOfType, node, bool,
} from 'prop-types';

const Container = (props) => {
  const {
    className, children, fluid, size, gap, spacing, background,
  } = props;
  const fluidClassName = fluid ? 'container-fluid' : '';
  const spacingClassName = spacing ? `container-spacing-${spacing}` : '';
  const sizeClassName = size ? `container-${size}` : '';
  const gapClassName = gap ? `container-gap-${gap}` : '';
  return (
    <div
      id={props.id}
      className={`container ${className} ${fluidClassName} ${sizeClassName} ${gapClassName} ${spacingClassName}`}
      style={{ background }}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  id: string,
  className: string,
  background: string,
  size: string,
  spacing: string,
  gap: string,
  children: oneOfType([node, string]),
  fluid: bool,
};

Container.defaultProps = {
  id: '',
  className: '',
  background: 'transparent',
  spacing: '',
  size: 'default',
  gap: '0',
  fluid: false,
  children: null,
};
export default Container;
