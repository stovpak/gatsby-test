import React from 'react';
import ReactMarkdown from 'react-markdown';
import { shape, string } from 'prop-types';
import { Typography } from 'antd';
import { isEmpty } from 'lodash';
import Container from '../../DynamicComponents/Container';

const { Title } = Typography;

const TextContent = ({
  data, containerGap, wrapperClassName, titleClassName,
}) => (
  <div className={`text-content ${wrapperClassName}`} id={data.scrollId}>
    <Container
      gap={containerGap}
    >
      {!isEmpty(data.title) && (
      <Title
        level={2}
        className={`ds-h2 text-uppercase text-primary text-title ${titleClassName}`}
      >
        {data.title}
      </Title>
      )}
      <ReactMarkdown
        className="ds-markdown"
        source={data.description}
      />
    </Container>
  </div>
);

TextContent.propTypes = {
  data: shape({
    title: string,
    description: string,
  }),
  wrapperClassName: string,
  titleClassName: string,
  containerGap: string,
};

TextContent.defaultProps = {
  data: {
    scrollId: '',
  },
  wrapperClassName: '',
  titleClassName: '',
  containerGap: '',
};

export default TextContent;
