import React from 'react';
import { shape } from 'prop-types';
import Button from '../../elements/Button';
import OpeningInfoBlock from '../../elements/OpeningInfoBlock';
import { useCareerQuery } from './query';

const Career = ({ data }) => {
  const vacanciesData = useCareerQuery();
  const { vacancies } = vacanciesData.strapi;
  return (
    <div className="career">
      <h2>{data.title}</h2>
      {vacancies.map((infoBlock) => (
        <div key={infoBlock.id}>
          <OpeningInfoBlock data={infoBlock} />
        </div>
      ))}
      {data.button && <Button data={data.button} />}
    </div>
  );
};

Career.propTypes = {
  data: shape(),
};

Career.defaultProps = {
  data: {},
};

export default Career;
