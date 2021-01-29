import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Button from '../../elements/Button';
import InformationTextBlock from '../../elements/InformationTextBlock';

const InformationTextSection = ({ data }) => (
  <div className="informationTextSection">
    <h2>{data.title}</h2>
    {data.information.map((infoBlock) => (
      <div key={infoBlock.id}>
        <InformationTextBlock data={infoBlock} />
      </div>
    ))}
    {data.buttoon && <Button data={data.button} />}
  </div>
);

InformationTextSection.propTypes = {
  data: shape({
    title: string,
    button: shape(),
    information: arrayOf(shape()).isRequired,
  }),
};

InformationTextSection.defaultProps = {
  data: {},
};

export default InformationTextSection;
