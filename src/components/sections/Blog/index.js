import React from 'react';
import { shape } from 'prop-types';
import Button from '../../elements/Button';
import BlogArticle from '../../elements/BlogArticle';
import { useBlogQuery } from './query';

const Blog = ({ data }) => {
  const blogData = useBlogQuery();
  const { articles } = blogData.strapi;
  return (
    <div className="blog">
      {articles.map((article) => (
        <div key={article.id}>
          <BlogArticle data={article} />
        </div>
      ))}
      {data && <Button data={data} />}
    </div>
  );
};

Blog.propTypes = {
  data: shape(),
};

Blog.defaultProps = {
  data: {},
};

export default Blog;
