import React from 'react';
import { shape, string } from 'prop-types';
import { isEmpty } from 'lodash';
import { Typography } from 'antd';
import Button from '../Button';
import Img from '../Image';

const { Title, Text } = Typography;

const MediaBlock = ({
  data, wrapperClassName, titleClassName, imageClassName, descriptionClassName, buttonClassName,
}) => (
  <div className={`media ${wrapperClassName}`} id={data.scrollId}>
    {!isEmpty(data.title)
        && <Title level={2} className={`media-title ${titleClassName}`}>{data.title}</Title>}

    {!isEmpty(data.image.url)
      && (
        <Img
          className={`media-image ${imageClassName}`}
          src={data.image.url}
          minWidth="1920"
          minHeight="740"
        />
      )}

    {!isEmpty(data.description)
      && <Text className={`media-description ${descriptionClassName}`}>{data.description}</Text>}

    {!isEmpty(data.button)
      && <Button className={`media-btn ${buttonClassName}`} data={data.button} />}
  </div>
);

MediaBlock.propTypes = {
  data: shape({
    description: string.isRequired,
    image: shape({
      url: string.isRequired,
    }).isRequired,
  }),
  wrapperClassName: string,
  titleClassName: string,
  imageClassName: string,
  descriptionClassName: string,
  buttonClassName: string,
};

MediaBlock.defaultProps = {
  data: {},
  wrapperClassName: '',
  titleClassName: '',
  imageClassName: '',
  descriptionClassName: '',
  buttonClassName: '',
};

export default MediaBlock;
