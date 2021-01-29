/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  arrayOf, number, shape, string, node,
} from 'prop-types';
import { Typography, Button } from 'antd';
import { isEmpty } from 'lodash';
import Slider from 'react-slick';
import Buttons from '../../elements/Button';
import StorySlide from '../../elements/StorySlide';
import Container from '../../DynamicComponents/Container';
import Icon from '../../elements/Icon';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Title } = Typography;

const SlickButtonFix = ({
  currentSlide,
  slideCount,
  children,
  ...props
}) => (
  <span {...props}>{children}</span>
);

const RenderSliderButton = ({ iconType }) => (
  <Button
    className="ds-button ds-button-lg"
    type="white"
    shape="circle"
    size="large"
    icon={<Icon name={iconType} />}
  />
);

const SuccessStories = ({ data }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    nextArrow: (
      <SlickButtonFix>
        <RenderSliderButton iconType="angleRight" />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <RenderSliderButton iconType="angleLeft" />
      </SlickButtonFix>
    ),
    responsive: [
      {
        breakpoint: 680,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <section className="stories">
      <Container
        gap="md"
      >
        <div className="row">
          <div className="col-xs-12">
            {!isEmpty(data.stories) && (
              <>
                <Title
                  level={2}
                  className="ds-h2 stories-title text-uppercase text-primary"
                >
                  {data.title}
                </Title>

                <Slider {...settings} className="ds-slider slider-gradient slider-cards">
                  {data.stories.map((story) => (
                    <div key={story.data.id}>
                      {!isEmpty(story.data) && (
                        <div className="h-100">
                          <StorySlide data={story.data} />
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="ds-card ds-card-shadow ds-card-empty flex flex-center h-100">
                    {data.button && (
                      <Buttons
                        icon
                        buttonClassName="ds-link ds-link-xl ds-link-primary ds-link-bold ds-link-icon flex"
                        data={data.button}
                      />
                    )}
                  </div>
                </Slider>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

SlickButtonFix.propTypes = {
  children: node,
  currentSlide: number,
  slideCount: number,
};

SlickButtonFix.defaultProps = {
  children: {},
  currentSlide: null,
  slideCount: null,
};

RenderSliderButton.propTypes = {
  iconType: string.isRequired,
};

SuccessStories.propTypes = {
  data: shape({
    title: string.isRequired,
    story: arrayOf(shape()),
    lastStory: shape(),
  }),
};

SuccessStories.defaultProps = {
  data: {},
};

export default SuccessStories;
