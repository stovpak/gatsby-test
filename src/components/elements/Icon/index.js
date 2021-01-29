/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, bool } from 'prop-types';

import AngleRight from './AngleRight';
import AngleLeft from './AngleLeft';
import Cross from './Cross';
import List from './List';
import CrossLight from './CrossLight';
import Clip from './Clip';
import ArrowRight from './ArrowRight';
import AngleBottom from './AngleBottom';
import Instgram from './Instgram';
import Facebook from './Facebook';
import Linkedin from './Linkedin';
import CheckMark from './CheckMark';
import Attention from './Attention';
import HamburgerMenu from './HamburgerMenu';

const Icon = (props) => {
  const inverseClass = props.inverse ? 'ds-icon-inverse' : '';
  const squareClass = props.square ? 'ds-icon-square' : '';
  const iconProps = {
    className: `${props.className} ${inverseClass} ${squareClass}`,
    disabled: props.disabled,
    width: props.width,
    height: props.height,
  };

  switch (props.name) {
    case 'hamburgerMenu':
      return <HamburgerMenu {...iconProps} />;
    case 'attention':
      return <Attention {...iconProps} />;
    case 'angleLeft':
      return <AngleLeft direction="left" {...iconProps} />;
    case 'checkMark':
      return <CheckMark {...iconProps} />;
    case 'angleRight':
      return <AngleRight direction="right" {...iconProps} />;
    case 'angleBottom':
      return <AngleBottom direction="bottom" {...iconProps} />;
    case 'arrowRight':
      return <ArrowRight direction="right" {...iconProps} />;
    case 'cross':
      return <Cross {...iconProps} />;
    case 'crossLight':
      return <CrossLight {...iconProps} />;
    case 'list':
      return <List {...iconProps} />;
    case 'clip':
      return <Clip {...iconProps} />;
    case 'instagram':
      return <Instgram {...iconProps} />;
    case 'facebook':
      return <Facebook {...iconProps} />;
    case 'linkedin':
      return <Linkedin {...iconProps} />;

    default:
      return 'null';
  }
};

Icon.propTypes = {
  className: string,
  name: string,
  disabled: bool,
  inverse: bool,
  square: bool,
  width: string,
  height: string,
};

Icon.defaultProps = {
  className: null,
  name: null,
  disabled: false,
  inverse: false,
  square: false,
};

export default Icon;
