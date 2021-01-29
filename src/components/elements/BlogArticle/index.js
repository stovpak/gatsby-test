import React from 'react';
import { shape, string } from 'prop-types';
import Img from '../Image';
import Button from '../Button';

const BlogArticle = ({ data }) => (
  <>
    <h2>{data.content.title}</h2>
    <p>{data.shortDescription}</p>
    <p>
      {data.tags}
      {data.slug}
    </p>
    <Img src={data.content.image.url} />
    <Button data={{ text: 'Read more', pageSlug: { page: { slug: data.slug } }, type: 'redirect' }} />
  </>
);

BlogArticle.propTypes = {
  data: shape({
    hero: shape({
      title: string,
      image: shape({
        url: string,
      }),
      shortDescription: string,
      slug: string,
    }),
  }),
};

BlogArticle.defaultProps = {
  data: {},
};

export default BlogArticle;
