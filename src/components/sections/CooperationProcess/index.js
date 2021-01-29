import React from 'react';
import { shape, string } from 'prop-types';
import { Timeline, Typography } from 'antd';
import { isEmpty } from 'lodash';
import Container from '../../DynamicComponents/Container';
import Img from '../../elements/Image';
import Gradient from '../../elements/Gradient';

const { Title, Text } = Typography;

const CooperationProcess = ({ data }) => (
  <section
    className="cooperation ds"
    id={data.scrollId}
  >
    <Container
      gap="lg"
    >
      <div className="row">
        <div className="col-sm-4 col-md-4 hidden-md">
          <Img
            useWrapper
            wrapClassName="backdrop backdrop-reverse"
            className="ds-image-bordered-reverse"
            src={data.image.url}
            minWidth="405"
            minHeight="465"
          />
        </div>

        <div className="col-xs-12 col-sm-8 col-md-8">
          <div className="content">
            {!isEmpty(data.title) && (
              <Title
                level={2}
                className="ds-title ds-h2 text-uppercase text-primary"
              >
                {data.title}
              </Title>
            )}

            <div className="ds-timeline-steps">
              <Timeline className="ds-timeline">
                {data.steps.map((item) => (
                  <div className="ds-timeline-item" key={item.step.id}>
                    <Timeline.Item>
                      <Title level={5} className="ds-h5 timeline-title text-primary text-thin">
                        {item.step.label}
                      </Title>

                      <Text className="text-thin timeline-description">{item.step.description}</Text>
                    </Timeline.Item>
                  </div>
                ))}
              </Timeline>
            </div>
          </div>
        </div>
      </div>

      <Gradient
        options={data.gradient}
      />
    </Container>
  </section>
);

CooperationProcess.propTypes = {
  data: shape({
    title: string.isRequired,
    image: shape({
      url: string.isRequired,
    }).isRequired,
    gradient: shape(),
  }),
};

CooperationProcess.defaultProps = {
  data: {
    scrollId: '',
    gradient: {},
  },
};

export default CooperationProcess;
