/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shape } from 'prop-types';
import Slider from 'react-slick';
import HeroSlide from '../../elements/HeroSlide';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider = ({ data }) => {
  const settings = {
    arrows: false,
    fade: true,
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="hero-slider mb-100">
      <Slider {...settings}>
        {data.slides.map((slide) => (
          <div key={slide.id}>
            <HeroSlide data={slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

HeroSlider.propTypes = {
  data: shape(),
};

HeroSlider.defaultProps = {
  data: {},
};

export default HeroSlider;
