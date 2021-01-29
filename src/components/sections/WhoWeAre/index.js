import React from 'react';
import { string, shape } from 'prop-types';
import { isEmpty } from 'lodash';
import { Typography } from 'antd';
import Container from '../../DynamicComponents/Container';
import Img from '../../elements/Image';

const { Title, Text } = Typography;

const WhoWeAre = ({ data }) => (
  <section className="who mb-sm">
    <Container
      gap="lg"
    >
      <div className="row who-row">
        <div className="col-sm-8 col-md-8 flex direction-column justify-center hidden-sm">
          {!isEmpty(data.title) && (
            <Title
              level={2}
              className="ds-h2 who-title text-primary text-uppercase"
            >
              {data.title}
            </Title>
          )}

          {!isEmpty(data.label) && (
            <Title
              level={2}
              className="ds-h2 who-subtitle"
            >
              {data.label}
            </Title>
          )}

          {!isEmpty(data.description) && (
            <Text
              className="text-thin who-description"
            >
              {data.description}
            </Text>
          )}
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 flex justify-end">
          <Img
            useWrapper
            wrapClassName="backdrop max-sm-width-300"
            className="ds-image-bordered"
            src={data.media.url}
            minWidth="405"
            minHeight="465"
          />
        </div>
      </div>
    </Container>
  </section>
);

WhoWeAre.propTypes = {
  data: shape({
    title: string.isRequired,
    label: string.isRequired,
    backgroundImage: shape({
      url: string.isRequired,
    }),
    video: shape({
      url: string.isRequired,
    }),
  }),
};

WhoWeAre.defaultProps = {
  data: {},
};

export default WhoWeAre;
