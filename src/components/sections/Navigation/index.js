import React from 'react';
import { shape } from 'prop-types';
import NavigationBlock from '../../elements/NavigationBlock';

const Navigation = ({ data }) => (
  <div className="nav flex">
    {data.navigationBlock && data.navigationBlock.map((navigation) => (
      <NavigationBlock
        key={navigation.id}
        data={navigation}
      />
    ))}
  </div>
);

Navigation.propTypes = {
  data: shape(),
};

Navigation.defaultProps = {
  data: {},
};

export default Navigation;
