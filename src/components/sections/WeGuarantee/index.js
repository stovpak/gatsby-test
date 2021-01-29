import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import {
  Card, Avatar, Skeleton, Typography,
} from 'antd';
import { isEmpty } from 'lodash';
import Container from '../../DynamicComponents/Container';
import Gradient from '../../elements/Gradient';

const { Title } = Typography;
const { Meta } = Card;

const WeGuarantee = ({ data }) => (
  <section
    className="guarantee"
    id={data.scrollId}
  >
    <Container
      gap="md"
    >
      <div className="row">
        {!isEmpty(data.title) && (
        <div className="col-xs-12">
          <Title level={2} className="ds-h2 text-center text-uppercase text-primary article-title">
            {data.title}
          </Title>
        </div>
        )}

        {data.guarantees.map(({ title, image, description }) => (
          <div key={title} className="col-xs-12 col-sm-4 mb-xs">
            <Card
              bordered={false}
              className="ds-card ds-card-primary ds-card-rounded ds-card-centered"
            >
              <Skeleton loading={false} avatar active>
                <Meta
                  avatar={(
                    <div className="ds-card-avatar-wrapper ds-card-avatar-md ds-image-visibility ds-image-invert">
                      <Avatar src={image.url} />
                    </div>
                    )}
                  title={<h4 className="ds-h4 text-white mb-0 lh-1">{title}</h4>}
                  description={description}
                />
              </Skeleton>
            </Card>
          </div>
        ))}
      </div>
    </Container>

    <Gradient
      options={data.gradient}
    />
  </section>
);

WeGuarantee.propTypes = {
  data: shape({
    title: string,
    guarantees: arrayOf(shape()).isRequired,
    gradient: shape(),
  }),
};

WeGuarantee.defaultProps = {
  data: {
    scrollId: '',
    gradient: {},
  },
};

export default WeGuarantee;
