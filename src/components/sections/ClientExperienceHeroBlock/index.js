/* eslint-disable react/jsx-props-no-spreading */
/*  eslint-disable react/display-name */
import React, { useState } from 'react';
import {
  func,
  node, shape, string,
} from 'prop-types';
import { Button } from 'antd';
import { isEmpty } from 'lodash';
import Slider from 'react-slick';
import ClientExperienceHeroSlide from '../../elements/ClientExperienceHeroSlide';
import Container from '../../DynamicComponents/Container';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Icon from '../../elements/Icon/index';

const SlickButtonFix = ({
  children,
  ...props
}) => (
  <span {...props}>{children}</span>
);

const RenderSliderButton = ({ iconType, onClick }) => (
  <Button
    onClick={onClick}
    className="ds-button ds-button-lg"
    type="white"
    shape="circle"
    size="large"
    icon={<Icon name={iconType} />}
  />
);

const ClientExperienceHeroBlock = ({ data }) => {
  let slider = null;
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSliderRef = (sliderItem) => {
    slider = sliderItem;
  };

  const handleUpdateSliderIndex = (updateType) => {
    if (slider) {
      if (updateType === 'increment') {
        slider.slickGoTo(slideIndex + 1);
      } else {
        slider.slickGoTo(slideIndex - 1);
      }
    }
  };

  const RenderSliderControls = ({ dots }) => (
    <div className="slider-controls">
      <Container>
        <div className="slider-controls-content flex justify-start items-center">
          <SlickButtonFix>
            <RenderSliderButton
              onClick={() => handleUpdateSliderIndex('decrement')}
              iconType="angleLeft"
            />
          </SlickButtonFix>

          <ul className="slick-dots">
            {dots}
          </ul>

          <SlickButtonFix>
            <RenderSliderButton
              onClick={() => handleUpdateSliderIndex('increment')}
              iconType="angleRight"
            />
          </SlickButtonFix>
        </div>
      </Container>
    </div>
  );

  RenderSliderControls.propTypes = {
    dots: node.isRequired,
  };

  const settings = {
    fade: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <RenderSliderControls dots={dots} />
    ),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="client-experience-hero">
      {!isEmpty(data.slides) && (
        <Slider
          {...settings}
          className="ds-slider client-experience-slider mt-200"
          ref={handleSliderRef}
        >
          {data.slides.map((slide) => (
            <div key={slide.id}>
              <ClientExperienceHeroSlide title={data.title} data={slide} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

SlickButtonFix.propTypes = {
  children: node.isRequired,
  currentSlide: node.isRequired,
};

RenderSliderButton.propTypes = {
  iconType: string.isRequired,
  onClick: func,
};

RenderSliderButton.defaultProps = {
  onClick: null,
};

ClientExperienceHeroBlock.propTypes = {
  data: shape({
    title: string.isRequired,
    slide: shape(),
  }),
};

ClientExperienceHeroBlock.defaultProps = {
  data: {},
};

export default ClientExperienceHeroBlock;
