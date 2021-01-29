import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { isEmpty } from 'lodash';
import { Typography } from 'antd';
import Container from '../../DynamicComponents/Container';

const { Title } = Typography;

const TextsBlock = ({
  data, wrapperClassName, titleClassName, textClassName, titleWrapClassName,
}) => (
  <div className={`text-block ${wrapperClassName}`}>
    <Container
      gap="md"
    >
      {!isEmpty(data.title)
        && (
          <div className={`media-title-wrapper ${titleWrapClassName}`}>
            <Title
              level={3}
              className={`ds-h3 media-title ${titleClassName}`}
            >
              {data.title}
            </Title>
          </div>
        )}

      <div className={`text ${textClassName}`}>
        <div className="row">
          {data.texts.map((text) => (
            <div className="col-xs-12 col-sm col-md item mb-xs" key={text.id}>
              <div className="pl-70">
                <p className="text-p max-width-250 full-width-md">{text.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </div>
);

TextsBlock.propTypes = {
  data: shape({
    title: string,
    texts: arrayOf(shape({
      text: string,
    })),
  }),
  wrapperClassName: string,
  titleClassName: string,
  textClassName: string,
  titleWrapClassName: string,
};

TextsBlock.defaultProps = {
  data: '',
  wrapperClassName: '',
  titleClassName: '',
  textClassName: '',
  titleWrapClassName: '',
};

export default TextsBlock;
