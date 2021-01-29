import { useStaticQuery, graphql } from 'gatsby';

export const useStoryQuery = () => {
  const storyQuery = useStaticQuery(graphql`
    query GET_STORIES_CONTENT {
      strapi {
        stories {
          id
          types {
            data {
              id
              type
              label
              value
            }
          }
          slug
          hero {
            title
            image {
              url
            }
            articleContent {
              id
              title
              description
            }
          }
        }
      }
    }
  `);

  return storyQuery;
};

export default {
  useStoryQuery,
};
