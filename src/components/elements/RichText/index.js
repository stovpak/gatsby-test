import React from 'react';
import { shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Container from '../../DynamicComponents/Container';

const RichText = ({ data }) => (
  <Container
    gap="md"
  >
    <ReactMarkdown source={data.text} className="rich-text" />
  </Container>
);

RichText.propTypes = {
  data: shape({
    text: string,
  }),
};

RichText.defaultProps = {
  data: {},
};

export default RichText;
