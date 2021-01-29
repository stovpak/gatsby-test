import React from 'react';
import { shape, string } from 'prop-types';
import { Typography } from 'antd';
import Button from '../Button';
import Img from '../Image';

const InformationCard = ({ data }) => {
  const { Title, Text } = Typography;

  return (
    <div className="ds-card info-card ds-card-shadow ds-card-icon">
      <Title level={4} className="ds-h4 card-title">{data.label}</Title>
      <Text className="text-thin ds-card-description">{data.description}</Text>
      <Img
        className="ds-card-image"
        src={data.image.url}
        minWidth="75"
        minHeight="75"
      />
      {data.button && (
        <Button
          icon
          buttonClassName="ds-link ds-link-primary ds-link-bold ds-link-icon flex"
          data={data.button}
        />
      )}
    </div>
  );
};

InformationCard.propTypes = {
  data: shape({
    label: string,
    description: string,
    button: shape(),
  }),
};

InformationCard.defaultProps = {
  data: {},
};

export default InformationCard;
