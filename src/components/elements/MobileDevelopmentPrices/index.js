import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { isEmpty } from 'lodash';
import { useMediaQuery } from 'react-responsive';
import Container from '../../DynamicComponents/Container';

const MobileDevelopmentPrices = ({ data }) => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 991px)' });

  return (
    <>
      {isMobileOrTablet && (
        <div className="mobile-development-prices">
          <Container>
            <div className="row">
              <div className="col-xs-12">
                {data.prices && data.prices.map((developmentPrice, index) => {
                  const width = developmentPrice.price ? developmentPrice.price.replace('$', '') : 0;
                  const itemClassName = index === 0 ? 'current' : '';

                  return (
                    <>
                      {!isEmpty(developmentPrice) && (
                        <div
                          className={`price-item flex justify-start items-center ${itemClassName}`}
                          key={developmentPrice.id}
                        >
                          <div className="price-country">{developmentPrice.name}</div>
                          <div className="price-bar-container flex items-center">
                            <div
                              className="price-bar"
                              style={{
                                width: `${width || 0}%`,
                              }}
                            />
                            <div className="price-value">{developmentPrice.price}</div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

MobileDevelopmentPrices.propTypes = {
  data: shape({
    prices: arrayOf(shape()),
  }),

};

MobileDevelopmentPrices.defaultProps = {
  data: {},
};

export default MobileDevelopmentPrices;
