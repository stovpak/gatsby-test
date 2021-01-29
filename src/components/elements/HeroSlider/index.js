import React from 'react';
import { shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from 'lodash';
import Button from '../Button';
import Container from '../../DynamicComponents/Container';

const HeroSlider = ({ data }) => (
  <div
    className="hero-slider-wrap"
    style={{ background: `url(${data.image.url}) no-repeat` }}
  >
    <Container>
      <div className="hero-slider-text">
        {!isEmpty(data.label) && (
          <ReactMarkdown className="hero-slider-label" source={data.label} />
        )}

        {!isEmpty(data.title) && (
          <h2 className="hero-slider-title">{data.title}</h2>
        )}

        {!isEmpty(data.description) && (
          <p className="hero-slider-descr">{data.description}</p>
        )}

        {!isEmpty(data.buttons) && data.buttons.map((button) => (
          <div key={button.id} data>
            <Button data={button} />
          </div>
        ))}
      </div>
    </Container>
  </div>
);

HeroSlider.propTypes = {
  data: shape({
    title: string.isRequired,
    description: string.isRequired,
    image: shape({
      url: string.isRequired,
    }).isRequired,
    buttons: shape().isRequired,
  }),
};

HeroSlider.defaultProps = {
  data: {},
};

export default HeroSlider;
