import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Button } from 'antd';
import { Link as ScrollLink } from 'react-scroll';
import {
  shape, bool, string, func, oneOfType,
} from 'prop-types';
import Icon from '../Icon';

const Buttons = ({
  data, wrapperClassName, buttonClassName, type, icon, onClick,
}) => {
  switch (data.type) {
    case 'action':
      return (
        <Button
          className={buttonClassName}
          type={type}
        >
          {data.text}
        </Button>
      );
    case 'redirect':
      if (data.pageSlug) {
        return (
          <AniLink
            fade
            duration={0.5}
            className={buttonClassName}
            to={data.pageSlug.page.slug}
          >
            {data.text}
            {icon && (
              <Icon name="angleRight" height="8" />
            )}
          </AniLink>
        );
      }

      return (
        <AniLink
          fade
          duration={0.5}
          className={buttonClassName}
          to={data.url}
        >
          {data.text}
        </AniLink>
      );

    case 'scroll':
      return (
        <span className={`ds-link-wrap flex justify-start text-primary ${wrapperClassName}`}>
          <div className="mr-15 text-primary">
            {icon}
          </div>
          <ScrollLink
            className="text-primary text-bold"
            to={data.scrollToId}
            smooth
            onClick={onClick}
            offset={-85}
            duration={500}
          >
            {data.text}
          </ScrollLink>
        </span>
      );
    default:
      return null;
  }
};

Buttons.propTypes = {
  data: shape({
    text: string,
    utl: string,
  }),
  buttonClassName: string,
  wrapperClassName: string,
  type: string,
  icon: oneOfType([bool, shape()]),
  onClick: func,
};

Buttons.defaultProps = {
  data: {},
  buttonClassName: '',
  wrapperClassName: '',
  type: '',
  icon: null,
  onClick: null,
};

export default Buttons;
