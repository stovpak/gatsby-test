import React from 'react';
import { shape, string, arrayOf } from 'prop-types';
import { Typography } from 'antd';
import ImageVariations from '../../elements/ImageVariations';
import Container from '../../DynamicComponents/Container';
import Gradient from '../../elements/Gradient';

const { Title } = Typography;

const ImageVariationBlock = ({ data }) => (
  <section
    className="image-variation"
    id={data.scrollId}
  >
    <Container
      gap="md"
    >
      <div className="row">
        <div className="col-xs-12">
          <div className="image-variation-content">
            <Title
              level={2}
              className="ds-h2 image-variation-title text-uppercase text-primary"
            >
              {data.title}
            </Title>

            <div className="images-wrapper flex-center">
              {data.imagesVariations.map((top) => (
                <div
                  className="image-variation-item flex-center"
                  key={top.id}
                >
                  <ImageVariations data={top} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Gradient
      options={data.gradient}
    />
  </section>
);

ImageVariationBlock.propTypes = {
  data: shape({
    title: string.isRequired,
    imagesVariations: arrayOf(shape()).isRequired,
    gradient: shape(),
  }),
};

ImageVariationBlock.defaultProps = {
  data: {
    scrollId: '',
    gradient: {},
  },
};

export default ImageVariationBlock;
