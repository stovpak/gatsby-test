import React from 'react';
import { shape, string } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Img from '../Image';
import Video from '../Video';
import Container from '../../DynamicComponents/Container';

const { Title, Text } = Typography;

const ClientExperienceHeroSlide = ({ data, title }) => {
  let media;
  switch (data.mediaType) {
    case 'image':
      media = (
        <Img
          useWrapper
          minWidth="405"
          minHeight="465"
          wrapClassName="backdrop"
          className="ds-image ds-image-bordered"
          src={data.media.url}
        />
      );
      break;
    case 'video':
      media = <Video videoUrl={data.media.url} />;
      break;
    default:
      media = null;
      break;
  }

  return (
    <Container
      gap="md"
    >
      <div className="client-expirience-slide row">
        <div className="col-md-8">
          {!isEmpty(title)
              && (
                <div className="title-wrap mb-40">
                  <Title level={1} className="ds-h1 media-title">{title}</Title>
                </div>
              )}

          {!isEmpty(data.label)
            && (
              <Title level={2} className="ds-h2 client-title text-uppercase text-primary">{data.label}</Title>
            )}

          {!isEmpty(data.role)
            && (
            <div className="text-wrap mb-10">
              <Text className="fs-19 text-muted-secondary text-thin client-role">{data.role}</Text>
            </div>
            )}

          {!isEmpty(data.description)
            && (
              <Text className="ds-card-description client-description max-width-500">{data.description}</Text>
            )}
        </div>

        <div className="col-md-4">
          {media}
        </div>
      </div>
    </Container>
  );
};

ClientExperienceHeroSlide.propTypes = {
  data: shape({
    label: string.isRequired,
    role: string.isRequired,
    description: string.isRequired,
    mediaType: string,
    media: shape({
      url: string,
    }),
  }),
  title: string,
};

ClientExperienceHeroSlide.defaultProps = {
  data: {},
  title: '',
};

export default ClientExperienceHeroSlide;
