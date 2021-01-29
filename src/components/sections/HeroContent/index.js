import React, { useRef, useEffect, useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { isEmpty } from 'lodash';
import { Typography } from 'antd';
import Button from '../../elements/Button';
import Img from '../../elements/Image';
import Container from '../../DynamicComponents/Container';
import Icon from '../../elements/Icon';
import HeroLinksModal from './heroLinksModal';

const { Title } = Typography;

const HeroContent = ({ data }) => {
  const [isScrolledOut, setScrolledOut] = useState(false);
  const heroEl = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > heroEl.current.offsetHeight) {
        setScrolledOut(true);
      } else {
        setScrolledOut(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroEl]);

  return (
    <div
      className="hero-сontent position-relative pt-20 z-index-5"
      ref={heroEl}
    >
      <Container
        gap="md"
      >
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8">
            {!isEmpty(data.title) && (
              <Title level={1} className="ds-h1 hero-title max-width-600">
                {data.title}
              </Title>
            )}

            {!isEmpty(data.links) && (
              <>
                <div className="hero-links mt-sm">
                  {data.links.map((link) => (
                    <div key={link.id}>
                      {link && (
                        <Button
                          buttonClassName="ds-button text-bold ds-button-icon-reverse"
                          wrapperClassName="fs-16 mr-15 mb-sm"
                          data={link}
                          icon={(
                            <div className="anticon">
                              <Icon name="arrowRight" />
                            </div>
                          )}
                        >
                          View more
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <HeroLinksModal
                  isScrolledOut={isScrolledOut}
                  links={data.links}
                />
              </>
            )}
          </div>

          <div className="col-xs-4 col-md-4 hidden-sm">
            <Img
              useWrapper
              wrapClassName="backdrop"
              className="ds-image-bordered"
              src={data.image.url}
              minWidth="405"
              minHeight="465"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

HeroContent.propTypes = {
  data: shape({
    title: string.isRequired,
    image: shape({
      url: string.isRequired,
    }),
    links: arrayOf(shape()).isRequired,
  }),
};

HeroContent.defaultProps = {
  data: {},
};

export default HeroContent;
