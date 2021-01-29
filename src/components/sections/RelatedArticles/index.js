import React from 'react';
import { shape } from 'prop-types';
import Button from '../../elements/Button';

const RelatedArticles = ({ data }) => (
  <div className="related-articles">
    <h2>{data.title}</h2>
    {data.articles.map((content) => (
      <div key={content.article.id}>
        <h3>{content.article.content.title}</h3>
        <p>{content.article.shortDescription}</p>
        <Button data={{ text: 'Read more', pageSlug: { page: { slug: content.article.slug } }, type: 'redirect' }} />
      </div>
    ))}
  </div>
);

RelatedArticles.propTypes = {
  data: shape(),
};

RelatedArticles.defaultProps = {
  data: {},
};

export default RelatedArticles;
