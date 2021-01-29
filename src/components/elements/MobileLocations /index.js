import React from 'react';
import { arrayOf, shape } from 'prop-types';

const MobileLocations = ({ data }) => (
  <div className="mobile-locations ">
    {data.data && data.data.map((locationData) => (
      <div key={locationData.id}>
        <p>{locationData.name}</p>
        <p>{locationData.location}</p>
      </div>
    ))}
  </div>
);

MobileLocations.propTypes = {
  data: shape({
    prices: arrayOf(shape()),
  }),

};

MobileLocations.defaultProps = {
  data: {},
};

export default MobileLocations;
