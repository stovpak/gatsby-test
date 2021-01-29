import React from 'react';
import { shape, string } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Container from '../../DynamicComponents/Container';
import ContactUsForm from '../ContactUs';

const { Title, Text } = Typography;

const ErrorPageSchema = ({ data }) => (
  <section className="ds-errors">
    <Container
      gap="lg"
    >
      <div className="row">
        <div className="col-md-8">
          <div className="errors-text mt-lg">
            {!isEmpty(data.title) && (
              <Title
                className="errors-title text-primary"
              >
                {data.title}
              </Title>
            )}

            {!isEmpty(data.description) && (
              <Text
                className="ds-regular errors-description text-uppercase text-primary text-bold display-block"
              >
                {data.description}
              </Text>
            )}

            {!isEmpty(data.status) && (
              <Text
                className="ds-regular errors-status"
              >
                {data.status}
              </Text>
            )}
          </div>
        </div>

        <div className="col-md-4">
          {data.isFormExist && (
          <>
            {data.formTitle && (
            <Title
              level={4}
              className="ds-h4 text-uppercase text-primary"
            >
              {data.formTitle}
            </Title>
            )}

            <ContactUsForm data={{ type: 'sales' }} />
          </>
          )}
        </div>
      </div>
    </Container>
  </section>
);

ErrorPageSchema.propTypes = {
  data: shape({
    title: string.isRequired,
    status: string.isRequired,
    description: string.isRequired,
  }),
};

ErrorPageSchema.defaultProps = {
  data: {},
};

export default ErrorPageSchema;
