import React from 'react';
import { shape, string } from 'prop-types';
import Button from '../Button';

const InformationTextBlock = ({ data }) => (
  <>
    <label>{data.label}</label>
    <p>{data.description}</p>
    {data.button && <Button data={data.button} />}
  </>
);

InformationTextBlock.propTypes = {
  data: shape({
    label: string.isRequired,
    description: string.isRequired,
    button: shape(),
  }),
};

InformationTextBlock.defaultProps = {
  data: {},
};

export default InformationTextBlock;
