import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Button from '../Button';
import Container from '../../DynamicComponents/Container';
import Img from '../Image';

const { Text } = Typography;

const HeroSlide = ({ data }) => (
  <div className="slide">
    <div className="slide-description">
      <Container>
        <div className="row">
          <div className="col-xs-12">
            <div className="slide-description-text">
              {!isEmpty(data.label) && (
                <ReactMarkdown className="hero-slider-title" source={data.label} />
              )}

              {!isEmpty(data.description) && (
                <Text className="text-thin text-white hero-slider-description">{data.description}</Text>
              )}

              {!isEmpty(data.buttons) && (
                <div className="hero-slider-buttons flex">
                  {data.buttons.map((button, index) => {
                    const buttonType = (index === 0) ? 'primary' : 'white';

                    return (
                      <Button
                        key={button.id}
                        buttonClassName="hero-slider-button ds-button mr-30"
                        type={buttonType}
                        data={button}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>

    <div className="slide-image">
      <Img
        className="slide-image"
        src={data.image.url}
        minWidth="1920"
        minHeight="740"
      />
    </div>

    <div className="slide-block-bg" />
  </div>
);

HeroSlide.propTypes = {
  data: shape({
    description: string.isRequired,
    label: string.isRequired,
    image: shape({
      url: string.isRequired,
    }).isRequired,
    buttons: arrayOf(shape()).isRequired,
  }),
};

HeroSlide.defaultProps = {
  data: {},
};

export default HeroSlide;
