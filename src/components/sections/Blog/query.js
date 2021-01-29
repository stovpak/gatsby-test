import { useStaticQuery, graphql } from 'gatsby';

export const useBlogQuery = () => {
  const blogQuery = useStaticQuery(graphql`
    query GET_ARTICLES_CONTENT {
      strapi {
        articles {
          id
          tags
          slug
          shortDescription
          content {
            title
            image {
              url
            }
          }
        }
      }
    }
 `);
  return blogQuery;
};

export default {
  useBlogQuery,
};
