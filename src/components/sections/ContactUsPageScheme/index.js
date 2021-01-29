import React from 'react';
import { shape, string } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Img from '../../elements/Image';
import Container from '../../DynamicComponents/Container';
import ContactUsForm from '../ContactUs';
import MobileLocations from '../../elements/MobileLocations ';

const { Title } = Typography;

const ContactUsPageScheme = ({ data }) => (
  <div className="contactUsPageScheme">
    <Container
      gap="md"
    >
      <div className="row">
        <div className="col-md-4">
          {!isEmpty(data.title) && (
            <Title
              level={1}
              className="ds-h1"
            >
              {data.title}
            </Title>
          )}

          <ContactUsForm
            data={{ messageLabel: 'Brief intro to your project', type: 'sales' }}
          />
        </div>

        <div className="col-md-8">
          <Img
            className="full-width"
            src={data.image.url}
          />
        </div>
      </div>
      <MobileLocations data={data.mobileLocations} />
    </Container>
  </div>
);

ContactUsPageScheme.propTypes = {
  data: shape({
    title: string,
    image: shape(),
  }),
};

ContactUsPageScheme.defaultProps = {
  data: {},
};

export default ContactUsPageScheme;
