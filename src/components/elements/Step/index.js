import React from 'react';
import { shape, string } from 'prop-types';
import { isEmpty } from 'lodash';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Step = ({ data }) => (
  {!isEmpty(data) && (
    <>
      <Title level={5} className="ds-h5 step-title text-primary">
        {data.label}
      </Title>

      <div className="step-popup">
        <Title level={5} className="ds-h5 step-title text-primary">
          {data.label}
        </Title>
        <Text className="text-thin step-description">{data.description}</Text>
      </div>
    </>
  )}
);

Step.propTypes = {
  data: shape({
    label: string.isRequired,
    description: string.isRequired,
  }),
};

Step.defaultProps = {
  data: {},
};

export default Step;
