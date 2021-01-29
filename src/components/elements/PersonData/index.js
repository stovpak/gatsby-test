import React from 'react';
import { shape, string } from 'prop-types';
import Img from '../Image';

const PersonData = ({ data }) => (
  <>
    <h2>{data.title}</h2>
    <label>{data.label}</label>
    <p>{data.description}</p>
    <Img src={data.image.url} />
  </>
);

PersonData.propTypes = {
  data: shape({
    title: string.isRequired,
    label: string.isRequired,
    description: string.isRequired,
    image: shape({
      url: string.isRequired,
    }),
  }),
};

PersonData.defaultProps = {
  data: {
    title: '',
    label: '',
    description: '',
    image: {
      url: '',
    },
  },
};

export default PersonData;
