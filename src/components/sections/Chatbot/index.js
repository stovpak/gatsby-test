import React from 'react';
import { string } from 'prop-types';
import { isEmpty } from 'lodash';
import marked from 'marked';
import Container from '../../DynamicComponents/Container';
import Gradient from '../../elements/Gradient';
import Buttons from '../../elements/Button';

const { parse } = require('node-html-parser');

const Chatbot = ({ data }) => {
  const html = marked(data);
  const htmlWidget = parse(JSON.stringify(html));
  const buttonNodes = htmlWidget.querySelectorAll('h1');
  const textNodes = htmlWidget.querySelectorAll('p');

  return (
    <section className="ideas">
      <Container
        gap="lg"
      >
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            {!isEmpty(data) && (
              textNodes.map((node, index) => (
                <div className="ideas-text text-center">
                  {node.text}
                  <Buttons data={{ text: buttonNodes[index].text, type: 'action' }} />
                </div>
              ))
            )}
          </div>
        </div>
      </Container>

      <Gradient
        options={data.gradient}
      />
    </section>
  );
};

Chatbot.propTypes = {
  data: string,
};

Chatbot.defaultProps = {
  data: {
    gradient: {},
  },
};

export default Chatbot;
