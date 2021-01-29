import React from 'react';
import { string } from 'prop-types';
import Container from '../../DynamicComponents/Container';
import Gradient from '../../elements/Gradient';

const Widget = ({ data }) => (
  <section
    className="widget"
  >
    <Container
      gap="md"
    >
      <div className="iframe-wrapper max-width-960 m-0-auto">
        <iframe
          className="clutch-widget"
          src="https://widget.clutch.co/widgets/get/4?uid=447099"
          width="100%"
          frameBorder="0"
          height="600px"
          scrolling="no"
          title="widget.clutch.co"
        />
      </div>
    </Container>

    <Gradient
      options={data.gradient}
    />
  </section>
);

Widget.propTypes = {
  data: string,
};

Widget.defaultProps = {
  data: '',
};

export default Widget;
