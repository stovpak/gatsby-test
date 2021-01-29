import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import {
  Typography, Card, Divider, Button,
} from 'antd';
import { isEmpty } from 'lodash';
import { useMediaQuery } from 'react-responsive';
import { DownOutlined } from '@ant-design/icons';
import Container from '../../DynamicComponents/Container';
import Img from '../../elements/Image';
import Gradient from '../../elements/Gradient';

const { Title } = Typography;

const MainTechnologies = ({ data }) => {
  const [showTechnologies, setShowTechnologies] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const visibleItemsCount = isMobile ? 3 : 6;

  const toggleTechnologies = () => {
    setShowTechnologies(!showTechnologies);
  };

  return (
    <section
      className="technologies"
      id={data.scrollId}
      key={data.scrollId}
    >
      <Container
        gap="md"
      >
        <div className="row">
          {!isEmpty(data.title) && (
            <div className="col-xs-12">
              <Title level={2} className="ds-h2 text-uppercase text-primary technologies-title">
                {data.title}
              </Title>
            </div>
          )}

          {data.technologies.map(({ id, image, description }, index) => {
            const className = (index >= visibleItemsCount && !showTechnologies) ? 'hidden' : 'visible';

            return (
              <div key={id} className={`col-xs-12 col-sm-6 ${className}`}>
                <Card
                  title={(
                    <Img
                      src={image.url}
                      minWidth="200"
                      minHeight="40"
                    />
                  )}
                  bordered={false}
                  className="ds-card ds-card-text"
                >
                  {description}
                </Card>
              </div>
            );
          })}

          {(data.technologies.length > 6) && (
            <Divider className="ds-divider ds-divider-primary">
              <Button
                className={`ds-button ds-button-icon-reverse  ${showTechnologies ? 'ds-button-icon-rotated' : null}`}
                icon={
                  <DownOutlined />
                }
                type="white"
                onClick={toggleTechnologies}
              >
                {!showTechnologies ? 'View more' : 'Hide'}
              </Button>
            </Divider>
          )}

        </div>
      </Container>

      <Gradient
        options={data.gradient}
      />
    </section>
  );
};

MainTechnologies.propTypes = {
  data: shape({
    title: string,
    button: shape(),
    gradient: shape(),
    technologies: arrayOf(shape()).isRequired,
  }),
};

MainTechnologies.defaultProps = {
  data: {
    scrollId: '',
    gradient: {},
  },
};

export default MainTechnologies;
