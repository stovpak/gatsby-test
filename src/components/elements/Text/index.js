import React from 'react';
import { string } from 'prop-types';
import { isEmpty } from 'lodash';

const Text = ({ data }) => (
  <>
    {!isEmpty(data) && (
      <div className="text">
        {data}
      </div>
    )}
  </>
);

Text.propTypes = {
  data: string,
};

Text.defaultProps = {
  data: {
    gradient: {},
  },
};

export default Text;
