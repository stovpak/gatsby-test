import React from 'react';
import { shape, string } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import TextContent from '../../elements/TextContent';
import Img from '../../elements/Image';
import Container from '../../DynamicComponents/Container';
import Gradient from '../../elements/Gradient';

const { Title } = Typography;

const ArticleSection = ({ data, imageWrapperWidth }) => {
  const isImage = !isEmpty(data.image.url);
  const isLeftImage = data.imagePosition === 'leftSide';
  const imageWrapperClass = imageWrapperWidth === 'third' ? 'col-md-4' : 'col-md-6';
  const textWrapperClass = imageWrapperWidth === 'third' ? 'col-md-8' : 'col-md-6';
  const textWrapperPaddings = isLeftImage ? 'pl-md pl-0-md' : 'pr-md pr-0-md';

  return (
    <section
      className="article"
    >
      <Container
        gap="lg"
        className="imagePosition"
      >
        {!isEmpty(data.title) && (
          <Title level={1} className="ds-h1 article-title">
            {data.title}
          </Title>
        )}

        <div className={`row ${!isLeftImage ? 'flex direction-row-rev' : ''}`}>
          {isImage && (
            <div className={`hidden-sm col-sm-4 ${imageWrapperClass}`}>
              <Img
                useWrapper
                minWidth="405"
                minHeight="465"
                wrapClassName={`backdrop ${isLeftImage ? 'backdrop-reverse' : ''}`}
                className="ds-image ds-image-bordered-reverse"
                src={data.image.url}
              />
            </div>
          )}

          <div className={`col-xs-12 col-sm-8 ${textWrapperPaddings} ${isImage ? textWrapperClass : 'col-md-12'}`}>
            {data.articleContent.map((text) => (
              <div id={text.scrollId} key={text.id}>
                <TextContent containerGap="md" data={text} />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Gradient
        options={data.gradient}
      />
    </section>
  );
};

ArticleSection.propTypes = {
  data: shape({
    title: string,
    gradient: shape(),
    content: shape(),
    image: shape({
      url: string.isRequired,
    }),
  }),
  imageWrapperWidth: string,
};

ArticleSection.defaultProps = {
  imageWrapperWidth: 'third',
  data: {
    gradient: {},
  },
};

export default ArticleSection;
