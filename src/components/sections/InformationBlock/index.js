import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Typography } from 'antd';
import InformationCard from '../../elements/InformationCard';
import Container from '../../DynamicComponents/Container';
import Gradient from '../../elements/Gradient';

const { Title, Text } = Typography;

const InformationBlock = ({ data }) => {
  const firstColumnEnd = Math.floor((data.informationCards.length / 2) - 1);
  const secondColumnEnd = Math.floor((data.informationCards.length / 2) + 1);

  return (
    <section
      className="info"
      key={data.scrollId}
    >
      <Container>
        <div className="row">
          <div className="info-cards flex">
            <div className="col-sm-4 col-md-4 info-cards-wrapper">
              <div className="intro">
                <Title level={2} className="ds-h2 what-title text-primary text-uppercase">{data.title}</Title>
                <Text className="text-thin what-description">{data.description}</Text>
              </div>

              {data.informationCards.slice(0, firstColumnEnd).map((item) => (
                <InformationCard key={item.id} data={item} />
              ))}
            </div>
            <div className="col-sm-4 col-md-4 info-cards-wrapper">
              {data.informationCards.slice(firstColumnEnd, secondColumnEnd)
                .map((item) => (
                  <InformationCard key={item.id} data={item} />
                ))}
            </div>
            <div className="col-sm-4 col-md-4 info-cards-wrapper">
              {data.informationCards.slice(secondColumnEnd, data.informationCards.length)
                .map((item) => (
                  <InformationCard key={item.id} data={item} />
                ))}
            </div>
          </div>
        </div>
      </Container>

      <Gradient
        options={data.gradient}
      />
    </section>
  );
};

InformationBlock.propTypes = {
  data: shape({
    title: string,
    description: string,
    informationCards: arrayOf(shape()).isRequired,
    gradient: shape(),
  }),
};

InformationBlock.defaultProps = {
  data: {
    scrollId: '',
    gradient: {},
  },
};

export default InformationBlock;
