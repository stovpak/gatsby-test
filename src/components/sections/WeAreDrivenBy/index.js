import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Img from '../../elements/Image';

const WeAreDrivenBy = ({ data }) => (
  <div id={data.scrollId}>
    <h2>{data.title}</h2>
    {data.cards.map((card) => (
      <div key={card.id}>
        <Img src={card.image.url} />
        <p>{card.label}</p>
      </div>
    ))}
  </div>
);

WeAreDrivenBy.propTypes = {
  data: shape({
    scrollId: string,
    title: string,
    cads: arrayOf(shape({
      label: string,
      image: shape({
        url: string,
      }),
    })),
  }),
};

WeAreDrivenBy.defaultProps = {
  data: shape({
    scrollId: '',
    title: '',
    cads: arrayOf(shape({
      label: '',
      image: shape({
        url: '',
      }),
    })),
  }),
};

export default WeAreDrivenBy;
