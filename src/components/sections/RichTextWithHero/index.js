import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import marked from 'marked';
import ReactMarkdown from 'react-markdown';
import Img from '../../elements/Image';
import Buttons from '../../elements/Button';

const { parse } = require('node-html-parser');

const RichTextWithHero = ({ data }) => {
  const html = marked(data.content);
  const htmlWidget = parse(JSON.stringify(html));
  const nodes = htmlWidget.querySelectorAll('h2');
  const linksData = [];
  nodes.forEach((element) => {
    linksData.push({ id: element.id.replace(/[\\"]/g, ''), text: element.text });
  });
  return (
    <div className="blog-article-content">
      <h2>{data.title}</h2>
      {linksData.map((link) => (
        <div key={`link-to- ${link.id}`}>
          <Buttons data={{ text: link.text, scrollToId: link.id, type: 'scroll' }} />
        </div>
      ))}
      <Img src={data.image.url} />
      <ReactMarkdown allowDangerousHtml source={html} />
    </div>
  );
};

RichTextWithHero.propTypes = {
  data: shape({
    title: string,
    linksData: arrayOf(shape({
      text: string,
      scrollToId: string,
    })),
  }),
};

RichTextWithHero.defaultProps = {
  data: {},
};

export default RichTextWithHero;
